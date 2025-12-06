import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../index";

describe("Greeting", () => {
	it("renders greeting message from core package", () => {
		render(<Greeting name="World" />);
		expect(screen.getByText("Hello, World!")).toBeTruthy();
	});

	it("renders greeting with different names", () => {
		const { rerender } = render(<Greeting name="Alice" />);
		expect(screen.getByText("Hello, Alice!")).toBeTruthy();

		rerender(<Greeting name="Bob" />);
		expect(screen.getByText("Hello, Bob!")).toBeTruthy();
	});
});
