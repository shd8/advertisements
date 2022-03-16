/* eslint-disable no-unused-vars */
import React from 'react';
import { ImageListItem } from '@mui/material';

const Ad = ({
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
  <ImageListItem>
    <img
      src={image}
      alt={description}
      srcSet={image}
      loading="lazy"
    />
  </ImageListItem>
);

export default Ad;
