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

        // home.thinking = function (milliseconds) {
        //   var start = new Date().getTime();
        //   alert("works!");
        //   for (var i = 0; i < 1e7; i++) {
        //     if ((new Date().getTime() - start) > milliseconds) {
        //       break;
        //     };
        //   };
        // };

        home.respond = function () {
          // Bot auto response
            home.newMessage.roomId = home.activeRoom.$id;
            home.newMessage.username = home.activeRoom.name;
            home.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
            home.newMessage.content = faker.hacker.phrase() // Faker data here?
            Message.send(home.newMessage);
            home.newMessage.content = null;
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
}());
