document.body.addEventListener('keyup',(e) => {
    playSound(e.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () =>{
    const song = document.querySelector('#input').value

    if(song !== ''){
        const songArray = song.split('');
        playComposition(songArray)
    }
})

function playSound(sound){
    const audioElemnt = document.querySelector(`#s_${sound}`);
    const keyElement = document.querySelector(`div[data-key = "${sound}"]`)
    
    if(audioElemnt){
        // cureentTime esta zerando o audio para poder clicar nele novamente e ele tocar sem ter q esperar o audio retornar
        audioElemnt.currentTime = 0;
        audioElemnt.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(() =>{
            keyElement.classList.remove('active')
        }, 300)
    }
}



// essa função ta pegando o array e setando os segundos entre as teclas
function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout(() =>{
            playSound(`key${songItem}`)
        }, wait)

        wait += 250;

    }
}