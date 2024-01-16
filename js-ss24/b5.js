let num=+prompt("nhap vao 1 so nguyen duong");

let n =praseInt(num);
if (isNaN(n) || n<=0 ){
    console.log("vui long nhap so nguyen duong hop le");
}else{
    let total=1;
    for (let i=2;i<=n;i++){
        sum+=1/Math.pow(i,3);
    }
    total=total.toFixed(5);
    console.log("S= 1+1/2^3+1/3^3+...+1/${n}^3 là: $sum");
}

