/*global angular*/
/*global firebase*/

var Room,
    ref,
    rooms;

(function () {
    'use strict';

    function Room($firebaseArray) {

        Room = {};
        ref = firebase.database().ref().child('rooms');
        rooms = $firebaseArray(ref);

        Room.all = rooms;

        // Use, but isolate, $add method from AngularFire.
        Room.add = function (room) {
            rooms.$add(room);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
}());
