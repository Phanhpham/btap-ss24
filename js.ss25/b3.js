let num=+prompt("nhap so nguyen duong");

let sum=0;

let m=1;

if(num<=0){
    console.log("bạn vui lòng nhap lại");
}else{
    while(sum+m < num){
        sum=+m;
        m++; 
    }
    console.log("gia tri m tìm dc la"+(m-1));
}