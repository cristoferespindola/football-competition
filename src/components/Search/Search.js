import React from 'react';

import Button from "../Button/Button";

import "./search.scss";

const Search = props => {
    const {
        onChangeSearch,
        searchRequest,
        buttonEnable
    } = props;

    return (
        <div className="row">
            <input
                className="search"
                type="text"
                onChange={onChangeSearch}
                data-testid="searchInput" />

            <Button
                clickButton={searchRequest}
                buttonEnable={buttonEnable}/>
        </div>
    )
}

export default Search;