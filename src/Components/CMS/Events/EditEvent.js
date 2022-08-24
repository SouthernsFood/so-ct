import { forwardRef } from 'react';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';


const EditEvent = forwardRef((props, ref) => {
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
      <Typography id='modal-modal-title' variant='h6' component='h2' 
        style={{ marginBottom: '1rem', marginTop: '1rem'
        }}>
        Edit Event
      </Typography>
      {
        event && Object.keys(event).map((key) => (
          key !== 'id' && (
            <TextField
              style={{ margin: '10px', width: '95%' }}
              key={key}
              label={key}
              // margin='normal'
              value={event[key]}
              onChange={(e) => {
                event[key] = e.target.value;
              } }
            />
          )))
      }
      <Button variant='contained' onClick={() => {
        toast.success('Event updated');
        console.log('Button clicked!');
        handleClose();
      }}> Save Changes </Button>
      
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