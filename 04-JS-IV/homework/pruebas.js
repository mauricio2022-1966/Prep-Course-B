String.prototype.invertir = function(){
    var arr1 = this.split("");
    var arr2 = arr1.reverse();
    var arr3 = arr2.join("");
 
    return arr3
}
var a = "Hola";
console.log(a.invertir())