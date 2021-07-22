import { createContext, Dispatch, useContext } from "react";
import { AppAction, AppState, initialState } from "../reducers/AppReducer";

export interface IAppContext {
	state: AppState;
	dispatch: Dispatch<AppAction>;
}

export const AppContext = createContext<IAppContext>({
	state: initialState,
	dispatch: (value: AppAction) => {},
});

export const useAppContext = () => useContext(AppContext);
