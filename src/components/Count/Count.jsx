import { useState } from "react";
import style from "./Count.module.css";

function Count(props) {
  const [count, setCount] = useState(props.count);

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className={style.count}>
      <button
        className={style.minus}
        onClick={removeCount}
        disabled={count === 1}
      >
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
}
export default Count;
