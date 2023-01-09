// IS6 features no JavaScript
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


//*******************Nullish Caoalescing Operator*******************
function dataUser(nameUsers,old){

// document.getElementById("paragrafo").innerHTML = `<i>${texto}</i>`;
// Nullish Caoalescing Operator
// document.body.innerText = 'Idade: ' + (old ?? 'não registrada');
// Com o operador or || ele toma zero como não válido (old || 'não registrada');
// Por isso temos o operador  ?? Nullish Caoalescing Operator
}

// document.write('<br><br>Oi');
// document.getElementById("paragrafo").innerHTML = `<p>Oi ${nameUser}</p>`;
writeDinamic('Nadi',40);
dataUser('Nadi',40);