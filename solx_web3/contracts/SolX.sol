/*SPDX-License-Identifier: UNLICENSED*/
pragma solidity >=0.4.22 <0.9.0;

contract SolXFactory {
    struct SolXEnergy {
        uint256 units;
        uint256 pricePerUnit;
        uint256 totalPrice;
        address currentGrid;
        address manager;
        string status;
        address solXAddress;
    }
    mapping(address => SolX[]) public solXSold; //Mapping of array of energies sold to a single address
    mapping(address => SolX[]) public solXOnMarket; //Mapping of per address enrgies to what they have created.
    address[] solXOnMarketAddresses;
    uint256 public solXSoldCount = 0;
    uint256 public solXOnMarketCount = 0;

    function getAllOnMarketSolXAddresses()
        public
        view
        returns (address[] memory)
    {
        return solXOnMarketAddresses;
    }

    function convertToSolXEnergy(address solXAddress)
        private
        view
        returns (SolXEnergy memory)
    {
        SolX solX = SolX(solXAddress);
        (
            uint256 units,
            uint256 pricePerUnit,
            uint256 totalPrice,
            address currentGrid
        ) = solX.energyToBeSold();

        (address manager, string memory status) = solX.txn();

        SolXEnergy memory item = SolXEnergy(
            units,
            pricePerUnit,
            totalPrice,
            currentGrid,
            manager,
            status,
            solXAddress
        );
        return item;
    }

    function putSolXOnMarket(
        uint256 _units,
        uint256 _pricePerUnit,
        uint256 _totalPrice,
        address _currentGrid
    ) public returns (address) {
        SolX newSolX = new SolX(
            payable(msg.sender),
            _units,
            _pricePerUnit,
            _totalPrice,
            _currentGrid
        );

        solXOnMarket[msg.sender].push(newSolX);
        solXOnMarketAddresses.push(address(newSolX));
        solXOnMarketCount++;
        return address(newSolX);
    }

    function buySolX(address solXAddress) public payable {
        SolX solX = SolX(solXAddress);
        require(address(solX) != address(0x0), "No SolX exists");
        (address man, ) = solX.txn();
        require(!(msg.sender == man), "Manager cannot buy the energy.");
        solX.buyEnergy{value: msg.value}(payable(msg.sender)); //One who calls it will buy it.
        solXSoldCount++;
        solXOnMarketCount--;
        solXSold[payable(msg.sender)].push(solX);
    }

    function getAllSolXOnMarket() public view returns (SolXEnergy[] memory) {
        SolXEnergy[] memory gS = new SolXEnergy[](solXOnMarketAddresses.length);

        for (uint256 i = 0; i < solXOnMarketAddresses.length; i++) {
            gS[i] = convertToSolXEnergy(solXOnMarketAddresses[i]);
        }
        return gS;
    }

    function getSolXSoldForAddress(address _buyer)
        public
        view
        returns (SolXEnergy[] memory)
    {
        SolX[] memory solXs = solXSold[_buyer];
        SolXEnergy[] memory gS = new SolXEnergy[](solXs.length);

        for (uint256 i = 0; i < solXs.length; i++) {
            SolXEnergy memory item = convertToSolXEnergy(address(solXs[i]));
            gS[i] = item;
        }
        return gS;
    }

    function getSolXOnMarketForAddress(address _manager)
        public
        view
        returns (SolXEnergy[] memory)
    {
        SolX[] memory solXs = solXOnMarket[_manager];
        SolXEnergy[] memory gS = new SolXEnergy[](solXs.length);

        for (uint256 i = 0; i < solXs.length; i++) {
            SolXEnergy memory item = convertToSolXEnergy(address(solXs[i]));
            gS[i] = item;
        }
        return gS;
    }
}

///Look at this contract as the single entity that is created when a customer puts energy on market
contract SolX {
    struct Energy {
        uint256 units;
        uint256 pricePerUnit;
        uint256 totalPrice;
        address currentGrid;
    }
    struct SolXTxn {
        address payable manager;
        string status; //pending, on_market, sold
        // Energy energy;
    }

    SolXTxn public txn;
    Energy public energyToBeSold;
    address payable boughtBy;

    constructor(
        address payable seller,
        uint256 _units,
        uint256 _pricePerUnit,
        uint256 _totalPrice,
        address _currentGrid
    ) {
        txn = SolXTxn(seller, "on_market");
        energyToBeSold = Energy(
            _units,
            _pricePerUnit,
            _totalPrice,
            _currentGrid
        );
    }

    function compare(string memory str1, string memory str2)
        private
        pure
        returns (bool)
    {
        if (bytes(str1).length != bytes(str2).length) {
            return false;
        }
        return
            keccak256(abi.encodePacked(str1)) ==
            keccak256(abi.encodePacked(str2));
    }

    function buyEnergy(address payable _buyer) public payable {
        require(!(compare(txn.status, "sold")), "This cannot be sold.");
        require(msg.value <= energyToBeSold.totalPrice, "Price is different.");
        require(!(msg.sender == txn.manager), "Manager cannot buy the energy.");
        boughtBy = _buyer;
        txn.status = "sold";
        txn.manager.transfer(energyToBeSold.totalPrice);
    }
}
