import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Eco-Friendly Product'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
          <a
            className='cards__item__gitlink'
            href={props.gitLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='git-button'>GitHub Repo</button>
          </a>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
