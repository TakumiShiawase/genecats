import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './App.css';
import CatImg from './cat.jpg'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const value = 1; // Известное значение, которое должно быть заполнено
  const fillWidth = `${value * 50}%`;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300); // Обновляем каждые 300 миллисекунд

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="game_page">
          <div className='game_view'>GeneCate's</div>
          <img className='cat_avatar' src={CatImg}/>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      ) : (
        <div className="game_page">
          <div className='welcome_view'>Welcome to GENECATE'S!</div>
          <div className='info_block'>Invite friends to receive early bird bonuses once the game is released. Early bird bonuses can only be obtained at this moment, while the game has not yet been released. Our team values those who are with us at this early stage</div>
          <img className='cat_avatar' src={CatImg}/>
          <div className="progress-bar_lvl">
          <div className="progress" style={{ width: fillWidth }}>
          <span className="progress-text">Level {value}</span>
          </div>
        </div>
        <div className='lvl_info_block'>Number of invited friends: 1 out of 2 at level 2.</div>
        <div className='referal_block'>
        <div className='referal_info'>Referral link</div>
        <button className='ref_button'><svg role="img" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" aria-labelledby="copyIconTitle" stroke="#0F5272" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#0F5272"> <title id="copyIconTitle">Copy</title> <rect width="12" height="14" x="8" y="7"/> <polyline points="16 3 4 3 4 17"/> </svg></button>
        <button className='invite_button'>Invite</button>
        </div>
        <div className='bonus_block'>Additional bonuses</div>
        </div>
      )}
    </div>
  );
}



export default App;
