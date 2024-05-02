import { useState } from "react";
const user = () => {
  const [count, setCount] = useState(0);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1); // Decrement count by 1 only if count is greater than 0
    } else {
      alert("value Can't be Negative");
    }
  };
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <button
        className="bg-gray-500 text-white rounded-lg p-2"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +(Increment)
      </button>
      <button
        className="bg-gray-500 text-white rounded-lg p-2 mx-2"
        onClick={decrementCount}
      >
        -(decrement)
      </button>
      <h1 className="font-bold">Name : Saurabh Kumar</h1>
      <h2>Add : Bettiah, Bihar</h2>
      <h3>Position : Software Engineer</h3>
      <h4>Source : Functional Component</h4>
    </div>
  );
};
export default user;
