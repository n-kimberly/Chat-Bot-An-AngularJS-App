/*global angular*/

(function () {
    'use strict';

    // Inject Message factory
    function HomeCtrl(Room, Message, $uibModal) {
        var home = this;
        home.rooms = Room.all;

        // Initialize active room
        home.activeRoom = null;

        // FUnction to add new room
        home.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };

        // FUnction to switch to and display messages of new active room
        home.setActiveRoom = function (room) {
            home.activeRoom = room;
            home.messages = Message.getByRoomId(home.activeRoom.$id);
            console.log(home.messages);
        }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
}());
