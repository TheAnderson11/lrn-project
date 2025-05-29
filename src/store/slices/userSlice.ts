import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IUserState } from '../../interfaces/IUser';

const storedUser = localStorage.getItem('user');
const parsedUser = storedUser ? JSON.parse(storedUser) : null;

const initialState: IUserState = {
  user: parsedUser?.user || null,
  token: parsedUser?.token || null,
};

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: state => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
