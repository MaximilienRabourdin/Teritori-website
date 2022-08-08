import React from 'react';
import './cardgrantStyled.css';

const CardGrant: React.FC<{
  title: string,
  list1: string,
  list2: string,
  list3: string,
  list4: string,
}> = ({title, list1, list2, list3, list4}) => { 
return (
      
<div className="container_card">
<div className="card">
<div className="container_title">
<div className="card_title">
<img className='card_title_icon' src="../../event_icon.svg" alt="icon" />
<p className='card_title_text'> {title} </p>
</div>
</div>
<div className="cardList">
<li className='listName'>{list1}</li>
<li className='listName'>{list2}</li>
<li className='listName'>{list3}</li>
<li className='listName'>{list4}</li>
</div>
<div className="card_button">
<div className="container_button">
<a className="card_button_link" href="#">Apply</a>
</div>
</div>
</div>
</div>
)
} 

export default CardGrant;