import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle login
export const login = createAsyncThunk(
  'auth/login',
  async (userCredentials, thunkAPI) => {
    const { email, password } = userCredentials;
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      return response.data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to login';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
