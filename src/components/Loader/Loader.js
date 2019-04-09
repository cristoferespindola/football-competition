import React from "react";

import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    border-color: red;
`;

const Loader = props => {
    return (
        <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={'#123abc'}
            loading={props.loading}
        />
    )
}

export default Loader;