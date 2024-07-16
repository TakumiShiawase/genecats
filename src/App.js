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
        <Route path='/game' element={ <Game />} />
      </Routes>
    </Router>
  );
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.gameCanvasRef = React.createRef();
  }

  componentDidMount() {
    this.startGame();
  }

  componentWillUnmount() {
    this.stopGame();
  }

  startGame = () => {
    this.gameLoopId = requestAnimationFrame(this.update);
  };

  stopGame = () => {
    cancelAnimationFrame(this.gameLoopId);
  };

  update = () => {
    // Логика обновления игры
    // Например, анимация, обработка ввода и т.д.

    // Вызываем следующий кадр игры
    this.gameLoopId = requestAnimationFrame(this.update);
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };




  render() {
    const { isModalOpen } = this.state;    
    return (
      <div className="game-container">
        <canvas ref={this.gameCanvasRef} className='game'></canvas>
        <Resources />
        {/* первая вверх 2 */}
        <DiamondImage src={PurpleHammer} top={19} left={61.5} zIndex={0}/>
        <DiamondImage src={PurpleHammer} top={19} left={38} zIndex={0} />
        {/* третья вверх 3 */}
        <DiamondImage src={BlueHammer} top={23} left={50} zIndex={1} />
        <DiamondImage src={PurpleHammer} top={23} left={73} zIndex={1}/>
        <DiamondImage src={PurpleHammer} top={23} left={26} zIndex={1} />
        {/* третья вверх 4 */}
        <DiamondImage src={PurpleHammer} top={27} left={14} zIndex={2} />
        <DiamondImage src={BlueHammer} top={27} left={38} zIndex={2} />
        <DiamondImage src={BlueHammer} top={27} left={62} zIndex={2} />
        <DiamondImage src={PurpleHammer} top={27} left={85} zIndex={2} />
        {/* вторая вверх 3 */}
        <DiamondImage src={BlueHammer} top={31} left={50} zIndex={3} />
        <DiamondImage src={PurpleHammer} top={31} left={73} zIndex={3}/>
        <DiamondImage src={PurpleHammer} top={31} left={26} zIndex={3} />
        {/* вторая вверх 4 */}
        <DiamondImage src={BlueHammer} top={35} left={14} zIndex={4} />
        <DiamondImage src={GreenHammer} top={35} left={38} zIndex={4} />
        <DiamondImage src={GreenHammer} top={35} left={62} zIndex={4} />
        <DiamondImage src={BlueHammer} top={35} left={85} zIndex={4} />
        {/* первая вверх 3 */}
        <DiamondImage src={GreenHammer} top={39} left={50} zIndex={5} />
        <DiamondImage src={BlueHammer} top={39} left={73} zIndex={5}/>
        <DiamondImage src={BlueHammer} top={39} left={26} zIndex={5} />
        {/* первая вверх 4 */}
        <DiamondImage src={GreenHammer} top={43} left={14} zIndex={6} />
        <DiamondImage src={GreenHammer} top={43} left={38} zIndex={6} />
        <DiamondImage src={greenHouse} top={43} left={62} zIndex={6} onClick={this.toggleModal}/>
        <DiamondImage src={GreenHammer} top={43} left={85} zIndex={6} />
        {/* центр 3 */}
        <DiamondImage src={greenHouse} top={47} left={50} zIndex={7} onClick={this.toggleModal} />
        <DiamondImage src={GreenHammer} top={47} left={73} zIndex={7}/>
        <DiamondImage src={GreenHammer} top={47} left={26} zIndex={7} />

        {/* Первая вниз 4 */}
        <DiamondImage src={GreenHammer} top={51} left={15} zIndex={8} />
        <DiamondImage src={greenHouse} top={51} left={38} zIndex={8} onClick={this.toggleModal}/>
        <DiamondImage src={GreenHammer} top={51} left={62} zIndex={8} />
        <DiamondImage src={GreenHammer} top={51} left={85} zIndex={8} />
        {/* первая вниз 3 */}
        <DiamondImage src={GreenHammer} top={55} left={50} zIndex={9} />
        <DiamondImage src={BlueHammer} top={55} left={73} zIndex={9}/>
        <DiamondImage src={BlueHammer} top={55} left={26} zIndex={9} />
        {/* вторая вниз 4 */}
        <DiamondImage src={BlueHammer} top={59} left={14} zIndex={10} />
        <DiamondImage src={GreenHammer} top={59} left={38} zIndex={10} />
        <DiamondImage src={GreenHammer} top={59} left={62} zIndex={10} />
        <DiamondImage src={BlueHammer} top={59} left={85} zIndex={10} />
        {/* вторая вниз 3 */}
        <DiamondImage src={BlueHammer} top={63} left={50} zIndex={11} />
        <DiamondImage src={PurpleHammer} top={63} left={73} zIndex={11}/>
        <DiamondImage src={PurpleHammer} top={63} left={26} zIndex={11} />
        {/* третья вниз 4 */}
        <DiamondImage src={PurpleHammer} top={67} left={14} zIndex={12} />
        <DiamondImage src={BlueHammer} top={67} left={38} zIndex={12} />
        <DiamondImage src={BlueHammer} top={67} left={62} zIndex={12} />
        <DiamondImage src={PurpleHammer} top={67} left={85} zIndex={12} />
        {/* третья вниз 3 */}
        <DiamondImage src={BlueHammer} top={71} left={50} zIndex={13} />
        <DiamondImage src={PurpleHammer} top={71} left={73} zIndex={13}/>
        <DiamondImage src={PurpleHammer} top={71} left={26} zIndex={13} />
        {/* первая вниз 2 */}
        <DiamondImage src={PurpleHammer} top={75} left={61.5} zIndex={14}/>
        <DiamondImage src={PurpleHammer} top={75} left={38} zIndex={14} />
        <FirstMenu />
        <SecondMenu />
        {isModalOpen && (
          <IncomeMenu />
        )}
      </div>
    );
  }
}


