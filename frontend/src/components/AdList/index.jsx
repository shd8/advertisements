/* eslint-disable camelcase */
import React from 'react';
import { ImageList } from '@mui/material';
import AdListElement from '../AdListElement';

const AdList = ({ ads = [] }) => (
  <ImageList
    className="ad-list"
    variant="masonry"
    data-testid="ad-list"
    cols={2}
    gap={10}
    sx={{ margin: '0em 2em', textAlign: 'center' }}
  >
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
