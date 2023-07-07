import { toDisplayValue } from "@thirdweb-dev/react";

class Grid {
  readonly gridName: string;
  readonly state: string;
  readonly country: string;
  readonly capacity: number;
  readonly manager: string;
  readonly gridAddress: string;

  constructor(
    gridName: string,
    state: string,
    country: string,
    capacity: number,
    manager: string,
    gridAddress: string,
  ) {
    this.gridName = gridName;
    this.capacity = capacity;
    this.country = country;
    this.state = state;
    this.manager = manager;
    this.gridAddress = gridAddress;
  }

  static fromThirdWebObject(obj: any): Grid {
    return new Grid(
      obj.gridName,
      obj.state,
      obj.country,
      Number.parseFloat(toDisplayValue(obj.capacity, 0)),
      obj.manager,
      obj.gridAddress,
    );
  }
}

export default Grid;