const DiamondImage = ({ src, top, left, zIndex = 1, onClick }) => (
  <button className="field_button" onClick={onClick}>
    <img
      src={src}
      alt="diamond"
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transform: 'translate(-50%, -50%)',
        width: '100px',
        height: '83px',
        zIndex: zIndex,
      }}
    />
  </button>
);

const Resource = ({ icon, count, style, iconWidth, iconHeight }) => (
  <div className="resource" style={style}>
    <img
      className="resource_icon"
      src={icon}
      alt="resource icon"
      style={{ width: iconWidth, height: iconHeight }}
    />
    <div className="resource_coin">{count}</div>
  </div>
);
const Resources = () => {
  const resources = [
    { icon: Stone, count: '20M', style: { top: '10px', left: '10px' }, iconWidth: '40px', iconHeight: '36px' },
    { icon: Logs, count: '20M', style: { top: '10px', left: '110px' }, iconWidth: '46px', iconHeight: '36px' },
    { icon: Amethyst, count: '999M', style: { top: '10px', left: '210px' }, iconWidth: '26px', iconHeight: '36px' },
    { icon: Golden, count: '999M', style: { top: '10px', left: '310px' }, iconWidth: '36px', iconHeight: '36px' },
  ];

  return (
    <div className="resources">
      {resources.map((resource, index) => (
        <Resource
          key={index}
          icon={resource.icon}
          count={resource.count}
          style={resource.style}
          iconWidth={resource.iconWidth}
          iconHeight={resource.iconHeight}
        />
      ))}
    </div>
  );
};

const MenuItem = ({ icon, text, style, iconWidth, iconHeight, onClick }) => (
  <button className="menu_item" style={style}>
    <img
      className="menu_icon"
      src={icon}
      alt="menu icon"
      style={{ width: iconWidth, height: iconHeight }}
      onClick={onClick}
    />
    <div className="menu_text">{text}</div>
  </button>
);

const FirstMenu = () => {
  const menu = [
    { icon: Friends, text: 'Frineds', iconWidth: '45px', iconHeight: '44px' },
    { icon: Golden, text: 'Tap',  iconWidth: '64px', iconHeight: '64px' },
    { icon: Amethyst, text: 'League', iconWidth: '38px', iconHeight: '44px' },
  ];

  return (
    <div className="first_menu">
      {menu.map((resource, index) => (
        <MenuItem
          key={index}
          icon={resource.icon}
          text={resource.text}
          iconWidth={resource.iconWidth}
          iconHeight={resource.iconHeight}
        />
      ))}
    </div>
  );
};
const SecondMenu = () => {
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);
  const [storageMenuOpen, setStorageMenuOpen] = useState(false);
  const [inventoryMenuOpen, setInventoryMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [tasksMenuOpen, setTasksMenuOpen] = useState(false);

  return (
    <div className="second_menu">
      <MenuItem
        icon={HomeMenu}
        text='Home'
        onClick={() => setHomeMenuOpen(!homeMenuOpen)}
      />
      {homeMenuOpen && (
        <div className="submenu">
          {/* Содержимое меню Home */}
          <p>Submenu for Home</p>
        </div>
      )}

      <MenuItem
        icon={Storage}
        text='Storage'
        onClick={() => setStorageMenuOpen(!storageMenuOpen)}
      />
      {storageMenuOpen && (
        <StorageMenu />
      )}

      <MenuItem
        icon={Inventory}
        text='Inventory'
        onClick={() => setInventoryMenuOpen(!inventoryMenuOpen)}
      />
      {inventoryMenuOpen && (
        <InventoryMenu/>
      )}

      <MenuItem
        icon={Shop}
        text='Shop'
        onClick={() => setShopMenuOpen(!shopMenuOpen)}
      />
      {shopMenuOpen && (
        <div className="submenu">
          {/* Содержимое меню Shop */}
          <p>Submenu for Shop</p>
        </div>
      )}

      <MenuItem
        icon={Task}
        text='Tasks'
        onClick={() => setTasksMenuOpen(!tasksMenuOpen)}
      />
      {tasksMenuOpen && (
        <div className="submenu">
          {/* Содержимое меню Tasks */}
          <p>Submenu for Tasks</p>
        </div>
      )}
    </div>
  );
};

