import { useState, useEffect, Fragment, useRef } from 'react';
import {getMenu} from '../../../state/features/menu/menuSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import NewItemModal from './NewItemModal.js';
import EditMenuItemModal from './EditMenuItemModal.js';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


const Menu = () => {
  const newItemRef = useRef();
  const [openNew, setOpenNew] = useState(false);
  const handleOpenNew = () => setOpenNew(true);
  const handleCloseNew = () => setOpenNew(false);

  const editItemRef = useRef();
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = (item) => {
    setMenuItem(item);
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const [menuItem, setMenuItem] = useState({});
  
  
  const dispatch = useDispatch();
  const { isLoading, isError, message, menu } = useSelector((state) => state.menu);
  // console.log(menu);
  
  useEffect(() => {
    dispatch(getMenu());
  },[dispatch]);





  return (
    <>
      <Modal //* New Item Modal
        ref={newItemRef}
        open={openNew}
        onClose={handleCloseNew}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <NewItemModal handleClose={handleCloseNew} />
      </Modal>
      <Modal //* Edit Item Modal
        ref={editItemRef}
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <EditMenuItemModal handleClose={handleCloseEdit} menuItem={menuItem} />
      </Modal>
      <div>
        <h1 style={{ marginTop: '-5vh' }}>Menu</h1>
        <Button onClick={handleOpenNew}> Add New Item </Button>
        <div style={{ marginTop: '1vh' }}>Click on an item to edit it.</div>

        { menu
          // .filter((item) => !item.featured)
          .map((item) => (
            <Stack
              key={item.id}
              onClick={() => handleOpenEdit(item)}
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
                maxWidth:
                window.innerWidth < 700 ? '98vw' : window.innerWidth < 1300 ? '80vw' : '98vw',
              }}>
              <div style={{ textDecoration: 'underline', marginTop: '2vh' }}>
                {item.name}
                {item.featured ? <span style={{ fontWeight: 'bold' }}> (special)</span> : null}
                <span> - ${item.price}</span>
              </div>
              <div>{item.description}</div>
            </Stack>
          )) }
      </div>
    </>
  );
};

export default Menu;
