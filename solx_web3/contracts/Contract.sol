/*SPDX-License-Identifier: UNLICENSED*/
pragma solidity >=0.4.22 <0.9.0;

contract GridsFactory {
    struct GridStruct {
        string gridName;
        string state;
        string country;
        uint256 capacity;
        address manager;
        address gridAddress;
    }

    mapping(address => Grid[]) private _grids; //Myaddress to My Grids
    address[] public gridAddresses;

    function createGrid(
        string memory _gridName,
        string memory _country,
        uint256 _capacity,
        string memory _state
    ) public returns (address) {
        Grid newGrid = new Grid(
            msg.sender,
            _gridName,
            _country,
            _capacity,
            _state
        );
        _grids[msg.sender].push(newGrid);
        gridAddresses.push(address(newGrid));
        return address(newGrid);
    }

    function getSingleGrid(address gridAddress)
        public
        view
        returns (GridStruct memory)
    {
        (
            string memory gridName,
            string memory state,
            string memory country,
            uint256 capacity,
            address manager
        ) = Grid(gridAddress).gridInfo();
        GridStruct memory item = GridStruct(
            gridName,
            state,
            country,
            capacity,
            manager,
            gridAddress
        );
        return item;
    }

    function getGridAddresses() public view returns (address[] memory) {
        return gridAddresses;
    }

    function getAllGrids() public view returns (GridStruct[] memory) {
        GridStruct[] memory gS = new GridStruct[](gridAddresses.length);

        for (uint256 i = 0; i < gridAddresses.length; i++) {
            (
                string memory gridName,
                string memory state,
                string memory country,
                uint256 capacity,
                address manager
            ) = Grid(gridAddresses[i]).gridInfo();
            GridStruct memory item = GridStruct(
                gridName,
                state,
                country,
                capacity,
                manager,
                gridAddresses[i]
            );
            gS[i] = item;
        }
        return gS;
    }

    function getMyGrids() public view returns (GridStruct[] memory) {
        Grid[] memory myGridArray = _grids[msg.sender];
        GridStruct[] memory gS = new GridStruct[](myGridArray.length);

        for (uint256 i = 0; i < myGridArray.length; i++) {
            (
                string memory gridName,
                string memory state,
                string memory country,
                uint256 capacity,
                address manager
            ) = myGridArray[i].gridInfo();
            GridStruct memory item = GridStruct(
                gridName,
                state,
                country,
                capacity,
                manager,
                address(myGridArray[i])
            );
            gS[i] = item;
        }
        return gS;
    }
}

contract Grid {
    struct GridStruct {
        string gridName;
        string state;
        string country;
        uint256 capacity;
        address manager;
    }

    GridStruct public gridInfo;

    constructor(
        address creator,
        string memory gridName_,
        string memory country_,
        uint256 capacity_,
        string memory state_
    ) {
        gridInfo = GridStruct(gridName_, state_, country_, capacity_, creator);
    }

    modifier isManager() {
        require(msg.sender == gridInfo.manager, "Not authorized.");

        _;
    }

    function changeManager() public isManager {
        gridInfo.manager = msg.sender;
    }
}