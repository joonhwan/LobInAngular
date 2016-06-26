/// <reference path="../app.d.ts" />

export default function registerAboutComponent(app:ng.IModule) {
  app.component("about", {
    template: "<h3>This is About Page!</h3>"
  });
}