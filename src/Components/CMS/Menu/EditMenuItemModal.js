import { forwardRef, useState, Fragment } from 'react';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { update, getMenu, reset } from '../../../state/features/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const EditMenuItemModal = forwardRef(({ handleClose, menuItem }, ref) => {
  const dispatch = useDispatch();

  const { id, name, description, price, image, allergens, featured } = menuItem;
  const [menuItemObject, setMenuItemObject] = useState({
    id,
    name,
    description,
    price,
    image,
    allergens,
    featured,
  });

  const handleSubmit = () => {
    try {
      dispatch(update(menuItemObject));
      toast.success('Menu item updated');
      dispatch(getMenu());
      handleClose();
    } catch (error) {
      toast.error(error.message);
    }
  };



  return (
    <Box sx={style} ref={ref} tabIndex={-1}>
      <CloseIcon
        onClick={handleClose}
        style={{
          marginLeft: '95%',
          cursor: 'pointer',
        }}
      />
      <Divider />
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Edit Menu Item
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          Object.keys(menuItem).map(key => {
            if (key === 'id' ) return null;
            if (key === 'featured') {
              return (
                <Fragment key={key}>
                  {/** position the radio div under the last text field */}
                  <Box >
                    <FormControl component='fieldset'>
                      <FormLabel component='legend'>Featured</FormLabel>
                      <RadioGroup row aria-label='featured' name='featured' value={menuItemObject.featured} onChange={(e) => setMenuItemObject({ ...menuItemObject, [key]: e.target.value })}>
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
                value={menuItemObject[key]}
                onChange={(e) => setMenuItemObject({ ...menuItemObject, [key]: e.target.value })}
              />
            );
          })
        }
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
      </Box>

    </Box>
  );
});

export default EditMenuItemModal;
