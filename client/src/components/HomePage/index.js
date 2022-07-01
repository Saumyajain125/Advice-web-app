import {Button} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import './index.css'
function HomePage() {
    const [randomAdvice,setRandomAdvice] = useState('');
    const getRandomAdvice = () => {
         axios.get('https://api.adviceslip.com/advice').then((response) =>{setRandomAdvice(response.data.slip.advice)})
    }
  return (
    <div className='column'>
        <div id = 'advice'>{randomAdvice === '' ? "":'"' + randomAdvice + '"'}</div>
        <Button colorScheme='facebook' borderRadius='200px' height='fit-content' padding='20px' width='fit-content' fontSize='34px' fontWeight='semibold' onClick = {getRandomAdvice}>Get Random Adivce</Button> 
    </div>
    
  )
}

export default HomePage