import { ReactElement } from "react";
import AutocompleteQueryable from "../../Components/Common/Autocomplete/AutocompleteQueryable";
import { getProductSuggestions } from "../../Services/api";

const DirectRequest = (): ReactElement => {
	return (
		<AutocompleteQueryable
			placeholder="Machine name"
			query={getProductSuggestions}
			onSelect={(value) => console.log("Selected product:", value)}
		/>
	);
};

export default DirectRequest;
