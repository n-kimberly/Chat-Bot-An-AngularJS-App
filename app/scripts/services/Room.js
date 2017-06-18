/*global angular*/
/*global firebase*/

var ref,
    rooms;

(function () {
    'use strict';

    function Room($firebaseArray) {

        Room = {};
        ref = firebase.database().ref().child('rooms');
        rooms = $firebaseArray(ref);
        Room.all = rooms;

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
}());
