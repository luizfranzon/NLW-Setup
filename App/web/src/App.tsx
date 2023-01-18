import { Habit } from "./components/Habit";

import "./styles/global.css"

export default function App() {

  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={1}/>
      <Habit completed={3}/>
      <Habit completed={32}/>
    </div>
  )
}

