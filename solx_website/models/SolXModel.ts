import { toDisplayValue } from "@thirdweb-dev/react";

class SolX {
  readonly units: number;
  readonly price: number;
  readonly amount: number;
  readonly currentGrid: string;
  readonly manager: string;
  readonly status: string;
  readonly solXAddress: string;

  constructor(
    units: number,
    price: number,
    amount: number,
    currentGrid: string,
    manager: string,
    status: string,
    solXAddress: string,
  ) {
    this.units = units;
    this.price = price;
    this.amount = amount;
    this.currentGrid = currentGrid;
    this.manager = manager;
    this.status = status;
    this.solXAddress = solXAddress;
  }

  static fromThirdWebObject(obj: any): SolX {
    return new SolX(
      Number.parseFloat(toDisplayValue(obj.units,0)),
      Number.parseFloat(toDisplayValue(obj.pricePerUnit,0)),
      Number.parseFloat(toDisplayValue(obj.totalPrice,0)),
      obj.currentGrid,
      obj.manager,
      obj.status,
      obj.solXAddress,
    );
  }
}

export default SolX;