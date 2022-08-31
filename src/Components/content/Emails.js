import { useSelector/*, useDispatch*/ } from 'react-redux';
// import { useEffect } from 'react';
// // import Button from '@mui/material/Button';
// import { toast } from 'react-toastify';
// import { getAllEmails, reset } from '../../state/features/mail/mailSlice.js';
import Spinner from '../../Components/Spinner.js';
import moment from 'moment';
import Stack from '@mui/material/Stack';

const Emails = () => {
  // const dispatch = useDispatch();
  const { inbox, isLoading, /*isError, isSuccess, message*/ } = useSelector((state) => state.mail);
  


  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }
  //   dispatch(reset());
  // } , [isError, isSuccess, message, dispatch]);;
  
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 style={{ marginTop: '-5vh' }}>Emails</h1>
      {/* {!inbox.length ? (
        <Button onClick={() => dispatch(getAllEmails())}>Load All Incoming mail</Button>
      ) : null} */}
      {inbox.length ? (
        inbox.map((mail) => (
          <Stack
            key={mail._id}
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
            <h3>{mail.name}</h3>
            <p>
              <a href={`tel:+1${mail.phone.replace(/\D/g, '')}`}>{mail.phone}</a> —{' '}
              <a href={`mailto:${mail.email}`}>{mail.email}</a>
            </p>
            <p>{mail.message}</p>
            <p>{moment(mail.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
          </Stack>
        ))
      ) : (
        <p>No mail loaded</p>
      )}
    </div>
  );
};

export default Emails;
