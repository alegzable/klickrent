import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren, useEffect, useRef } from "react";
import { ReactElement } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { breakpoints, colors } from "../../styleVariables";
import Button from "./Button";

export type Props = {
	title: string;
	onClose: () => void;
};

const RootModal = ({ children }: PropsWithChildren<unknown>): ReactElement => {
	const modalRootRef = useRef(document.querySelector("#modal-root") as HTMLElement);
	const modalRoot = modalRootRef.current;

	const innerDivRef = useRef(document.createElement("div"));
	const innerDiv = innerDivRef.current;

	innerDiv.style.cssText = "height: 100%; width: 100%;";

	useEffect(() => {
		modalRoot.style.zIndex = "99";
		modalRoot.appendChild(innerDiv);
		return () => {
			modalRoot.style.zIndex = "-1";
			modalRoot.removeChild(innerDiv);
		};
	}, [innerDiv, modalRoot]);

	return createPortal(children, innerDiv);
};

const Backdrop = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(255 255 255 / 90%);
`;

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	background: ${colors.lightBlue};
	box-shadow: 0.1rem 0.1rem 0.2rem ${colors.lightGray};
	padding: 3rem 3rem;

	@media screen and ${breakpoints.sm} {
		height: 80%;
		width: 80%;
	}

	@media screen and ${breakpoints.lg} {
		height: 60%;
		width: 60%;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4rem;
`;

const StyledButton = styled(Button)`
	background: transparent;
	color: ${colors.gray};
	padding: 1rem 1rem;
`;

const Modal = ({ title, onClose, children }: PropsWithChildren<Props>) => {
	return (
		<RootModal>
			<Backdrop>
				<Wrapper>
					<Header>
						<h2>{title}</h2>
						<StyledButton onClick={onClose} title="close">
							<FontAwesomeIcon icon={faTimesCircle} />
						</StyledButton>
					</Header>
					{children}
				</Wrapper>
			</Backdrop>
		</RootModal>
	);
};

export default Modal;
