import React from 'react'
import {FlatList} from 'react-native';
import ArticleItem from './ArticleItem';
import {Article} from './types';

interface Props {
  articlesData: Article[];
}
interface ListItem {
  item: Article;
}
/**
 * The Article List component which is comprised of articles that are shown using the ArticleItem component
 */
const ArticleList: React.FC<Props> = ({articlesData}: Props) => {
  const renderItem = ({item}: ListItem): JSX.Element => (
    <ArticleItem article={item} />
  );
  return (
    <FlatList
      data={articlesData}
      renderItem={renderItem}
      keyExtractor={item => item.url}
    />
  );
};

export default ArticleList;
