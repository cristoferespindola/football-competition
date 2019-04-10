import React from "react";
import { cleanup, render } from "react-testing-library";

import TeamItem from "../Team/TeamItem/TeamItem";

afterEach(cleanup);

const team = {
    position: "3",
    points: 69,
    won: 19,
    draw: 12,
    lost: 7
  };
const name = "SC Internacional";

describe("Team Item", () => {
    it("Render the team item", () => {
        const { getByTestId } = render(<TeamItem team={team} name={name}/>);
        const teamItem = getByTestId("teamItem");

        expect(teamItem).toBeDefined();

    });
})