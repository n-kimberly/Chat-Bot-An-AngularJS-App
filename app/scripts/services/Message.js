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

        // Query firebase
        Message.getByRoomId = function (roomId) {
            // Return messages that match active roomId
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
}());
