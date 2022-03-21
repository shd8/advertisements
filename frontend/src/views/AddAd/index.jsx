import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TextField,
  Button,
  Rating,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import capitalizeFirstLetter from '../../utils/texts';
import { getAllAds, addAd } from '../../redux/actions/actions';
import categories from '../../utils/constants';
import { dateToTimestamp } from '../../utils/time';
import './styles.scss';

const AddAd = () => {
  const dispatch = useDispatch();

  const ads = useSelector((state) => state?.ads?.all);
  const lastId = Array.isArray(ads)
    ? Math.max(...ads.map((ad) => ad.id)) + 1
    : 0;

  useEffect(() => {
    if (ads.length === 0) dispatch(getAllAds());
  }, []);

  const [imageUrl, setImageUrl] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();
  const [validUntil, setValidUntil] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formResult = {
      id: lastId,
      image: imageUrl,
      external: externalUrl,
      rating,
      title,
      description,
      price,
      category,
      valid_until: validUntil,
    };
    dispatch(addAd(formResult));
  };

  return (
    <>
      <h1>New Add</h1>
      <form onSubmit={handleSubmit} className="new-add-form">
        <FormControl>
          <TextField
            className="new-add-form__field"
            margin="normal"
            required
            label="Image URL"
            id="outlined-disabled"
            onChange={({ target }) => setImageUrl(target?.value)}
          />
          <TextField
            margin="normal"
            required
            label="External Link"
            id="outlined-disabled"
            name="external-url"
            onChange={({ target }) => setExternalUrl(target?.value)}
          />
          <TextField
            margin="normal"
            required
            label="Title"
            name="title"
            id="outlined-disabled"
            onChange={({ target }) => setTitle(target?.value)}
          />
          <TextField
            margin="normal"
            required
            label="Description"
            multiline
            name="description"
            rows={4}
            id="outlined-disabled"
            onChange={({ target }) => setDescription(target?.value)}
          />
          <Typography sx={{ marginTop: '0.5em' }} component="legend">Rating</Typography>
          <Rating
            sx={{ marginBottom: '0.5em' }}
            name="simple-controlled"
            precision={1}
            defaultValue={5}
            value={rating}
            max={10}
            onChange={({ target }) => setRating(target?.value > 0 ? Number(target.value) : 1)}
          />
          <TextField
            margin="normal"
            type="number"
            required
            label="Price in $US"
            id="outlined-disabled"
            onChange={({ target }) => setPrice(target?.value)}
          />
          <FormLabel sx={{ margin: '1em 0em 0.5em 0em' }}>
            Category *
          </FormLabel>
          <RadioGroup
            aria-labelledby="Category"
            onChange={({ target }) => setCategory(target?.value)}
          >
            {categories.map((categoryOption) => (
              <FormControlLabel
                key={categoryOption}
                value={categoryOption}
                control={<Radio required />}
                label={capitalizeFirstLetter(categoryOption)}
              />
            ))}
          </RadioGroup>

          <TextField
            margin="normal"
            required
            id="date"
            label="Valid until"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={({ target }) => setValidUntil(() => dateToTimestamp(target?.value))}
          />
          <Button
            variant="contained"
            type="submit"
            size="large"
            endIcon={<SendIcon />}
            sx={{ margin: '1em 0em' }}
          >
            Add Ad
          </Button>

        </FormControl>
      </form>
    </>
  );
};

export default AddAd;
