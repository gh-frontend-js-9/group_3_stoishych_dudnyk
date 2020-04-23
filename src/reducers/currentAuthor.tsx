import { Reducer } from 'redux';
import { CurrentAuthorActions, CurrentAuthorActionsType } from '../actions/currentAuthor';
import { StateStatus } from '../interfaces/State';
import { Author } from '../interfaces/author';
import { loadState } from '../localStorage';

const currentAuthor = loadState('currentAuthor');

const initialState = {
  status: StateStatus.INIT,
  payload: currentAuthor,
};

export interface CurrentAuthorState {
    status?: string;
    payload?: Author;
}

export const currentAuthorReducer: Reducer<any, CurrentAuthorActionsType> = (state = initialState, action) => {
  switch (action.type) {
    case CurrentAuthorActions.SET_CURRENT_AUTHOR: {
      return {
        ...state,
        payload: action.payload,
      };
    }
    case CurrentAuthorActions.GET_CURRENT_AUTHOR_REQUESTED: {
      return {
        ...state,
        status: StateStatus.LOADING,
      };
    }
    case CurrentAuthorActions.GET_CURRENT_AUTHOR_SUCCEEDED: {
      return {
        ...state,
        status: StateStatus.LOADED,
        payload: action.payload,
      };
    }
    case CurrentAuthorActions.GET_CURRENT_AUTHOR_FAILED: {
      return {
        ...state,
        status: StateStatus.FAILED,
      };
    }
    default: return state;
  }
};
