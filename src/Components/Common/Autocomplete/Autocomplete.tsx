import { ReactElement, useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash";
import SuggestionGroup from "./SuggestionGroup";
import SuggestionGroupModel from "../../../Models/SuggestionGroupModel";
import AutocompleteInput from "./AutocompleteInput";
import { colors } from "../../../styleVariables";

type Props = {
	suggestions: SuggestionGroupModel[];
	placeholder?: string;
	onInputChange: (value: string) => void;
	onSelect: (value: string) => void;
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: ${colors.lightBlue};
`;

const Suggestions = styled.ul`
	max-height: 30rem;
	overflow: auto;
	box-shadow: 0.1rem 0.1rem 0.2rem ${colors.lightGray};
`;

const Autocomplete = ({ placeholder, suggestions, onInputChange, onSelect }: Props): ReactElement => {
	const onInputChangeDebounced = debounce(onInputChange, 300);

	const [inputHasFocus, setInputFocus] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const showSuggestions = inputHasFocus && suggestions.length > 0;

	const onSuggestionSelect = (value: string) => {
		setInputValue(value);
		onInputChange(value);
		onSelect(value);
		setInputFocus(false);
	};

	const onInputBlur = () => {
		if (!showSuggestions) {
			setInputFocus(false);
		}
	};

	return (
		<Container>
			<AutocompleteInput
				onChange={onInputChangeDebounced}
				placeholder={placeholder}
				onFocus={() => setInputFocus(true)}
				onBlur={onInputBlur}
				value={inputValue}
			/>
			{showSuggestions && (
				<Suggestions>
					{suggestions.map((suggestion) => (
						<SuggestionGroup
							suggestionGroup={suggestion}
							onSelect={onSuggestionSelect}
							key={suggestion.category}
						/>
					))}
				</Suggestions>
			)}
		</Container>
	);
};

export default Autocomplete;
