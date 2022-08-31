import { useState, useEffect, Fragment, useRef } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllEvents, reset, resetSchedule } from '../../../state/features/events/eventSlice.js';
import Spinner from '../../Spinner.js';
import Stack from '@mui/material/Stack';
import EventItem from './EventItem.js';
import Modal from '@mui/material/Modal';
import NewEventModal from './NewEventModal.js';
import ThisWeekModal from './ThisWeekModal.js';


const Events = () => {
  const newModalRef = useRef();
  const [openNew, setOpenNew] = useState(false);
  const handleOpenNew = () => setOpenNew(true);
  const handleCloseNew = () => setOpenNew(false);

  const thisWeekModalRef = useRef();
  const [openThisWeek, setOpenThisWeek] = useState(false);
  const handleOpenThisWeek = () => setOpenThisWeek(true);
  const handleCloseThisWeek = () => setOpenThisWeek(false);

  const dispatch = useDispatch();
  const { events, isLoading, isError, message } = useSelector((state) => state.events);
  console.log(events);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  const confirmReset = () => {
    if (window.confirm('Are you sure you want to reset the schedule?')) {
      dispatch(resetSchedule());
      toast.success('Schedule reset');
    }
  };

  return (
    <>
      <Modal //* New Event Modal
        ref={newModalRef}
        open={openNew}
        onClose={handleCloseNew}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <NewEventModal handleClose={handleCloseNew} />
      </Modal>
      <Modal //* This Week Modal
        ref={thisWeekModalRef}
        open={openThisWeek}
        onClose={handleCloseThisWeek}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <ThisWeekModal handleClose={handleCloseThisWeek} />
      </Modal>
      <h1 style={{ marginTop: '-5vh' }}>Events</h1>
      <Stack
        direction='row'
        spacing={1}
        style={{
          paddingLeft: '5vw',
          paddingRight: '5vw',
          margin: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button onClick={() => dispatch(getAllEvents())}>
          show all
        </Button>
        <p>—</p>
        <Button onClick={handleOpenNew}>new event</Button>
        <p>—</p>
        <Button onClick={handleOpenThisWeek}>this week</Button>
        <p>—</p>
        <Button
          onClick={confirmReset}>reset schedule</Button>
      </Stack>
      {
        events.length ? events.map(event => (
          <Fragment key={event.id}>
            <EventItem event={event} />
          </Fragment>))
          : <p>No events loaded</p>
      }
    </>
  );
};

export default Events;
