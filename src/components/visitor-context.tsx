"use client";

import { createContext, useContext } from "react";

export const VisitorContext = createContext<string>("");

export function useVisitorName() {
  return useContext(VisitorContext);
}
