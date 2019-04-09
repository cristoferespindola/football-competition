import React from "react";

import TeamItem from "../TeamItem/TeamItem";

const TeamList = (props) => {
    return (
        <>
            <div>
                {props.teams.map((item, index) => {
                    return (
                        <TeamItem key={index} team={item} />
                    )
                })}
            </div>
        </>
    )
}

export default TeamList;