import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home',
    },
    {
      title: 'Search',
      url: '/tabs/search',
      icon: 'search',
    },
    {
      title: 'Soon',
      url: '/tabs/soon',
      icon: 'videocam',
    },
    {
      title: 'Favorites',
      url: '/tabs/favorites',
      icon: 'heart',
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      icon: 'person',
    },
  ];
  constructor() {}
}
