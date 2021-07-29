import { ReactElement, useState } from "react";
import SuggestionGroupModel from "../../../Models/SuggestionGroupModel";
import Autocomplete from "./Autocomplete";

type Props = {
	placeholder: string;
	query: (value: string) => Promise<SuggestionGroupModel[]>;
	onSelect: (value: string) => void;
};

const AutocompleteQueryable = ({ placeholder, query, onSelect }: Props): ReactElement => {
	const [suggestions, setSuggestions] = useState<SuggestionGroupModel[]>([]);

	const onInputChange = async (value: string) => {
		try {
			const suggestions = await query(value);

			setSuggestions(suggestions);
		} catch (error) {
			// display some error toast
			console.log(error);
		}
	};

	return (
		<Autocomplete
			placeholder={placeholder}
			onInputChange={onInputChange}
			onSelect={onSelect}
			suggestions={suggestions}
		/>
	);
};

export default AutocompleteQueryable;
