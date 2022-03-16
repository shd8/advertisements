import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './styles.scss';

const Rating = ({ rating }) => (
  <section className="rating-stars">
    {
        Array.from(Array(rating).keys())
          .map((element) => <i key={element}><StarIcon sx={{ color: '#ff6d75' }} /></i>)
    }
    {
          Array.from(Array(10 - rating).keys())
            .map((element) => <i key={element}><StarBorderIcon sx={{ color: '#ff6d75' }} /></i>)
        }
  </section>
);

export default Rating;
