import { ThunkDispatch as Dispatch } from "redux-thunk";

import * as constants from "../constants";
import { AUser } from "../types";

export interface IAuthenticate {
  type: constants.AUTHENTICATE;
}

function authenticate(): IAuthenticate {
  return {
    type: constants.AUTHENTICATE,
  };
}

export interface IUnauthenticate {
  type: constants.UNAUTHENTICATE;
}

function unauthenticate(): IUnauthenticate {
  return {
    type: constants.UNAUTHENTICATE,
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;

export function logIn(user: AUser) {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const savedusers = await window.localStorage.getItem("usersdata");
    const usrdata = typeof savedusers === "string" ?
      JSON.parse(savedusers) :
      null;

    if(usrdata){
      for (let index = 0; index < usrdata.length; index++) {
        const element = JSON.parse(usrdata[index]);
        if(element.email === user.email && element.password === user.password){
          await window.localStorage.setItem("authenticated", "true");
          await window.localStorage.setItem("loggeduserid", element.email);
          dispatch(authenticate())
        }
      }
    }
  }
}

export function logOut() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    await window.localStorage.setItem("authenticated", "false");
    await window.localStorage.removeItem("loggeduserid");
    dispatch(unauthenticate());
  };
}

export function updateAccount(user: AUser) {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const savedusers = await window.localStorage.getItem("usersdata");
    const loggeduserid = await window.localStorage.getItem("loggeduserid");
    const savedusersdata = typeof savedusers === "string" ?
      JSON.parse(savedusers) :
      null;

    if(savedusersdata){
      for (let index = 0; index < savedusersdata.length; index++) {
        var element = JSON.parse(savedusersdata[index]);
        if(element.email === loggeduserid){
          var newdata = {
            ...user
          }
          savedusersdata[index] = JSON.stringify(newdata);
        }
      }
    }
    await window.localStorage.setItem("usersdata", JSON.stringify(savedusersdata));
  };
}

export function addAccount(user: AUser) {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const savedusers = await window.localStorage.getItem("usersdata");
    const savedusersdata = typeof savedusers === "string" ?
      JSON.parse(savedusers) :
      null;

    var usersdata = [];
    if(savedusersdata){
      usersdata = savedusersdata;
    }
    user.id = Math.random();
    var newuser = JSON.stringify(user);
    usersdata.push(newuser);
    await window.localStorage.setItem("usersdata", JSON.stringify(usersdata));
  };
}

export function getAccount(user: AUser) {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const savedusers = await window.localStorage.getItem("usersdata");
    const savedusersdata = typeof savedusers === "string" ?
      JSON.parse(savedusers) :
      null;

    var usersdata = [];
    if(savedusersdata){
      usersdata = savedusersdata;
    }
    var newuser = JSON.stringify(user);
    usersdata.push(newuser);
    await window.localStorage.setItem("usersdata", JSON.stringify(usersdata));
  };
}

export function checkAuthentication() {
  return async (dispatch: Dispatch<AuthenticationAction, {}, any>) => {
    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ?
      JSON.parse(auth) :
      null;

    formattedAuth ? dispatch(authenticate()) : dispatch(unauthenticate());
  };
}
