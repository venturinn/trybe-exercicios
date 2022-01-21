import React from 'react';

import './App.css';
// import './Header.jsx'
import Header from './Header';
import Content from './Content.jsx';
import Footer from './Footer.jsx'
import { render } from '@testing-library/react';

class App extends React.Component {
  render() { 
  return (
    <div>
   < Header />
   < Content />
   < Footer />
    </div>
    );
  }
}

export default App;
