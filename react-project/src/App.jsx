import Card from './Card.jsx'
import hero from './assets/hero.png'
import charImg from './assets/charImg.png'
import Proptypes from 'prop-types'

function App() {

  let isShow = true;

  return (
    <>
      {isShow ? (<Card img={hero} name="kian" detail="pogi"/>) :
      (<Card img={charImg} name="scept" detail="shitty pants" />)}
    </>
  );
}

App.proptypes = {
  isShow: Proptypes.bool
};

export default App
