import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@axios/api';

const initialState = {
  role: 'notLoggedIn',
  id: '',
  status: 'idle',
  messages: [],
};

export const fetchCurrentUser = createAsyncThunk('session/fetchCurrentUser', async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
});

export const registerUser = createAsyncThunk('session/registerUser', async (userData) => {
  try {
    const response = await api.post('/signup', userData);
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    }
    window.localStorage.setItem('jwt', `${response.data.accessToken}`);

    const response2 = await api.get('/user');
    return response2.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data.message));
  }
});

export const loginUser = createAsyncThunk('session/loginUser', async (userData) => {
  try {
    const response = await api.post('/login', userData);
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    }
    window.localStorage.setItem('jwt', `${response.data.accessToken}`);

    const response2 = await api.get('/user');
    return response2.data;
  } catch (error) {
    throw new Error(JSON.stringify(error.response.data.message));
  }
});

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.userId;
        state.role = action.payload.role;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = 'failed';
        state.messages = [{ message: action.error.message, type: 'error' }];
      })
      .addCase(registerUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.userId;
        state.role = action.payload.role;
        state.messages = [{ message: 'You have successfully registered.', type: 'success' }];
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.messages = JSON.parse(action.error.message).map((message) => {
          return { message, type: 'error' };
        });
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.id = action.payload.userId;
        state.role = action.payload.role;
        state.messages = [{ message: 'You have successfully logged in.', type: 'success' }];
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.messages = JSON.parse(action.error.message).map((message) => {
          return { message, type: 'error' };
        });
      });
  },
});

export default sessionSlice.reducer;
