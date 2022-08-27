import { forwardRef } from 'react';
// import { useDispatch } from 'react-redux';
import style from '../../util/modalStyle';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';



const EditMenuItemModal = forwardRef(({handleClose, menuItem}, ref) => {
  console.log(menuItem);
  return (
    <Box sx={style} ref={ref} tabIndex={-1}>
      <CloseIcon
        onClick={handleClose}
        style={{
          marginLeft: '95%',
          cursor: 'pointer',
        }}
      />
      <Divider />
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Edit Menu Item
      </Typography>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        {menuItem.name}
      </Typography>
    </Box>
  );
});

export default EditMenuItemModal;