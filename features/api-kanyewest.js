//*******************Async - Promise*******************
export async function apiQuoteKanyeWest(){
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
