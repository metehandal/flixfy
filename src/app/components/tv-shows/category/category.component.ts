import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tv-shows',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryTvShows implements OnInit {
  @Input() title?: string;
  @Input() tvshows?: any[];
  constructor() {}

  ngOnInit() {}

  goCategory(categoryName: any) {
    console.log(categoryName);
  }
}
