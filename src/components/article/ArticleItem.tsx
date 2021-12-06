import React from 'react';
import styled from 'styled-components/native';
import {Article} from './types';

const ArticleContainer = styled.View`
  height: 130px;
  border-radius: 8px;
  width: 95%;
  margin: 5px;
  align-self: center;
  background-color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;
const NewsInfoContainer = styled.View`
  height: 110px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 10px;
  background-color: white;
  margin-horizontal: 12px;
  flex: 1;
`;

const ArticleDataWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
  align-self: flex-start;
  background-color: white;
  flex: 1;
`;

const ArticleTitle = styled.Text`
  font-size: 14px;
  text-align: left;
  font-weight: bold;
  justify-content: flex-start;
`;

const ArticleBy = styled.Text`
  font-size: 10px;
  text-align: left;
  font-weight: bold;
  margin-top: 8px;
  justify-content: flex-start;
`;
const ArticleTimeAgo = styled.Text`
  font-size: 12px;
  text-align: left;
  font-weight: bold;

  justify-content: flex-start;
`;

const Image = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 4px;
  margin-left: 10px;
`;
interface Props {
  article: Article;
}

/**
 * The Article Item component which represents each article element in the list of articles
 */
const ArticleItem: React.FC<Props> = ({article}: Props) => {
  return (
    <ArticleContainer>
      <Image
        source={
          article?.multimedia && article?.multimedia[0]?.url
            ? {uri: article?.multimedia[0]?.url}
            : require('./../../assets/images/no-image.png')
        }
      />
      <NewsInfoContainer>
        <ArticleTitle>{article?.title}</ArticleTitle>
        <ArticleDataWrapper>
          <ArticleBy>{article?.byline}</ArticleBy>
          <ArticleTimeAgo>{article?.byline}</ArticleTimeAgo>
        </ArticleDataWrapper>
      </NewsInfoContainer>
    </ArticleContainer>
  );
};

export default ArticleItem;
