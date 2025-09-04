// src/utils/errorHandler.ts

export function handleError(error: any): void {
  console.log(`Error: ${error.message || error}`);
}
