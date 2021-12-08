// function userInfo() {
//     var userEmail = 'maria@email.com';
//     console.log(userEmail);
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmai
//   }
//   userInfo();

// if (true) {
//   // inicio do escopo do if
//  // var userAge = "20"; //usando var acessa dentro e fora
//  // let userAge = "20"; //usando let acessa só dentro, userAge not defined
//  const userAge = "20"; //usando const acessa só dentro, userAge not defined
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20

// var userName = "Isabella";
// var userName = "Lucas";
// console.log(userName); // Resultado: Lucas sobrescreve

// const favoriteLanguage = "Javascript";
// favoriteLanguage = "Python"; // tenta alterar o valor
// console.log(favoriteLanguage); // Erro

// let favoriteTechnology = "Machine learning";
// favoriteTechnology = "Facial recognition"; //altera o valor
// console.log(favoriteTechnology); // Facial recognition

// const userInfo = {
//   name: "Cláudio",
//   id: "5489-2",
//   email: "claudio@email.com"
// };
// userInfo.name = "João"
// userInfo.id = "muda id"
// userInfo.email = "mudaemail"

// console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }
/* 
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React'] //se fosse let apareceria 2 arrays com o react
console.log(technologies); // Erro */