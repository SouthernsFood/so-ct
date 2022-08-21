import React, { useState } from 'react';
import Button from '@mui/material/Button';
// import ScheduleItemModal from './ScheduleItemModal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -45%)',
  // width: 400,
  width: '100%',
  height: '93vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const week = 'Aug 15 - Aug 21';

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div id='schedule' style={{ height: '91vh', border: '2px solid black' }}>
      {/* <ScheduleItemModal open={open} handleClose={handleClose} /> */}
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box sx={style}>
            <CloseIcon onClick={handleClose} />
            <Divider />
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <h1>Popup Schedule</h1>
      <h2>{week}</h2>
      <div id='schedule-container'>
        {days.map((day, index) => (
          <React.Fragment key={index}>
            <h3>{day}: 
            <Button onClick={handleOpen}>Open Modal</Button>
            </h3>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;


// eslint-disable-next-line no-lone-blocks
{/* <h3>
          Monday: <Button onClick={handleOpen}>Second Line Brewing</Button>
        </h3>
        <h3>Tuesday: Miel Brewery & Taproom</h3>
        <h3>Wednesday: 1515 1555 Poydras</h3>
        <h3>Thursday: Tulane School of Medicine</h3>
        <h3>Friday: Second Line Brewing</h3>
        <h3>Saturday: Tin Roof Brewing Co.</h3>
        <h3>&emsp;&emsp;Faubourg Beer</h3>
        <h3>Sunday: Miel Brewery & Taproom</h3> */}