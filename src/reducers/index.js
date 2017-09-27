import {FETCH_CONTACTS, SEARCH_CONTACTS, UPDATE_LIST, SHOW_BUSINESS_CARD, HIDE_BUSINESS_CARD, UPDATE_SPINNER} from '../constants/actionTypes';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  let newState;
  
  console.log(action.toString(), state)

  switch (action.type) {
    case UPDATE_LIST:
      newState = {...state, contacts: action.contacts};
      
      return newState;

    case SEARCH_CONTACTS:
      newState = {...state, target: action.target};
      
      return newState;

    case SHOW_BUSINESS_CARD:
      newState = {...state, selectedContact: action.selectedContact};
      
      return newState;

    case HIDE_BUSINESS_CARD:
      newState = {...state, selectedContact:{}}
      
      return newState;

    case UPDATE_SPINNER:
      newState = {...state, isLoading:action.isLoading}
      
      return newState;

    default:
      return state;
  }
}
