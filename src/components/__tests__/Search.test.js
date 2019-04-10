import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";

import Search from "../Search/Search";

afterEach(cleanup);

describe("Search Input", () => {
    it("Render the search input", () => {
        const { getByTestId } = render(<Search/>);
        const searchInput = getByTestId("searchInput");

        expect(searchInput).toBeDefined();

    });
    it("Trigger props action onchange", () => {
        const handleSearch = jest.fn();
        const { getByTestId } = render(
            <Search onChangeSearch={handleSearch}/>
            );
        const searchInput = getByTestId("searchInput");

        fireEvent.change(searchInput, { target: { value: "2013"} });
        expect(handleSearch).toHaveBeenCalledTimes(1);
    });
})