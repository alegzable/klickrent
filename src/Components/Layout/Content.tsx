import styled from "styled-components";
import { headerHeight } from "./Header";

const Content = styled.div`
	height: calc(100% - ${headerHeight});
`;

export default Content;
