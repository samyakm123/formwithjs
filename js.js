/*function facto()
{
	var num=parseInt(prompt("Enter a number:"));
	fact=num;
	for(i=1;i<num;i++)
	{
		fact=fact*i;
	}
	alert(" Factorial of"+num+" =" +fact);
}

function currentDate()
{
	var d= new Date();
	var day=d.getDay();
	var date=d.getDate();
	var year=d.getFullYear();
	var month=d.getMonth();

	if(day==0) {day="Sunday"};
	else if(day==1) {day='Monday'};	
	else if(day==2) {day="Tuesday"};
	else if(day==3) {day="Wednesday"};
	else if(day==4) {day="Thursday"};
	else if(day==5) {day="Friday"};
	else{ day="Saturday" };

	if (month==0) {month="Jan"};
	else if (month==1) {month="Feb"};
	else if (month==2) {month="Mar"};
	else if (month==3) {month="Apr"};
	else if (month==4) {month="May"};
	else if (month==5) {month="Jun"};
	else if (month==6) {month="Jul"};
	else if (month==7) {month="Aug"};
	else if (month==8) {month="Sep"};
	else if (month==9) {month="Oct"};
	else if (month==10) {month="Nov"};
	else {month="Dec"};


	document.getElementById("currentDate").innerHTML= day+","+" " + " "+month+" "+year

	refreshTime();
}


function currentTime()
{
	var t=new Date();
	var hh=t.getHours();
	var mm=t.getMinutes();
	var ss=t.getSeconds();
	var ampm= hh<=11 ? "AM" : "PM";
	document.getElementById('hh'). innerHTML=hh;
	document.getElementById('mm'). innerHTML=mm;
	document.getElementById('ss'). innerHTML=ss+ " "+ampm;
}

function refreshTime()
{
	setInterval(currentTime, 1000);
}

*/


function validateform()
{
	var username=document.login.uname.value;
	var password=document.login.upass.value;

	if(username=="" && password=="")
	{
		document.getElementById('error').innerHTML="Username And Password is Required";
		return false;

	}
	
	else if(username=="")
	{
		document.getElementById('error').innerHTML="Username is Required";
		return false;
	}

	else if(password=="")
	{
		document.getElementById('error').innerHTML="Password is Required";
		return flase;
	}

	else if(username.length<5 && password.length<5)
	{
		document.getElementById('error').innerHTML="Username And Password should be atleast 5 character long";
		return false;
	}

	else if(username=="admin" && password=="admin")
	{
		document.getElementById('error').innerHTML="Login Success"
		setTimeout(function(){
			window.location.href='https://facebook.com'}, 5000)
		return false;
	}
	else
	{
		document.getElementById('error').innerHTML="Unexpected Error Occured";
		return false;
	}

	return false;
}


