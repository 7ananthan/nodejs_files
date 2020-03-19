var a=1587;
var b=a;
var c=0
while(b>0)
{
    c= c*10+(b%10);
    b=b/10;
    b=parseInt(b);
}
console.log(c);