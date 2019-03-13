// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  	if (currency <= 0) {
 		return {};
    }

    if (currency > 10000) {
      	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let result = {};
    let halfDollars = Math.trunc(currency / 50);
    	if (halfDollars > 0) {
      	result['H'] = halfDollars;
    }

    let rest = currency - halfDollars*50;
    let quarters = Math.trunc(rest / 25);
    	if (quarters > 0) {
      	result['Q'] = quarters;
    }

    rest -= quarters*25;
    let dimes = Math.trunc(rest / 10);
    	if (dimes > 0) {
      	result['D'] = dimes;
    }

    rest -= dimes*10;

    let nickels = Math.trunc(rest / 5);
	    if (nickels > 0) {
	    result['N'] = nickels;
    }

    let pennies = rest - nickels*5;
    	if (pennies > 0) {
     	result['P'] = pennies;
    }

	return result;
}