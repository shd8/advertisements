/* eslint-disable camelcase */
import React from 'react';
import { ImageList } from '@mui/material';
import AdListElement from '../AdListElement';
import './styles.scss';

const AdList = ({ ads = [] }) => (
  <ImageList className="ad-list" variant="masonry" cols={3} gap={10}>
    { ads.length > 0 && ads.map(({
      id,
      image,
      title,
      valid_until,
      description,
    }) => (
      <AdListElement
        key={id}
        id={id}
        title={title}
        description={description}
        image={image}
        validUntil={valid_until}
      />
    ))}
  </ImageList>
);

export default AdList;
