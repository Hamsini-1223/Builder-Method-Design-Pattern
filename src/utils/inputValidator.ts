// src/utils/inputValidator.ts

export function validateNumber(
  input: string,
  min: number,
  max: number
): number {
  const num = parseInt(input);
  if (isNaN(num) || num < min || num > max) {
    throw new Error(`Please enter a number between ${min} and ${max}`);
  }
  return num;
}

export function validateYesNo(input: string): boolean {
  const answer = input.toLowerCase().trim();
  if (answer === "y" || answer === "yes") return true;
  if (answer === "n" || answer === "no") return false;
  throw new Error("Please enter y/yes or n/no");
}
