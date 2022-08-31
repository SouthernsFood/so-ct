import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import eventService from './eventService';

const initialState = {
  events: [],
  event: {},
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
export const getAllEvents = createAsyncThunk('events/getAllEvents', async (_, thunkAPI) => {
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

// Update event
export const updateEvents = createAsyncThunk('events/updateEvents', async (event, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await eventService.updateEvent(token, event);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Add new event
export const addNewEvent = createAsyncThunk('events/addNewEvent', async (event, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await eventService.addNewEvent(token, event);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});//.rejects;

// Delete event
export const deleteEvent = createAsyncThunk('events/delete', async (event, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await eventService.deleteEvent(token, event);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});//.rejects;


// //******* Event Schedule *******//
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

export const removeFromThisWeek = createAsyncThunk('events/removeFromThisWeek', async (event, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    const { thisWeek } = thunkAPI.getState().events;
    const { dayName } = event;
    thisWeek[dayName] = {};
    return await eventService.removeFromThisWeek(token, thisWeek);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  } 
});//.rejects;

// get this week events
export const getThisWeek = createAsyncThunk('events/getThisWeek', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await eventService.getThisWeek(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});//.rejects;

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
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = null;
      })
      .addCase(updateEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { events } = state;
        const { id, ...event } = action.payload;
        const index = events.findIndex((e) => e.id === id);
        events[index] = event;
        state.events = events;
      })
      .addCase(updateEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.event = null;
      })
      .addCase(addNewEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events.push(action.payload);
      })
      .addCase(addNewEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.event = null;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { events } = state;
        const { id } = action.payload;
        const index = events.findIndex((e) => e.id === id);
        events.splice(index, 1);
        state.events = events;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.event = null;
      });
    // .addCase(addToThisWeek.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(addToThisWeek.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.thisWeek = action.payload;
    // })
    // .addCase(addToThisWeek.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload;
    //   state.thisWeek = null;
    // });
  }
});

export const { reset, resetSchedule, setThisWeek, setEventObject } = eventSlice.actions;
export default eventSlice.reducer;
