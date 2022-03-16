/* eslint-disable no-unused-vars */
import React from 'react';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

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
    <ImageListItemBar
      title={title}
      sx={{ background: 'rgba(0, 0, 0, 0.65)' }}
      subtitle={`Valid until: ${validUntil}`}
      actionIcon={(
        <IconButton
          sx={[
            { color: 'rgba(255, 255, 255, 0.8)' },
            (() => ({
              '&:hover': {
                'background-color': 'rgba(0, 0, 0, 0.3)',
              },
            })),
          ]}
          aria-label={`info about ${title}`}
        >
          <CallMadeIcon />
        </IconButton>
      )}
    />
  </ImageListItem>
);

export default Ad;
