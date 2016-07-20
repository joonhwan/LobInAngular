import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import '!style!css?minimize!./style.css';

console.log('main');
bootstrap(AppComponent, []);
console.log('after');