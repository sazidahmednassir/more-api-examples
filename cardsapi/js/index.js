
const main=document.getElementById('main');

const loadCards = () =>{
    const error=document.getElementById('error');
    const input= document.getElementById('input-value');
    const inputText=input.value;
    input.value='';
    // console.log(inputText)
    if(isNaN(inputText) || inputText == ""){
        // alert("Please Enter a Number")
        error.className="d-inline-block text-danger"
        error.innerText="Please Enter a Number";
    }

    else if( inputText < 0) {
        error.className="d-inline-block text-danger"
        error.innerText="Please Enter a Positive Number";
    }

    else{
        error.className="d-none"
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputText}`)
        .then(res => res.json())
        .then (data => displayCards(data.cards))
    }
}


const displayCards= cards =>{
    // console.log(cards)
    for(const card of cards ){
        // console.log(card)
        const div=document.createElement('div');
        div.classList.add("col-lg-4")
        div.classList.add('my-3')
        div.innerHTML=`
        <div class="card " style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.suit}</h5>
    <p class="card-text">${card.code}</p>
    <button onclick="cardDeatils('${card.code}')" class="btn btn-primary"> See Details</buuton>
  
  </div>
</div>
        `
        main.appendChild(div);
    }
  
}

//<a href="#" class="btn btn-primary">See Details</a>

const cardDeatils= (code)=>{
//   console.log(code)
fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
.then(res => res.json())
.then (data =>{
    const allcards= data.cards;
    const singleCard= allcards.find(card=>card.code === code)
    const div=document.createElement('div');
    main.innerHTML='';
    div.classList.add('my-3')
    div.innerHTML= `<div class="card " style="width: 18rem;">
    <img src="${singleCard.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${singleCard.suit}</h5>
      <p class="card-text">${singleCard.code}</p>
      <p class="card-text">${singleCard.value}</p>
  
    
    </div>
    `
    main.appendChild(div)
})

}