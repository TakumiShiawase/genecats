import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Phaser from 'phaser';
import './App.css';
import Loading from './asset/loading/loading.png';
import ForestMoggy from './asset/landing/forest_moggy_1.png'
import Flask from './asset/welcome/Flask.png';
import Gems from './asset/welcome/Gems.png';
import Heart from './asset/welcome/Heart.png';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/welcome' element={ <Welcome />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const value = 0; // Известное значение, которое должно быть заполнено
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
          <div className='game_view'>GeneCats</div>
          <img className='cat_avatar' src={Loading}/>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className='loading_view'>loading...</div>
        </div>
      ) : (
        <div className="game_page">
          <div className='landing_view'>GeneCats</div>
          <div className='info_block'>Invite friends to receive initial bonuses before the game is released. The initial bonus is available only to players who join before the project launches, as a token of appreciation for their support.</div>
          <div className='current_view'>Current Bonuses:</div>
          <div className='cat_lvl_container'>          
            <img className='cat_lvl' src={ForestMoggy} />
            <div className='cat_name'>Forest moggy Cat<br/>(Common)</div>
          </div>
          <div className="progress-bar_lvl">
          <div className="progress" style={{ width: fillWidth }}>
          <span className="progress-text">Level {value}</span>
          </div>
        </div>
        <div className='lvl_info_block'>Invite 1 more friend for more gifts</div>
        <div className='referal_block'>
        <div className='referal_info'>GeneCats?start=Anus</div>
        <button className='ref_button'><svg role="img" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24" aria-labelledby="copyIconTitle" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#0F5272"> <title id="copyIconTitle">Copy</title> <rect width="12" height="14" x="8" y="7"/> <polyline points="16 3 4 3 4 17"/> </svg></button>
        <button className='invite_button'>Invite</button>
        </div>
        </div>
      )}
    </div>
  );
}

const Welcome = () => {
  return(
    <div className="game_page">
      <div className='welcome_view'>Welcome<br/>to<br/>GeneCats</div>
      <div className='welcome_info'>Please, choose the fraction You want to join:</div>
      <div className='fraction'>
      <div className='fraction_item'>
        <img className='fraction_icon_flask' src={Flask}/>
        <div className='fraction_text'>Alchemists</div>
      </div>
      <div className='fraction_item'>
        <img className='fraction_icon' src={Gems}/>
        <div className='fraction_text'>Jewelers</div>
      </div>
      <div className='fraction_item'>
        <img className='fraction_icon' src={Heart}/>
        <div className='fraction_text'>Knights</div>
      </div>
      </div>
      <div className='welcome_info_2'>Caution! This choice is given once and forever</div>
    </div>
  )
}




export default App;
