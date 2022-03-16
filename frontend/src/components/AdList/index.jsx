/* eslint-disable import/extensions */
import React from 'react';
import { ImageListItem, ImageList } from '@mui/material';
import Ad from '../Ad';

const AdList = ({ ads = [] }) => (
  <ImageList variant="woven" cols={3} gap={8}>
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
      <ImageListItem key={id}>
        <Ad
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
      </ImageListItem>
    ))}
  </ImageList>
);

export default AdList;
