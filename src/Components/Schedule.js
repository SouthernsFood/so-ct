import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
// import EventModal from './EventModal';
import { getThisWeek } from '../state/features/events/eventSlice.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import style from './util/modalStyle.js';
import Modal from '@mui/material/Modal';

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const week = 'Aug 15 - Aug 21';

  // const eventModalRef = useRef();
  const [event, setEvent] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const { thisWeek } = useSelector((state) => state.events);

  useEffect(() => {
    console.log(thisWeek);
    dispatch(getThisWeek());
  } , [dispatch, thisWeek]);


  return (
    <div id='schedule' style={{ height: '91vh', border: '2px solid black' }}>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>

        <Box sx={style} /*ref={ref}*/ tabIndex={-1}>
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
      </Modal>

      <h1>Popup Schedule</h1>
      <h2>{week}</h2>
      <div id='schedule-container'>
        {days.map((day, index) => {
          return (
            <React.Fragment key={index}>
              <h3>
                {day}:
                <Button
                  onClick={() => {
                    setEvent(thisWeek[day]);
                    handleOpen();
                  }}
                  disabled={thisWeek[day].venue ? false : true}>
                  {thisWeek[day].venue ? thisWeek[day].venue : 'OFF'}
                </Button>
              </h3>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;


// eslint-disable-next-line no-lone-blocks
{ /* <h3>
          Monday: <Button onClick={handleOpen}>Second Line Brewing</Button>
        </h3>
        <h3>Tuesday: Miel Brewery & Taproom</h3>
        <h3>Wednesday: 1515 1555 Poydras</h3>
        <h3>Thursday: Tulane School of Medicine</h3>
        <h3>Friday: Second Line Brewing</h3>
        <h3>Saturday: Tin Roof Brewing Co.</h3>
        <h3>&emsp;&emsp;Faubourg Beer</h3>
        <h3>Sunday: Miel Brewery & Taproom</h3> */ }
