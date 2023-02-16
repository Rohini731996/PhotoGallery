import { Dimensions} from "react-native";
import styled from "styled-components/native";
const deviceWidth = Dimensions.get('screen').width;

export const PhotoModal = styled.View`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
background-color: rgba(0, 0, 0, 0.5);
`;


export const Container = styled.View`
background-color: #fff;
display:flex;
padding-bottom:150px;
`;

export const ModalContainer = styled.View`
top: 50px;
align-self:center
`;

export const FullSizePhoto = styled.Image`
width: 400px;
height: 400px;
`;

export const CommentsContainer = styled.View`
bottom: 0;
left: 0;
right: 0;
background-color: #fff;
padding: 10px;
width: 400px;
`;

export const Comments = styled.Text`
font-size: 20px;
`;

export const CommentInput = styled.TextInput`
width: 100%;
height: 50px;
border-width: 1px;
border-color: #000;
padding: 10px;
margin-bottom: 10px;
`;

export const FlatListContainer = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))``;

export const Button = styled.Pressable`
align-items: center;
    justify-content: center;
    padding-vertical: 8px;
    padding-horizontal: 24px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: rgba(197, 197, 300, 0.9)
`;

export const Pressable = styled.Pressable`
  background-color: hsl(0, 0%, 95%);
`



export const ThumbnailImageContainer = styled.View`
margin: 8px;
padding: 10px;
shadow-color: #000;
shadow-offset: {
    width: 0;
    height: 1
};
shadow-opacity: 0.35;
shadow-radius: 5px;
elevation: 5;
border-radius: 5px;
background-color: #ffff
`;


export const ThumbnailImage = styled.Image`
height: ${deviceWidth*0.2}px;
width: ${deviceWidth*0.22}px
`;

export const AuthorTitle = styled.Text`
text-align: center
`;

export const ItemPressable = styled.Pressable``