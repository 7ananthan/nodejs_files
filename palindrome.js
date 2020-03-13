var a =5123215;
var b=a;
var c=0;
while(b>0)
{
    c=c*10+(b%10);
    b=b/10;
    b=parseInt(b);
}
if (a==c)
    console.log(a+" is palindrome");
else
    console.log(a+" is not palindrome");