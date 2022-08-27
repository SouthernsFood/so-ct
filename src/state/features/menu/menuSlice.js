import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import menuService from './menuService';

const initialState = {
  menu: [],
  menuItem: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get all menu items
export const getMenu = createAsyncThunk('menu/getMenu', async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await menuService.getMenu(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Update menu item
export const update = createAsyncThunk('menu/update', async (menuItem, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await menuService.updateMenu(token, menuItem);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Add new menu item
export const addNew = createAsyncThunk('menu/addNew', async (menuItem, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await menuService.addNewMenuItem(token, menuItem);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete menu item
export const deleteItem = createAsyncThunk('menu/deleteItem', async (menuItem, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await menuService.deleteMenuItem(token, menuItem);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});//.rejects;


const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenu.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menu = action.payload;
      })
      .addCase(getMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.menu = [];
      })
      .addCase(update.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menuItem = action.payload;
      })
      .addCase(update.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.menuItem = {};
      })
      .addCase(addNew.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNew.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menuItem = action.payload;
      })
      .addCase(addNew.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.menuItem = {};
      })
      .addCase(deleteItem.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.menuItem = action.payload;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.menuItem = {};
      });
  }
});

export const { reset } = menuSlice.actions;
export default menuSlice.reducer;