angular
    .module('app')
    .factory('ContactFactory', function(ContactService) {

        var factory = {};

        factory.add = add;

        function add(contact) {

            ContactService.push(contact);
            console.log(ContactService.getList());
        }


        return factory;


    });