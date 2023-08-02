
//Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

const tresValores = (idade, ensinoMedio, ensinoSuper) =>{

    if(idade => 18){
     console.log("É maior de idade");
        } else {
     ("É menor de idade")
     console.log("É menor de idade")
    } 
    if ( ensinoMedio === true) {
        console.log("Ensino médio concluido")
    } else {
        console.log("Não concluiu ensino médio")
           }
    if (ensinoSuper === true) {
        console.log("Ensino superior cursando")
    } else {
        console.log("Estudante não matriculado")
    }
     }
tresValores (18, true, true)

