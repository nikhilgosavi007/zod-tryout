import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {User, UserSchema, UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";
import {JsonPipe} from "@angular/common";
import {z} from 'zod';
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, JsonPipe],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zod-tryout';
  users: Array<User> = [];


  constructor(userService: UserService) {
    userService.getUsers().pipe()

    // this.users.forEach((user) => {
    //   // Validierung der Benutzerdaten
    //   try {
    //     const userProfile = UserSchema.parse(user);
    //     console.log("Validated data:", userProfile);
    //   } catch (error) {
    //     if (error instanceof z.ZodError) {
    //       console.log("Validation error:", error.errors.map(err => `${err.path.join('.')} - ${err.message}`));
    //     } else {
    //       console.error("Unexpected error:", error);
    //     }
    //   }
    // })
  }


}

