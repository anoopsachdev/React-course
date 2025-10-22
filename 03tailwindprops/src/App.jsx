import './App.css'
import Card from './components/Card'
import anoopHot from './assets/anoop_hot.jpeg'
import advay from './assets/advay.jpeg'
function App() {

  return (
    <>
    <h1 className='bg-amber-500 text-black p-3 rounded-2xl mb-3'>Hello Tailwind</h1>
    <p className='mb-3'> <a href="https://tailwind.build/classes" target='_blank'>Click here</a> Tailwind CSS classes list </p>
    <Card image= {anoopHot}
    username = "Anoop"
    favSong = "En nuit"
    artist = "Videoclub"/>
    <Card
    image={advay}
    username="Advay"
    favSong="FOUND LOVE (feat. Carrie Baxter)"/>
    </>
  )
}

export default App

// notes:
/*
Tailwind
- Installation
- Use
- visit https://tailwind.build/classes for classes in tailwind
- get ready made card and other components from tailwind website https://tailwindcss.com
*/