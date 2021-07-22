import { createContext, useContext } from "react";
import { AppState, initialState } from "../reducers/AppReducer";

export interface IAppStateContext {
	state: AppState;
}

export const AppStateContext = createContext<IAppStateContext>({
	state: initialState,
});

export const useAppState = () => useContext(AppStateContext);
