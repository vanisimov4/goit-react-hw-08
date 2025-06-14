import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors.js';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

//  Оголошуємо селектор
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contList, searchValue) => {
    //  Повертаємо результат обчислень
    return contList.filter(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        contact.number.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
);
