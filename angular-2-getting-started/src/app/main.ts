import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

import '!style!css?minimize!./style.css';

bootstrap(AppComponent, [
  appRouterProviders
])
.catch(err => console.error(err))
;