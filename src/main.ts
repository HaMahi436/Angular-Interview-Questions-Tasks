import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LikeComponent } from './like.component';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherise, log the boot error
}).catch(err => console.error(err));

let val1 = new LikeComponent(10,true);
val1.onClick();
console.log('When button is already clicked case - x value: ' + val1.likeCount + ' , y value: ' + val1.isSelected);

let val2 = new LikeComponent(15,false);
val2.onClick();
console.log('When button is not clicked - x value: ' + val2.likeCount + ' , y value: ' + val2.isSelected);