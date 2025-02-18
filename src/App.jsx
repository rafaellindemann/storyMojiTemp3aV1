import {  useState } from 'react'
import './App.css'

function App() {
  const [emojis, setEmojis] = useState(['👌','🤷‍♀️','🤞','🎶','😶‍🌫️','🤢','🥶','😵‍💫','😈','👻','🙊','🦒'])
  const [emoji, setEmoji] = useState('❤️')

  return (
    <div className='container-app'>
        <p className='emoji'>{emoji}</p>
    </div>
  )
}

export default App
