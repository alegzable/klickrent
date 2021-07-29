import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../styleVariables";

export const inputTestId = "autocompleteInput";

type Props = {
	value?: string;
	placeholder?: string;
	onChange: (value: string) => void;
	onFocus: () => void;
	onBlur: () => void;
};

const Input = styled.input`
	padding: 1rem;
	background-color: ${colors.veryLightBlue};
	border-width: 1px;
`;

const AutocompleteInput = ({ value, placeholder, onChange, onFocus, onBlur }: Props): ReactElement => {
	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<Input
			value={inputValue}
			onChange={(e) => {
				setInputValue(e.target.value);
				onChange(e.target.value);
			}}
			placeholder={placeholder}
			data-testid={inputTestId}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};

export default AutocompleteInput;
