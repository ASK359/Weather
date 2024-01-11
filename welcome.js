var ser=document.getElementById("v1");
var loc=document.getElementById("v2");
var tem=document.getElementById("v5");
var hu2=document.getElementById("hum");
const hu3=document.getElementById("wis");


const url1="https://api.openweathermap.org/data/2.5/weather?q="
const url2="&appid=8c1ade17352db292281b975325476fd7&units=metric";


ser.addEventListener("click",()=>{
	//console.log("hello");
	

	var locc=loc.value;
	const locns=document.getElementById("locn");
	locns.innerText=loc.value;
	

	async function fun(){
		const re=await fetch(url1+locc+url2);
		const jsn=await re.json();
		var temp=jsn.main.temp;
		var hu1=jsn.main.humidity;
		const wi=jsn.wind.speed;
		tem.innerText=(temp+"°c"); 
		hu2.innerText=hu1+"g.m-3";
		hu3.innerText=wi+"km/h";
	}
	fun();


})