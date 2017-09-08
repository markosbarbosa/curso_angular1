angular
    .module('app')
    .service('MathService', function(MathFactory) {

        //Aqui, optou-se por herdar de MathFactory
        //Mas poder�amos escrever tudo aqui mesmo
        this.sumService = MathFactory.sum;
        this.subService = MathFactory.sub;


        //Essa � uma segunda op��o se implementa��o
        //Aqui � s� pra ficar como consulta mesmo
        this.sumService2 = function(num1, num2) {
            return MathFactory.sum(num1, num2);
        }
        this.subService2 = function(num1, num2) {
            return MathFactory.sub(num1, num2);
        }


    });