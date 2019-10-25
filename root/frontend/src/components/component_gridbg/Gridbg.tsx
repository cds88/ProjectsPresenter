import * as React from 'react';

import styled from 'styled-components';

import './Style.scss';

export default function Gridbg() {
    var rows = [];
    for (var i = 0; i < 6; i++) {
        rows.push(<div key={i}></div>)
    }
    return (
        <div className="grid-chess-container">
            {rows}

        </div>
    )
}




