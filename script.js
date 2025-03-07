function finalPopulation() {
	let initialPopulation = prompt("intial population: ");
	let rateOfGrowth = prompt("rate of growth: ");
	let timeInHours = prompt("time in hours: ");
	
	let floatInitialPopulation = parseFloat(initialPopulation);
	let floatRateOfGrowth = parseFloat(rateOfGrowth);
	let floatTimeInHours = parseFloat(timeInHours);
	
	let finalPopulation = Math.round(floatInitialPopulation * Math.pow(Math.E, floatRateOfGrowth * floatTimeInHours));
			
	let regionOfMonster = prompt("region of the monster: ");
	let nameOfMonster = prompt("name of the monster: ");
	let monster = (regionOfMonster.concat(' ').concat(nameOfMonster)).toUpperCase();
	
	document.getElementById('result').innerHTML = ('After' + ' ' + floatTimeInHours + ' ' + 'hours' + ' ' + 'the population of' + ' ' + monster + ' ' + 'has risen to' + ' ' + finalPopulation + '!');

}
// Start the game when the window loads:
window.onload = setupGame;

