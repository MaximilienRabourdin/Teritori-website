import React from 'react';
import { Item } from 'semantic-ui-react';

// Styled
import './ColorCardDesignStyled.css';

const ColorCardDesign: React.FC<{
    color: string,
    title: string,
    describe: string,
}> = ({color, title, describe}) => {
    return(
        <div className="card_component">
        <div className="color_card"  color={color} >
        </div>
        <p className="color_name">{title}</p>
        <p className="color_code"> {describe}</p>
        </div>    );
}

export default ColorCardDesign;
