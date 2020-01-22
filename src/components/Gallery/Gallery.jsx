import React from 'react';
import T from 'prop-types';
import styles from './Gallery.module.css';
import PhotoCard from '../PhotoCard/PhotoCard';

const gallery = [styles.gallery];

const Gallery = ({ articles }) => (
  <ul className={gallery}>
    {articles.map(elem => (
      <li key={elem.id}>
        <PhotoCard
          id={elem.id}
          small={elem.urls.small}
          full={elem.urls.full}
          name={elem.user.name}
          username={elem.user.username}
        />
      </li>
    ))}
  </ul>
);

Gallery.propType = {
  PhotoCard: T.string.isRequired,
  articles: T.array.isRequired,
};

export default Gallery;
