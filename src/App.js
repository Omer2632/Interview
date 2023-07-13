import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import data from "./helper/data";
import Question from "./components/Question";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((item, i) => {
        return (
          <div key={i}>
            <Question {...item} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
