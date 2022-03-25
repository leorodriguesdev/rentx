import React from 'react';

import GasolineSvg from '../../assets/gasoline.svg';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Price,
    Rent,
    Period,
    Type,
    CarImage
} from './styles';

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    },
    thunbnail: string;
}
interface Pros {
    data: CarData;
}

export function Car({ data }: Pros) {
   return (
       <Container>
           <Details>
               <Brand>{data.brand}</Brand>
               <Name>{data.name}</Name>
               <About>
                   <Rent>
                       <Period>{data.rent.period}</Period>
                       <Price>{`R$ ${data.rent.price}`}</Price>
                   </Rent>

                   <Type>
                       <GasolineSvg/>
                   </Type>
               </About>
           </Details>

           <CarImage 
            source={{ uri: data.thunbnail }}
            resizeMode="contain"
           />

       </Container>
   );
}