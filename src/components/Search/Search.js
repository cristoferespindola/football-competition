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
        <p>Entre com o código do campeonato.</p>
            <input
                className="search"
                type="text"
                onChange={onChangeSearch}
                data-testid="searchInput"
                placeholder="Ex: 2013"/>

            <Button
                clickButton={searchRequest}
                buttonEnable={buttonEnable}/>
        </div>
    )
}

export default Search;