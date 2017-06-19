/*global angular*/

(function () {
    'use strict';
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
        this.addRoom = function () {
            // Service to open modal windows
            $uibModal.open({
                // Modal's content
                templateUrl: '/templates/modal.html',
                // Modal's window class
                size: 'sm',
                // Controller for modalInstance
                controller: 'ModalCtrl as modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
}());
