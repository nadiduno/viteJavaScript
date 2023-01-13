import {destrucGitHub} from './destructuring-github';    

//*******************API GitHub BIO*******************
export async function apiGitHubBio(){
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

//*******************API GitHub ALL*******************
export async function apiGitHubAll(){
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
