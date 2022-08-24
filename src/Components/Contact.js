import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const Contact = () => {

  //* refactor code below
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formData = { name, phone, email, message };
  // const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('/api/mailer/send', data);
      console.log(response);
      if (response.status === 201) {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        toast.success(response.data);
      }
      return response;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
  const contactInfoForm = ['name', 'phone number', 'email', 'message'];

  return (
    <div id='contact' style={{ height: '90vh', border: '2px solid green' }}>
      <h1>Contact</h1>
      <div id='contact-form-container'>
        {contactInfoForm.map((field, i, arr) => (
          <FormControl
            key={`${field}-${i}`}
            style={{
              width: '100%',
              marginTop: '1rem',
              borderRadius: '5px',
            }}>
            <InputLabel htmlFor='component-outlined'>{field}</InputLabel>
            <OutlinedInput
              name={field}
              label={field}
              multiline={field === 'message' ? true : false}
              minRows={field === 'message' ? '4' : undefined}
              maxRows={field === 'message' ? '6' : undefined}
              onChange={(event) => {
                field === 'name'
                  ? setName(event.target.value)
                  : field === 'phone number'
                    ? setPhone(event.target.value)
                    : field === 'email'
                      ? setEmail(event.target.value)
                      : setMessage(event.target.value);
              }}
            />
            { field === 'email' ? (
              <FormHelperText>Please ensure the address is entered correctly</FormHelperText>
            ) : field === 'message' ? (
              <FormHelperText style={ message.length >= 500 ? { color: 'red' } : null }>
                {message.length ? `${message.length}/500` : null}</FormHelperText>
            ) : null }
          </FormControl>
        ))}
        <Box display='flex' justifyContent='center' alignItems='center' mt={2}>
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={() => handleSubmit(formData)}
            disabled={!name || !phone || !email || !message || message.length >= 500}>
            Send
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
