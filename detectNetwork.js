// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function detectNetwork(cardNumber){
	switch(true){
		case(isDiners(cardNumber)):
			return "Diner\'s Club";
		case(isAmex(cardNumber)):
			return "American Express";
		case(isMaster(cardNumber)):
			return "MasterCard";
		case(isSwitch(cardNumber)):
			return "Switch";
		case(isVisa(cardNumber)):
			return "Visa";
		case(isDiscover(cardNumber)):
			return "Discover";
		case(isMaestro(cardNumber)):
			return "Maestro";
		case(isChinaUnionPay(cardNumber)):
			return "China UnionPay";
		default:
			return("Unknown card network")
	}

}
function isDiners(cCard){
	return (cCard.length === 14 && (['38', '39'].includes(cCard.slice(0,2))))
}

function isAmex(cCard){
	return (cCard.length === 15 && (['34', '37'].includes(cCard.slice(0,2))))
}

function isMaster(cCard){
	return (cCard.length === 16 && (['51', '52', '53', '54', '55'].includes(cCard.slice(0,2))))
}

function isSwitch(cCard){
	var isSwitchCard = false;
	cardPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
	if([16, 18, 19].includes(cCard.length)){
		isSwitchCard = cardPrefix.some(function(prefix){
			return (cCard.startsWith(prefix))
		});
	}
	return isSwitchCard;
}

function isVisa(cCard){
	return (([13,16, 19].includes(cCard.length))&& (cCard.startsWith('4')))
}

function isDiscover(cCard){
	var isDiscoverCard = false;
	cardPrefix = ['6011', '644', '645', '646', '647', '648', '649', '65'];
	if([16, 19].includes(cCard.length)){
		isDiscoverCard = cardPrefix.some(function(prefix){
			return (cCard.startsWith(prefix))
		});
	}
	return isDiscoverCard;
}

function isMaestro(cCard){
	return (['5018', '5020', '5038', '6304'].includes(cCard.slice(0,4)) && (cCard.length >= 12 && cCard.length <= 19))
}

function isChinaUnionPay(cCard){
	var isCUnionPay = false;
	if([16, 17, 18, 19].includes(cCard.length)){
		cardPrefix = ['624', '625', '626','6282', '6283', '6284', '6285', '6286', '6287', '6288'];
		isCUnionPay = cardPrefix.some(function(prefix){
			return (cCard.startsWith(prefix));
		});
		if(!isCUnionPay){
			cardPrefix = Number(cCard.slice(0,6))
			if(cardPrefix >= 622126 && cardPrefix <= 622925){
				isCUnionPay = true;
			}
		}
	}
	return isCUnionPay;
}

//console.log(detectNetwork("344444444444444"))
