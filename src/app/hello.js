angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {

        var vm = this;
        var id = 0;

        vm.hero = 'New contact';

        vm.list = [];

        vm.form = {
            id: 0,
            name: '',
            telephone: '',
            email: ''
        }

        vm.add = add;
        vm.edit = edit;
        vm.remove = remove;

        vm.heroList = 'List a contacts';

        (function onInit() {
            vm.list = ContactFactory.list();
        })();

        function add(contact) {

            if(!contact) {
                alert('You must need a valida contact.');
                return;
            }

            if(contact.id) {
                clean();
                return ContactFactory.edit(contact);
            }


            contact.id = ++id;

            ContactFactory.add(contact);

            clean();

        }

        function edit(contact, indexList) {

            if(!contact) {
                alert('Your must need a valid a contact');
                return;
            }

            vm.form.id = contact.id;
            vm.form.name = contact.name;
            vm.form.telephone = contact.telephone;
            vm.form.email = contact.email;

        }

        function remove(contact) {

            if (!contact) {
                alert('Your must need a valid a contact');
                return;
            }

            if (confirm('Tem certeza que deseja deletar' + contact.name)){
                return ContactFactory.remove(contact);
            }

        }


        function clean() {
            return vm.form = {
                id: 0,
                name: '',
                telephone: '',
                email: ''
            }

        }
    }
  });
