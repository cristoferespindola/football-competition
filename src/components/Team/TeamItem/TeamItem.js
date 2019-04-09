import React from "react";

const TeamItem = (props) => {
    const {
        position,
        team,
        won,
        draw,
        lost,
        points
     } = props.team;

    return (
        <div className="flex-table" >
            <div className="flex-row">{position}</div>
            <div className="flex-row item-50">{team.name} </div>
            <div className="flex-row"> {won} </div>
            <div className="flex-row">{draw} </div>
            <div className="flex-row">{lost}</div>
            <div className="flex-row"> {points}</div>
        </div>

    )
}

export default TeamItem;