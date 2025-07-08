import {  useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [emojis, setEmojis] = useState([
    {img:'😂'}, {img:'😎'}, {img:'🌎'}, {img:'👌'}, {img:'😶'}, {img:'🤷‍♀️'}])
  const [emoji, setEmoji] = useState('')
  useEffect(() => {
    sortearEmoji()
  },[])
  function sortearEmoji(){
    if(emojis.length > 0){
      let i = Math.floor(Math.random() * emojis.length)
      setEmoji(emojis[i])
      setEmojis([...emojis.filter((e) => e != emojis[i])])
      console.log(emojis.length); 
    }else{
      alert("Acabou...")
    }
  }
  return (
    <div className='container-app'>
        <p className='emoji' onClick={sortearEmoji}>{emoji}</p>
    </div>
  )
}
export default App
