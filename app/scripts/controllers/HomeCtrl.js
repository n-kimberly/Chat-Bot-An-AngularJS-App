/*global angular*/

var home;

(function () {
    'use strict';

    // Inject cookies object to retrieve associated username
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        home = this;
        home.rooms = Room.all;
        home.activeRoom = null;

        // Retrieve associated username
        home.currentUser = $cookies.get('blocChatCurrentUser');

        home.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/room.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };

        home.setActiveRoom = function (room) {
            home.activeRoom = room;
            home.messages = Message.getByRoomId(home.activeRoom.$id);
        };

        home.sendMessage = function () {
          // User message
            home.newMessage.roomId = home.activeRoom.$id;
            home.newMessage.username = home.currentUser;
            home.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            Message.send(home.newMessage);
        };

        home.respond = function () {
          // Bot auto response
            home.newMessage.roomId = home.activeRoom.$id;
            home.newMessage.username = "The Un-Clever Bot";
            home.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            home.newMessage.content = faker.company.bs() // Faker data here?
            Message.send(home.newMessage);
            home.newMessage.content = null;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
}());
