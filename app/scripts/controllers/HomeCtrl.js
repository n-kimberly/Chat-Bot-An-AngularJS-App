/*global angular*/

(function () {
    'use strict';
    function HomeCtrl(Room) {
        // var ctrl = this;
        // ctrl.test = 'Home Test';
        // ctrl.rooms = Room.all;
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
}());
