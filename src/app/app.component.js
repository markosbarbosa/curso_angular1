//@ text
//= Two way databinding
//< One way databinding
//& function

angular
    .module('app')
    .component('hero', {
        templateUrl: 'app/hero.html',
        bindigs: {
            hero: '<'
        },
        controller: function() {
            this.hero = 'Esse e um component angular';
        }
    });