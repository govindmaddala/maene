const sanksrit_text = "शरीरमाद्यं खलु धर्मसाधनम्।";
const english_text = "The body is indeed the primary instrument for fulfilling all duties.";

let san_animationInProgress = false; // Prevent running multiple animations simultaneously
let eng_animationInProgress = false; // Prevent running multiple animations simultaneously

function animateText(text, id, timeOut, animationInProgress) {
    if (animationInProgress) return; // Don't start a new animation if one is already in progress

    animationInProgress = true; // Mark animation as in progress
    let index = 0;
    const animatedTextDiv = document.getElementById(id);
    animatedTextDiv.textContent = "";  // Clear previous content before starting the animation

    function addNextLetter() {
        if (index < text.length) {
            animatedTextDiv.textContent += text[index];
            index++;
            setTimeout(addNextLetter, timeOut);
        } else {
            animationInProgress = false; // Allow next animation after the current one finishes
        }
    }

    addNextLetter(); // Start the animation
}

// Start the animation for both texts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateText(sanksrit_text, "sanksrit-animatedText", 50, san_animationInProgress);
    animateText(english_text, "english-animatedText", 50, eng_animationInProgress);
});

// Handle "Start" button click
document.getElementById('start-button').addEventListener('click', () => {
    document.getElementById("text-content").style.display = "none";
    document.getElementById("back-button").style.display = "block"
    const content = document.querySelector('.content');
    const blocksContainer = document.getElementById('blocks-container');
    content.style.display = 'none';
    blocksContainer.style.display = 'flex';
    // for (let i = 1; i <= 6; i++) {
    //     document.getElementById(`day-${i}`).addEventListener("click", ()=>{
    //         console.log("clicked: ", i)
    //         for (let j = 1; j <= 6; j++) {
    //             if(i != j){
    //                 console.log("first: ", i, j)
    //                 const element = document.getElementById(`day-${j}`)
    //                 // element.classList.add("hidden"); 
    //                 element.style.display = "none"
    //                 document.getElementById("back-button").style.display = "none"
    //             }
    //         }
    //     })
        
    // }
});

// Handle "Back" button click
document.getElementById('back-button').addEventListener('click', () => {
    const content = document.querySelector('.content');
    document.getElementById("back-button").style.display = "none"
    content.style.display = 'flex';
    const blocksContainer = document.getElementById('blocks-container');
    blocksContainer.style.display = 'none';

    // Clear previous content and restart animation
    document.getElementById("sanksrit-animatedText").textContent = "";
    document.getElementById("english-animatedText").textContent = "";

    // Restart animation from the beginning
    animateText(sanksrit_text, "sanksrit-animatedText", 50);
    setTimeout(() => {
        animateText(english_text, "english-animatedText", 50);
    }, 100); // Delay the English text animation slightly to ensure it doesn't conflict with Sanskrit one
});


const getAnatomy = () =>{
    window.location.href = "anatomy.html"
}