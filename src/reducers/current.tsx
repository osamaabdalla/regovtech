import { IAuthenticate, IUnauthenticate } from "../actions/current";
import { AUTHENTICATE, UNAUTHENTICATE } from "../constants";
import { ICurrent } from "../types";

export default function currentReducer(
  state: ICurrent = {
    user: {
      id: 0,
      name: '',
      email: '',
      password: '',
      identity: ''
    },
    isAuthenticated: null,
  },
  action: IAuthenticate | IUnauthenticate,
): ICurrent {
  switch (action.type) {
    case AUTHENTICATE:
      const savedusers = window.localStorage.getItem("usersdata");
      const loggeduserid = window.localStorage.getItem("loggeduserid");
      const usrdata = typeof savedusers === "string" ? JSON.parse(savedusers) : null;
      if(usrdata){
        for (let index = 0; index < usrdata.length; index++) {
          const element = JSON.parse(usrdata[index]);
          if(element.email === loggeduserid){
            return {
              user: {
                id: element.id,
                name: element.name,
                email: element.email,
                password: element.password,
                identity: element.identity
              },
              isAuthenticated: true
            }
          }
        }
      }
    // eslint-disable-next-line no-fallthrough
    case UNAUTHENTICATE:
      return {
        user: {
          id: 0,
          name: '',
          email: '',
          password: '',
          identity: ''
        },
        isAuthenticated: false,
      }
  }
  return state;
}
