import React from 'react';

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from "../../assets/logo.svg";

import { Car } from '../../components/Car';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent
} from './styles';

export function Home() {

    const carDataOne = {
        brand: 'Fiat',
        name: 'Uno',
        rent: {
            period: 'ao dia',
            price: 100
        },
        thunbnail: 'https://uno.fiat.com.br/content/dam/fiat/products/195/a4z/2/2021/page/profile.png'
    }
    const carDataTwo = {
        brand: 'Volkswagen',
        name: 'Voyage',
        rent: {
            period: 'ao dia',
            price: 150
        },
        thunbnail: 'https://importadora.ams3.digitaloceanspaces.com/2018/08/VoyageAutomtico.png'
    }

   return (
       <Container>
           <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent"
            translucent 
            />

           <Header>
           <HeaderContent>
               <Logo 
                width={RFValue(108)}
                height={RFValue(12)}
               />
            <TotalCars>
                Total de 12 carros
            </TotalCars>   
            </HeaderContent>       
            </Header>
            
            <Car data={carDataOne}/>
            <Car data={carDataTwo}/>

       </Container>
   );
}