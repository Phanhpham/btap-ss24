let n=+prompt("nhap so nguyen duong");

let sum=0;

let multi=1;

if(n<=0){
    console.log("bạn vui lòng nhap lại");
}else{
    for(let i=1;i<=n;i++){
        multi*=i;
        sum+=multi;
    }
    console.log(sum);
}