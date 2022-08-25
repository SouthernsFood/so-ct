import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import { getThisWeek } from '../../../state/features/events/eventSlice.js';


const ThisWeekModal = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  // console.log(props);
  const schedule = useSelector((state) => state.events.thisWeek);

  useEffect(() => {
    dispatch(getThisWeek());
  } , [dispatch, schedule]);

  console.log(schedule);
  
  return (
    <Box sx={style} ref={ref} tabIndex={-1}>
      <CloseIcon
        onClick={props.handleClose}
        style={{
          marginLeft: '95%',
          cursor: 'pointer',
        }}
      />
      <Divider />
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        This Week's Schedule
      </Typography>

      {Object.keys(schedule)?.map((day) => (
        <Box
          key={day}
          style={{
            /*margin: '1rem',*/ padding: '1vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            variant='h6'
            component='h2'
            fontWeight={{ fontWeight: 'bold', textDecoration: 'underline' }}>
            {day}
          </Typography>
          {schedule[day].venue ? (
            <Typography
              variant='h6'
              component='h2'
              style={{ marginLeft: '1rem', color: '#000080' }}>
              {schedule[day].venue}
            </Typography>
          ) : (
            <Typography
              variant='h6'
              component='h2'
              style={{ marginLeft: '1rem', color: '#bfc1c2' }}>
              No Event
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
});

export default ThisWeekModal;
