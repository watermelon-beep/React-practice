import Card from './Card.jsx'
import hero from './assets/hero.png'
import  charImg from './assets/charImg.png'

function App() {

  return (
    <>
      <Card img={hero} name="kian" detail="pogi"/>
      <Card img={charImg} name="flexi" detail="stupid bitch"/>
      <Card />
    </>
  );
}

export default App
