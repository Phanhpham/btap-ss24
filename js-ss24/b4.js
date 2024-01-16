let num=+prompt("nhập số dương bất kỳ");

let n=paseInt(userInput);
if (isNaN(n) || n<=0){
    console.log("vui lòng nhập sô dương hợp lệ");
}else{
    console.log(`phương các số nguyên duơng chẵn tùư 1 đến $(n) sao cho tổng nhỏ hơn $(n):`);
    let total=0;
    for(let i=2;i<=n;i+=2){
        let square =i*i;
        sum+=square;
        if(sum<=0){
            break;
        }
        console.log(`${i}^2=${square}`);
    }
}
