import React, { useEffect, useState } from 'react'
import { getStore, setStore } from '../util/config';

const ModeToggle = () => {
  const modeDefault = getStore('theme');
  const body = document.body;
  const [mode, setMode] = useState(modeDefault);

  const handleModeChange = () => {
    if (mode === 'light') {
      setStore('theme', 'dark');
      setMode('dark')
      body.className = 'dark';
    } else {
      setMode('light')
      setStore('theme', 'light')
      body.className = 'light';
    }
  };

  useEffect(() => {
    //Kiểm tra giá trị null trước khi gán:
    const storedTheme = getStore('theme') || 'light';
    // Cách này đảm bảo rằng chỉ khi storedTheme có giá trị thì mới gán vào className
    if (storedTheme) {
      body.className = storedTheme;
    }
    setMode(storedTheme);
  }, [setMode])
  return (
    <button className='button-dark-light' onClick={handleModeChange}>
      {mode === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
    </button>
  );
};
export default ModeToggle