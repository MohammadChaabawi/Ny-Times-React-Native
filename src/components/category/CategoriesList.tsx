import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import styled from 'styled-components/native';
import {SECTIONS} from '../../config';
import colors from '../../config/colors';
import {setSection} from '../../redux/actions/home';
import {RootState} from '../../redux/types/IStore';
import Category from './Category';
const Container = styled.View`
  height: 160px;
  background-color: ${colors.grey};
`;

const Title = styled.Text`
  font-size: 25px;
  text-align: left;
  margin-left: 15px;
  margin-top: 10px;
  font-weight: bold;
`;

interface Props {
  selectedSection: string;
  setSection: (section: string) => void;
}

interface Category {
  item: string;
}
/**
 * The Category List component which displays all the available article sections that the user can choose from
 */
const CategoryList: React.FC<Props> = ({
  selectedSection,
  setSection,
}: Props) => {
  const renderItem = ({item}: Category): JSX.Element => (
    <Category
      onPress={() => setSection && setSection(item)}
      category={item}
      selectedSection={selectedSection}
    />
  );
  return (
    <Container>
      <Title>Section</Title>
      <ScrollView horizontal>
        <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          numColumns={Math.ceil(SECTIONS.length / 2)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={SECTIONS}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      </ScrollView>
    </Container>
  );
};

interface ReduxProps {
  selectedSection: string;
}
const mapStateToProps = (state: RootState): ReduxProps => ({
  selectedSection: state.app.selectedSection,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSection: (section: string) => dispatch(setSection(section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
