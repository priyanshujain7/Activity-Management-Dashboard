import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import routeArray from "./_base";

const Routes = () => {
  return (
    <Switch>
      {routeArray.map((item, idx) => {
        const { route, title, Component, exact = true } = item || {};
        return (
          <Route key={idx} path={route} exact={exact}>
            <>
              <Helmet title={title} />
              <Suspense fallback={() => <div>Loading...</div>}>
                <Component />
              </Suspense>
            </>
          </Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
