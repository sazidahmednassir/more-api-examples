


const loadDog =() =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}



const displayDog=(dog)=>{
    // console.log(data);
  const main= document.getElementById('main');
//   const firstTen= dog.slice(0,10);
  const all= dog;
//   console.log(firstTen)

for(const  dog of all){
    const div= document.createElement('div');
    //  console.log(dog);
    div.className="col-lg-6"
    div.innerHTML=`<h2>${dog.name}</h2>
    <img width="400px" height="250px" src="${dog.image.url}"  alt="...">
    <p> Dog Weight : <span>${dog.weight.imperial} </span> ,  <span>${dog.weight.metric} </span></p>`
    main.appendChild(div);

}

}