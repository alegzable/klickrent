import { render, fireEvent, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
	test("renders children and title", () => {
		const expectedTitle = "testTitle";
		const expectedInnerText = "testChildren";

		const container = document.createElement("div");
		container.id = "modal-root";

		render(
			<Modal onClose={jest.fn()} title={expectedTitle}>
				<div>{expectedInnerText}</div>
			</Modal>,
			{ container: document.body.appendChild(container) }
		);

		expect(screen.queryByText(expectedInnerText)).not.toBeNull();
		expect(screen.queryByText(expectedTitle)).not.toBeNull();
	});

	test("close button runs passed callback", () => {
		const handleClose = jest.fn();

		const container = document.createElement("div");
		container.id = "modal-root";

		render(<Modal onClose={handleClose} title={""}></Modal>, {
			container: document.body.appendChild(container),
		});

		fireEvent.click(screen.getByTitle("close"));

		expect(handleClose).toHaveBeenCalledTimes(1);
	});
});
