import React, { useState } from 'react';
import {
  IconButton, ImageListItem, ImageListItemBar, CircularProgress,
} from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Link } from 'react-router-dom';
import timestampToDate from '../../utils/time';

const AdListElement = ({
  id, image, title, description, validUntil,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <ImageListItem sx={{ display: 'flex' }}>
      {!imageLoaded && <CircularProgress />}
      <img
        src={image}
        alt={description}
        srcSet={image}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      {imageLoaded
      && (
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
      )}
    </ImageListItem>
  );
};

export default AdListElement;
