import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      // console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// першим аргументом в createAsyncThunk передаємо назву дії, другим асинхронну функцію.
// У асинхронної функції першим аргументом ідуть дані(data), якщо вони передаються. Якщо ні, то _. Другим
// аргументом іде thunkAPI  об'єкт
