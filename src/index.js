import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import BeneficiariesPage from "./pages/Beneficiaries";
import TransactionsPage from "./pages/Transactions";
import LegalPage from "./pages/Legal";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/beneficaries/:id" component={BeneficiariesPage} />
        <Route path="/legal" component={LegalPage} />
        <Route path="/" component={DashboardPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
