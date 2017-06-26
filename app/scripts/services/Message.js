/*global angular*/
/*global firebase*/

var Message,
    ref,
    messages;

(function () {
    'use strict';

    function Message($firebaseArray) {

        Message = {};
        ref = firebase.database().ref().child('messages');
        messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        Message.send = function (newMessage) {
            messages.$add(newMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
}());
