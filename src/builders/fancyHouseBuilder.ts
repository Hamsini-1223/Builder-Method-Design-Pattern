// src/builders/fancyHouseBuilder.ts
import { House } from '../models/house.model';
import { HouseBuilder } from './houseBuilder.interface';

export class FancyHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  addWalls(count: number): this {
    // Fancy houses get extra walls
    this.house.walls = count + 2;
    return this;
  }

  addDoors(count: number): this {
    this.house.doors = count;
    return this;
  }

  addWindows(count: number): this {
    // Fancy houses get double windows
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
    this.house = new House();
    return result;
  }
}