import React from 'react';
import Header from '../src/components/Header';
import Menu from './components/Menu/menu';
import Main from './components/Main';
import Footer from './components/Footer/footer';

function App() {
{/*
  functions Welcome(props) {
    return <span>{props.name}</span>;
  }

  class Welcome extends React.component {
    render() {
      return <span>{this.props.name}</span>
    }
  }
*/}

  const comment = {
    date: new Date(),
    text: "Hello",
    author: {
      name: 'Cesar',
      avatarUrl: 'https://placekitten.com/g/64/64"'
    }
  }

  return (
    <div>
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
      <h1>Tecnology & Programming!!!</h1>
    </div>
  );
}

export default App;
