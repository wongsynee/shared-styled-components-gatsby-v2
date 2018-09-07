import * as React from 'react';
import styled from "styled-components";
import Header from '../blocks/header';
import Main from '../blocks/main';
import Footer from '../blocks/footer';

const StaticApp = styled.div`
    background-color: #eca6f4;
    padding: 30px;
`

class IndexPage extends React.Component {
    render() {
        return (
            <StaticApp>
                <Header />
                <Main />
                <Footer />
            </StaticApp>
        );
    }
}

export default IndexPage;