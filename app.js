// Q1
function checkEven(x) {
    if (x===0||x<0)
    {
        return true;    
    }
    else
    {
        return false;
    }
};

console.log( checkEven(10));

// Q2
function increment(x) {
    return x++;
}

console.log(increment(2));


// Q3




// Q4

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function Recurs(x) {
    i = x.length;
    console.log(array[i] % 2 == 0 ? 'even' : 'odd');
    x.pop();
    return (Recurs(x));
}


console.log(Recurs(arr));


// Q5




// Q6
arr =["Rawan", "Jafar", "Muhammad","Muhammad", "Esraa", "Dareen"];
let printContent = arr.forEach((value) => {
    return value;
});
console.log(printContent);



// Q8


let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

let q8=newSeries.forEach((value, index, array) => {
    return array["id"] +array["title"];
})
console.log(q8);


// Q9

let q9 =newSeries.map((value, index, array) => {
    return array["id"] + array["title"];
})

console.log(q9);


// Q10
let q10 = newSeries.filter((value, index, array) => {
    if (value < 5) {
        return index;
    };
});
console.log(q10);

// Q11
let arr2=["mohammed",'Array','Somthing','JavaScriptCode']
let q11 = arr2.reduce((accum, array) => {
    
    if (array.length > accum) {
       return accum = array.length;
    }
    else
    return accum
}, 0);

console.log(q11);


// q12








