import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner.js';
import Modal from '@mui/material/Modal';
import EditEvent from './EditEvent.js';
import AddToScheduleModal from './AddToScheduleModal.js';

const EventItem = ({ event }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const dispatch = useDispatch();
  const { events, thisWeek, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.events
  );

  const onAddToThisWeek = (event) => {};

  if (isError) {
    toast.error(message);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <EditEvent event={event} handleClose={handleCloseEdit} />
      </Modal>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <AddToScheduleModal event={event} handleClose={handleCloseAdd} />
      </Modal>
      <Stack
        spacing={1}
        style={{
          width: '90vw',
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
