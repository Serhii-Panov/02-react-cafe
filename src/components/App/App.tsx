import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import css from "./App.module.css";
import { useState } from "react";
import type Votes from "../../types/votes.ts";
import type { VoteType } from "../../types/votes.ts";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
function App() {
  const initialState: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState<Votes>(initialState);
  let totalVotes = votes.good + votes.neutral + votes.bad;
  let positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const handleVoteType = (type: VoteType) => {
    setVotes((votes) => ({
      ...votes,
      [type]: votes[type] + 1,
    }));
  };
  const resetVotes = () => {
    setVotes(initialState);
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVoteType} onReset={resetVotes} canReset />
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
    </div>
  );
}

export default App;
