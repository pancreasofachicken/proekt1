import { useState } from 'react';

const Brojach = () => {
    const [count, setCount] = useState(50);

  function handleClick() {
    setCount(count + 2);
  }

//    const [countt, setCountt] = useState(50);

  function handleClickk() {
    setCount(count - 2);
  }
  return (
   <div>
     <button onClick={handleClick}>
      You pressed me {count} times
    </button>
     <button onClick={handleClickk}>
      You pressed me {count} times
    </button>
   </div>
  );
}
 
export default Brojach;