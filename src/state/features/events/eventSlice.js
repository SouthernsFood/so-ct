import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import eventService from './eventService';

const initialState = {
  events: [],
  thisWeek: {
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
    Sunday: {},
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get all events
export const getAll = createAsyncThunk('events/getAll', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await eventService.getAllEvents(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const addToThisWeek = createAsyncThunk('events/addToThisWeek', async (event, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const { thisWeek } = thunkAPI.getState().events;
    const { dayName } = event;
    thisWeek[dayName] = event;
    return await eventService.addToThisWeek(token, thisWeek);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    resetSchedule: (state) => {
      state.thisWeek = initialState.thisWeek;
    },
    setThisWeek: (state, action) => {
      state.thisWeek = action.payload;
      // console.log(action.payload);
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
        // state.message = action.payload.message;
        state.events = action.payload;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = null;
      });
    // .addCase(addToThisWeek.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(addToThisWeek.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    //   state.thisWeek = action.payload.thisWeek;
    //   console.log(state.thisWeek);
    // })
    // .addCase(addToThisWeek.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.thisWeek = null;
    // });
  }
});

export const { reset, resetSchedule, setThisWeek } = eventSlice.actions;
export default eventSlice.reducer;
