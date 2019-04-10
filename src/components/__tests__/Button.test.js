import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";

import Button from "../Button/Button";

afterEach(cleanup);

describe("Button", () => {

    it("Button is defined", () => {
        const { getByTestId } = render(
            <Button/>
            );
        const searchBtn = getByTestId("searchBtn");

        expect(searchBtn).toBeDefined();
    });

    it("Button call function props", () => {
        const searchRequest = jest.fn();
        const { getByTestId } = render(
            <Button clickButton={searchRequest}/>
            );
        const searchBtn = getByTestId("searchBtn");

        fireEvent.click(searchBtn);
        expect(searchRequest).toHaveBeenCalledTimes(1);
    });
})