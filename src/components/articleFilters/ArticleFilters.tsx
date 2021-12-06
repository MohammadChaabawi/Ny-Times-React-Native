import React, {useCallback, useEffect, useRef, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styled from 'styled-components/native';
import colors from '../../config/colors';
import {
  filterArticlesByKeyword,
  filterArticlesByLocation,
  getKeywords,
  getLocations,
} from '../../containers/home/helpers';
import {Article} from '../article/types';

const Container = styled.View`
  height: 70px;
  background-color: ${colors.lightblue};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const DropDownWrapper = styled.View`
  flex: 1;
  margin-left: 5px;
`;

interface Props {
  articlesData: Article[];
  setArticlesData: (articlesData: Article[]) => void;
  selectedSection: string;
}

/**
 * The Filters component which allows the user to filter articles by a keyword or location
 */
const ArticleFilters: React.FC<Props> = ({
  articlesData,
  setArticlesData,
  selectedSection,
}: Props) => {
  const [locations, setLocations] = useState([]);
  const [keywords, setKeywords] = useState([]);

  const dropDownLocationsRef = useRef<any>({});
  const dropDownKeywordsRef = useRef<any>({});

  const filterByKeyword = useCallback(
    (selectedItem: string, index: number): void => {
      let filteredArticles = filterArticlesByKeyword(
        articlesData,
        selectedItem,
      );
      setArticlesData(filteredArticles);
    },
    [articlesData],
  );
  const filterByLocation = useCallback(
    (selectedItem: string, index: number): void => {
      let filteredArticles = filterArticlesByLocation(
        articlesData,
        selectedItem,
      );
      setArticlesData(filteredArticles);
    },
    [articlesData],
  );

  useEffect(() => {
    getLocations(selectedSection).then((data: String[]): void => {
      setLocations(data);
    });
    getKeywords(selectedSection).then((data: String[]): void => {
      setKeywords(data);
    });
    dropDownKeywordsRef?.current?.reset();
    dropDownLocationsRef?.current?.reset();
  }, [selectedSection]);
  return (
    <Container>
      <DropDownWrapper>
        <SelectDropdown
          ref={dropDownLocationsRef}
          defaultButtonText={'LOCATION'}
          buttonStyle={{width: '100%'}}
          data={locations}
          onSelect={filterByLocation}
          buttonTextAfterSelection={(selectedItem: string, index: number) => {
            return selectedItem;
          }}
          rowTextForSelection={(item: string, index: number) => {
            return item;
          }}
        />
      </DropDownWrapper>
      <DropDownWrapper>
        <SelectDropdown
          ref={dropDownKeywordsRef}
          defaultButtonText={'KEYWORD'}
          buttonStyle={{width: '100%'}}
          data={keywords}
          onSelect={filterByKeyword}
          buttonTextAfterSelection={(
            selectedItem: string,
            index: number,
          ): string => {
            return selectedItem;
          }}
          rowTextForSelection={(item: string, index: number): string => {
            return item;
          }}
        />
      </DropDownWrapper>
    </Container>
  );
};

export default ArticleFilters;
