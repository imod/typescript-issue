import { Observable } from "rxjs";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { map } from "rxjs/operators";

export function login(
  username: string,
  password: string
): Observable<string> {
  return ajax.post(
    `http://localhost:8080/login`,
    {
      userId: username,
      password: password
    },
    { "Content-Type": "application/json" }
  ).pipe(map<AjaxResponse,string>(response => (response.response.token)));
}
