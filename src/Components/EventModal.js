import { forwardRef } from 'react';
import style from './util/modalStyle.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

const EventModal = forwardRef(({ event, handleClose}, ref) => {
 

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
        {event.venue}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {event.address}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        <a
          href={`https://www.instagram.com/${event.instagramHandle.slice(1)}`}
          target='_blank'
          rel='noreferrer'>
          {event.instagramHandle}
        </a>
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {event.start} - {event.end}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {event.image}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        {event.description}
      </Typography>
    </Box>
  );
});

export default EventModal;
