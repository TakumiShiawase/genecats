import React, { useState, useEffect, useRef, Component  } from 'react';
import { BrowserRouter as Router, Route,Routes, Switch,useLocation } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Loading from './asset/loading/loading.png';
import Lvl_0 from './asset/landing/lvl_0.png';
import Info from './asset/landing/info.png';
import Lvl_1 from './asset/landing/lvl_1.png';
import Lvl_2 from './asset/landing/lvl_2.png';
import Lvl_3 from './asset/landing/lvl_3.png';
import Lvl_4 from './asset/landing/lvl_4.png';
import Lvl_5 from './asset/landing/lvl_5.png';
import Lvl_6 from './asset/landing/lvl_6.png';
import Lvl_7 from './asset/landing/lvl_7.png';
import un_Lvl_0 from './asset/landing/un_lvl_0.png';
import un_Lvl_1 from './asset/landing/un_lvl_1.png';
import un_Lvl_2 from './asset/landing/un_lvl_2.png';
import un_Lvl_3 from './asset/landing/un_lvl_3.png';
import un_Lvl_4 from './asset/landing/un_lvl_4.png';
import un_Lvl_5 from './asset/landing/un_lvl_5.png';
import un_Lvl_6 from './asset/landing/un_lvl_6.png';
import un_Lvl_7 from './asset/landing/un_lvl_7.png';
import Paw from './asset/landing/paw.png';
// import Lvl_8 from './asset/landing/lvl_8.png';
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
  const [showMessage, setShowMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [minLoadingTimePassed, setMinLoadingTimePassed] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const location = useLocation();
  const [totalFriends, setTotalFriends] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [userData, setUserData] = useState({
    user_id: '',
    level: 0,
    CatyCoins: 0,
    telegram_user_id: '',
    referral_link: '',
    invited_friends_count: 0,
    friends_needed_for_next_level: 0,
    next_level_referrals_needed: 0,
  });
  const params = new URLSearchParams(location.search);
  const telegram_user_id = params.get('telegram_user_id');
  useEffect(() => {
    if (telegram_user_id) {
      fetch('https://genecats.com/api/game/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ telegram_user_id }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetched data:", data);
          setUserData(prevUserData => ({
            ...prevUserData,
            ...data, // Обновляем данные пользователя
          }));
          updateImage(data.level,data.received_subscription_reward);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [telegram_user_id]);
  
  const handleCheckSubscription = async () => {
    try {
      // Отправляем запрос для проверки подписки
      await axios.post('https://genecats.com/api/check_subscription/', {
        telegram_user_id
      });
      
      // После отправки запроса проверяем данные пользователя
      const gameResponse = await axios.post('https://genecats.com/api/game/', {
        telegram_user_id
      });
  
      const { data } = gameResponse;
      
      if (data.received_subscription_reward) {
        
        setUserData(prevUserData => ({
          ...prevUserData,
          received_subscription_reward: true,
        }));
      } else {
        setMessage('You are not subscribed');
        setShowMessage(true);
        // Скрыть сообщение через 3 секунды
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      }
      updateImage(data.level, data.received_subscription_reward);
    } catch (error) {
      console.error('Error checking subscription:', error);
    }
  };
  
  



  useEffect(() => {
    const minLoadingTime = 1500; // Минимальное время загрузки в миллисекундах
    const timer = setTimeout(() => {
      setMinLoadingTimePassed(true);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minLoadingTimePassed) {
      setLoading(false);
    }
  }, [minLoadingTimePassed]);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Telegram) {
        window.Telegram.WebApp.ready();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openTelegramContacts = () => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openContact) {
      window.Telegram.WebApp.openContact({
        message: 'Get extra bonuses!',
        url: userData.referral_link,
      });
    } else {
      const referralMessage = `Get extra bonuses!`;
      const telegramContactUrl = `https://t.me/share/url?url=${encodeURIComponent(userData.referral_link)}&text=${encodeURIComponent(referralMessage)}`;
      window.open(telegramContactUrl, '_blank');
    }
  };




  const getLevelClass = () => {
    if (imageSrc === Lvl_0) {
      return 'lvl_0';
    }
    if (imageSrc === un_Lvl_0) {
      return 'lvl_0';
    }
    return '';
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
    }, 150); // Обновляем каждые 300 миллисекунд

    return () => {
      clearInterval(interval);
    };
  }, []);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard successfully!');
      setCopySuccess(true);
  
      // Скрыть уведомление через 2 секунды
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };
  const updateImage = (level,receivedSubscriptionReward) => {

    switch (level) {
      case 0:
        setImageSrc(receivedSubscriptionReward ? Lvl_0 : un_Lvl_0);
        break;
      case 1:
        setImageSrc(receivedSubscriptionReward ? Lvl_1 : un_Lvl_1);
        break;
      case 2:
        setImageSrc(receivedSubscriptionReward ? Lvl_2 : un_Lvl_2);
        break;
      case 3:
        setImageSrc(receivedSubscriptionReward ? Lvl_3 : un_Lvl_3);
        break;
      case 4:
        setImageSrc(receivedSubscriptionReward ? Lvl_4 : un_Lvl_4);
        break;
      case 5:
        setImageSrc(receivedSubscriptionReward ? Lvl_5 : un_Lvl_5);
        break;
      case 6:
        setImageSrc(receivedSubscriptionReward ? Lvl_6 : un_Lvl_6);
        break;
      case 7:
        setImageSrc(receivedSubscriptionReward ? Lvl_7 : un_Lvl_7);
        break;
      default:
        setImageSrc(receivedSubscriptionReward ? Lvl_0 : un_Lvl_0); 
    }
  
  };
  const updateTotalFriends = (level) => {
    let friendsCount = 0;

    switch (level) {
      case 0:
        friendsCount = 0;
        break;
      case 1:
        friendsCount = 1;
        break;
      case 2:
        friendsCount = 3;
        break;
      case 3:
        friendsCount = 5;
        break;
      case 4:
        friendsCount = 15;
        break;
      case 5:
        friendsCount = 25;
        break;
      case 6:
        friendsCount = 50;
        break;
      case 7:
        friendsCount = 400;
        break;
      case 8:
        friendsCount = 2000;
        break;
      case 9:
        friendsCount = 7500;
        break;
      default:
        friendsCount = 0;
        break;
    }

    setTotalFriends(friendsCount);
  };

  useEffect(() => {
    updateTotalFriends(userData.level);
  }, [userData.level]);


  const totalNeededForNextLevel = userData.next_level_referrals_needed;
  const remainingToNextLevel = userData.friends_needed_for_next_level;
  // const progressWidth = ((totalNeededForNextLevel - remainingToNextLevel) / totalNeededForNextLevel) * 100;
  const progressWidth = (userData.friends_needed_for_next_level / totalFriends) * 100;
  if (loading) {
    return (
      <div className="loading_page">
        <div className='game_view'>GeneCats</div>
        <img className='cat_avatar' src={Loading}/>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className='loading_view'>loading...</div>
      </div>
    );
  }




  return (
    <div className="game_page">
{isModalOpen && (
        <div className="modal-backdrop"  onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <img src={Cancel}/>
            </button>
            <div className="modal-content">
              <div className='modal_title'>The more friends You invite - the more coins and gifts You earn!</div>
              <div className='friend_content'>
                <div className='friend_block'>
                  <div className='friend_view'>1 friend {userData.level > 0 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='friend_view'>Desert Moggy Cat</div>
                    <div className='friend_coin'>1000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>2 friends{userData.level > 1 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='siamese'>Siamese cat</div>
                    <div className='friend_coin'>2500 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>5 friends {userData.level > 2 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='maine_coon'>Maine Coon cat</div>
                    <div className='friend_coin'>5000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>10 friends {userData.level > 3 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='ragdoll'>Ragdoll cat</div>
                    <div className='amethyst'>Amethyst</div>
                    <div className='friend_coin'>10000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>25 friends {userData.level > 4 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='peterbald'>Peterbald cat</div>
                    <div className='amethyst'>5 amethysts</div>
                    <div className='friend_coin'>25000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>50 friends {userData.level > 5 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='serengeti'>Serengeti cat</div>
                    <div className='amethyst'>20 amethysts</div>
                    <div className='friend_coin'>50000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>100 friends {userData.level > 6 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='british'>British Shorhair cat</div>
                    <div className='amethyst'>50 amethysts</div>
                    <div className='friend_coin'>100000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>500 friends {userData.level > 7 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='bengal'>Bengal cat</div>
                    <div className='amethyst'>100 amethysts</div>
                    <div className='lawn_tile'>Lawn tile</div>
                    <div className='friend_coin'>500000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>2500 friends {userData.level > 8 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='sphynx'>Sphynx cat</div>
                    <div className='amethyst'>250 amethysts</div>
                    <div className='cat_house'>Cat's house</div>
                    <div className='friend_coin'>2500000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>10000 friends {userData.level > 9 && <img src={Paw} />}</div>
                  <div className='friend_bonus'>
                    <div className='khao'>Khao Manee cat</div>
                    <div className='lawn_tile'>Lawn tile</div>
                    <div className='cat_house'>Cat's house</div>
                    <div className='amethyst'>500 amethysts</div>
                    <div className='friend_coin'>10000000 CatyCoins</div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='landing_view'>GeneCats</div>
      <div className='info_block'>Invite friends to receive initial bonuses before the game is released. The initial bonus is available only to players who join before the project launches, as a token of appreciation for their support.</div>
      <div className='cat_lvl_container'> 

        <img className={`cats_lvl ${getLevelClass()}`} src={imageSrc} />
      </div>
      <div className='progress_info_container'>
        <div className="progress-bar_lvl">
          <div className="progress"        style={{
          width: `${progressWidth}%`,
          backgroundColor: '#791C9E'
        }}>
            <span className="progress-text">Level {userData.level}</span>
          </div>
        </div>
        <button className='info_button' onClick={openModal}><img src={Info}/></button>
      </div>
      <div className='lvl_info_block'>Invite {userData.friends_needed_for_next_level} more {userData.friends_needed_for_next_level <= 1 ? 'friend' : 'friends'} for more gifts</div>
      <div className='referal_block'>
        <button className='referal_info'onClick={() => copyToClipboard(userData.referral_link)}>GeneCats?start={userData.telegram_user_id}</button>
        <button className='ref_button' onClick={() => copyToClipboard(userData.referral_link)}>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24" aria-labelledby="copyIconTitle" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#0F5272">
            <title id="copyIconTitle">Copy</title>
            <rect width="12" height="14" x="8" y="7"/>
            <polyline points="16 3 4 3 4 17"/>
          </svg>
        </button>
        {copySuccess && (
  <div className="copy-notification">
    Text copied to clipboard!
  </div>
)}
        <button className='invite_button'onClick={openTelegramContacts}>Invite</button>
      </div>
      <div className='join_block'>
        <div className='join_text'>Join the community</div>
        <button className='join_button' onClick={() => window.open('https://t.me/GeneCats', '_blank')}>Join</button>
        <button className='join_button' onClick={handleCheckSubscription}>Claim</button>
      </div>
      <div>
      {userData.received_subscription_reward ? (
        <div className='join_true'>Reward Claimed</div>
      ) : (
        <div className='join_false'>Reward:<div className='join_claim'>Lawn Tile(Legendary)</div> </div>
      )}
      </div>
      {showMessage && <div className='join_false_sub'>{message}</div>}
    </div>
  );
}






export default App;
