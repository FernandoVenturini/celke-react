import React from 'react';

import { Container, Conteudo, Footer, Header, Menu } from './styles';

function App() {
    return (
        <Container>
            <Header>
                <p>LOGO</p>
            </Header>
            
            <Menu>MENU</Menu>

            <Conteudo>
                <span>Listar Usuarios</span>
            </Conteudo>

            <Footer>
                <p>&copy. Todos os direitos reservados. 2025</p>
            </Footer>

        </Container>
    );
}

export default App;