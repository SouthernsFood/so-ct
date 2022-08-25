import { forwardRef, useState } from 'react';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { update, getAll } from '../../../state/features/events/eventSlice';
import { useDispatch } from 'react-redux';

const EditEvent = forwardRef(({ event, handleClose }, ref) => {
  const dispatch = useDispatch();
  // console.log(event);
  const { id, venue, address, day, start, end, instagramHandle, description, image } = event;
  const [eventObject, setEventObject] = useState({
    id,
    venue,
    address,
    instagramHandle,
    day,
    start,
    end,
    image,
    description,
  });
  // console.log(eventObject, event);

  const handleSubmit = () => {
    try {
      dispatch(update(eventObject));
      toast.success('Event updated');
      dispatch(getAll());
      handleClose();
    } catch (error) { 
      toast.error(error.message);
    }
  };


  style.overflowY = 'auto';
  // style.alignItems = 'center';
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
        Edit Event
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          event && Object.keys(eventObject).map(key =>
            key !== 'id' && (
              <TextField
                style={{ margin: '10px', width: '95%', maxWidth: '1000px'}}
                key={key}
                label={key}
                multiline={key === 'description'}
                minRows={key === 'description' ? 3 : 1}
                defaultValue={event[key]}
                onChange={(e) => {
                  setEventObject({ ...eventObject, [key]: e.target.value });
                }} />
            ))
        }
        <Button
          variant='contained'
          onClick={handleSubmit}>
          {' '}
        Save Changes{' '}
        </Button>
      </div>
    </Box>
  );
});

export default EditEvent;

/*

<TextField
        id='standard-basic'
        label='Event Description'
        defaultValue={event.description}
        margin='normal'
      />
      
      */