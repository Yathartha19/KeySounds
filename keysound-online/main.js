
function soundPlayer(pressedkey) {

    let keysound = new Audio("./nk-cream/" + pressedkey + ".wav");
    keysound.play()

}

window.addEventListener("keydown", event => {

    if(event.key === " ") {
        soundPlayer("space")
    }

    if(event.key === '\\') {
        soundPlayer("slash")
    }

    if(event.code === 'Slash') {
        soundPlayer("slash")
    }

    if(event.code === 'Period') {
        soundPlayer("[")
    }

    if(event.key === 'ArrowRight') {
        soundPlayer("[")
    }

    if(event.key === 'ArrowLeft') {
        soundPlayer("]")
    }

    if(event.key === 'ArrowDown') {
        soundPlayer("]")
    }

    if(event.key === 'ArrowUp') {
        soundPlayer("[")
    }

    if(event.key === '=') {
        soundPlayer("w")
    }

    if(event.key === '-') {
        soundPlayer("k")
    }



    

    if(event.key === '1') {
        soundPlayer("k")
    }

    if(event.key === '2') {
        soundPlayer("j")
    }

    if(event.key === '3') {
        soundPlayer("g")
    }

    if(event.key === '4') {
        soundPlayer("c")
    }

    if(event.key === '5') {
        soundPlayer("p")
    }

    if(event.key === '6') {
        soundPlayer("x")
    }

    if(event.key === '7') {
        soundPlayer("d")
    }

    if(event.key === '8') {
        soundPlayer("y")
    }

    if(event.key === '9') {
        soundPlayer("m")
    }

    if(event.key === '0') {
        soundPlayer("d")
    }




    else {
        console.log(event)
        soundPlayer(event.key)
    }

})

