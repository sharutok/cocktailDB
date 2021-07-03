import { useState, useEffect } from "react";
import "./App.scss";
import CocktailDetails from "./CocktailDetails";
import CocktailList from "./CocktailList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const urls = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
function App() {
  const [defCocktail, setDefCocktail] = useState("a");
  const [cockTailList, setCockTailList] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  async function data() {
    try {
      const fetchData = await fetch(`${urls}${defCocktail}`);
      const response = await fetchData.json();
      const { drinks } = response;
      if (drinks) {
        setCockTailList(drinks);
        setShowMessage(false);
      } else {
        setCockTailList([]);
        setShowMessage(true);
      }
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    data();
  }, [defCocktail]);

  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <CocktailList
                cockTailList={cockTailList}
                setCockTailList={setCockTailList}
                setDefCocktail={setDefCocktail}
                setShowMessage={setShowMessage}
                showMessage={showMessage}
              />
            </Route>
            <Route
              path="/details/:name"
              children={<CocktailDetails cockTailList={cockTailList} />}
            ></Route>
            <Route path="*">
              <h1>Error</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}
export default App;
