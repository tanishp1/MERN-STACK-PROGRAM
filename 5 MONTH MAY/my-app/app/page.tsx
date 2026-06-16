"use client"
import { useContextData } from "@/app/components/context/Rootcontext"
// import Callback from "./components/Callback";
// import Reducer from "./components/Reducer";
// import Reference from "./components/Reference";
// import Counter from "./components/Counter";
// import Timer from "./components/Timer";
// import useCustom from "./components/useCustom";

export default function Home(){
  // const { count, increment, decrement, reset} = useCustom(10);
  const contextData = useContextData()

  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     Client Route - Name: {contextData.name}
      {/* <Reducer/> */}
      {/* <Reference/> */}
      {/* <Callback/> */}
      {/* <Counter/>
      <Timer/> */}

      {/* <p>Count: {count}</p>
      <button onClick={increment}>+</button><br></br>
      <button onClick={decrement}>-</button><br></br>
     <button onClick={reset}>reset</button> */}
    </div>
  )
}
