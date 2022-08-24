import { forwardRef } from 'react';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

const EditEvent = forwardRef((props, ref) => {
  console.log(props);
  const { event, handleClose } = props;

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
    </Box>
  );
});

export default EditEvent;