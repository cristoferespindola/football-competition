import React from "react";

import "../TeamList/TeamList.scss";

const TeamHeaders = () => {
    return (
        <div className="flex-table header">
            <div className="flex-row first">Position</div>
            <div className="flex-row team-name">Name</div>
            <div className="flex-row">Wons</div>
            <div className="flex-row">Draws</div>
            <div className="flex-row">Losts</div>
            <div className="flex-row">Points</div>
        </div>
    )
}

export default TeamHeaders;