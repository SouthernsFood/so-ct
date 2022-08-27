import { forwardRef, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { getMenu, reset, addNew } from '../../../state/features/menu/menuSlice';


const NewItemModal = forwardRef(({handleClose}, ref) => {
  const dispatch = useDispatch();
  const [itemObject, setItemObject] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    allergens: '',
    featured: false,
  });
  console.log(itemObject);
  const handleSubmit = () => {
    try {
      dispatch(addNew(itemObject));
      toast.success('Menu item added');
      dispatch(getMenu());
      handleClose();
    }
    catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <Box sx={style} ref={ref} tabIndex={-1}>
      <CloseIcon onClick={handleClose} style={{ marginLeft: '95%', cursor: 'pointer' }} />
      <Divider />
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Add New Menu Item
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {Object.keys(itemObject)
          .map((key) => {
            if (key === 'id') return null;
            if (key === 'featured') {
              return (
                <Fragment key={key}>
                  <Box style={{ marginTop: '1rem' }}>
                    <FormControl component='fieldset'>
                      <FormLabel component='legend'>Featured</FormLabel>
                      <RadioGroup
                        row
                        aria-label='featured'
                        name='featured'
                        value={itemObject.featured}
                        onChange={(e) => setItemObject({ ...itemObject, [key]: e.target.value })}>
                        <FormControlLabel value='true' control={<Radio />} label='Yes' />
                        <FormControlLabel value='false' control={<Radio />} label='No' />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                </Fragment>
              );
            }
            return (
              <TextField
                style={{ margin: '10px', width: '95%', maxWidth: '1000px' }}
                key={key}
                id={key}
                label={key}
                value={itemObject[key]}
                onChange={(e) => setItemObject({ ...itemObject, [key]: e.target.value })}
              />
            );
          })}
        <Button variant='contained' color='primary' onClick={handleSubmit} style={{ marginTop: '1rem', width: '95%', maxWidth: '1000px' }}>
        Add New Menu Item
        </Button>
      </Box>
    </Box>
  );
});

export default NewItemModal;