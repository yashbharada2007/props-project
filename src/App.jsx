import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  const arr = [10, 20, 30, 40, 50];

  return (
    <div className="parent">
      {arr.map(function (elem) {
        return elem;
      })}
    </div>
  );
};

export default App;
