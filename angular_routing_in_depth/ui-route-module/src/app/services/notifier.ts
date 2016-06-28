/// <reference path="../app.d.ts" />
import 'toastr';

export class Notifier {
  static className = 'notifier';
  options: ToastrOptions;

  constructor() {
    this.options = {
      showDuration: 300,
      timeOut: 2000
    };
  }
  success(message: string): void {
    toastr.options = this.options;
    toastr.success(message);
  }
  error(message:string): void {
    toastr.options = this.options;
    toastr.error(message);
  }
}