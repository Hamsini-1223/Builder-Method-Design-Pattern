// src/mainApplication.ts
import { createInterface } from "readline";
import { SimpleHouseBuilder } from "./builders/simpleHouseBuilder";
import { FancyHouseBuilder } from "./builders/fancyHouseBuilder";
import { HouseDirector } from "./services/houseDirector";
import { HouseBuilder } from "./builders/houseBuilder.interface";
import { validateNumber, validateYesNo } from "./utils/inputValidator";
import { handleError } from "./utils/errorHandler";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function chooseBuilder(): Promise<HouseBuilder> {
  console.log("\nChoose your construction team:");
  console.log("1. Simple Builder (normal houses)");
  console.log("2. Fancy Builder (luxury houses)");

  const choice = await askQuestion("Enter choice (1 or 2): ");

  if (choice === "2") {
    console.log("You chose Fancy Builder!");
    return new FancyHouseBuilder();
  } else {
    console.log("You chose Simple Builder!");
    return new SimpleHouseBuilder();
  }
}

async function useDirector(builder: HouseBuilder): Promise<void> {
  console.log("\nChoose a pre-made house plan:");
  console.log("1. Basic House (4 walls, 1 door, 4 windows)");
  console.log(
    "2. Family House (6 walls, 2 doors, 8 windows + garage + garden)"
  );

  const choice = await askQuestion("Enter choice (1 or 2): ");
  const director = new HouseDirector();

  let house;
  if (choice === "2") {
    house = director.buildFamilyHouse(builder);
    console.log("Built Family House!");
  } else {
    house = director.buildBasicHouse(builder);
    console.log("Built Basic House!");
  }

  console.log(`\nYour house: ${house.describe()}`);
}

async function buildManually(builder: HouseBuilder): Promise<void> {
  console.log("\nLet's build your house step by step!");

  try {
    // Get walls
    const wallsStr = await askQuestion("How many walls? (1-10): ");
    const walls = validateNumber(wallsStr, 1, 10);
    builder.addWalls(walls);
    console.log(`Added ${walls} walls`);

    // Get doors
    const doorsStr = await askQuestion("How many doors? (1-5): ");
    const doors = validateNumber(doorsStr, 1, 5);
    builder.addDoors(doors);
    console.log(`Added ${doors} doors`);

    // Get windows
    const windowsStr = await askQuestion("How many windows? (1-20): ");
    const windows = validateNumber(windowsStr, 1, 20);
    builder.addWindows(windows);
    console.log(`Added ${windows} windows`);

    // Ask for garage
    const garageStr = await askQuestion("Do you want a garage? (y/n): ");
    if (validateYesNo(garageStr)) {
      builder.addGarage();
      console.log("Added garage");
    }

    // Ask for garden
    const gardenStr = await askQuestion("Do you want a garden? (y/n): ");
    if (validateYesNo(gardenStr)) {
      builder.addGarden();
      console.log("Added garden");
    }

    // Build the house
    const house = builder.build();
    console.log(`\nYour custom house: ${house.describe()}`);
  } catch (error) {
    handleError(error);
  }
}

async function showDemo(): Promise<void> {
  console.log("\nDemo of different builders:");

  const director = new HouseDirector();

  const simpleHouse = director.buildFamilyHouse(new SimpleHouseBuilder());
  const fancyHouse = director.buildFamilyHouse(new FancyHouseBuilder());

  console.log(`Simple Builder Result: ${simpleHouse.describe()}`);
  console.log(`Fancy Builder Result: ${fancyHouse.describe()}`);
  console.log("Notice how the same plan gives different results!");
}

async function main(): Promise<void> {
  console.log("House Builder Pattern Demo\n");

  let continueBuilding = true;

  while (continueBuilding) {
    console.log("\n" + "=".repeat(50));
    console.log("What would you like to do?");
    console.log("1. Build a house manually");
    console.log("2. Use pre-made house plans (Director)");
    console.log("3. See demo comparison");
    console.log("4. Exit");

    const mainChoice = await askQuestion("Enter choice (1-4): ");

    switch (mainChoice) {
      case "1":
        const builder1 = await chooseBuilder();
        await buildManually(builder1);
        break;

      case "2":
        const builder2 = await chooseBuilder();
        await useDirector(builder2);
        break;

      case "3":
        await showDemo();
        break;

      case "4":
        continueBuilding = false;
        break;

      default:
        console.log("Invalid choice, please try again.");
    }

    if (continueBuilding) {
      const again = await askQuestion(
        "\nWould you like to build another house? (y/n): "
      );
      if (again.toLowerCase() !== "y" && again.toLowerCase() !== "yes") {
        continueBuilding = false;
      }
    }
  }

  console.log("\nThanks for using the House Builder Pattern Demo!");
  rl.close();
}

// Start the application
main().catch(console.error);
