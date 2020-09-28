import * as React from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";
import history from "./history";
import Pages from "./routes/Pages";
import { checkAuthentication } from "./actions/current";
import { ICurrent } from "./types";
import "./index.css";

const { innerHeight: height } = window;

interface IProps {
  checkAuthenticationConnect: () => void;
  isAuthenticated: boolean | null;
}

const App = ({
  checkAuthenticationConnect,
  isAuthenticated
}: IProps) => {
  React.useEffect(() => {
    checkAuthenticationConnect();
  }, []);

  const app = isAuthenticated !== null ? (
    <Router history={history}>
      <Route component={Pages} />
    </Router>
  ) : null;

  return (
    <div className="App" style={{minHeight:height}} >
      {app}
    </div>
  );
}

const mapStateToProps = (state: ICurrent) => ({
  isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
  checkAuthenticationConnect: checkAuthentication
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
