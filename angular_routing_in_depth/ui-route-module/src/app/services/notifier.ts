/// <reference path="../app.d.ts" />
import * as toastr from 'toastr';

export class Notifier {
  static className = 'notifier';
  options: ToastrOptions;

  constructor() {
    this.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": 300,
      "hideDuration": 1000,
      "timeOut": 5000,
      "extendedTimeOut": 1000,
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
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