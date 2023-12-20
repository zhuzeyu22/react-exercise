import { createContext, useContext } from "react";

export const LevelContext = createContext(1);

const level = useContext(LevelContext);
