// IS6 features no JavaScript
// *******************************ForEach*******************************
export function writeDinamic(...dataUser){
    dataUser.forEach((dataUser) => {
        //Criando o texto DINAMICAMENTE
        var spanNova = document.createElement('p');
        var resultadoNovo = document.createTextNode(dataUser)
        spanNova.appendChild(resultadoNovo);
        var spanAtual = document.getElementById('texto');
        document.body.insertBefore(spanNova, spanAtual);
    })
}

//*******************Nullish Caoalescing Operator*******************
function dataUser(old){
// document.getElementById("paragrafo").innerHTML = `<i>${texto}</i>`;
// Nullish Caoalescing Operator
// document.body.innerText = 'Idade: ' + (old ?? 'não registrada');
// Com o operador or || ele toma zero como não válido (old || 'não registrada');
// Por isso temos o operador  ?? Nullish Caoalescing Operator
// const text = (old ? 'não registrada');
return((old ?? 'idade não registrada'));
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
apiGitHub().then((bio) =>{writeDinamic(bio)});
// apiGitHubRepos().then((body) =>{writeDinamic(JSON.stringify(Object.entries(body)))});
apiQuoteKanyeWest().then((quote) =>{writeDinamic(quote,'Kanye West')});
ObjectUser();