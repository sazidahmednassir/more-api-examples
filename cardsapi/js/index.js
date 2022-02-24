


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
        .then (data => displayCards(data))
    }
}


const displayCards= cards =>{
    console.log(cards)
}