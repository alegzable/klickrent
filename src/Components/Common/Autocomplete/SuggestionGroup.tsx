import { ReactElement } from "react";
import styled from "styled-components";
import SuggestionGroupModel from "../../../Models/SuggestionGroupModel";

type Props = {
	suggestionGroup: SuggestionGroupModel;
	onSelect: (value: string) => void;
};

const Suggestion = styled.li`
	padding: 0.4rem 1rem;
	cursor: pointer;
	&:hover {
		background-color: #deefff;
	}
`;

const Category = styled.div`
	background: #bcdfff;
	padding: 1rem;
	font-weight: 600;
`;

const SuggestionGroup = ({ suggestionGroup, onSelect }: Props): ReactElement => {
	return (
		<li>
			<Category>{suggestionGroup.category}</Category>
			<ul>
				{suggestionGroup.values.map((suggestion) => (
					<Suggestion key={suggestion} onClick={() => onSelect(suggestion)}>
						{suggestion}
					</Suggestion>
				))}
			</ul>
		</li>
	);
};

export default SuggestionGroup;
