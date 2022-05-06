import React from 'react';

import {
    Container,
    ImageIndexs,
    ImageIndex,
    CarImageWrapper,
    CarImage
} from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
   return (
    <Container>
        <ImageIndexs>
            <ImageIndex active={false}/>
            <ImageIndex active={false}/>
            <ImageIndex active={true}/>
            <ImageIndex active={false}/>
        </ImageIndexs>

        <CarImageWrapper>
            <CarImage source={{uri: imagesUrl[0]}}
                resizeMode="contain"
            />
        </CarImageWrapper>
    </Container>
   );
}