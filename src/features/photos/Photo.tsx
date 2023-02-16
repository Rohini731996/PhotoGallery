import React from 'react'
import { ThumbnailImageContainer, ThumbnailImage } from './styles';
import { ItemPressable } from './styles';


interface photoProps {
    photo: photo
    onClick: () => void
}

interface photo {
    id: number;
    avatarUrl: string,
    name: string,
    title: string,
    comment: string
}


const PhotoItem = (props: photoProps): React.ReactElement => {

    const { avatarUrl } = props?.photo || {}

    return (
        <ItemPressable onPress={props.onClick}>
            <ThumbnailImageContainer>
                <ThumbnailImage source={{ uri: avatarUrl }} />
            </ThumbnailImageContainer>
        </ItemPressable>
    )

}


export default PhotoItem;