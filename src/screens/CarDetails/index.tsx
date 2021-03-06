import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';


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
    About,
    Acessories,
    Footer
} from './styles';

export function CarDetails() {
    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('Scheduling')   
    }
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
                <Acessories>
                    <Accessory name="380KM/h" icon={speedSvg}/>
                    <Accessory name="3.2s" icon={accelerationSvg}/>
                    <Accessory name="800 hp" icon={forceSvg}/>
                    <Accessory name="Gasolina" icon={gasolineSvg}/>
                    <Accessory name="Auto" icon={exchangeSvg}/>
                    <Accessory name="2 pessoas" icon={peopleSvg}/>
                </Acessories>

                <About>
                    Este ?? autom??vel desportivo. Surgiu do lend??rio 
                    touro de lide indultado na pra??a Real Maestranza de Sevilla. 
                    ?? um bel??ssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button 
                    title='Escolher per??odo do aluguel'
                    onPress={handleConfirmRental}
                />
            </Footer>
       </Container>
   );
}