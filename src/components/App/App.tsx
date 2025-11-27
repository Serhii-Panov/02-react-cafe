import CafeInfo from "../CafeInfo/CafeInfo.tsx"
import css from './App.module.css'
import { useState } from "react"
import type Votes from "../../types/votes.ts"
import type { VoteType } from "../../types/votes.ts"
function App() {
    const initialState: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [votes, setVotes] = useState<Votes>(initialState);
  const handleVoteType = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  }
    const resetVotes = () => {
    setVotes(initialState);
  };
  return (<div className={css.app}><CafeInfo /></div>);
}

export default App
