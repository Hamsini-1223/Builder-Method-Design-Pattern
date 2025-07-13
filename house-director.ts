// house-director.ts
import { House } from "./house";
import { HouseBuilder } from "./house-builder.interface";

export class HouseDirector {
  buildBasicHouse(builder: HouseBuilder): House {
    return builder.addWalls(4).addDoors(1).addWindows(4).build();
  }

  buildFamilyHouse(builder: HouseBuilder): House {
    return builder
      .addWalls(6)
      .addDoors(2)
      .addWindows(8)
      .addGarage()
      .addGarden()
      .build();
  }
}
