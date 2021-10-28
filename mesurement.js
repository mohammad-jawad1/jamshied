
const data1=[23,12,31,4];
const data2=[12,32,22];
//console.log("...${data2[0]}~c...${data2[1]}~c...${data2[2]}~c");

const printforecast=function(arr){

    let star="";
    for(let i=0;i<arr.lenght;i++){

        star+=star+'${arr[i]}~c in $(i+1)days';
    }
    console.log(star);
    debugger;

};
printforecast(data1);