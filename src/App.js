
import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';
import Logo from './Icon/lexmeetBrandLogo.jpeg'
function App() {
  return (
    <DataProvider>

      <div className="App">
        <div className='appTitle'><img className="Logo" src={Logo} alt="Lexmeet Logo" /><span class="todoTitle">To-Do </span><span className="AppTitle" >App</span></div>

        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
