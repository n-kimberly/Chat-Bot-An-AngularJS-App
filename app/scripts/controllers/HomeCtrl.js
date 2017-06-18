/*global angular*/

(function () {
    'use strict';
    function HomeCtrl(Room) {
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
}());
