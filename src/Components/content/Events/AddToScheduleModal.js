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
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const AddToScheduleModal = forwardRef(({ event, handleClose }, ref) => {
  const dispatch = useDispatch();
  const [dayName, setDayName] = useState('');
  const { thisWeek } = useSelector((state) => state.events);


  const features = useSelector((state) => state.menu.menu).filter((item) => item.featured);
  // console.log(features);

  // const featuresChecked=[];
  // console.log(featuresChecked);

  // const handleChange = (event) => {
  //   featuresChecked.push(event.target.value);
  // };


  const handleSubmit = () => {
    dispatch(setThisWeek({ ...thisWeek, [dayName]: event }));
    toast.success(`${event.venue} added to ${dayName}`);
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
        <RadioGroup onChange={(e) => setDayName(e.target.value)}>
          {days.map((day, index) => (
            <FormControlLabel
              key={+index + `${day}`}
              control={<Radio name='day-radio' value={day} />}
              label={day}
            />
          ))}
        </RadioGroup>
        {/* {dayName && (
          <>
            <Divider />
            <FormGroup >
              <FormLabel>Is there a Special? </FormLabel>

              {features.map((feature) => (
                <FormControlLabel onChange={handleChange} 
                  key={feature.id.toString().replace(/\s/g, '').replace(/\//g, '')}
                  control={<Checkbox name='feature-checkbox' value={feature.name} />}
                  label={feature.name}
                />
              ))}
              <FormControlLabel 
                control={<Checkbox defaultChecked name='feature-checkbox' value={null} />}
                label='None'
              />
            </FormGroup>
          </>
        )} */}

        <Button variant='contained' onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
});

export default AddToScheduleModal;
