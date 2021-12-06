import React from 'react';
import styled from 'styled-components/native';
import colors from '../../config/colors';

const CategoryContainer = styled.TouchableOpacity`
    height: 33px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border-color: ${(props: {isSelected: boolean}) => props.isSelected ? colors.blue : colors.darkgrey};
    border-width: 2px;
    margin-top: 10px;
    width: 130px;
    background-color: white;
    margin-left: 15px;
`

const CategoryTitle = styled.Text`
  font-size: 15px;
  text-align: left;
  font-weight: bold;
  color: ${(props: {isSelected: boolean}) => props.isSelected ? colors.blue : colors.darkgrey}
`;

interface Props {
  category: string;
  onPress: () => void;
  selectedSection:string
}

/**
 * The Category component which is used for showing the categories in the categories list
 */
const Category: React.FC<Props> = ({category, onPress, selectedSection}) => {
  const isSelected = selectedSection === category ? true : false
  return (
    <CategoryContainer isSelected={isSelected} onPress={onPress}>
        <CategoryTitle isSelected={isSelected}>
            {category}
        </CategoryTitle>
    </CategoryContainer>
  );
};

export default Category;
