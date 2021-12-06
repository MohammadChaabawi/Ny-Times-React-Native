import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import styled from 'styled-components/native';
import ArticleList from '../../components/article/ArticleList';
import {Article as ArticleType} from '../../components/article/types';
import ArticleFilters from '../../components/articleFilters/ArticleFilters';
import CategoriesList from '../../components/category/CategoriesList';
import colors from '../../config/colors';
import {setNews} from '../../redux/actions/home';
import {RootState} from '../../redux/types/IStore';
import {getPosts} from '../../services/API';

const HomeContainer = styled.View`
  height: 100%;
  background-color: ${colors.turquoise};
`;

interface ReduxProps {
  newsData: ArticleType[];
  selectedSection: string;
}

interface Props {
  newsData: ArticleType[];
  selectedSection: string;
  setNewsInRedux: (articlesData: ArticleType[]) => void;
}

/**
 * The main home component that is comprised of the core functional components.
 */
const Home: React.FC<Props> = ({
  newsData,
  selectedSection,
  setNewsInRedux,
}: Props) => {
  const [news, setNews] = useState([]);

  useEffect((): void => {
    getPosts(selectedSection).then((data: ArticleType[]): void => {
      setNewsInRedux(data);
    });
  }, [selectedSection]);

  useEffect((): void => {
    setNews(newsData);
  }, [newsData]);

  return (
    <HomeContainer>
      <CategoriesList />
      <ArticleFilters
        articlesData={newsData}
        selectedSection={selectedSection}
        setArticlesData={setNews}
      />
      <ArticleList articlesData={news} />
    </HomeContainer>
  );
};

/**
 * The global state properties that are passed as props to the home component
 */
const mapStateToProps = (state: RootState): ReduxProps => ({
  newsData: state.app.news,
  selectedSection: state.app.selectedSection,
});

/**
 * The global state actions that are passed as props to the home component
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setNewsInRedux: (news: ArticleType[]) => dispatch(setNews(news)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
