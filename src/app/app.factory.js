angular
    .module('app')
    .factory('ContactFactory', function(ContactService) {

        var factory = {};

        factory.add = add;
        factory.list = list;

        function add(contact) {
            ContactService.push(contact);
        }


        function list() {
            return ContactService.getList();
        }

        return factory;


    });