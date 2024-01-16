let n=parseInt(prompt("nhap so nguyen n:"));

let count=0;

while(n!==0){
    let end = n%10;
    if(end%2==0){
        count ++;
    }
    n = Math.floor(n/10);
}
    console.log(count);