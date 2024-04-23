import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() genres: any[] = [];
  constructor(private modalCtrl: ModalController, private route: Router) {}

  ngOnInit() {}

  openGenre(genre: any) {
    this.route.navigate(['/genres', genre.name, genre.id]);
    this.dismiss();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
