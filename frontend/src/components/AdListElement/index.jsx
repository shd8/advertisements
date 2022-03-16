import React from 'react';
import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';
import timestampToDate from '../../utils/time';

const AdListElement = ({
  id, image, title, description, validUntil,
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
      subtitle={`Valid until: ${timestampToDate(validUntil)}`}
      actionIcon={(
        <Link to={`/detail/${id}`}>
          <IconButton
            sx={[
              { color: 'rgba(255, 255, 255, 0.8)' },
              (() => ({
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                },
              })),
            ]}
            aria-label={`info about ${title}`}
          >
            <CallMadeIcon />
          </IconButton>
        </Link>
      )}
    />
  </ImageListItem>
);

export default AdListElement;
