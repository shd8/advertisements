import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import { getAd } from '../../redux/actions/actions';

const AdDetail = () => {
  const { adId } = useParams();
  const dispatch = useDispatch();
  const currentAd = useSelector((state) => state.ads.currentAd);
  const loading = Object.keys(currentAd).length === 0;

  useEffect(() => {
    setTimeout(() => dispatch(getAd(adId)), 1000);
  }, []);

  return (
    <div>
      {
        loading
          ? <CircularProgress size={75} className="dashboard__loading" />
          : (
            <>
              <p>
                Current ad price:
                {currentAd.price}
              </p>
              <img src={currentAd.image} alt={currentAd.description} srcSet="" />
            </>
          )
      }
    </div>
  );
};

export default AdDetail;
