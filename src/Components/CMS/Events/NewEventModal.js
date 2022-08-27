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
import { getAll, addNew, reset } from '../../../state/features/events/eventSlice.js';

const NewEventModal = forwardRef(({ handleClose }, ref) => {

  const dispatch = useDispatch();
  const [newEventObject, setNewEventObject] = useState({
    id: '',
    venue: '',
    address: '',
    instagramHandle: '',
    day: '',
    start: '',
    end: '',
    image: '',
    description: '',
  });

  const handleSubmit = () => {
    try {
      dispatch(addNew(newEventObject));
      toast.success('Event added');
      dispatch(getAll());
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
      <Typography
        id='modal-modal-title'
        variant='h6'
        component='h2'
        style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        Add New Event
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {Object.keys(newEventObject).map(
          (key) =>
            key !== 'id' && (
              <Fragment key={key}>
                <TextField
                  style={{ margin: '10px', width: '95%', maxWidth: '1000px' }}
                  id={key}
                  label={key}
                  multiline={key === 'description'}
                  minRows={key === 'description' ? 3 : 1}
                  value={newEventObject[key]}
                  onChange={(e) => setNewEventObject({ ...newEventObject, [key]: e.target.value })}
                  // margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </Fragment>
            )
        )}
        <Button
          variant='contained'
          onClick={handleSubmit}
          style={{ marginTop: '1rem', width: '95%', maxWidth: '1000px' }}>
          Submit
        </Button>
      </div>
    </Box>
  );
});

export default NewEventModal;
