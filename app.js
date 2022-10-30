// // Q1
// function checkEven(x) {
//     if (x===0||x<0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// };

// console.log( checkEven(10));

// // Q2
// function increment(x) {
//     return x++;
// }

// console.log(increment(2));


// // Q3
    

// let Somthing = "Moh3a777mmed".split("");
// console.log(Somthing);
// let x = Somthing.filter((y) => {
//     if ((parseInt(y)) )
//     {
  
//         return y;
//     }
   
    
// });

// console.log((x));



// // Q4

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// i = arr.length;
let contain = [];
// function Recurs(x) {
//     if (i==0) {
//         return false;
//     }
//     i--;
//     contain.push(x[i] % 2 === 0 ? 'odd': 'even' );
//     console.log(contain);
//     return (Recurs(x));
// }


// Recurs(arr);


// // Q5
// contain = [];
// function charSwap(array,ch1,ch2) {
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === ch1) {
//             contain.push(ch2)
    
//         }
//         else if (array[index] === ch2) {
//             contain.push(ch1)
//         }
//         else
//             contain.push(array[index]);
//     }
//     return contain;
// }

// console.log(charSwap( "aaddeee", "a", "d"));

// Q6 && Q7
// arr = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];
// let printContent = arr.forEach((value,index) => {
//     console.log(value);
// });




// // Q8


// let newSeries = [
//     {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     },
//     {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [4.0],
//         "bookmark": []
//     },
//     {
//         "id": 675465,
//         "title": "Fracture",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": [5.0],
//         "bookmark": [{ id: 432534, time: 65876586 }]
//     }
// ];

// let q8=newSeries.forEach((value, index, array) => {
//     return array["id"] +array["title"];
// })
// console.log(q8);


// // Q9

// let q9 =newSeries.map((value, index, array) => {
//     return array["id"] + array["title"];
// })

// console.log(q9);


// // Q10
// let q10 = newSeries.filter((value, index, array) => {
//     if (value < 5) {
//         return index;
//     };
// });
// console.log(q10);

// // Q11
// let arr2=["mohammed",'Array','Somthing','JavaScriptCode']
// let q11 = arr2.reduce((accum, array) => {
    
//     if (array.length > accum) {
//        return accum = array.length;
//     }
//     else
//     return accum
// }, 0);

// console.log(q11);


// // q12
// let pokemonData = [
//     {
//         "game_index": 76,
//         "version": {
//             "name": "red",
//             "url": "https://pokeapi.co/api/v2/version/1/"
//         }
//     },
//     {
//         "game_index": 76,
//         "version": {
//             "name": "blue",
//             "url": "https://pokeapi.co/api/v2/version/2/"
//         }
//     },
//     {
//         "game_index": 76,
//         "version": {
//             "name": "yellow",
//             "url": "https://pokeapi.co/api/v2/version/3/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "gold",
//             "url": "https://pokeapi.co/api/v2/version/4/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "silver",
//             "url": "https://pokeapi.co/api/v2/version/5/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "crystal",
//             "url": "https://pokeapi.co/api/v2/version/6/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "ruby",
//             "url": "https://pokeapi.co/api/v2/version/7/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "sapphire",
//             "url": "https://pokeapi.co/api/v2/version/8/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "emerald",
//             "url": "https://pokeapi.co/api/v2/version/9/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "firered",
//             "url": "https://pokeapi.co/api/v2/version/10/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "leafgreen",
//             "url": "https://pokeapi.co/api/v2/version/11/"
//         }
//     },
//     {
//         "game_index": 132,
//         "version": {
//             "name": "diamond",
//             "url": "https://pokeapi.co/api/v2/version/12/"
//         }
//     }];
// let displayName = pokemonData.reduce(
//     (previousValue, currentValue, currentIndex, array) => {
//         return previousValue,currentValue.version.name;
//     },
//     []);
// console.table(displayName);


// // q13

// let binaryTree = [{
//     "name": "ude.Top",
//     "email": "Taya.Kerluke53@gmail.com",
//     "add": {
//         "street": " Felds", "suie": "Ste 231",
//         "city": "Tinamuth", "zcode": "07584-6653",
//         "geo": { "lat": "75.023", "lng": "-17.1824" }
//     },
//     "phone": "795-827-5446 x18366",
//     "website": "nico.com",
//     "company": {
//         "name": "Champlin, Barrows and me",
//         "catchPhrase": "Object user-facing orchestration",
//         "bs": " integrated content"
//     },
//     "firstN": "Mida", "lastN": "Feey"
// }];


// function BST(binaryTree) {
//     let catchIt='';
// for (const binary of binaryTree) {
//     catchIt = binary.valueOf('email');
//     }
//     return catchIt['email'];
    
// };


// console.log(BST(binaryTree));














