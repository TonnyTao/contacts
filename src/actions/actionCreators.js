import * as types from '../constants/actionTypes';

export function updateList(contacts=[], target="") {
  return {
    type: types.UPDATE_LIST,
    target,
    contacts
  }
}

export function showSpinner() {
  return {
    type: types.UPDATE_SPINNER,
    isLoading: true,
  }
}

export function hideSpinner() {
  return {
    type: types.UPDATE_SPINNER,
    isLoading: false,
  }
}

//Drived by User Events

export function filterList(target="") {
  return {
    type: types.SEARCH_CONTACTS,
    target
  }
}

export function sortList() {
  return {
    type: types.SORT_CONTACTS
  };
}


export function showBusinessCard(selectedContact) {
  return {
    type: types.SHOW_BUSINESS_CARD,
    selectedContact
  };
}

export function hideBusinessCard() {
  return {
    type: types.HIDE_BUSINESS_CARD
  };
}
