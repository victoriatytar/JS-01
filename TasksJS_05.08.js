https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR0Ri57rTbNaLdLxCKpoq0PkJ4BagazF7RrkGTt4rpgYYNuD-MPRlSzxBRU

  function buildFun(n){
	  var res = []
	  for (var i = 0; i< n; i++){
      let i2 = i;
		  res.push(function(){
			  return i2;
		  })
	  }
	  return res
