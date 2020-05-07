// const x = 4 ;
// let arr = ["com", "pho"]
// let person = {
//     name : "Minh",
//     age : 16
// }

// let classs = {
//     name: "C4TJS",
//     students : [
//         {
//             name : "Minh",
//             age : 16
//         },
//         {
//             name : "Bach",
//             age : 12
//         },
//     ]
// }

// for (let i = 0; i < 10; i++) {
//     console.log("heloo");
//     console.log("world")
// }

let yob = 2000;
let age = 2020 - yob;
if (age < 18) {
    console.log("m la tre trau")
}else {
    console.log("m khong con la tre trau")
}


// let food = ["com", 'chao', "pho"]
// // 1. com
// // 2. chao
// // 3. pho

// for (let i = 0; i < food.length; i++){
//     console.log(`${i + 1}. ${food[i]}`)
// }


// function add(so1,so2){
//     console.log(so1);
// }
// add(1,2);

// let button = document.getElementById("button")
// let heading = document.getElementById("heading")
// button.addEventListener("click", function (){
//     heading.textContent++;
// })

// https://pokeapi.co/api/v2/pokemon/1

async function getPokemon() {
    let input = document.getElementById("pokeId")
    let button = document.getElementById("button")
    let pokeImgs = document.getElementById("imgs")
    button.addEventListener("click", async () => {
        // có ảnh
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
        let data = await res.json();
        pokeImgs.innerHTML += `<img src="${data.sprites.front_default}" />`
        console.log(data)
    })
    // for (let i = 1; i < 50; i++){
    //     let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    //     let data = await res.json();
    //     // pokeImg.src = data.sprites.front_default
    //     // pokeImgs.innerHTML += `<img src="${data.sprites.front_default}" />`
    //     // console.log(data.sprites.front_default)
    // }
    // console.log(data.name)

}