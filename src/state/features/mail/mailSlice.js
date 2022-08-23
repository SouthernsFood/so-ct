import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mailService from './mailService';

const initialState = {
  inbox: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get all mail
export const getAll = createAsyncThunk('mail/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await mailService.getAll(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});



export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.inbox = action.payload.contacts;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.inbox = null;
      });
  }
});

export const { reset } = mailSlice.actions;
export default mailSlice.reducer;