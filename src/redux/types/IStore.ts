import { AnyAction, Dispatch } from 'redux';
import { Article } from '../../components/article/types';

export interface RootState {
  app: ArticleAppState;
}
export interface ArticleAppState{
  news: Article[]; selectedSection: string
}

export interface IStore {
  dispatch: Dispatch<AnyAction>;
  getState: () => RootState;
}
