import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import style from './util/modalStyle.js';

const EventModal = forwardRef((props, ref) => {
  const { thisWeek, handleClose } = props;
  console.log(props);
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
        hello world {}
      </Typography>
      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        hello world
      </Typography>
    </Box>
  );
});

export default EventModal;
