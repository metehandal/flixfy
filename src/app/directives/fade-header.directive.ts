import {
  Directive,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]',
})
export class FadeHeaderDirective implements OnInit {
  @Input('appFadeHeader') toolbar: any;

  constructor(private domCtrl: DomController, private renderer: Renderer2) {}

  ngOnInit() {
    this.toolbar = this.toolbar.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    let scrollTop = $event.detail.scrollTop;
    if (scrollTop >= 255) {
      scrollTop = 255;
    }
    let opacity = scrollTop / 255; // Calculate opacity value

    // if (opacity > 0.8) {
    //   opacity = 0.8; // Limit opacity to 0.8
    // }

    this.domCtrl.write(() => {
      this.renderer.setStyle(
        this.toolbar,
        'background',
        `linear-gradient(180deg, rgba(1, 11, 25, ${opacity}) 0%, rgba(1, 11, 25, 0) 100%)`
      );
    });

    // this.domCtrl.write(() => {
    //   this.renderer.setStyle(
    //     this.toolbar,
    //     'background',
    //     `rgba(1, 11, 25, ${opacity})`
    //   );
    // });
  }
}
