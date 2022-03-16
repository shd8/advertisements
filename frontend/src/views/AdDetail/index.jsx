import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getAd } from '../../redux/actions/actions';
import timestampToDate from '../../utils/time';
import './styles.scss';

const AdDetail = () => {
  const { adId } = useParams();
  const dispatch = useDispatch();
  const currentAd = useSelector((state) => state.ads.currentAd);
  const loading = Object.keys(currentAd).length === 0;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => dispatch(getAd(adId)), 1000);
  }, []);

  return (
    <div className="detail">
      {
        loading
          ? <CircularProgress size={75} className="detail__loading" />
          : (
            <>
              <h1>{currentAd.title}</h1>
              <p>
                Current ad price:
                {currentAd.price}
              </p>
              <p>
                external:
                {' '}
                {currentAd.external}
              </p>
              <p>
                rating:
                {' '}
                {currentAd.rating}
              </p>
              <p>
                title:
                {' '}
                {currentAd.title}
              </p>
              <p>
                description:
                {' '}
                { currentAd.description}
              </p>
              <p>
                category:
                {' '}
                { currentAd.category }
              </p>
              <p>
                valid until:
                {' '}
                {timestampToDate(currentAd.valid_until)}
              </p>
              {!imageLoaded
              && <CircularProgress size={75} className="dashboard__loading" />}
              <img
                src={currentAd.image}
                alt={currentAd.description}
                srcSet=""
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </>
          )
      }
    </div>
  );
};

export default AdDetail;
