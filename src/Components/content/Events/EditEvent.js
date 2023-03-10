import { forwardRef, useState } from 'react';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { updateEvents, getAllEvents, setThisWeek } from '../../../state/features/events/eventSlice';
import { useDispatch, useSelector } from 'react-redux';



const EditEvent = forwardRef(({ event, handleClose }, ref) => {
  const dispatch = useDispatch();

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
  const { thisWeek } = useSelector((state) => state.events);

  const handleSubmit = () => {
    try {
      dispatch(updateEvents(eventObject));
      toast.success('Event updated');
      dispatch(getAllEvents());
      dispatch(setThisWeek({ ...thisWeek, [day]: eventObject }));
      handleClose();
    } catch (error) { 
      toast.error(error.message);
    }
  };


  style.overflowY = 'auto';

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

