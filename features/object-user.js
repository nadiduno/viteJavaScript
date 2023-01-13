import {writeDinamic} from './rest-parameter';

//*******************Objeto*******************
export function ObjectUser(){
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
