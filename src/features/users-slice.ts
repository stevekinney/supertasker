import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import data from '../api/data.json';

type UsersState = {
  entities: User[];
};

const initialState: UsersState = {
  entities: data.users,
};

type DraftUser = RequireOnly<User, 'realName' | 'alterEgo'>;

const createUser = (draftUser: DraftUser): User => {
  return { id: nanoid(), tasks: [], ...draftUser };
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice;
