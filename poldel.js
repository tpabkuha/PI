//var FSO = new ActiveXObject("Scripting.FileSystemObject");
//FileName = "testfile.txt"
//f = FSO.OpenTextFile(FileName, 1);
//var S = f.ReadAll();
//f.close();
//var args = WSH.Arguments;
//var T = args(0);

function fun(x)
{
	var f;
	f=2*Math.cos(x)-Math.pow(Math.E,x);
	return f;
}
var a=0;
var b=1;
var e=0.00005;
var count=0;
while ((Math.abs(b-a))>e)
{
	c=(a+b)/2;
	if (fun(a)*fun(c)<0) b=c;
	if (fun(b)*fun(c)<0) a=c;
	count++;
}
c=(a+b)/2;
	WSH.echo( "Iteracyi: " + count );
	WSH.echo( "x=  " + c);
	WSH.echo( "f(x) =  " + fun(c));
	WSH.echo( "|b-a| " + (Math.abs(b-a)) );
