// import { forwardRef, useState } from 'react';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
// import Divider from '@mui/material/Divider';
// import style from './util/modalStyle.js';
// import Modal from '@mui/material/Modal';

// const EventModal = forwardRef((props, ref) => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   // const { thisWeek, handleClose } = props;
//   console.log(props);
//   return (
//     <Modal
//       disableEnforceFocus
//       open={open}
//       onClose={handleClose}
//       aria-labelledby='modal-modal-title'
//       aria-describedby='modal-modal-description'>

//       <Box sx={style} ref={ref} tabIndex={-1}>
//         <CloseIcon
//           onClick={handleClose}
//           style={{
//             marginLeft: '95%',
//             cursor: 'pointer',
//           }}
//         />
//         <Divider />
//         <Typography id='modal-modal-title' variant='h6' component='h2'>
//         hello world 
//         </Typography>
//         <Typography id='modal-modal-description' sx={{ mt: 2 }}>
//         hello world
//         </Typography>
//       </Box>
//     </Modal>
//   );
// });

// export default EventModal;
