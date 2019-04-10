import React from "react";

const TeamItem = (props) => {
    const {
        position,
        won,
        draw,
        lost,
        points
     } = props.team;
     const name = props.name;

    return (
        <div className="flex-table" data-testid="teamItem">
            <div className="flex-row first">{position}</div>
            <div className="flex-row team-name">{name} </div>
            <div className="flex-row"> {won} </div>
            <div className="flex-row">{draw} </div>
            <div className="flex-row">{lost}</div>
            <div className="flex-row"> {points}</div>
        </div>

    )
}

export default TeamItem;