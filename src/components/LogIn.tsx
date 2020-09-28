import * as React from "react";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { logIn } from "../actions/current";
import { ICurrent, AUser } from "../types";
import { Link } from "react-router-dom";

interface IProps {
  accountLogin: (user: AUser | any) => void;
  state: ICurrent
}

const LoggIn = ({
  accountLogin,
  state
}: IProps) => {
  const [user, setFiled] = React.useState<AUser | {}>()
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setFiled({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  const loginUserAccount = (e: React.FormEvent) => {
    e.preventDefault();
    accountLogin(user);
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mx-auto">
          <div className="text-center bbox-title border" >
            <h4>Login.</h4>
            <small>Enter your login details.</small>
          </div>
          <div className="bbox-box border">
            <form onSubmit={loginUserAccount} >
              <div className="form-group">
                <label className="form-label" >Email address</label>
                <input type="email" name="email" id="email" onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Password</label>
                <input type="password" name="password" id="password" onChange={handleUserData} className="form-control" />
              </div>
              <button type="submit" className="btn btn-success" >Login</button>
              <Button variant="danger" type="button" href="/register" className="float-right" >
                Register
              </Button>
            </form>
          </div>
          <div className="container" >
            <Link to="/" >{'< '} Home </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  accountLogin: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LoggIn);
