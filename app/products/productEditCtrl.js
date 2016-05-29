/**
 * Created by jhlee on 2016. 5. 29..
 */
(function() {
    "use strict";

    angular
        .module('productManagement')
        .controller('productEditCtrl', ['$state', 'product', 'uibDateParser', productEditCtrl])

    function productEditCtrl($state, product, uibDateParser) {
        var vm = this;
        vm.product = product;

        if(vm.product && vm.product.productId) {
            vm.title = "Edit : " + vm.product.productName;
        } else {
            vm.title = "Add New Product";
        };

        toastr.options.positionClass = "toast-bottom-center";
        vm.save = function() {
            vm.product.$save(function(data) {
                $state.go('productList');
                toastr['success']('Successful save : ' + data.productName);
            })
        }

        vm.cancel = function() {
            $state.go('productList');
        }

        vm.addTags = function() {
            if(vm.newTags) {
                var tagsArrayToAdd = vm.newTags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(tagsArrayToAdd) : tagsArrayToAdd;
                vm.newTags = '';
            } else {
                alert('Please enter one or more tags separated by commas');
            }
        }

        vm.removeTag = function(index) {
            var tagCount = vm.product.tags ? vm.product.tags.length : 0;
            if(index >= 0 && index < tagCount) {
                vm.product.tags.splice(index, 1);
            }
        }

        // datepicker 관련
        vm.releaseDate = uibDateParser.parse(product.releaseDate, 'yyyy/MM/dd');
        vm.formats = ['yyyy/MM/dd', 'dd-MMMM-yyyy', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];
        vm.altInputFormats = ['M!/d!/yyyy'];

        vm.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        }
        vm.popup1 = {
            opened: false
        }
        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
        vm.open1 = function() {
            vm.popup1.opened = true;
        }
    }
}());