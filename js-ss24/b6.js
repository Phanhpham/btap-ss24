let n=prompt("nhap sô nguyên dương bất kì");

let reversedNumber="";

if( n<=0){
    console.log("vui lòng nhap so nguyen duong hop lệ");
}else{
    for(let i=n.length-1;i>=0;i--){
        reversedNumber += n[i];
    }
    console.log("so đảo ngược cua",n ,"la:" ,reversedNumber);
}