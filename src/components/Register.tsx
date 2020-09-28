import * as React from "react";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { addAccount } from "../actions/current";
import { ICurrent, AUser } from "../types";
import { Link } from "react-router-dom";
import history from "../history";

interface IProps {
  accountAdd: (user: AUser | any) => void;
  state: ICurrent
}

const Register = ({
  accountAdd,
  state
}: IProps) => {
  const [user, setFiled] = React.useState<AUser | {}>()
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setFiled({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  }

  const addUserAccount = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('user', user);
    accountAdd(user);
    history.push("/");
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mx-auto">
          <div className="text-center bbox-title border" >
            <h4>Register</h4>
            <small>Please enter the details below.</small>
          </div>
          <div className="bbox-box border">
            <form onSubmit={addUserAccount} >
              <div className="form-group">
                <label className="form-label" >Full Name</label>
                <input type="text" name="name" id="name" onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Email address</label>
                <input type="email" name="email" id="email" onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Password</label>
                <input type="password" name="password" id="password" onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Passport / Identity Card </label>
                <div className="form-file">
                  <input id="identity" type="file" name="identity" onChange={handleUserData} className="form-control-file" />
                </div>
              </div>
              <button type="submit" className="btn btn-success">Register</button>
              <Button variant="danger" type="button" href="/login" className="float-right" >
                Login
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
  accountAdd: addAccount
};

export default connect(
  null,
  mapDispatchToProps,
)(Register);
