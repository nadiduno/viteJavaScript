import {writeDinamic} from './rest-parameter';

// *******************************Array*******************************
export function arrayIS6(){

    const originArray=[1,2,3,4,5,'+Oi'];
    const stringArray=['Um','Dois','Três'];
    writeDinamic('Iniciando em...');

    //*****************ForEach***************** 
    //Recorre por cada elemento
    stringArray.forEach(item => {
        writeDinamic(item);
    })


    //*****************JSON.stingfy*****************     
    //O JSON.stingfy mostar o array com um objeto []
    //Com JSON.stringify [1,2,3]
    //Sem JSON.stringify 1,2,3
    writeDinamic('Trabalhando com um array',JSON.stringify(originArray));
    
    //*******************Filter*******************
    //Filtra do Array, selecão dos impars
    const newArray1 = originArray.filter(item => item % 2 === 0)
    writeDinamic('Os números pares são',JSON.stringify(newArray1));
    //Filtra do Array, selecão dos impars
    const newArray2 = originArray.filter(item => item % 2 !== 0)
    writeDinamic('Os números ímpares são',JSON.stringify(newArray2));

    //*******************Map*******************
    // Map cria um novo arreglo do mesmo tamnho
    const newArray= originArray.map(item =>{
        return item*2;
    })
    writeDinamic('Array multiplicado por 2',JSON.stringify(newArray));


    //*******************Every*******************
    //Retorna true o falso se todos os elementos satisfacem a condição
    const everyNumber = originArray.every(item => typeof item === 'number');
    writeDinamic(JSON.stringify(everyNumber ? 'Todos os elementos do array são Numeros' : 'Não todos os elementos do array são Numeros'));
    
    
    
    //*******************Some*******************
    //Retorna true o falso se pelo menos 1 item satisface a condição
    const aLeastOneNumber = originArray.some(item => typeof item !== 'number');
    writeDinamic(JSON.stringify(aLeastOneNumber ? 'Algúm elemento é diferente de número' : 'Nenhum elemento é diferente de número'));
    
    
    //*******************Find*******************
    //Buscar 1 elemento x, retorna o primeiro encontrado
    const elementFind = originArray.find(item => item === 2)
    writeDinamic('"O primeiro elemento par encontrado é:"',elementFind);

    //*******************FindIndex*******************
    //Buscar a posição do 1 elemento x, retorna a posição no array o index
    const elementFindIndex = originArray.findIndex(item => item === 2)
    writeDinamic('"E sua posição é:"',elementFindIndex);
    
    //*******************Reduce*******************
    //Criar uma nova estuctura de dados a partir de algo
    //A funcão reduce tem dois argumentos arrowFuction e o valor para inicializar
    const sumAccumulator= originArray.reduce((accumulator,item) =>{
        return (accumulator+item);
    },0)
    //Como vou criar um array inicializando o novo array com zero o vazio com ''
    //Se desejo criar um objeto, inicializo o objeto em vazio com {}
    writeDinamic('Soma dos elementos do Array',sumAccumulator);

}
