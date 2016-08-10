import * as angular from 'angular';
import * as _ from 'lodash';
declare function require(path): any;

class ComboBoxTestController implements ng.IComponentController {
  public data: any[];
  public selectedValue:any;
  public firstNames: string[] = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne"];
  public lastNames: string[] = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
  private comboBoxSettings: any;

  constructor() {
    this.data = [];
    _.zip(this.firstNames, this.lastNames).forEach((names, index) => {
      var row = {};
      row["label"] = names[0];
      row["value"] = names[1];
      this.data.push(row);
    });
    
    let thisData = this.data;
    this.comboBoxSettings = {
      source: this.data,
      itemHeight: 50,
      height: 25,
      width: 220,
      renderer: (index, label, value) => {
        var datarecord = thisData[index];
        var imgurl = '../../images/' + label.toLowerCase() + '.png';
        var img = '<img height="30" width="25" src="' + imgurl + '"/>';
        var table = `<table style="color: inherit; font-size: inherit; font-style: inherit;"><tr><td style="width: 35px;">${img}</td><td>${label} ${value}</td></tr></table>`;
        return table;
      },
      renderSelectedItem: function (index, item) {
        return item.label + " " + item.value;
      }
    };
    this.selectedValue = this.data[0];
  }

  $onInit(): void {
    console.log("grid-update-test-view $onInit() is called");
  }
  
  public click() {
    this.comboBoxSettings.width = 300;
    this.comboBoxSettings.height = 40;
    // refresh the width and height widget properties. 
    this.comboBoxSettings.refresh(['width', 'height']);

    // If you call it without arguments, all defined settings in the comboBoxSettings object will by synchronized with the widget.
    // $scope.comboBoxSettings.refresh();
  };

  public apply() {
    // call apply to select the index.
    this.comboBoxSettings.apply('selectIndex', 4);
    // The above is equal to:
    // $scope.comboBoxSettings.jqxComboBox('selectIndex', 4);
    //
  }
}

class ComboBoxTestComponent implements ng.IComponentOptions {
  template = require('./comboBoxTest.html');
  controller = ComboBoxTestController;
  controllerAs = 'vm';

  constructor() {
    console.log("grid-update-test-view component is created.");
  }
}

export let comboBoxTest = new ComboBoxTestComponent();