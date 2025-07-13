// fancy-house-builder.ts
import { House } from "./house";
import { HouseBuilder } from "./house-builder.interface";

export class FancyHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  addWalls(count: number): this {
    // Fancy houses get extra strong walls
    this.house.walls = count + 2;
    return this;
  }

  addDoors(count: number): this {
    // Fancy houses get automatic doors
    this.house.doors = count;
    return this;
  }

  addWindows(count: number): this {
    // Fancy houses get more windows for better light
    this.house.windows = count * 2;
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
