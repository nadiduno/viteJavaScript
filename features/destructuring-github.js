import {writeDinamic} from './rest-parameter';

//*******************Destructuring GitHub*******************
export function destrucGitHub({location,login: Nickname,blog : Site}){
    //Desestruturos argumentos
    //Senão deixo vazio o argumento e declaro assim 
    // const {location,login: Nickname,blog : Site}=body;
    // writeDinamic(Object.entries({location,Nickname,Site}));
    writeDinamic(location,Nickname);
}
