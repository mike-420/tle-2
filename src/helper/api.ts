import fs from "fs";
import path from "path";

export interface BuildingInfo {
  buildingName: string;
  streetAddress: string;
  zipCode: number;
  area: string;
  securedparking: boolean;
  pool: boolean;
  gym: boolean;
  buildingImage: "string";
  totalUnits: number;
  year: string;
  millsAct: string;
  petFriendly: string;
  ihomefinderId: string;
}

export interface NeighborhoodInfo {
  neighborhood: string;
  buildings?: BuildingInfo[];
  youtubeVideos?: string;
  mapLarge?: string;
  banner?: string;
}

export async function fetchNeighborhoodData(): Promise<NeighborhoodInfo[]> {
  const filePath = path.join(process.cwd(), "src/neighborhood.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}
