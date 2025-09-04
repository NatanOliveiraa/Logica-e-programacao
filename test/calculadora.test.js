const{somarDoisNumeros} = require('../src/calculadora');
const{expect} = require('chai');


// Describe é uma função do mocha e ela tem 2 (duas) entradas (primeira entrada um texto - grupo) a segunda
//entrada é uma função anônima function () ou ()=>
describe('Testes da função soma',()=>{   
    it('A função deve ser capaz de somar dois números positivos',()=>{
         //Coleto o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5,10);

        /*Comparo o resultado com o valor esperado
          Nesse caso faço uso do chai para fazer a comparação
          através do comando const{expect} = require('chai')
          após isso, posso utilizar a função para comparar
          expect( resultado da soma).to.equal(resultado esperado)

        */ 
        expect(resultadoDaSoma).to.equal(15);
    });
    it('A função deve ser capaz de somar um número positivo e um negativo',()=>{
        //coleto o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50,-30);

        //comparo o resultado obtido com o resultado esperado
        expect(resultadoDaSoma).to.equal(20);

    });
    it('A função deve ser capaz de somar dois números negativos',()=>{
        //coleto o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-20,-30);

        //comparo o resultado obtido com o resultado esperado
        expect(resultadoDaSoma).to.equal(-50);
    });
     it('A função deve ser capaz de somar dois números zerados',()=>{
        //Coleto o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0,0);

        //Comparo o valor obtido com o valor esperado
        expect(resultadoDaSoma).to.equal(0);
    });

});

