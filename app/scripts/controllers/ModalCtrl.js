// Create separate controller for Modal.

/*global angular*/

(function () {
    'use strict';
    function ModalCtrl(Room, $uibModalInstance) {

        // Write a cancel function in case we do not want to submit data.
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };

        // Write a submit function to pass data to Room and close modal.
        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
}());
