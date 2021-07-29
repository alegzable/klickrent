import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
import { inputTestId } from "./AutocompleteInput";

describe("Autocomplete", () => {
	test("input change executes passed callback", async () => {
		const onChange = jest.fn();
		const inputValue = "testValue";

		render(<Autocomplete onInputChange={onChange} onSelect={jest.fn()} suggestions={[]} />);

		fireEvent.change(screen.getByTestId(inputTestId), { target: { value: inputValue } });

		await waitFor(() => expect(onChange).toHaveBeenCalledWith(inputValue));
	});

	test("suggestions are only rendered when input has focus", async () => {
		const suggestions = [
			{
				category: "category 1",
				values: ["suggestion 1.1", "suggestion 1.2"],
			},
			{
				category: "category 2",
				values: ["suggestion 2.1", "suggestion 2.2"],
			},
			{
				category: "category 3",
				values: ["suggestion 3.1", "suggestion 3.2"],
			},
		];

		render(<Autocomplete onInputChange={jest.fn()} onSelect={jest.fn()} suggestions={suggestions} />);

		suggestions.forEach((suggestionGroup) => {
			expect(screen.queryByText(suggestionGroup.category)).toBeNull();

			suggestionGroup.values.forEach((suggestion) => {
				expect(screen.queryByText(suggestion)).toBeNull();
			});
		});

		fireEvent.focus(screen.getByTestId(inputTestId));

		suggestions.forEach((suggestionGroup) => {
			expect(screen.queryByText(suggestionGroup.category)).not.toBeNull();

			suggestionGroup.values.forEach((suggestion) => {
				expect(screen.queryByText(suggestion)).not.toBeNull();
			});
		});
	});

	test("clicking on a suggestion changes input value, calls passed callback and closes the suggestion list", async () => {
		const expectedSelectedValue = "suggestion 3.1";
		const suggestions = [
			{
				category: "category 1",
				values: ["suggestion 1.1", "suggestion 1.2"],
			},
			{
				category: "category 2",
				values: ["suggestion 2.1", "suggestion 2.2"],
			},
			{
				category: "category 3",
				values: [expectedSelectedValue, "suggestion 3.2"],
			},
		];

		const onSelect = jest.fn();

		render(<Autocomplete onInputChange={jest.fn()} onSelect={onSelect} suggestions={suggestions} />);

		const input = screen.getByTestId(inputTestId);

		fireEvent.focus(input);

		const suggestionToSelect = screen.getByText(expectedSelectedValue);

		fireEvent.click(suggestionToSelect);

		expect(input).toHaveValue(expectedSelectedValue);
		expect(onSelect).toHaveBeenCalledWith(expectedSelectedValue);

		suggestions.forEach((suggestionGroup) => {
			expect(screen.queryByText(suggestionGroup.category)).toBeNull();

			suggestionGroup.values.forEach((suggestion) => {
				expect(screen.queryByText(suggestion)).toBeNull();
			});
		});
	});
});
