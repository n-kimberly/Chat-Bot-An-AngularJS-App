/*global angular*/
/*global firebase*/

var currentUser;

(function () {
    'use strict';

    function BlocChatCookies($cookies, $uibModal) {

        currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        }

    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
}());
