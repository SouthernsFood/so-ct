import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getThisWeek } from '../state/features/events/eventSlice.js';
import Modal from '@mui/material/Modal';
import EventModal from './EventModal.js';
const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
    <div id='schedule' style={{ height: '91vh', /*border: '2px solid black'*/ }}>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <EventModal event={event} handleClose={handleClose} />
      </Modal>

      <h1>Popup Schedule</h1>
      {/* <h2>{week}</h2> */}
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
                  disabled={!thisWeek[day].venue/* ? false : true*/}>
                  {thisWeek[day].venue ? thisWeek[day].venue : 'No Event Today'}      
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
