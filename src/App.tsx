import { ReactElement } from "react";
import GlobalStyles from "./globalStyles";
import KlickrentPage from "./Pages/KlickrentPage";

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<KlickrentPage />
		</>
	);
};

export default App;
