import { NATIONS_PATH, VEHICLES_PATH, VEHICLES_TYPES_PATH } from "./constants";
import { NationResponse, VehicleResponse, VehicleTypeResponse } from "./types";

export const API = {
  async fetchVehicles(): Promise<VehicleResponse> {
    const response = await fetch(VEHICLES_PATH);
    if (!response.ok) throw new Error("Failed to fetch vehicles");
    const { data } = await response.json();
    return data;
  },

  async fetchNations(): Promise<NationResponse> {
    const response = await fetch(NATIONS_PATH);
    if (!response.ok) throw new Error("Failed to fetch nations");
    const { data } = await response.json();
    return data;
  },

  async fetchVehicleTypes(): Promise<VehicleTypeResponse> {
    const response = await fetch(VEHICLES_TYPES_PATH);
    if (!response.ok) throw new Error("Failed to fetch vehicle types");
    const { data } = await response.json();
    return data;
  },
};
