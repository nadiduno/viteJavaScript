// IS6 features no JavaScript

//*******************Template Literals*******************
function dataUserImterpolation(nameUser){
    //*******************Interpolation*******************
    // `Menssagem ${variavel}`
    //*******************Ternary Operator variavel ? V1:V2 *******************
    //No operador ternario toma o valor da ezquerda sim é verdadeira a condição
    //Se é falso toma o valor da direita
    //Apresenta Bem-vido nomeDoUsuario se o valor exisitir ou Bem-vido visitante se o nome não existir
    return(`Bem-vido ${nameUser ? nameUser : 'visitante'}`);
    }
    
//*******************Nullish Caoalescing Operator*******************
function dataUser(ageUser){
// (ageUser ?? 'Idade não registrada');
// Com o operador or || ele toma zero como não válido (ageUser || 'Idadenão registrada');
// Por isso temos o operador  ?? Nullish Caoalescing Operator
return((ageUser ?? 'Idade não registrada'));
}

    

// *******************************ForEach*******************************
function writeDinamic(...dataUser){
    dataUser.forEach((dataUser) => {
        //Criando o texto DINAMICAMENTE
        var pNew = document.createElement('p');
        var resultadoNovo = document.createTextNode(dataUser)
        pNew.appendChild(resultadoNovo);
        var pLatest = document.getElementById('texto');
        document.body.insertBefore(pNew, pLatest);
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
//*******************Async - Promise*******************
async function apiQuoteKanyeWest(){
    try{
        const response = await fetch('https://api.kanye.rest');
        const body = await response.json();
        console.log(body);
        return (body.quote);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}

//*******************API GitHub*******************
async function apiGitHub(){
    try{
        const response = await fetch('https://api.github.com/users/nadiduno');
        const body = await response.json();
        console.log(body);
        //Retornando 1 campo (BIO)
        return (body.bio);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}

//*******************Destructuring GitHub*******************
function destrucGitHub({location,login: Nickname,blog : Site}){
    //Desestruturos argumentos
    //Senão deixo vazio o argumento e declaro assim 
    // const {location,login: Nickname,blog : Site}=body;
    // writeDinamic(Object.entries({location,Nickname,Site}));
    writeDinamic(location,Nickname,Site);
}

async function apiGitHubAll(){
    try{
        const response = await fetch('https://api.github.com/users/nadiduno');
        const body = await response.json();
        destrucGitHub(body);
        //Retornando toda a API
        return (body);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}

//*******************Destructuring Repos GitHub*******************
function destrucGitHubRepos({name,description}){
    writeDinamic(name,description ?? 'Repositório sem descripcão');
}
async function apiGitHubRepos(){
    try{
        const response = await fetch('https://api.github.com/users/nadiduno/repos');
        const body = await response.json();
        console.log(body);
        //A API retorna um array de arry
        // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        //O primeiro elemento esta assim 
        //0:{id: 525494942, node_id: 'R_kgDOH1Jqng', name: '21daycode', full_name: 'nadiduno/21daycode', private: false, …} 
        //Quero pegar name e description, para isso faço um forEach para recorrer meu sob array e dentro dele desestruturo (extraindo os dados desejados)
        body.forEach(item => {
            destrucGitHubRepos(item);
        })
        return (body);
    } catch(err){
        console.log(err);
    } finally {
        console.log('End');
    }
}





//*******************Declaration*******************
const nameUser='Nadi';
//const nameUser=null;
//const ageUser=40;
const ageUser=null;

//*******************Call Function*******************
// writeDinamic('Features IS6 e API');
// writeDinamic(dataUserImterpolation(nameUser))
// writeDinamic(dataUser(ageUser));
// // writeDinamic(dataUserImterpolation(nameUser),dataUser(ageUser));

// arrayIS6();

// ObjectUser();

// apiQuoteKanyeWest().then((quote) =>{writeDinamic(quote,'Kanye West')});
apiGitHub().then((bio) =>{writeDinamic(bio)});
apiGitHubAll().then((body) =>{writeDinamic()});
apiGitHubRepos().then((body) =>{writeDinamic()});

// apiGitHubRepos().then((body) =>{writeDinamic(JSON.stringify(Object.entries(body)))});



//Exemplos de Imprimir com Document
// document.write('<br><br>Oi');
// document.getElementById("paragrafo").innerHTML = `<p>Oi ${nameUser}</p>`;
