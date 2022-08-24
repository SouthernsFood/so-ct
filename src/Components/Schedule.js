import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
import EventModal from './EventModal';


const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const week = 'Aug 15 - Aug 21';

  const eventModalRef = useRef();
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => setOpen(true);
  const handleClose = () => setOpen(false);

  const dayProp = i => document.getElementsByTagName('h3')[i].innerHTML.split(':')[0];
      

  const { thisWeek } = useSelector((state) => state.events);
  // console.log(dayText);
  
  return (
    <div id='schedule' style={{ height: '91vh', border: '2px solid black' }}>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <EventModal thisWeek={thisWeek} handleClose={handleClose} ref={eventModalRef} />
      </Modal>
      <h1>Popup Schedule</h1>
      <h2>{week}</h2>
      <div id='schedule-container'>
        {days.map((day, index) => {
          return (
            <React.Fragment key={index}>
              {/* <Modal
                disableEnforceFocus
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <EventModal thisWeek={thisWeek} handleClose={handleClose} ref={eventModalRef} 
                  day={day} />
              </Modal> */}
              <h3>
                {day}:
                <Button
                  onClick={() => handleOpen(index)}
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
