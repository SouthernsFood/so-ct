import { useEffect, Fragment } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAll, reset } from '../../../state/features/events/eventSlice.js';
import Spinner from '../../Spinner.js';
import Stack from '@mui/material/Stack';
import EventItem from './EventItem.js';


const Events = () => {
  const dispatch = useDispatch();
  const { events, isLoading, isError, message } = useSelector((state) => state.events);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
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
        <Button onClick={() => dispatch(getAll())}>
          show all
        </Button>
        <p>—</p>
        <Button>new event</Button>
        <p>—</p>
        <Button>this week</Button>
        <p>—</p>
        <Button>reset schedule</Button>
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
