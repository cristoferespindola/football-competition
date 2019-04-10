import React from 'react';

const Competition = (props) => {

    return (
        <div className="row">
            <p><strong>Campeonanto:</strong> {props.name}</p>
            <p><strong>Pais:</strong> {props.country}</p>
        </div>
    )
}

export default Competition;