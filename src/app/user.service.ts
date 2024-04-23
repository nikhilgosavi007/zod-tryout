import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {z} from "zod";
import {Observable} from "rxjs";


export const UserSchema = z.object({
  name: z.string().min(3, {message: "Der Name muss mindestens 3 Zeichen lang sein."}),
  age: z.number().min(18, {message: "Sie müssen mindestens 18 Jahre alt sein."}),  // Altersvalidierung hinzufügen
  address: z.string()
});

export type User = z.infer<typeof UserSchema>;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpService: any;
  configUrl = "http//:localhost:8080/users";

  constructor(http: HttpClient) {
    this.httpService = http;
  }

  getUsers(): Observable<Array<User>> {
    return new Observable<Array<User>>(observer => observer.next([
      {
        name: "St",
        age: 14,
        address: "Chemnitz"
      },
      {
        name: "Michael",
        age: 48,
        address: "Adelsberg"
      },
      {
        name: "Nikhil",
        age: 29,
        address: "Chemnitz"
      }
    ]))
  }

}
