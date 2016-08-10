declare function require(path): any;

class GridViewTestController implements ng.IComponentController {
  message: string = "Hello World";
  settings: any;

  constructor() {
    this.init();
  }

  init() {
    let people = [{
      id: 1,
      name: "Pedro",
      age: 13
    }, {
        id: 2,
        name: "Clara",
        age: 22
      }, {
        id: 3,
        name: "John",
        age: 33
      }, {
        id: 4,
        name: "Pier",
        age: 27
      }];
    this.settings = {
      altrows: true,
      width: 500,
      height: 300,
      source: people,
      columns: [
        { text: 'Id', dataField: 'id', width: 150 },
        { text: 'Name', dataField: 'name', width: 200 },
        { text: 'Age', dataField: 'age', width: 150 }
      ]
    }
  }
}

class GridViewTestComponent implements ng.IComponentOptions {
  template = require('./gridViewTest.html');
  controller = GridViewTestController;
  controllerAs = 'vm';
  constructor() {
    console.log('grid-view component is created.');
  }
}

export let gridViewTest = new GridViewTestComponent();