import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';


import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About
} from './styles';

export function CarDetails() {
   return (
       <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>
            <CarImages>
            <ImageSlider 
                    imagesUrl={['https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/profile.png']}
            />
        </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>FIAT</Brand>
                        <Name>UNO</Name>
                    </Description>
                    
                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 150</Price>
                    </Rent>
                </Details>
                <About>
                    Este é automóvel desportivo. Surgiu do lendário 
                    touro de lide indultado na praça Real Maestranza de Sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

       </Container>
   );
}