const StorageMenu = () => {
  const catItems = Array.from({ length: 25 }, (_, index) => (
    <CatItem key={index} />
  ));
  return(
    <div className='storage_menu'>
      <div className='storage_top'>
        <div className='storage_top_text'>Page 1</div>
        <div className='storage_top_text'>Storage</div>
      </div>
      <div className='storage_items'>
      {catItems}
      </div>
    </div>
  )
}

const IncomeMenu = ({ toggleModal }) => {
  const catItems = Array.from({ length: 10 }, (_, index) => (
    <CatItem key={index} />
  ));
  return(
    <div className='income_menu'>
      <div className='income_top'>
        <div className='income_top_text'>Income Room 1</div>
        <button className="close" onClick={toggleModal}>&times;</button>
      </div>
      <div className='icome_fisrt_items'>
        <div className='cat_cross_items'>
        <div className='cat_cross_item'><img src={FirstCat}/></div>
        <div className='cat_plus_arrow'>
          <div className='cat_cross_plus'><img src={Plus}/></div>
          <div className='cat_cross_arrow'><img src={Arrow}/></div>
        </div>
        <div className='cat_cross_item'><img src={SecondCat}/></div>
        </div>
        <div className='cat_cross_result'>?</div>
        <div className='cat_cross_soons'>
          <div className='cat_cross_soon'>Soon</div>
          <div className='cat_cross_soon'>Soon</div>
          <div className='cat_cross_soon'>Soon</div>
        </div>
        <div  className='cat_cross_boost'><img src={Boost}/><span>Boost</span></div>
      </div>
      <Timer time={50}/>
      <div className='income_second_items'>
      {catItems}
      </div>
    </div>
  )
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  render() {
    const { time } = this.state;
    return (
      <div className="timer">
        lifespan: {time}
      </div>
    );
  }
}
const InventoryMenu = () => {
  const catItems = Array.from({ length: 15 }, (_, index) => (
    <CatItem key={index} />
  ));
  return(
    <div className='inventory_menu'>
      <div className='inventory_top'>
        <div className='inventory_top_text'>Inventory</div>
      </div>
      <div className='inventory_items'>
      {catItems}
      </div>
    </div>
  )
}

const CatItem = () => {
  return(
    <div className='cat_item'></div>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const [minLoadingTimePassed, setMinLoadingTimePassed] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const location = useLocation();
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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const telegram_user_id = params.get('telegram_user_id');
  
    if (telegram_user_id) {
      fetch('https://genecats.com/api/game/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          telegram_user_id,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data);
          updateImage(data.level);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [location]);


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
      // case 8:
      //   setImageSrc(Lvl_8);
      //   break;
      default:
        setImageSrc(Lvl_0); // Уровень по умолчанию
    }
  };
  const getLevelClass = () => {
    if (imageSrc === Lvl_0) {
      return 'lvl_0';
    }
    return '';
  };
  let progressWidth = 0;

  if (userData.next_level_referrals_needed !== 0 && !isNaN(userData.Friends_needed_for_next_level) && !isNaN(userData.next_level_referrals_needed)) {
    progressWidth = (userData.Friends_needed_for_next_level / userData.next_level_referrals_needed) * 100;
  }

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
        <div className="modal-backdrop">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              <img src={Cancel}/>
            </button>
            <div className="modal-content">
              <div className='modal_title'>The more friends You invite - the more coins and gifts You earn!</div>
              <div className='friend_content'>
                <div className='friend_block'>
                  <div className='friend_view'>1 friend</div>
                  <div className='friend_bonus'>
                    <div className='lawn_tile'>Lawn tile</div>
                    <div className='friend_coin'>1000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>2 friend</div>
                  <div className='friend_bonus'>
                    <div className='siamese'>Siamese cat</div>
                    <div className='friend_coin'>2500 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>5 friend</div>
                  <div className='friend_bonus'>
                    <div className='maine_coon'>Maine Coon cat</div>
                    <div className='friend_coin'>5000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>10 friend</div>
                  <div className='friend_bonus'>
                    <div className='ragdoll'>Ragdoll cat</div>
                    <div className='amethyst'>Amethyst</div>
                    <div className='friend_coin'>10000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>25 friend</div>
                  <div className='friend_bonus'>
                    <div className='peterbald'>Peterbald cat</div>
                    <div className='amethyst'>5 amethysts</div>
                    <div className='friend_coin'>25000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>50 friend</div>
                  <div className='friend_bonus'>
                    <div className='serengeti'>Serengeti cat</div>
                    <div className='amethyst'>20 amethysts</div>
                    <div className='friend_coin'>50000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>100 friend</div>
                  <div className='friend_bonus'>
                    <div className='british'>British Shorhair cat</div>
                    <div className='amethyst'>50 amethysts</div>
                    <div className='friend_coin'>100000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>500 friend</div>
                  <div className='friend_bonus'>
                    <div className='bengal'>Bengal cat</div>
                    <div className='amethyst'>100 amethysts</div>
                    <div className='lawn_tile'>Lawn tile</div>
                    <div className='friend_coin'>500000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>2500 friend</div>
                  <div className='friend_bonus'>
                    <div className='sphynx'>Sphynx cat</div>
                    <div className='amethyst'>250 amethysts</div>
                    <div className='cat_house'>Cat's house</div>
                    <div className='friend_coin'>2500000 CatyCoins</div>
                  </div>
                </div>
                <div className='friend_block'>
                  <div className='friend_view'>10000 friend</div>
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
        <div className='cat_lvl_views'>Current Bonuses:</div>    
        <img className={`cats_lvl ${getLevelClass()}`} src={imageSrc} />
      </div>
      <div className='progress_info_container'>
        <div className="progress-bar_lvl">
          <div className="progress" style={{ width: `${progressWidth}%` }}>
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
    </div>
  );
}

