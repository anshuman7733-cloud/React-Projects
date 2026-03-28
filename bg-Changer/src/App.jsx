import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [bg, setBg] = useState(() => localStorage.getItem("Bg"))

  function changeBg(e) {
    setBg(e.target.style.backgroundColor);
  }

  useEffect(() => {
    localStorage.setItem("Bg", bg);
  }, [bg])

  return (
    <div className='w-screen h-screen flex flex-col justify-between items-center' style={{backgroundColor: bg}}>
      <h1 className='text-black text-4xl font-semibold m-2'>Background Changer</h1>

     <div className='flex gap-2 mb-4 rounded-3xl bg-amber-100 px-3 py-1'>
      <button className='px-3 py-1 m-1 text-white rounded-3xl' style={{backgroundColor: "black"}} onClick={changeBg}>Black</button>
      <button className='px-3 py-1 m-1 text-white rounded-3xl' style={{backgroundColor: "red"}} onClick={changeBg}>Red</button>
      <button className='px-3 py-1 m-1 text-white rounded-3xl' style={{backgroundColor: "purple"}} onClick={changeBg}>Violet</button>
      <button className='px-3 py-1 m-1 text-black rounded-3xl' style={{backgroundColor: "lavender"}} onClick={changeBg}>Lavender</button>
      <button className='px-3 py-1 m-1 text-black rounded-3xl' style={{backgroundColor: "yellow"}} onClick={changeBg}>Yellow</button>
      <button className='px-3 py-1 m-1 text-white rounded-3xl' style={{backgroundColor: "green"}} onClick={changeBg}>Green</button>
      <button className='px-3 py-1 m-1 text-white rounded-3xl' style={{backgroundColor: "maroon"}} onClick={changeBg}>Maroon</button>
     </div>
    </div>
  )
}

export default App
