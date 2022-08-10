import React from 'react';

// Styled
import './FooterCardStyled.css';

const FooterCard: React.FC<{
    title: string,
    listone: string,
    listtwo: string,
    listthree: string,
    listfour: string,
    
}> = ({title, listone, listtwo, listthree, listfour}) => {
    return(
        <div className="column">
        <div className="title_column">
          <p>{title}</p>
        </div>
        <div className="list_column">
          <ul className='all_item_column'>
            <li >
              <a className='item_column' href="#">{listone}</a>
              <img src="arrow_footer.svg" alt="icon" />
            </li>
            <li >
              <a className='item_column' href="#">{listtwo}</a>
              <img src="arrow_footer.svg" alt="icon" />
            </li>
            <li >
              <a className='item_column' href="#">{listthree}</a>
              <img src="arrow_footer.svg" alt="icon" />
            </li>
            <li >
              <a className='item_column' href="#">{listfour}</a>
              <img src="arrow_footer.svg" alt="icon" />
            </li>
          </ul>
        </div>
      </div>);
}

export default FooterCard;
