let a =+prompt("nhap so a ");

let b =+prompt("nhap so b ");

let str= [a,b];

if(isNaN(a)){
    console.log("a khong hợp lệ");
}else if(isNaN(b)){
    console.log("b khong hợp lệ");
}else{
    let multi=a**b;
    console.log(multi);
}