/*global angular*/
/*global firebase*/

(function () {
    'use strict';

    function Message($firebaseArray) {

        var Message = {};
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);

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
