import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress, Button, IconButton, Box, Modal, Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import Rating from '../../components/Rating';
import { getAd, voidCurrentAd } from '../../redux/actions/actions';
import timestampToDate from '../../utils/time';
import './styles.scss';

const AdDetail = () => {
  const { adId } = useParams();
  const dispatch = useDispatch();
  const currentAd = useSelector((state) => state.ads.currentAd);
  const loading = Object.keys(currentAd).length === 0;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  useEffect(() => {
    dispatch(voidCurrentAd());
    setTimeout(() => dispatch(getAd(adId)), 1000);
  }, []);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="detail">
      {
        loading
          ? <CircularProgress size={75} className="detail__loading" />
          : (
            <>
              <div className="details__header">
                <Link to="/">
                  <IconButton
                    sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                    aria-label="Home"
                    className="details__home"
                  >
                    <HomeIcon sx={{ fontSize: 40 }} />
                  </IconButton>
                </Link>
                <small className="detail__category">{ currentAd.category }</small>
              </div>
              <h1>{currentAd.title}</h1>
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
                  <div className="details__quality-price">
                    <Rating rating={currentAd.rating} />
                    <p className="details__price">
                      $
                      {currentAd.price}
                    </p>
                  </div>

                </div>
                <div className="details__description">
                  <p>
                    Offer valid until:
                    {' '}
                    {timestampToDate(currentAd.valid_until)}
                  </p>
                  <p>
                    Description:
                    {' '}
                    { currentAd.description}
                  </p>
                  <div className="details__actions">
                    <Button color="primary" onClick={toggleModal}>Purchase</Button>
                    <Modal
                      open={openModal}
                      onClose={toggleModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          You did it!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Now
                          {' '}
                          {currentAd.title}
                          {' '}
                          is yours!
                        </Typography>
                      </Box>
                    </Modal>
                    <IconButton
                      sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                      aria-label="External info"
                    >
                      <InfoIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </>
          )
      }
    </div>
  );
};

export default AdDetail;
