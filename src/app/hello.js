angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {

        var vm = this;

        vm.hero = 'New contact';

        vm.form = {
            name: '',
            telephone: '',
            email: ''
        }

        vm.add = add;

        function add(contact) {

            if(!contact) {
                alert('You must need a valida contact.');
                return;
            }

            ContactFactory.add(contact);

            vm.form = {
                name: '',
                telephone: '',
                email: ''
            };

        }

    }
  });
