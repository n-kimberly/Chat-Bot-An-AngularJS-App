/*global angular*/

var modal;

(function () {
    'use strict';

    // Inject cookies
    function ModalCtrl(Room, $uibModalInstance, $cookies) {

        // Changing all instances of this to modal for easier referencing in modal.html
        modal = this;

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.submitNewRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.submitUsername = function () {
            // Set blocChatCurrentUser input as modal.username
            $cookies.put('blocChatCurrentUser', modal.username);
            // Close window
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
}());
