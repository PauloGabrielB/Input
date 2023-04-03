// Exercicio do Livro - Java Script do Básico ao Avançado

var numeroPassageiros = 23;

if(numeroPassageiros === 0){console.log('O Transporte está vazio.');}
else if (numeroPassageiros > 0 && numeroPassageiros < 50)
{console.log('O Transporte tem passageiros.');}
else {console.log('O Transporte está lotado.');}

var nome = 'Gabriel';
var emprego = 'desenvolvedor';

switch (emprego) {
    case 'barbeiro':
        console.log(nome + '  é um Barbeiro');
        break
    case 'empresario':
        console.log(nome + ' é um Empresario');
        break
    case 'desenvolvedor':
        console.log(nome + 'é um Desenvolvedor');
        break
    default:
        console.log(nome + ' trabalha em outra coisa.'); 
}