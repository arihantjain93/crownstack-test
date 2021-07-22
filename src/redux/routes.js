
import { Route, Switch } from 'react-router-dom';
import { Home, Main, SubCategory } from '../container';

export const Routes = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category" component={SubCategory} />
    </Switch>
  </Main>
);