import { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Common/Button";
import Modal from "../../Components/Common/Modal";
import Page from "../../Components/Layout/Page";
import DirectRequest from "./DirectRequest";

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
	const [showModal, setShowModal] = useState(false);

	return (
		<Page title="klickrent">
			<Div>
				<StyledButton onClick={() => setShowModal(true)}>Start inquiry</StyledButton>
				{showModal && (
					<Modal title="DIRECT REQUEST" onClose={() => setShowModal(false)}>
						<DirectRequest />
					</Modal>
				)}
			</Div>
		</Page>
	);
};

export default Klickrent;
