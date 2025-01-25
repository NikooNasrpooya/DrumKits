

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    
})


const makeSound = (key) => {

    switch (key) {
        case "w":
            playMusic("sounds/sound-1.mp3");
            break;
        case "a":
            playMusic("sounds/sound-2.mp3");
            break;
        case "s":
            playMusic("sounds/sound-3.mp3");
            break;
        case "d":
            playMusic("sounds/sound-4.mp3");
            break;
        case "j":
            playMusic("sounds/sound-5.mp3");
            break;
        case "k":
            playMusic("sounds/sound-6.mp3");
            break;
        case "l":
            playMusic("sounds/sound-7.mp3");
            break;
        default:
            console.log("hey wrong button!!");
    }

}