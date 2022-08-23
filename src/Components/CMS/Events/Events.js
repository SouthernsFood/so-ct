import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAll, reset } from '../../../state/features/events/eventSlice.js';
import Spinner from '../../Spinner.js';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import EventItem from './EventItem.js';


const Events = () => {
  const dispatch = useDispatch();
  const { events, thisWeek, isLoading, isError, isSuccess, message } = useSelector((state) => state.events);
  // console.log({thisWeek});
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  // const resetSchedule = () => console.log('reset schedule clicked!');

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
        <Button onClick={(e) => {
          dispatch(getAll());
          console.log(e.target.firstChild.data);
        }}>show all</Button>
        <p>—</p>
        <Button>new event</Button>
        <p>—</p>
        <Button>this week</Button>
        <p>—</p>
        <Button >reset schedule</Button>
      </Stack>
      {
        events.length ? events.map(event => <EventItem key={event.id} event={event} />)
          : <p>No events loaded</p>
      }
    </>
  );
};

export default Events;
