let x = 10;
var b = "10";
x = x + b
console.log(x);

let knopka = document.getElementById('btn')
let flag = false;

function buy() {
	if (flag==false){
		knopka.classList.add('btn__active')

knopka.innerHTML = "закупить";
flag = true;
	}
else {
	knopka.classList.remove('btn__active')
	knopka.innerHTML = "готово"
	flag = false;
}
};

//function buy() {
	//if (flag==false){
		//knopka.style.background = 'red';
//knopka.style.color = 'black';
//knopka.innerHTML = "закупить";
//flag = true;
	//}
//else {
	//knopka.style.background = 'black'
	//knopka.style.color = 'blue'
	//knopka.innerHTML = "готово"
	//flas = false;
//}
//};