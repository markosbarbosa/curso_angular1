angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) {
      this.hello = 'Hello World!';

      this.person = {
          name: 'Marcos',
          lastName: 'Barbosa'
      }


      this.list = [{
          name: 'Marcos',
          lastname: 'Barbosa'
      },
      {
          name: 'Marcia',
          lastname: 'Barbosa'
      },
      {
          name: 'Danielle',
          lastname: 'Barbosa'
      }];


      this.sum = function(num1, num2) {
          return alert(MathService.sumService(num1, num2));
      }

      this.sub = function(num1, num2) {
          return alert(MathService.subService(num1, num2))
      }


    }
  });
