import { PropsWithChildren, ReactElement } from "react";
import Content from "./Content";
import Header from "./Header";

type Props = {
	title: string;
};

const Page = ({ title, children }: PropsWithChildren<Props>): ReactElement => {
	return (
		<>
			<Header>{title}</Header>
			<Content>{children}</Content>
		</>
	);
};

export default Page;
