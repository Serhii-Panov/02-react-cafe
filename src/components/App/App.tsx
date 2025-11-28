import CafeInfo from "../CafeInfo/CafeInfo.tsx";
import css from "./App.module.css";
import { useState } from "react";
import type { VoteType, Votes } from "../../types/votes.ts";
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";
import Form from "../Form/Form.tsx";
import OrderForm from "../OrderForm/OrderForm.tsx";
function App() {
  const initialState: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState<Votes>(initialState);
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
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
  const handleOrder = (data:string) => {
    console.log("Order received from: ", data);
  }
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVoteType}
        onReset={resetVotes}
        canReset={totalVotes ? true : false}
      />
      {totalVotes ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
      <Form />
      <h1>Place your order</h1>
      <OrderForm onSubmit={handleOrder} />
    </div>
  );
}

export default App;
