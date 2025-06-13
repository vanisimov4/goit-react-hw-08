import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations.js";
import { logOut } from "../auth/operations";
// import { selectNameFilter } from '../filters/selectors.js';

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contacts) => contacts.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

// Експортуємо редюсер слайсу
export default slice.reducer;

// export const selectContacts = state => state.contacts.items;

// export const selectLoading = state => state.contacts.loading;

// export const selectError = state => state.contacts.error;

// //  Оголошуємо селектор
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contList, searchValue) => {
//     //  Повертаємо результат обчислень
//     return contList.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
//     );
//   }
// );
