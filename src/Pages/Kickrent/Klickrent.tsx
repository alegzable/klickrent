import { ReactElement } from "react";
import styled from "styled-components";
import Button from "../../Components/Common/Button";
import Page from "../../Components/Layout/Page";

const Div = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledButton = styled(Button)`
	width: 80%;
`;

const Klickrent = (): ReactElement => {
	return (
		<Page title="klickrent">
			<Div>
				<StyledButton>Start inquiry</StyledButton>
			</Div>
		</Page>
	);
};

export default Klickrent;
