const log = function(a,b,...rest){
    console.log(a,b,rest);
}

log('basic','rest','operator','usage');

function calcOrDouble(nuber,basis = 2){basis 
  
    console.log(nuber * basis);
}

calcOrDouble(3);