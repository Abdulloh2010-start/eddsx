const button = document.getElementById("button");
const input = document.getElementById("input");
const select = document.getElementById("select");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");
const pitchText = document.getElementById("pitchText");
const rateText = document.getElementById("rateText");
const pause = document.getElementById("pause");
const resume = document.getElementById("resume");

rate.value = 1;
pitch.value = 1;
rateText.textContent = rate.value;
pitchText.textContent = pitch.value;

function voise() {
    button.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = select.value;
        utterance.rate = parseFloat(rate.value);
        utterance.pitch = parseFloat(pitch.value);
        speechSynthesis.speak(utterance);
    });
    rate.addEventListener("input", () => {
        rateText.textContent = rate.value;
    });
    pitch.addEventListener("input", () => {
        pitchText.textContent = pitch.value;
    });
    pause.addEventListener("click", () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.pause();
        }else if(speechSynthesis.paused) {
            speechSynthesis.resume();
        }
    });
    resume.addEventListener("click", () => {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
        }
    });
}

voise();