// <img className='cat_lvl' src={ForestMoggy} />
// <div className='cat_name'>Forest moggy Cat<br/>(Common)</div>

const Welcome = () => {
  const [isModalFlask, setIsModalFlask] = useState(false);
  const openFlask = () => setIsModalFlask(true);
  const closeFlask = () => setIsModalFlask(false);
  const [isModalJewelers, setIsModalJewelers] = useState(false);
  const openJewelers = () => setIsModalJewelers(true);
  const closeJewelers = () => setIsModalJewelers(false);
  const [isModalKnights, setIsModalKnights] = useState(false);
  const openKnights = () => setIsModalKnights(true);
  const closeKnights = () => setIsModalKnights(false);
  
  return(
    <div className="game_page">
      <div className='welcome_view'>Welcome<br/>to<br/>GeneCats</div>
      <div className='welcome_info'>Please, choose the fraction You want to join:</div>
      <div className='fraction'>
      <button onClick={openFlask} className='fraction_item'>
        <img className='fraction_icon_flask' src={Flask}/>
        <div className='fraction_text'>Alchemists</div>
      </button>
      {isModalFlask && (<div className="modal-backdrop_fraction">
          <div className="modal_fraction">
            <button className="modal-close" onClick={closeFlask}>
              <img src={Cancel}/>
            </button>
            <div className='modal_fraction_view'>Are You sure?</div>
            <img className='fraction_icon_flask' src={Flask}/>
            <div className='modal_fraction_buttons'>
              <button className='modal_fraction_button'>Yes</button>
              <button className='modal_fraction_button'>No</button>
            </div>
          </div>
      </div>)}
      <button onClick={openJewelers} className='fraction_item'>
        <img className='fraction_icon' src={Gems}/>
        <div className='fraction_text'>Jewelers</div>
      </button>
      {isModalJewelers && (<div className="modal-backdrop_fraction">
          <div className="modal_fraction">
            <button className="modal-close" onClick={closeJewelers}>
              <img src={Cancel}/>
            </button>
            <div className='modal_fraction_view'>Are You sure?</div>
            <img className='fraction_icon' src={Gems}/>
            <div className='modal_fraction_buttons'>
              <button className='modal_fraction_button'>Yes</button>
              <button className='modal_fraction_button'>No</button>
            </div>
          </div>
      </div>)}
      <button onClick={openKnights} className='fraction_item'>
        <img className='fraction_icon' src={Heart}/>
        <div className='fraction_text'>Knights</div>
      </button>
      {isModalKnights && (<div className="modal-backdrop_fraction">
          <div className="modal_fraction">
            <button className="modal-close" onClick={closeKnights}>
              <img src={Cancel}/>
            </button>
            <div className='modal_fraction_view'>Are You sure?</div>
            <img className='fraction_icon' src={Heart}/>
            <div className='modal_fraction_buttons'>
              <button className='modal_fraction_button'>Yes</button>
              <button className='modal_fraction_button'>No</button>
            </div>
          </div>
      </div>)}
      </div>
      <div className='welcome_info_2'>Caution! This choice is given once and forever</div>
    </div>
  )
}



export default App;
