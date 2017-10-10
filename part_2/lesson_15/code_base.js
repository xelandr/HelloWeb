
var message, counter, fibon;

counter=0;	
fibon = 0;
while(counter<15)
{
	++counter;
	fibon += counter;
	message = "Число фибоначи для: " + counter + " = "+ fibon;
	alert(message);
}

//message = "Число фибоначи для: " + counter + " = "+ fibon;
//alert(message);