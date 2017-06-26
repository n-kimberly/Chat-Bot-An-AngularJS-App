/*global angular*/

var modal;

(function () {
    'use strict';

    function ModalCtrl(Room, $uibModalInstance, $cookies) {

        modal = this;

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.submitNewRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.submitUsername = function () {
            $cookies.put('blocChatCurrentUser', modal.username);
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
}());
