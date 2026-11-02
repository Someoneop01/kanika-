
const heartLayer = document.getElementById("heart-layer");
const revealBtn = document.getElementById("reveal-btn");
const smileBtn = document.getElementById("smile-btn");
const smileMessage = document.getElementById("smile-message");
const musicBtn = document.getElementById("music-btn");
const backgroundMusic = document.getElementById("background-music");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

// Open the letter section
revealBtn.addEventListener("click", () => {
    document.getElementById("message").scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth"
    });

    createHeartBurst();
});

// Create floating hearts
function createFloatingHeart() {
    if (reducedMotion || !heartLayer) return;

    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";

    heartLayer.appendChild(heart);

    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Create a burst of hearts on button click
function createHeartBurst() {
    if (reducedMotion) return;

    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingHeart, i * 70);
    }
}

// Gentle ambient hearts
if (!reducedMotion) {
    for (let i = 0; i < 7; i++) {
        setTimeout(createFloatingHeart, i * 500);
    }

    setInterval(createFloatingHeart, 1300);
}

// Final smile button
const sweetMessages = [
    "Tumhari smile bahut precious hai. ❤️",
    "Aaj thoda sa extra khush rehna. 🌸",
    "You deserve all the beautiful things. 💗",
    "Bas aise hi muskurate rehna. ✨",
    "Sending you a little virtual hug. 🫶"
];

smileBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(
        Math.random() * sweetMessages.length
    );

    smileMessage.textContent = sweetMessages[randomIndex];

    createHeartBurst();
});

// Optional background music
musicBtn.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
        try {
            await backgroundMusic.play();
            musicBtn.textContent = "♫ Music: On";
        } catch (error) {
            musicBtn.textContent = "Add music.mp3 first";
            console.error("Music could not play:", error);
        }
    } else {
        backgroundMusic.pause();
        musicBtn.textContent = "♫ Music: Off";
    }
});
// Try autoplay when the page loads
window.addEventListener("DOMContentLoaded", async () => {
    if (!backgroundMusic || !musicBtn) return;

    try {
        await backgroundMusic.play();
        musicBtn.textContent = "♫ Music: On";
    } catch (error) {
        // Browser may block autoplay until user interacts
        musicBtn.textContent = "♫ Play Music";
    }
});


/* WhatsApp visitor message form */
const visitorForm = document.getElementById("visitorMessageForm");

if (visitorForm) {
    visitorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const messageInput = document.getElementById("visitorText");
        const status = document.getElementById("messageStatus");

        const message = messageInput.value.trim();

        if (!message) {
            status.textContent = "Naam aur message dono likho ❤️";
            return;
        }

        // Number must include country code, without + or spaces.
        const YOUR_NUMBER = "917484993096";


const text =
    "Vandana Website Message 💌\n" +
    "Message: " + message;

        const url =
            "https://wa.me/" + YOUR_NUMBER +
            "?text=" + encodeURIComponent(text);

        status.textContent =
            "WhatsApp khul raha hai. Message check karke Send dabao ❤️";

        const whatsappWindow = window.open(url, "_blank");

        if (!whatsappWindow) {
            status.textContent =
                "WhatsApp nahi khula? Yahan click karo ❤️";

            const link = document.createElement("a");
            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Open WhatsApp";
            link.style.display = "inline-block";
            link.style.marginTop = "10px";
            link.style.color = "#ffd0e2";

            status.appendChild(document.createElement("br"));
            status.appendChild(link);
        }
    });
}


