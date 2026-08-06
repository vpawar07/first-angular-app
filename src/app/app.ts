import { Component, EventEmitter, Output, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;
  selectedUser = signal('No user selected');

  onSelectUser(userId: string) {
    this.selectedUser.set(this.users.find(u => u.id === userId)?.name || 'Unknown User');
  }
}
