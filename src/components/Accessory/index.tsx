import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Name
} from './styles';

interface Props {
    name: string;
    icon: React.FC<SvgProps>
}

export function Accessory({
    name,
    icon: Icon
}: Props) {
   return (
       <Container>
           <Icon width={20} height={20} />
           <Name>{name}</Name>
       </Container>
   );
}