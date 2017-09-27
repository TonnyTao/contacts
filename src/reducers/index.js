import {FETCH_CONTACTS, SEARCH_CONTACTS, SORT_CONTACTS, UPDATE_LIST, SHOW_BUSINESS_CARD, HIDE_BUSINESS_CARD, UPDATE_SPINNER} from '../constants/actionTypes';
import {ORDER_DEFAULT, ORDER_DESC, ORDER_ASC} from '../constants/orders';
import initialState from './initialState';

export default function reducer(state = initialState, action) {
  let newState;
  
  console.log(JSON.stringify(action), JSON.stringify(state.order))

  switch (action.type) {
    case UPDATE_LIST:
      newState = {...state, contacts: action.contacts};
      
      return newState;

    case SEARCH_CONTACTS:
      newState = {...state, target: action.target};
      
      return newState;

    case SORT_CONTACTS:
      newState = {...state, order: nextSortValue(state)};
      
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


function nextSortValue(state){
  const orders = [ORDER_DEFAULT, ORDER_ASC, ORDER_DESC];

  const index = orders.findIndex(x=>x==state.order);

  return orders[(index+1)%3];
}