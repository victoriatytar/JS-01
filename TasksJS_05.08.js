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
