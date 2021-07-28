import { ReactElement } from "react";
import GlobalStyles from "./globalStyles";
import Klickrent from "./Pages/Kickrent/Klickrent";

const App = (): ReactElement => {
	return (
		<>
			<GlobalStyles />
			<Klickrent />
		</>
	);
};

export default App;
