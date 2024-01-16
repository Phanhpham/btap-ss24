let a=+prompt("nhap so a");

let b=+prompt("nhap so b");

let sum=0;

let total=0;

if(a>b){
    console.log("không hợp lệ");
}else{
    for(let i=a;i<b;i++){
        if(i%2==0){
            console.log(i);
            sum+=i;
        }
    }

    for(let j=a;j<b;j++){
        if(j%2!==0){
            console.log(j);
            total+=j;
        }
    }
    console.log("tổng các số chẵn",+sum,"tổng các số lẻ",+total);
}