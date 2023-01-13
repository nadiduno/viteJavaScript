import {writeDinamic} from './rest-parameter';

//*******************Destructuring Repos GitHub*******************
function destrucGitHubRepos({name,description}){
    writeDinamic(name,description ?? 'Repositório sem descripcão');
}

export async function apiGitHubRepos(){
    try{
        const response = await fetch('https://api.github.com/users/nadiduno/repos');
        const body = await response.json();
        console.log(body);
        //A API retorna um array de array
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
