import * as angular from 'angular';

class FontScale implements ng.IDirective {
  public link(scope:ng.IScope, elems:JQuery, attrs) {
    let fontScale = attrs.fontScale;
    console.log('link : fontScale = ' + fontScale);
    scope.$watch(fontScale, value => {
      elems.css('font-size', value + '%');
    });
  }
}

fontScale.$inject = [];
export function fontScale() {
  return new FontScale();
} 