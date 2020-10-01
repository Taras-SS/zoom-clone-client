import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import MainPage from "./pages/MainPage/MainPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PreVideoRoom from "./pages/VideoRoom/PreVideoRoom";
import "./App.css";
import dotenv from "dotenv";
dotenv.config();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Switch>
              <Route path="/signIn" component={SignIn} />
              <Route path="/signUp" component={SignUp} />
              <PrivateRoute path="/meeting/:id" component={PreVideoRoom} />
              <PrivateRoute path="/" component={MainPage} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
