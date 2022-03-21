import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress, Button, IconButton, Box, Modal, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Rating from '../../components/Rating';
import { getAd, voidCurrentAd, deleteAd } from '../../redux/actions/actions';
import { timestampToDate } from '../../utils/time';
import './styles.scss';

const AdDetail = () => {
  const { adId } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const currentAd = useSelector((state) => state.ads.currentAd);
  const loading = Object.keys(currentAd).length === 0;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [openPurchaseModal, setOpenPurchaseModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const togglePurchaseModal = () => setOpenPurchaseModal(!openPurchaseModal);
  const toggleDeleteModal = () => setOpenDeleteModal(!openDeleteModal);

  const handleDeleteAd = () => {
    dispatch(deleteAd(adId));
    navigate('/');
  };

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
                <small className="detail__category">
                  {
                  Array.isArray(currentAd.category)
                    ? currentAd.category.map((oneCategory, index) => (index === currentAd.category.length - 1 ? oneCategory : `${oneCategory}, `))
                    : currentAd.category
                  }
                </small>
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
                    <span className="details__price">
                      $
                      {currentAd.price}
                    </span>
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
                  <IconButton
                    sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                    aria-label="External info"
                    href={currentAd.external || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InfoIcon sx={{ fontSize: '1.5em' }} />
                  </IconButton>
                  <div className="details__actions">
                    <Button variant="contained" color="primary" onClick={togglePurchaseModal}>Purchase</Button>
                    <Modal
                      open={openPurchaseModal}
                      onClose={() => setOpenPurchaseModal(false)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">You did it!</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Now
                          {' '}
                          {currentAd.title}
                          {' '}
                          is yours!
                        </Typography>
                      </Box>
                    </Modal>
                    <Button sx={{ marginLeft: '1em' }} variant="outlined" color="error" onClick={toggleDeleteModal}>
                      <DeleteIcon />
                      Delete
                    </Button>
                    <Modal
                      open={openDeleteModal}
                      onClose={() => setOpenDeleteModal(false)}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">WARNING</Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, marginBottom: '2em' }}>
                          Are you sure you want to delete
                          {' '}
                          {currentAd.title}
                          ?
                        </Typography>
                        <div>
                          <Button onClick={handleDeleteAd} variant="contained">Yes</Button>
                          <Button onClick={() => setOpenDeleteModal(false)} variant="text">No</Button>
                        </div>
                      </Box>
                    </Modal>
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
