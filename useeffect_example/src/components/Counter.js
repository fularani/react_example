import React,{useState,useEffect} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  console.log("Counter Component rendered",count);

  useEffect(() => {
    console.log("Effect triggered",count);
  
    return () => {
        console.log("Counter Component destroyed",count);
    }
  })
  

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>
      Increase {count}
      </button>
    </div>
  )
}

export default Counter
