import React, { Suspense, useLayoutEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";

import Homepage from "../pages/Homepage";

import Blank from "../pages/others/Blank";
import Akad from "../pages/akad";
import AkadForm from "../pages/akad/form";

const Pages = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Suspense fallback={<div />}>
      <Switch>
        {/*Dashboards*/}
        <Route exact path={`${process.env.PUBLIC_URL}/_blank`} component={Blank}></Route>

        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/akad/index`} component={Akad}></Route>
        <Route exact path={`${process.env.PUBLIC_URL}/akad/form`} component={AkadForm}></Route>
        <Route component={RedirectAs404}></Route>
      </Switch>
    </Suspense>
  );
};
export default Pages;
