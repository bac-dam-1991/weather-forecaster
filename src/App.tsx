import React, { useReducer } from "react";
import { AppContext } from "./context/AppStateContext";
import { appReducer, initialState } from "./reducers/AppReducer";
import MainView from "./views/MainView";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<MainView />
		</AppContext.Provider>
	);
};

export default App;
