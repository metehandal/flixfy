import { Component, Input, OnInit, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() title?: string;
  @Input() movies?: any[];

  constructor(private router: Router) {}

  ngOnInit() {}

  goCategory(categoryName: any) {
    this.router.navigate(['/categories', categoryName]);
  }
}
