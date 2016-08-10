import * as angular from 'angular';
declare function require(path): any;

class TabbedViewController implements ng.IComponentController {
  public settings: any;
  constructor() {
    // the 'layout' JSON array defines the internal structure of the layout
    let layout = [
      {
        type: 'layoutGroup',
        orientation: 'horizontal',
        items:
        [
          {
            type: 'layoutGroup',
            orientation: 'vertical',
            width: 500,
            items:
            [
              {
                type: 'documentGroup',
                height: 400,
                minHeight: 200,
                items:
                [
                  {
                    type: 'documentPanel',
                    title: 'Document 1',
                    contentContainer: 'Document1Panel'
                  },
                  {
                    type: 'documentPanel',
                    title: 'Document 2',
                    contentContainer: 'Document2Panel'
                  }
                ]
              },
              {
                type: 'tabbedGroup',
                height: 200,
                pinnedHeight: 30,
                items:
                [
                  {
                    type: 'layoutPanel',
                    title: 'Error List',
                    contentContainer: 'ErrorListPanel'
                  },
                  {
                    type: 'layoutPanel',
                    title: 'Output',
                    contentContainer: 'OutputPanel',
                    selected: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    this.settings = {
      width: 800,
      height: 600,
      layout: layout
    };
  }
  $onInit() {
    console.log('tabbed-view onInit() is called.');
    $('#jqxLayout')['jqxLayout'](this.settings);

    function fill() {
      var offset = $('#jqxLayout').offset();
      var w = $(window).width();
      var h = $(window).height();
      console.log('sizing ' + w + ' x ' + h);
      let tabDiv = $('#jqxLayout') as any;
      tabDiv
        .jqxLayout({ width: w, height: h })
        .jqxLayout('render');
    }
    $(window).resize(function () {
      fill();
    });
    fill();
  }
}

class TabbedViewComponent implements ng.IComponentOptions {
  template = require('./tabbedView.html');
  controller = TabbedViewController;
  controllerAs = 'vm';
}

export let tabbedView = new TabbedViewComponent();