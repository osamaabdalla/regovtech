import * as React from "react";
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import { logOut, updateAccount } from "../actions/current";
import { ICurrent, AUser } from "../types";
import { Link } from "react-router-dom";

interface IProps {
  logOutConnect: () => void;
  accountUpdate: (user: AUser | any) => void;
  state: ICurrent
}

const Account = ({
  logOutConnect,
  accountUpdate,
  state,
}: IProps) => {
  const [user, setFiled] = React.useState<AUser | {}>()
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    setFiled({
      ...user,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const updateUserAcount = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('user', user);
    accountUpdate(user)
  }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mx-auto">
          <div className="text-center bbox-title border" >
            <h4>Account</h4>
            <small>Below your details, you can update.</small>
          </div>
          <div className="bbox-box border">
            <form onSubmit={updateUserAcount} >
              <div className="form-group">
                <label className="form-label" >Full Name</label>
                <input type="text" name="name" id="name" defaultValue={state.user.name} onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Email address</label>
                <input type="email" name="email" id="email" defaultValue={state.user.email} onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Password</label>
                <input type="password" name="password" id="password" defaultValue={state.user.password} onChange={handleUserData} className="form-control" />
              </div>
              <div className="form-group">
                <label className="form-label" >Passport / Identity Card </label>
                <div className="form-file">
                  <img src={state.user.identity} alt="Identity" className="identity" />
                  <input id="identity" type="file" name="identity" onChange={handleUserData} className="form-control-file" />
                </div>
              </div>
              <button type="submit" className="btn btn-success">Update</button>
              <Button variant="danger" type="button" onClick={logOutConnect} className="float-right" >Logout</Button>
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

const mapStateToProps = (state: ICurrent) => ({
  state
});

const mapDispatchToProps = {
  logOutConnect: logOut,
  accountUpdate: updateAccount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);

