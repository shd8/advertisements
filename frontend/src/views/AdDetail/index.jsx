import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Button } from '@mui/material';
import { getAd, voidCurrentAd } from '../../redux/actions/actions';
import timestampToDate from '../../utils/time';
import './styles.scss';

const AdDetail = () => {
  const { adId } = useParams();
  const dispatch = useDispatch();
  const currentAd = useSelector((state) => state.ads.currentAd);
  const loading = Object.keys(currentAd).length === 0;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    dispatch(voidCurrentAd());
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
                category:
                {' '}
                { currentAd.category }
              </p>
              <div className="details">

                <div className="details__product">
                  {!imageLoaded && <CircularProgress size={75} className="dashboard__loading" />}
                  <img
                    src={currentAd.image}
                    alt={currentAd.description}
                    srcSet=""
                    loading="lazy"
                    className="details__image"
                    onLoad={() => setImageLoaded(true)}
                  />
                  <p>
                    rating:
                    {' '}
                    {currentAd.rating}
                  </p>
                  <p>
                    Current ad price:
                    {currentAd.price}
                  </p>

                </div>
                <div className="details__description">
                  <p>
                    valid until:
                    {' '}
                    {timestampToDate(currentAd.valid_until)}
                  </p>
                  <p>
                    description:
                    {' '}
                    { currentAd.description}
                  </p>

                  <Button color="secondary">Secondary</Button>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                </div>
              </div>
            </>
          )
      }
    </div>
  );
};

export default AdDetail;
