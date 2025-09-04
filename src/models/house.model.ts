// src/models/house.model.ts
export class House {
  walls: number = 0;
  doors: number = 0;
  windows: number = 0;
  hasGarage: boolean = false;
  hasGarden: boolean = false;

  describe(): string {
    let description = `House with ${this.walls} walls, ${this.doors} doors, ${this.windows} windows`;

    if (this.hasGarage) description += ", garage";
    if (this.hasGarden) description += ", garden";

    return description;
  }
}
