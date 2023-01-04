import Map from "model/Map";
import { createContext } from "react";

export const MapContext = createContext<Map | undefined>(undefined);
