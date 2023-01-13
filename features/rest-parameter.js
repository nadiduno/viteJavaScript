// *******************************Rest Parameter*******************************
//Function Rest Parameter: Indefinite number of arguments 
export function writeDinamic(...dataUser){
    dataUser.forEach((dataUser) => {
        //Criando o texto DINAMICAMENTE
        var pNew = document.createElement('p');
        var resultadoNovo = document.createTextNode(dataUser)
        pNew.appendChild(resultadoNovo);
        var pLatest = document.getElementById('texto');
        document.body.insertBefore(pNew, pLatest);
    })
}
