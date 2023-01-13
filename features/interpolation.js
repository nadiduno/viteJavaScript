//*******************Template Literals*******************
export function dataUserInterpolation(nameUser){
    //*******************Interpolation*******************
    // `Menssagem ${variavel}`
    //*******************Ternary Operator variavel ? V1:V2 *******************
    //No operador ternario toma o valor da ezquerda sim é verdadeira a condição
    //Se é falso toma o valor da direita
    //Apresenta Bem-vido nomeDoUsuario se o valor exisitir ou Bem-vido visitante se o nome não existir
    return(`Bem-vido eu sou ${nameUser ? nameUser : 'visitante'}`);
}
