import Tabs from './../components/Tabs/Tabs';
import Input from './../input/Input';
import Select from './../components/Select/select';
import Posts from './../posts/posts';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ModeContext } from '../components/mode/ModeCss';
import '../App.css';
import ModeButton from './../components/mode/ModeButton';

export default function HomePage () {

      // for dark/light theme
      const [mode, setMode] = useState('light');
      function onChangeMode () {
        setMode(mode === 'light' ? 'dark' : 'light')
      }
      

      // for Tabs
      const options = [{ label: 'Tab one', value: '1' },
      { label: 'Tab two', value: '2' },
      { label: 'Tab three', value: '3' }]
    

      return (
        <ModeContext.Provider value={{mode, setMode: onChangeMode}}>
        <div id="app" className={`${mode} color-mode-${mode}`}>
          
          <ModeButton />
            <Link to="/about" className='aboutButton'><p className={`color-mode-${mode}`}>О нас</p></Link>
            <Input />
            <Tabs options={options} />
            <Select />
            <Posts />
        </div>
        </ModeContext.Provider>
      );
    }