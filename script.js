//your JS code here. If required.
//your JS code here. If required.
const input=document.getElementById("fname");
input.addEventListener('focusout', ()=>{
	let str=input.value;
	str=str.toUpperCase();
	input.value=str;
});