/*global angular*/
/*global firebase*/

var currentUser;

(function () {
    'use strict';

    // Require users to login with username upon site load
    function BlocChatCookies($cookies, $uibModal) {

        // Return key for blocChatCurrentUser
        currentUser = $cookies.get('blocChatCurrentUser');

        // Compares with currentUser
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
