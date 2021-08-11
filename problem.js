const porsons = [
    {name : 'porsone1', age : 34},
    {name : 'porsone2', age : 33},
    {name : 'porsone3', age : 35},
    {name : 'porsone4', age : 36},
    {name : 'porsone5', age : 37},
    {name : 'porsone6', age : 38},
    {name : 'porsone7', age : 38},
    {name : 'porsone8', age : 39}
]

function objectAcces(arr) {
    let valus = [];
    for (let porson of porsons){
        let text = "";
        for (let property in porson){
            text += property +': '+ porson[property]+ ' ';
        }
        // console.log(text);
        valus.push(text);
    }
    return valus;
}

const accessarray = objectAcces(porsons);
console.log(accessarray);

