import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Themes from './Components/themes';
import Nav from './Components/nav';
import ButtonPage from './Pages/button-page';
import InputTextPage from './Pages/Input-text-page';
import RadioButtonTogglePage from './Pages/radio-button-toggole-page';
import SelectInputPage from './Pages/select-input-page';
import TablePage from './Pages/table-page';
import TextAreaPage from './Pages/text-area-page';
import Home from './Pages/home';
import Demo from './Pages/demo';

function App() {
  const themes = ['#ffffff', '#f97316', '#fef9c3', '#ff0000', '#ecfdf5', '#f8fafc'];
  const [state, setState] = useState(false);
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setThemeStyle(currentTheme);
    console.log(currentTheme);
  }, [])
  const setThemeStyle = (theme) => {
    document.documentElement.style.setProperty('--bg-color', theme)
  }
  const setTheme = (e) => {
    const currentTheme = e.target.style.getPropertyValue('--bg-color');
    setThemeStyle(currentTheme)
    localStorage.setItem('theme', currentTheme);
  }
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <div className='row'>
          <div className='col-lg-12 p-0'>
            <Nav />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-8 mt-5'>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/demo" element={<Demo />} />
              <Route path="/button" element={<ButtonPage />} />
              <Route path="/input-text" element={<InputTextPage />} />
              <Route path="/radio-button" element={<RadioButtonTogglePage />} />
              <Route path="/select-input" element={<SelectInputPage />} />
              <Route path="/table" element={<TablePage />} />
              <Route path="/text-area" element={<TextAreaPage />} />
            </Routes>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={`theme-switcher ${state && 'theme-switcher--open'}`}>
              <button className='settings' onClick={() => setState(prevState => !prevState)}><i
                className="ri-settings-5-fill"></i></button>
              <h1 className='heading'>Choose Theme</h1>
              <div className='themes-list'>
                {themes.map((theme, i) =>
                  <Themes key={i} setTheme={setTheme} theme={theme} />)}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;