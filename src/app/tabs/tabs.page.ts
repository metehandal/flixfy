import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  selectedTab: any;

  public appPages = [
    {
      tab: 'home',
      href: '/tabs/home',
      icon: 'home-outline',
      iconSelected: 'home',
      label: 'Home',
    },
    {
      tab: 'search',
      href: '/tabs/search',
      icon: 'search-outline',
      iconSelected: 'search',
      label: 'Search',
    },
    {
      tab: 'soon',
      href: '/tabs/soon',
      icon: 'videocam-outline',
      iconSelected: 'videocam',
      label: 'Soon',
    },
    {
      tab: 'favorites',
      href: '/tabs/favorites',
      icon: 'heart-outline',
      iconSelected: 'heart',
      label: 'Favorites',
    },
    {
      tab: 'profile',
      href: '/tabs/profile',
      icon: 'person-outline',
      iconSelected: 'person',
      label: 'Profile',
    },
  ];
  constructor() {}

  ngOnInit() {}

  setCurrentTab(tab: any) {
    this.selectedTab = tab.tab;
  }
}
