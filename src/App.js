

import {useEffect, useState} from "react"
export default function App() {
  const [advice, setAdvice] = useState("")
  const [count , setCount] = useState(0)
  function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((res)=> res.json())
    .then((data)=>{ 
  setAdvice(data.slip.advice)
  setCount((c) => c+1  )

    // document.querySelector("h1").textContent = data.slip.advice
})
  } 
  useEffect(function(){
    getAdvice()
  },[])

  return (
    <div >
    <h1>{advice}</h1>
    <button onClick={getAdvice}> Get Advice</button>
    <Message count={count} />
    </div>  
  )
}

function Message(props){
 return(  <p>
  You have just read <strong>{props.count}</strong>  piece of advice
  </p>
 )
}