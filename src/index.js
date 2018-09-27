module.exports = function solveEquation(equation) {
 let a, b, c;
 const arr = equation.split('*');
  
 a = parseFloat(arr[0]);
 b = parseFloat(arr[1].replace(' x^2 ', '').replace(' ', ''));
 c = parseFloat(arr[2].replace(' x ', '').replace(' ', ''));

 const D =  Math.sqrt(b*b-4*a*c);
 const x1 = Math.round((-b-D)/(2*a));
 const x2 = Math.round((-b+D)/(2*a));

 return [x1,x2].sort((a,b) => a-b);
}
