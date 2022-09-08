import React from 'react';
import './cardgrantStyled.css';

import Button from '../../Button/button';

const CardGrant: React.FC<{
  title: string,
  list1: string,
  list2: string,
  list3: string,
  list4: string,
  icon: string,
}> = ({title, list1, list2, list3, list4, icon}) => { 
return (
  
<div className="container_card">
<div className="card">
<div className='box-shadow_container'>
<div className="container_title">
<div className="card_title">
<img className='card_title_icon' src={icon} alt="icon" />
<p className='card_title_text'> {title} </p>
</div>
</div>
</div>
<div className="cardList">
<li className='listName'>{list1}</li>
<li className='listName'>{list2}</li>
<li className='listName'>{list3}</li>
<li className='listName'>{list4}</li>
</div>
<Button />
</div>
</div>
)
} 

export default CardGrant;