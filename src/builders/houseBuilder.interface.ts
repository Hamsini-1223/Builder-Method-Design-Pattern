// src/builders/houseBuilder.interface.ts
import { House } from "../models/house.model";

export interface HouseBuilder {
  addWalls(count: number): this;
  addDoors(count: number): this;
  addWindows(count: number): this;
  addGarage(): this;
  addGarden(): this;
  build(): House;
}
