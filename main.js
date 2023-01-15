import {dataUserInterpolation} from './features/interpolation';
import {dataUser} from './features/nullish-caoalescing';
import {writeDinamic} from './features/rest-parameter';
import {arrayIS6} from './features/array-IS6';
//Array IS6 => ForEcah Map Every Some Find FindIndex Reduce
// import {ObjectUser} from './features/object-user';    
import {apiQuoteKanyeWest} from './features/api-kanyewest';    
import {apiGitHubBio,apiGitHubAll} from './features/api-github';    
import {apiGitHubRepos} from './features/api-github-repositories';    

//*******************Declaration*******************
const nameUser='Nadi';
//const nameUser=null;
//const ageUser=40;
const ageUser=null;

//*******************Call Function*******************

//IS6 features no JavaScript
//writeDinamic('Features IS6 e API');

//Function Rest Parameter: Indefinite number of arguments 
writeDinamic(dataUserInterpolation(nameUser),dataUser(ageUser));

//Com rest parameter, posso enviar x número de parâmetros a minha função
//Ou enviar só 1 parâmetro
// writeDinamic(dataUserInterpolation(nameUser));
// writeDinamic(dataUser(ageUser));


//arrayIS6();

// ObjectUser();

//API Public
apiGitHubBio().then((bio) =>{writeDinamic(bio)});
apiGitHubAll().then((body) =>{writeDinamic()});
apiGitHubRepos().then((body) =>{writeDinamic()});

// apiQuoteKanyeWest().then((quote) =>{writeDinamic(quote,'Kanye West')});

//Exemplos de Imprimir com Document
// document.write('<br><br>Oi');
// document.getElementById("paragrafo").innerHTML = `<p>Oi ${nameUser}</p>`;

// Import stylesheets
import './style.css';