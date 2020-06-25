import React, { Suspense } from 'react';
import {
  Router as ReactRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { ROUTES } from 'shared';
import { history } from 'src/navigation/store';
import { routes } from 'src/navigation';

export const fallback = <div>TODO: show preloader</div>;

export const Router: React.FC = () => {
  const isUserAuth = false; // TODO: get from state
  const stack = routes[isUserAuth ? 'authorized' : 'unauthorized'];

  return (
    <Suspense fallback={fallback}>
      <ReactRouter history={history}>
        <Switch>
          {stack.map((config) => (
            <Route
              exact
              key={config.scheme}
              path={config.scheme}
              component={React.lazy(config.component)}
            />
          ))}

          <Route path="*" render={() => <Redirect to={ROUTES.MAIN} />} />
        </Switch>
      </ReactRouter>
    </Suspense>
  );
};
