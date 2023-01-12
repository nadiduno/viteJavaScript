// IS6 features no JavaScript

//*******************Nullish Caoalescing Operator*******************
function dataUser(old){
// (old ?? 'não registrada');
// Com o operador or || ele toma zero como não válido (old || 'não registrada');
// Por isso temos o operador  ?? Nullish Caoalescing Operator
// (old || 'não registrada');
return((old ?? 'Idade não registrada'));
}

// *******************************ForEach*******************************
function writeDinamic(...dataUser){
    dataUser.forEach((dataUser) => {
        //Criando o texto DINAMICAMENTE
        var spanNova = document.createElement('p');
        var resultadoNovo = document.createTextNode(dataUser)
        spanNova.appendChild(resultadoNovo);
        var spanAtual = document.getElementById('texto');
        document.body.insertBefore(spanNova, spanAtual);
    })
}
// *******************************Arrow*******************************
function arrayIS6(){

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
    //*******************Ternary Operator variavel ? V1:V2 *******************
    // No operador ternario toma o valor da ezquerda sim é verdadeira a condição
    // Se é falso toma o valor da direita
    
    
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
 
//*******************Objeto*******************
function ObjectUser(){
    const user={
        name:'Nadi Duno',
        old: 40,
        address:{
            city:'Salvador, Ba',
            country:'Brasil',
        },
        api:"https://api.github.com/users/nadiduno",
    };
    writeDinamic(JSON.stringify(Object.entries(user)));
    // **Destructuring** e 
    //*******************Rest Operator*******************
    const {name,address, ...rest } = user;
    writeDinamic(JSON.stringify(Object.values(rest)));
}
//*******************Destructuring*******************
function destrucGitHub({location,login: Nickname,blog : Site}){
    //Desestruturo nos argumentos
    //Senão deixo vazio o argumento e declaro assim 
    // const {location,login: Nickname,blog : Site}=body;
    writeDinamic(Object.entries({location,Nickname,Site}));
}    
//*******************Async - Promise*******************
async function apiGitHub(){
    try{
        const response = await fetch('https://api.github.com/users/nadiduno');
        const body = await response.json();
        console.log(body);
        destrucGitHub(body)
        return (body.bio);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}

//*******************Outher Api*******************
async function apiQuoteKanyeWest(){
    try{
        const response = await fetch('https://api.kanye.rest');
        // const response = await fetch('https://api.adviceslip.com/advice');
        const body = await response.json();
        console.log(body);
        return (body.quote);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}



//*******************Call Function*******************
// document.write('<br><br>Oi');
// document.getElementById("paragrafo").innerHTML = `<p>Oi ${nameUser}</p>`;
writeDinamic('Features IS6 e API');
writeDinamic('Nadi',dataUser(null));
arrayIS6();
ObjectUser();
apiGitHub().then((bio) =>{writeDinamic(bio)});
// apiGitHubRepos().then((body) =>{writeDinamic(JSON.stringify(Object.entries(body)))});
apiQuoteKanyeWest().then((quote) =>{writeDinamic(quote,'Kanye West')});
