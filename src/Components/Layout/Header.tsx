import styled from "styled-components";
import { colors } from "../../styleVariables";

export const headerHeight = "5.6rem";

const Header = styled.h1`
	position: sticky;
	height: ${headerHeight};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	background: ${colors.blue};
	color: ${colors.lightBlue};
`;

export default Header;
