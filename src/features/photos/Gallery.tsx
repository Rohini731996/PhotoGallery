import React, { useState } from 'react';
import PhotoItem from './Photo';
import {
    ButtonText, CommentInput,
    Comments, CommentsContainer,
    Container, FlatListContainer,
    FullSizePhoto, ModalContainer,
    PhotoModal, Button, ErrorText,
    LoadingText
} from './styles';
import { AntDesign } from '@expo/vector-icons';
import { useFetchUserPhotosQuery, useUpdateCommentMutation } from '../../services/photoApi';


const Gallery: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [comment, setComment] = useState('');
    const [hideInput, setHideInputBox] = useState(false);

    const { data: userData, error, isLoading: isFetchPhotosLoading } = useFetchUserPhotosQuery('1');
    const [updateComment, { isLoading: isUpdateCommentLoading }] = useUpdateCommentMutation()
    const photos = userData?.users


    const handleThumbnailPress = (photo: React.SetStateAction<null>) => {
        setSelectedPhoto(photo);
        setComment(photo?.comment)
        setHideInputBox(photo?.comment!=='')
    };
    const handleModalClose = () => {
        setSelectedPhoto(null);
    };

    const handleCommentEdit = () => {
        setHideInputBox(false);
    };

    const handleCommentDelete = () => {
        setComment('');
        setHideInputBox(false);
        let payload = { id: selectedPhoto?.id, comment: '' }
        updateComment(payload)
    };

    const handleCommentChange = (text: string) => {
        setComment(text);
    };
    const handleSaveComment = () => {
        setHideInputBox(true);
        let payload = { id: selectedPhoto?.id, comment: comment }
        updateComment(payload)
        setSelectedPhoto(null);
    };

    return (
        <Container>
            {error ? (
                <ErrorText>Oh no, there was an error !!</ErrorText>
            ) : isFetchPhotosLoading ? (
                <LoadingText>Loading...</LoadingText>
            ) : userData ? (
                <>
                    <FlatListContainer
                        data={photos}
                        numColumns={3}
                        removeClippedSubviews={true}
                        onEndReachedThreshold={0.9}
                        keyExtractor={(item, index) => `item-${item}-${index}`}
                        renderItem={({ item }) => <PhotoItem photo={item} onClick={() => handleThumbnailPress(item)} />}
                    />
                    {selectedPhoto && (
                        <PhotoModal>
                            <ModalContainer>
                                <AntDesign name="close" size={40}
                                    color="white"
                                    onPress={handleModalClose}
                                />
                                <FullSizePhoto source={{ uri: selectedPhoto.avatarUrl }} />

                                <CommentsContainer>
                                    {!selectedPhoto?.comment || !hideInput ? <>
                                        <CommentInput
                                            value={comment}
                                            maxLength={50}
                                            onChangeText={handleCommentChange}
                                            placeholder="Add a comment"
                                        />
                                        <Button onPress={handleSaveComment} >
                                            <ButtonText>Save</ButtonText>
                                        </Button>
                                    </>
                                        :
                                        <Comments>{selectedPhoto?.comment}</Comments>
                                    }
                                    <Button onPress={handleCommentEdit}>
                                        <ButtonText>Edit</ButtonText>
                                    </Button>
                                    <Button onPress={handleCommentDelete} >
                                        <ButtonText>Delete</ButtonText>
                                    </Button>
                                </CommentsContainer>
                            </ModalContainer>
                        </PhotoModal>

                    )}

                </>
            ) : null}

        </Container>
    );
};

export default Gallery;




