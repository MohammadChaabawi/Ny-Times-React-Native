/**
 * Single location for Actions dispatched at `app` level
 */
import { IAction } from '../types/IAction';
import { Article } from '../../components/article/types';
/**
 * The dispatchable action types 
 */
export const ACTION_TYPES = {
  NEWS: {
    SET_NEWS: 'SET_NEWS',
    SET_SECTION: 'SET_SELECTED_SECTION'
  },
};

/**
 * The set news action for setting a set of articles into the global state
 */
export const setNews = (news: Article[]): IAction => ({
  type: ACTION_TYPES.NEWS.SET_NEWS,
  payload: news
});

/**
 * The set section action for setting the articles section type 
 */
export const setSection = (section: string): IAction => ({
  type: ACTION_TYPES.NEWS.SET_SECTION,
  payload: section
});