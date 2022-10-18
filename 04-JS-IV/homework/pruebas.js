const usuario = {
    name: "mauri",
    ape : "cardozo",
    password : "123",
    posts :  [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ]
    
};
var suma = 0;

const producto = {
    precio : 100 ,
    descuento : 0.10,
};


producto.calcula = function(){
    return this.precio - (producto.precio * producto.descuento)
};

console.log(producto, producto.calcula())