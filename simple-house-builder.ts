// simple-house-builder.ts
import { House } from "./house";
import { HouseBuilder } from "./house-builder.interface";

export class SimpleHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  addWalls(count: number): this {
    this.house.walls = count;
    return this;
  }

  addDoors(count: number): this {
    this.house.doors = count;
    return this;
  }

  addWindows(count: number): this {
    this.house.windows = count;
    return this;
  }

  addGarage(): this {
    this.house.hasGarage = true;
    return this;
  }

  addGarden(): this {
    this.house.hasGarden = true;
    return this;
  }

  build(): House {
    const result = this.house;
    this.house = new House(); // Reset for next build
    return result;
  }
}
