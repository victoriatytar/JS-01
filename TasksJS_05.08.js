1)https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR0Ri57rTbNaLdLxCKpoq0PkJ4BagazF7RrkGTt4rpgYYNuD-MPRlSzxBRU

function buildFun(n) {
    var res = [];
    for (var i = 0; i< n; i++){
        let i2 = i;
        res.push(function(){
            return i2;
        })
    }
    return res;
}	  
	  
2)https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR1sjjQrcXeT_PLRiCzCchw7E26icmAlp8kLMNHZdZZrT4FUY9_T4BjoxWw	  
	
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}


3)https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR2P8n5YF7nRjpEmRj2WUPwl8JHEq6Ho4JMoEpSq3LnENd-JJ5vqM6i2Cvk

function whatNumberIsIt(n) {
    if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    } else if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    } else if (Number.isNaN(n)) {
        return "Input number is Number.NaN";
    } else if (n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    } else if (n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else {
        return "Input number is " + n;
    }
};
