import React from 'react';

import "./button.scss";

const Button = (props) => {
    const {
        clickButton,
        buttonEnable
    } = props;

    return (
        <button
            className="btn"
            value="Search"
            disabled={buttonEnable < 1}
            onClick={clickButton}
            data-testid="searchBtn">
            Search
            </button>

    )
}

export default Button;