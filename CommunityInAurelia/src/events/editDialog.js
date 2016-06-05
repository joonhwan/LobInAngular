import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';

@inject(DialogController)
export class EditDialog {
      constructor(dialogController) {
          this.dialogController = dialogController;
      }
      
      activate(event) {
          // deep copy
          this.eventTarget = event;
          this.event = JSON.parse(JSON.stringify(event));
      }
      
      save() {
          this.eventTarget.title = this.event.title;
          this.eventTarget.description = this.event.description;
          this.dialogController.ok();
      }
      
      cancel() { 
          this.dialogController.cancel();
      }
}