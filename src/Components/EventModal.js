import { forwardRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import style from './util/modalStyle.js';
import Modal from '@mui/material/Modal';

const EventModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
    gh
    </div>
  );
});

export default EventModal;
