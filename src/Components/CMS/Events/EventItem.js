import { useState, useRef, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner.js';
import Modal from '@mui/material/Modal';
import EditEvent from './EditEvent.js';
import AddToScheduleModal from './AddToScheduleModal.js';
import { reset } from '../../../state/features/events/eventSlice.js';

const EventItem = ({ event }) => {
  const editModalRef = useRef();
  const addToScheduleModalRef = useRef();

  // const [eventobj, setEventobj] = useState({});

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => {
    // setEventobj(event);  
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const dispatch = useDispatch();
  const { /*events, thisWeek, isSuccess,*/ isLoading, isError, message } = useSelector(
    state => state.events);

  // const onAddToThisWeek = (event) => {};
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Modal //* Edit Event Modal
        ref={editModalRef}
        open={openEdit}
        onClose={handleCloseEdit}
        // eventobj={eventobj}
        event={event}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <EditEvent event={event} handleClose={handleCloseEdit} />
      </Modal>
      <Modal //* Add to Schedule Modal
        ref={addToScheduleModalRef}
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <AddToScheduleModal event={event} handleClose={handleCloseAdd} />
      </Modal>
      <Stack
        spacing={1}
        style={{
          width: window.innerWidth < 700 ? '97vw' : '95vw',
          margin: 'auto',
          marginTop: '2vh',
          border: 'solid 2px black',
          borderRadius: '8px',
          paddingRight: '1vh',
          paddingLeft: '1vh',
          paddingBottom: '1vh',
        }}>
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
          <Button onClick={handleOpenEdit}>edit</Button>
          <p style={{ margin: '0' }}>—</p>
          <Button onClick={handleOpenAdd}>add to this week</Button>
        </Stack>
        <h3>{event.venue}</h3>
        <p>
          {event.day} / {event.start}- {event.end}
        </p>
        <p>{event.address}</p>
      </Stack>
    </>
  );
};

export default EventItem;
