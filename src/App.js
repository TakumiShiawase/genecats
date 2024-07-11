import React, { useState, useEffect, useRef, Component  } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Loading from './asset/loading/loading.png';
import Lvl_0 from './asset/landing/forest_moggy_1.png';
import Info from './asset/landing/info.png';
import Lvl_1 from './asset/landing/lvl_1.png';
import Lvl_2 from './asset/landing/lvl_2.png';
import Lvl_3 from './asset/landing/lvl_3.png';
import Lvl_4 from './asset/landing/lvl_4.png';
import Lvl_5 from './asset/landing/lvl_5.png';
import Lvl_6 from './asset/landing/lvl_6.png';
import Lvl_7 from './asset/landing/lvl_7.png';
import Lvl_8 from './asset/landing/lvl_8.png';
import Lvl_8_bot from './asset/landing/lvl_8_bottom.png';
import Flask from './asset/welcome/Flask.png';
import Gems from './asset/welcome/Gems.png';
import Heart from './asset/welcome/Heart.png';
import Cancel from './asset/landing/Cancel.png';
import { GameLoop } from 'react-game-kit';
import greenHouse from './asset/home/Gavno.png';
import Fone from './asset/loading/fone.png';
import Amethyst from './asset/home/top bar/Amethyst.png';
import Stone from './asset/home/top bar/stone.png';
import Logs from './asset/home/top bar/logs.png';
import Golden from './asset/home/top bar/Golden.png';
import BlueHammer from './asset/home/hammer/blue_hammer.png';
import GreenHammer from './asset/home/hammer/green_hammer.png';
import PurpleHammer from './asset/home/hammer/purple_hummer.png';
import Leader from './asset/home/menu/leader.png';
import Friends from './asset/home/menu/friends.png';
import HomeMenu from './asset/home/menu/flask1.png';
import Storage from './asset/home/menu/storage.png';
import Inventory from './asset/home/menu/inventory.png';
import Shop from './asset/home/menu/shop.png';
import Task from './asset/home/menu/task.png';
import Arrow from './asset/home/income/arrow.png';
import Plus from './asset/home/income/Plus.png';
import Boost from './asset/home/income/boost.png';
import FirstCat from './asset/home/income/first_cat.png';
import SecondCat from './asset/home/income/second_cat.png';


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
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://genecats.com/api/game/', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Устанавливаем loading в false после получения данных
      }
    };

    fetchData();
  }, []);

  const updateImage = (level) => {
    switch(level) {
      case 0:
        setImageSrc(Lvl_0);
        break;
      case 1:
        setImageSrc(Lvl_1);
        break;
      case 2:
        setImageSrc(Lvl_2);
        break;
      case 3:
        setImageSrc(Lvl_3);
        break;
      case 4:
        setImageSrc(Lvl_4);
        break;
      case 5:
        setImageSrc(Lvl_5);
        break;
      case 6:
        setImageSrc(Lvl_6);
        break;
      case 7:
        setImageSrc(Lvl_7);
        break;
      case 8:
        setImageSrc(Lvl_8);
        break;
      default:
        setImageSrc(Lvl_0); // Уровень по умолчанию
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 300); // Обновляем каждые 300 миллисекунд

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Проверяем, что данные доступны перед их использованием
  if (loading || !data) {
    return (
      <div className="loading_page">
        <div className='game_view'>GeneCats</div>
        <img className='cat_avatar' src={Loading}/>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className='loading_view'>loading...</div>
        <div className='ne_bag_a_fi4a'></div>
      </div>
    );
  }

  // Обновляем изображение в зависимости от уровня
  updateImage(data.level);

  return (
    <div className="game_page">
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              <img src={Cancel}/>
            </button>
            <div className="modal-content">
              <div className='modal_title'>The more friends You invite - the more coins and gifts You earn!</div>
              <div className='friend_content'>
                {/* Ваш контент модального окна */}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='landing_view'>GeneCats</div>
      <div className='info_block'>Invite friends to receive initial bonuses before the game is released. The initial bonus is available only to players who join before the project launches, as a token of appreciation for their support.</div>
      <div className='cat_lvl_container'>      
        <img className='cats_lvl' src={imageSrc} />
      </div>
      <div className='progress_info_container'>
        <div className="progress-bar_lvl">
          <div className="progress" style={{ width: `${progress}%` }}>
            <span className="progress-text">Level {data.level}</span>
          </div>
        </div>
        <button className='info_button' onClick={openModal}><img src={Info}/></button>
      </div>
      <div className='lvl_info_block'>Invite 1 more friend for more gifts</div>
      <div className='referal_block'>
        <div className='referal_info'>{data.referral_link}</div>
        <button className='ref_button'>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24" aria-labelledby="copyIconTitle" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#0F5272">
            <title id="copyIconTitle">Copy</title>
            <rect width="12" height="14" x="8" y="7"/>
            <polyline points="16 3 4 3 4 17"/>
          </svg>
        </button>
        <button className='invite_button'>Invite</button>
      </div>
      <img className='bot_gold' src={Lvl_8_bot}/>
    </div>
  );
}

// <img className='cat_lvl' src={ForestMoggy} />
// <div className='cat_name'>Forest moggy Cat<br/>(Common)</div>




export default App;
