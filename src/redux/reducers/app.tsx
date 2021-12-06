import { IAction } from '../types/IAction';
import { ACTION_TYPES } from '../actions/home';
import { DEFAULT_SECTION } from '../../config';

const initialState = {
  news: [{}],
  selectedSection:DEFAULT_SECTION,
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACTION_TYPES.NEWS.SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
      case ACTION_TYPES.NEWS.SET_SECTION:
      return {
        ...state,
        selectedSection: action.payload,
      };
    default:
      return state;
  }
};