/* ===== CINEMATIC LETTER + PETALS + TYPEWRITER + ENDING ===== */
document.addEventListener("DOMContentLoaded", () => {
    const revealButton = document.getElementById("reveal-btn");
    const letterCard = document.querySelector(".letter-card");
    const finalSection = document.querySelector(".final-section");

    if (!revealButton || !letterCard) return;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let letterOpened = false;
    let endingPlayed = false;

    // Seal the letter when the page loads
    letterCard.classList.add("cinematic-sealed");

    // Rose petals fall across the screen
    function releaseRosePetals() {
        if (reduceMotion) return;

        const symbols = ["🌹", "🌸", "♥", "✿"];

        for (let i = 0; i < 32; i++) {
            setTimeout(() => {
                const petal = document.createElement("span");
                petal.className = "rose-petal";
                petal.textContent =
                    symbols[Math.floor(Math.random() * symbols.length)];

                petal.style.left = Math.random() * 100 + "vw";
                petal.style.setProperty(
                    "--fall-time",
                    (3.5 + Math.random() * 3) + "s"
                );
                petal.style.setProperty(
                    "--drift",
                    (Math.random() * 180 - 90) + "px"
                );
                petal.style.setProperty(
                    "--spin",
                    (Math.random() * 900 - 450) + "deg"
                );

                document.body.appendChild(petal);
                petal.addEventListener("animationend", () => petal.remove());
            }, i * 90);
        }
    }

    // Hearts burst outward from the center of the screen
    function releaseHeartExplosion() {
        if (reduceMotion) return;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 24; i++) {
            const heart = document.createElement("span");
            const angle = (Math.PI * 2 * i) / 24;
            const distance = 100 + Math.random() * 180;

            heart.className = "burst-heart";
            heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
            heart.style.left = centerX + "px";
            heart.style.top = centerY + "px";
            heart.style.setProperty("--dx", Math.cos(angle) * distance + "px");
            heart.style.setProperty("--dy", Math.sin(angle) * distance + "px");
            heart.style.setProperty("--spin", (Math.random() * 70 - 35) + "deg");

            document.body.appendChild(heart);
            heart.addEventListener("animationend", () => heart.remove());
        }
    }

    // Reveal the original message one character at a time
    function startTypewriter() {
        const paragraphs = letterCard.querySelectorAll(".letter-text");
        let paragraphIndex = 0;

        function typeNextParagraph() {
            if (paragraphIndex >= paragraphs.length) return;

            const paragraph = paragraphs[paragraphIndex];

            if (!paragraph.dataset.originalText) {
                paragraph.dataset.originalText = paragraph.textContent.trim();
            }

            const originalText = paragraph.dataset.originalText;
            paragraph.textContent = "";
            paragraph.classList.add("typewriter-text");
            paragraph.classList.remove("typewriter-done");

            if (reduceMotion) {
                paragraph.textContent = originalText;
                paragraph.classList.add("typewriter-done");
                paragraphIndex++;
                typeNextParagraph();
                return;
            }

            let index = 0;

            function typeCharacter() {
                if (index < originalText.length) {
                    paragraph.textContent += originalText.charAt(index);
                    index++;

                    // Slightly quicker for spaces and punctuation
                    const character = originalText.charAt(index - 1);
                    const delay = /[,.!?]/.test(character) ? 180 : 28;

                    setTimeout(typeCharacter, delay);
                } else {
                    paragraph.classList.add("typewriter-done");
                    paragraphIndex++;
                    setTimeout(typeNextParagraph, 450);
                }
            }

            typeCharacter();
        }

        typeNextParagraph();
    }

    // Open the envelope only once
    revealButton.addEventListener("click", () => {
        if (letterOpened) return;
        letterOpened = true;

        letterCard.classList.remove("cinematic-sealed");
        void letterCard.offsetWidth;
        letterCard.classList.add("cinematic-opening");

        letterCard.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
            block: "center"
        });

        releaseRosePetals();
        releaseHeartExplosion();

        // Let the envelope begin opening before typing starts
        setTimeout(startTypewriter, reduceMotion ? 0 : 1200);
    });

    // Prepare the cinematic final message
    if (finalSection) {
        const caption = document.createElement("p");
        caption.className = "ending-caption";
        caption.textContent =
            "Some people make a little corner of the world feel more beautiful. ❤️";

        const smileMessage = document.getElementById("smile-message");
        if (smileMessage) {
            smileMessage.insertAdjacentElement("afterend", caption);
        } else {
            finalSection.appendChild(caption);
        }

        // Trigger the ending when the final section comes into view
        if ("IntersectionObserver" in window) {
            const endingObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !endingPlayed) {
                        endingPlayed = true;
                        finalSection.classList.add("ending-active");
                        endingObserver.disconnect();
                    }
                });
            }, { threshold: 0.45 });

            endingObserver.observe(finalSection);
        } else {
            // Fallback for older browsers
            finalSection.classList.add("ending-active");
            endingPlayed = true;
        }
    }
});
