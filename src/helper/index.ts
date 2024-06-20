export function createSlug(input: string): string {
  return input
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .trim(); // Remove any leading/trailing spaces (just in case)
}

export function slugToNormal(input: string): string {
  return input
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
}
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
