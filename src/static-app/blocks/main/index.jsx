import * as React from 'react';
import H1 from '../../../shared-components/typography/h1';
import H2 from '../../../shared-components/typography/h2';
import H3 from '../../../shared-components/typography/h3';
import { MainStyled } from './styles';

const Main = (props) => {
    return(
        <MainStyled>
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
        </MainStyled>
    );
};

export default Main;