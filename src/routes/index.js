import { Route, Switch, BrowserRouter } from "react-router-dom";
import MenuLeft from "../components/MenuLeft";
import { ElementsCirclesProvider } from "../global/context";
import { Flow } from "../pages/Flow";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ElementsCirclesProvider>
            <MenuLeft />
            <Flow />
          </ElementsCirclesProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
