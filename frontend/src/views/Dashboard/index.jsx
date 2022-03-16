import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdList from '../../components/AdList';
import { getAllAds } from '../../redux/actions/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const ads = useSelector((state) => state.ads);

  useEffect(() => {
    dispatch(getAllAds());
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <AdList ads={ads} />
    </div>
  );
};

export default Dashboard;
