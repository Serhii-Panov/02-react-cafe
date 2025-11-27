import CafeInfo from "../CafeInfo/CafeInfo.tsx"
import css from './App.module.css'
import { useState } from "react";
import Votes from "../../types/votes.ts";
function App() {
  const [votes:Votes, setVotes] = {
    good: 0,
    neutral: 0,
    bad:0
  }
  function handleClick() {
    setVotes()
  }
  return (<div className={css.app}><CafeInfo /></div>);
}

export default App
