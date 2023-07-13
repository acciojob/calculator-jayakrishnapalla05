const inputElement = document.getElementById('input');
 const numberButtons = document.querySelectorAll('[id^="block"]');
 const operatorButtons = document.querySelectorAll('[id="plus"], [id="minus"], [id="multiply"], [id="divide"],[id="openningBracket"],[id="closingBracket"]');
 const dotButton = document.getElementById('dot');
 const ansButton = document.getElementById('ans');
 const clearButton = document.getElementById('clr');
 const backSpaceBtn = document.getElementById("clear");

numberButtons.forEach((button) =>{
	button.addEventListener('click', ()=>{
		inputElement.value += button.textContent;
	});
});

operatorButtons.forEach((button) =>{
	button.addEventListener('click', ()=>{
		inputElement.value += button.textContent;
	});
});

dotButton.forEach((button) =>{
	button.addEventListener('click', ()=>{
		if(!inputElement.value.includes('.'))
		{
			inputElement.value += button.textContent;
		}
	});
	
});


ansButton.addEventListener('click', ()=>{
	try{
		const res=eval(inputElement.value);
		inputElement.value=res;
	}
	catch
	{
		inputElement.value='Error';
	}
});


clearButton.addEventListener('click', ()=>{
	inputElement.value ="";
});

backSpaceBtn.addEventListener('click', ()=>{
	inputElement.value=inputElement.value.slice(0,-1);
})