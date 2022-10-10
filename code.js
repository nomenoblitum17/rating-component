"use strict";

const body =  document.getElementById("body"),
buttonsContainer = document.querySelector(".buttons-container"),
submitButton = document.getElementById("submit"),
ratingState = document.querySelector(".rating-state");

const createThanks = number =>{
	let thanksState = document.createElement("div");
	let thanksImg = document.createElement("img");
	let rate = document.createElement("h2");
	let thanks = document.createElement("h3");
	let paragraph = document.createElement("p");

	thanksState.classList.add("thanks-state");

	thanksImg.setAttribute("src","images/illustration-thank-you.svg");

	rate.textContent = `You selected ${number} out of 5`;
	thanks.textContent = "Thank you!";
	paragraph.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

	thanksState.appendChild(thanksImg);
	thanksState.appendChild(rate);
	thanksState.appendChild(thanks);
	thanksState.appendChild(paragraph);

	return thanksState;
}

let res;

for (let i = 0; i < buttonsContainer.children.length; i++) {
	 document.getElementById(`rating-${i + 1}`).addEventListener("click",(e)=>{
	 	e.stopPropagation()
	 	res = document.getElementById(`rating-${i + 1}`).tabIndex;
	 })
}

submit.addEventListener("click",()=>{
	if (res > 0) {
		let result = createThanks(res);
		result.style.animation = "show 2s forwards";
		ratingState.style.animation = "dis 1s forwards";
		setTimeout(()=> body.replaceChild(result,ratingState),700)
	}
})

body.addEventListener("click",()=> res = 0)
