import {  useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [emojis, setEmojis] = useState([
    // Emojis originais
    '😂', '😎', '🌎', '👌', '😶‍🌫️', '🤷‍♀️',
  
    // Expressões e rostos
    '😍', '🥰', '😘', '😋', '🤪', '😜', '😝', '😏', '😒', '😌', '😔', '😢', '😭', '😡', '🤬', '😱', '😨', '😰', '😴', '🤤', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😈', '👿', '💀', '👻', '👽', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾',
  
    // Mãos e gestos
    '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🦷', '🦴', '👀', '👁️', '👅', '👄',
  
    // Pessoas e personagens
    '👶', '🧒', '👦', '👧', '🧑', '👨', '👩', '🧔', '👱‍♀️', '👱‍♂️', '🧓', '👴', '👵', '🙍‍♂️', '🙍‍♀️', '🙎‍♂️', '🙎‍♀️', '🙅‍♂️', '🙅‍♀️', '🙆‍♂️', '🙆‍♀️', '💁‍♂️', '💁‍♀️', '🙋‍♂️', '🙋‍♀️', '🧏‍♂️', '🧏‍♀️', '🙇‍♂️', '🙇‍♀️', '🤦‍♂️', '🤦‍♀️', '🤷‍♂️', '🤷‍♀️', '👨‍⚕️', '👩‍⚕️', '👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍🏫', '👨‍⚖️', '👩‍⚖️', '👨‍🌾', '👩‍🌾', '👨‍🍳', '👩‍🍳', '👨‍🔧', '👩‍🔧', '👨‍🏭', '👩‍🏭', '👨‍💼', '👩‍💼', '👨‍🔬', '👩‍🔬', '👨‍💻', '👩‍💻', '👨‍🎤', '👩‍🎤', '👨‍🎨', '👩‍🎨', '👨‍✈️', '👩‍✈️', '👨‍🚀', '👩‍🚀', '👨‍🚒', '👩‍🚒', '👮‍♂️', '👮‍♀️', '🕵️‍♂️', '🕵️‍♀️', '💂‍♂️', '💂‍♀️', '👷‍♂️', '👷‍♀️', '🤴', '👸', '👳‍♂️', '👳‍♀️', '🧕', '👲', '🧔‍♂️', '🧔‍♀️', '👱‍♂️', '👱‍♀️', '🧓', '👴', '👵', '🧙‍♂️', '🧙‍♀️', '🧚‍♂️', '🧚‍♀️', '🧛‍♂️', '🧛‍♀️', '🧜‍♂️', '🧜‍♀️', '🧝‍♂️', '🧝‍♀️', '🧞‍♂️', '🧞‍♀️', '🧟‍♂️', '🧟‍♀️', '💆‍♂️', '💆‍♀️', '💇‍♂️', '💇‍♀️', '🚶‍♂️', '🚶‍♀️', '🏃‍♂️', '🏃‍♀️', '💃', '🕺', '🕴️', '👯‍♂️', '👯‍♀️', '🧖‍♂️', '🧖‍♀️', '🧗‍♂️', '🧗‍♀️', '🤺', '🏇', '⛷️', '🏂', '🏌️‍♂️', '🏌️‍♀️', '🏄‍♂️', '🏄‍♀️', '🚣‍♂️', '🚣‍♀️', '🏊‍♂️', '🏊‍♀️', '⛹️‍♂️', '⛹️‍♀️', '🏋️‍♂️', '🏋️‍♀️', '🚴‍♂️', '🚴‍♀️', '🚵‍♂️', '🚵‍♀️', '🤸‍♂️', '🤸‍♀️', '🤼‍♂️', '🤼‍♀️', '🤽‍♂️', '🤽‍♀️', '🤾‍♂️', '🤾‍♀️', '🤹‍♂️', '🤹‍♀️', '🧘‍♂️', '🧘‍♀️', '🛀', '🛌', '🧑‍🤝‍🧑', '👭', '👫', '👬', '💏', '💑', '👪', '🧑‍🎄', '🧑‍🎤', '🧑‍🎨', '🧑‍🚒', '🧑‍🚀', '🧑‍⚖️', '🧑‍⚕️', '🧑‍🌾', '🧑‍🍳', '🧑‍🔧', '🧑‍🏭', '🧑‍💼', '🧑‍🔬', '🧑‍💻', '🧑‍🎓', '🧑‍🏫', '🧑‍🌾', '🧑‍🍳', '🧑‍🔧', '🧑‍🏭', '🧑‍💼', '🧑‍🔬', '🧑‍💻', '🧑‍🎓', '🧑‍🏫', '🧑‍⚖️', '🧑‍⚕️', '🧑‍🚒', '🧑‍🚀', '🧑‍🎄', '🧑‍🎤', '🧑‍🎨', '🧑‍🤝‍🧑', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👦', '👨‍👦‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👧‍👧', '👩‍👦', '👩‍👦‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👧‍👧', '🧶', '🧵', '🧥', '🥼', '🦺', '👚', '👕', '👖', '🩳', '🩲', '👔', '👗', '👘', '🥻', '🩱', '👙', '👛', '👜', '👝', '🎒', '👞', '👟', '🥾', '🥿', '👠', '👡', '🩴', '👢', '👑', '👒', '🎩', '🎓', '🧢', '🪖', '⛑️', '💄', '💍', '💼', '🕶️', '🥽', '🥼', '🦺', '🧤', '🧣', '🧦', '👗'
  ]
)
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
        {/* {emojis} */}
    </div>
  )
}

export default App
