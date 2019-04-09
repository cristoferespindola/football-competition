import React from "react";
import { cleanup, render, fireEvent, findByTestId } from "react-testing-library";

import Search from "../Search/Search";
import Button from "../Button/Button";

afterEach(cleanup);

describe("Search Input", () => {
    it("Render the search input", () => {
        const { getByTestId } = render(<Search/>);
        const searchInput = getByTestId("searchInput");

        expect(searchInput).toBeDefined();

    });
    it("Button is disable if search input empty", () => {
        let enable = 0;
        const { getByTestId } = render(
            <Search buttonEnable={enable}/>
            );

        const searchInput = getByTestId("searchInput");
        const searchBtn = getByTestId("searchBtn");

        expect(searchBtn.disabled).toBe(true);

        fireEvent.change(searchInput, { target: { value: "2013"} });
        enable = searchInput.value.length;

        expect(searchBtn.disabled).toBe(false);

    });
})