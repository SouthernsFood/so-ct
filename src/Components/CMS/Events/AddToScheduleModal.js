import { useState, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { setThisWeek } from '../../../state/features/events/eventSlice.js';
import { toast } from 'react-toastify';


const AddToScheduleModal = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { event, handleClose } = props;
  const [dayName, setDayName] = useState('');
  const { thisWeek } = useSelector((state) => state.events);
  console.log(thisWeek);
  
  const handleSubmit = () => {
    dispatch(setThisWeek({ ...thisWeek, [dayName]: event }));
    toast.success('Event added to this week\'s schedule');
    handleClose();
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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
        Add to Schedule
      </Typography>
      <FormControl>
        <FormLabel>Select one</FormLabel>
        <RadioGroup /*value={value}*/ onChange={(e) => setDayName(e.target.value)}>
          {days.map((day, index) => (
            <FormControlLabel
              key={+index + `${day}`}
              // value={day}
              control={<Radio name='day-radio' value={day} />}
              label={day}
            />
          ))}
        </RadioGroup>
        <Button variant='contained' onClick={() => handleSubmit()}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
});

export default AddToScheduleModal;
