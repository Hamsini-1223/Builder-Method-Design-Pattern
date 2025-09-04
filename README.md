# House Builder Pattern

Simple TypeScript implementation of the Builder Design Pattern using house construction simulation.

## Overview

Build houses step-by-step using different construction teams. Learn the Builder Pattern through a console interface that lets you create houses with walls, doors, windows, garage, and garden.

## Project Structure

```
houseBuilderPattern/
├── asset/
│   ├── Builder.png
├── src/
│   ├── builders/
│   │   ├── houseBuilder.interface.ts
│   │   ├── simpleHouseBuilder.ts
│   │   └── fancyHouseBuilder.ts
│   ├── models/
│   │   └── house.model.ts
│   ├── services/
│   │   └── houseDirector.ts
│   ├── utils/
│   │   ├── inputValidator.ts
│   │   └── errorHandler.ts
│   └── mainApplication.ts
├── tsconfig.json
├── package.json
└── README.md
```

## UML Class Diagram

![House analogy Builder UML Diagram](asset/Builder.png)

## Setup

```bash
git clone https://github.com/yourusername/houseBuilderPattern.git
cd houseBuilderPattern
npm install
npm run dev
```

## Usage

Run the application to see an interactive menu:

```
1. Build a house manually
2. Use pre-made house plans (Director)
3. See demo comparison
4. Exit
```

### Manual Building

Choose Simple or Fancy builder, then add components step by step.

### Director Plans

Use pre-made plans:

- Basic House: 4 walls, 1 door, 4 windows
- Family House: 6 walls, 2 doors, 8 windows + garage + garden

## Code Example

```typescript
const builder = new SimpleHouseBuilder();
const house = builder.addWalls(4).addDoors(2).addWindows(6).addGarage().build();

console.log(house.describe());
// Output: "House with 4 walls, 2 doors, 6 windows, garage"
```

## Builder Types

**SimpleHouseBuilder**: Builds exactly what you request
**FancyHouseBuilder**: Upgrades everything (adds 2 extra walls, doubles windows)

## Input Validation

Basic validation for:

- Wall count: 1-10
- Door count: 1-5
- Window count: 1-20
- Yes/no inputs for garage and garden

## Pattern Benefits

- Step-by-step object construction
- Readable method chaining
- Same construction process, different results
- Flexible feature addition
- Clean separation of construction logic

## Built By

Ms Hamsini S
