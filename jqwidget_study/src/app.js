$(document).ready(function () {
  // the 'layout' JSON array defines the internal structure of the layout
  var layout = [{
    type: 'layoutGroup',
    orientation: 'horizontal',
    items: 
    [
      {
        type: 'autoHideGroup',
        alignment: 'left',
        width: 80,
        unpinnedWidth: 200,
        items: 
        [
          {
            type: 'layoutPanel',
            title: 'Toolbox',
            contentContainer: 'ToolboxPanel'
          }, 
          {
            type: 'layoutPanel',
            title: 'Help',
            contentContainer: 'HelpPanel'
          }
        ]
      },
      {
        type: 'layoutGroup',
        orientation: 'vertical',
        width: 500,
        items:
        [
          {
            type: 'documentGroup',
            height: 800,
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
            items: [
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
      }, 
      {
        type: 'tabbedGroup',
        width: 220,
        minWidth: 200,
        items: [
            {
            type: 'layoutPanel',
            title: 'Solution Explorer',
            contentContainer: 'SolutionExplorerPanel'
          }, 
          {
            type: 'layoutPanel',
            title: 'Properties',
            contentContainer: 'PropertiesPanel'
          }
        ]
      }
    ]
  }];
  $('#jqxLayout').jqxLayout({
    width: 800,
    height: 1000,
    layout: layout,
    resizable: true
  });

  function fill() {
    var offset = $('#jqxLayout').offset();
    var w = $(window).width();
    var h = $(window).height();
    console.log('sizing ' + w + ' x ' + h);
    $('#jqxLayout')
      .jqxLayout({ width: w, height: h })
      .jqxLayout('render');
  }
  $(window).resize(function () {
    fill();
  });
  fill();
});