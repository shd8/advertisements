/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { ImageList } from '@mui/material';
import Ad from '../Ad';
import './styles.scss';

const AdList = ({ ads = [] }) => (
  <ImageList className="ad-list" variant="masonry" cols={3} gap={10}>
    { ads.length > 0 && ads.map(({
      id,
      image,
      external,
      rating,
      title,
      description,
      price,
      category,
      validUntil,
    }) => (
      <Ad
        key={id}
        id={id}
        image={image}
        external={external}
        rating={rating}
        title={title}
        description={description}
        price={price}
        category={category}
        validUntil={validUntil}
      />
    ))}
  </ImageList>
);

export default AdList;
