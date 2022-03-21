import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import AdList from '../../components/AdList';
import { getAllAds } from '../../redux/actions/actions';
import './styles.scss';

const Dashboard = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads.all);
  const loading = ads.length === 0;

  useEffect(() => {
    setTimeout(() => dispatch(getAllAds()), 1000);
  }, []);

  return (
    <div className="dashboard">
      <h1>Advertisements</h1>
      {
        loading
          ? <CircularProgress size={75} className="dashboard__loading" />
          : <AdList ads={ads} />
      }
    </div>
  );
};

export default Dashboard;
