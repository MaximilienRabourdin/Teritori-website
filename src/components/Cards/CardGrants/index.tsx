import React from 'react';
import './cardgrantStyled.css';

//import component
import Button from '../../Button/button';
import { PrimaryBox } from '../../Boxes/PrimaryBox';
import TertiaryBox from '../../Boxes/TertiaryBox';
import TriangleBox from '../../Boxes/TriangleBox';
import { NONAME } from 'dns';

const CardGrant: React.FC<{
  title: string,
  list1: string,
  list2: string,
  list3: string,
  list4: string,
  icon: string,
}> = ({title, list1, list2, list3, list4, icon}) => { 
return (

<TertiaryBox 
style={{margin:'10px', borderTop: 'none'}}
mainContainerStyle={{padding: "0rem", borderTop: 'none'}}>
<div className="container_card">
<div className="card">
<TertiaryBox  
    mainContainerStyle={{borderLeft: 'none', borderRight:'none'}}
    style={{width:7}} 
    >
<div className="card_title">
<img className='card_title_icon' src={icon} alt="icon" />
<p className='card_title_text'> {title} </p>
</div>
</TertiaryBox>
<div className="cardList">
<li className='listName'>{list1}</li>
<li className='listName'>{list2}</li>
<li className='listName'>{list3}</li>
<li className='listName'>{list4}</li>
</div>
<Button />
</div>
</div>
</TertiaryBox>
)
} 

export default CardGrant;