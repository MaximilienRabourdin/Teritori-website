import React, { CSSProperties } from 'react';
import { Item } from 'semantic-ui-react';

// Styled
import './ColorCardDesignStyled.css';

const ColorCard: React.FC<{
    title: string,
    describtion: string,
    style: CSSProperties|undefined ,
}> = ({style, title, describtion}) => {
    return(
        <div className="card_component">
        <div className="color_card" style={style}  >
        </div>
        <p className="color_name">{title}</p>
        <p className="color_code"> {describtion}</p>
        </div>    );
}

export default ColorCard;
