const fetchPokemon = () => {
    const pokeName= document.getElementById("pokeName");
    let pokeInput=pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if ( res.status !=200){
            pokeImage("./images/nofound.jpg");
        }
        return res.json();
    }).then((data)=>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}
const backInicio = () =>{
    pokeImage("./images/pokeBola.png");
    document.getElementById("pokeName").value = "";
}

const pokeImage = (url) =>{
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = url;
}
