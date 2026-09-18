function toggleCategory(element) {
    const gallery = element.querySelector(".image-gallery");

    if (gallery.style.display === "grid") {
        gallery.style.display = "none";
        element.classList.remove("active");
    } else {
        document.querySelectorAll(".portfolio-category").forEach(function(box) {
            box.classList.remove("active");
            box.querySelector(".image-gallery").style.display = "none";
        });

        element.classList.add("active");
        gallery.style.display = "grid";
    }
}

function openHighlight(videoName) {

    const modal = document.getElementById("highlightModal");
    const video = document.getElementById("highlightVideo");

    /* Set selected video */
    video.src = "highlight/" + videoName;

    /* Show popup */
    modal.style.display = "flex";

    /* Start from beginning */
    video.currentTime = 0;

    /* Original video audio */
    video.muted = false;

    /* Play selected video */
    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(function() {
            /* User can press Play if browser blocks autoplay */
        });
    }

    /* Prevent background page scrolling */
    document.body.style.overflow = "hidden";
}



function closeHighlight() {

    const modal = document.getElementById("highlightModal");
    const video = document.getElementById("highlightVideo");

    /* Stop video */
    video.pause();

    /* Reset video */
    video.currentTime = 0;

    /* Remove video source */
    video.removeAttribute("src");

    video.load();

    /* Hide popup */
    modal.style.display = "none";

    /* Enable page scrolling */
    document.body.style.overflow = "";
}


document.getElementById("highlightModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeHighlight();
    }

});



document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const modal = document.getElementById("highlightModal");

        if (modal.style.display === "flex") {
            closeHighlight();
        }

    }

});

/* =====================================================
   OPEN VIDEO WITH ORIGINAL AUDIO
   ===================================================== */

function openHighlight(videoName) {

    const modal = document.getElementById("highlightModal");
    const video = document.getElementById("highlightVideo");

    /* Set the selected video */
    video.src = "highlight/" + videoName;

    /* Show popup */
    modal.style.display = "flex";

    /* Start from beginning */
    video.currentTime = 0;

    /* IMPORTANT:
       Play the audio already inside the uploaded video */
    video.muted = false;
    video.volume = 1;

    /* Load the selected video */
    video.load();

    /* Play video + its original audio */
    video.play().catch(function(error) {

        console.log("Browser requires user to press Play.");

    });

    /* Prevent page scrolling while video is open */
    document.body.style.overflow = "hidden";
}


/* =====================================================
   CLOSE VIDEO
   ===================================================== */

function closeHighlight() {

    const modal = document.getElementById("highlightModal");
    const video = document.getElementById("highlightVideo");

    /* STOP video */
    video.pause();

    /* STOP its audio */
    video.muted = true;

    /* Reset */
    video.currentTime = 0;

    /* Remove current video */
    video.removeAttribute("src");

    /* Clear loaded video */
    video.load();

    /* Close popup */
    modal.style.display = "none";

    /* Enable page scrolling */
    document.body.style.overflow = "";
}


/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE VIDEO
   ===================================================== */

document.getElementById("highlightModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeHighlight();
        }

    }
);


/* =====================================================
   CLOSE WITH ESC KEY
   ===================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const modal = document.getElementById("highlightModal");

        if (modal.style.display === "flex") {
            closeHighlight();
        }

    }

});

function playHighlight(box, videoName) {

    const video = box.querySelector("video");

    // Stop all other videos
    document.querySelectorAll(".highlight-box video").forEach(function(v) {
        if (v !== video) {
            v.pause();
            v.muted = true;
        }
    });

    // Turn ON the original audio inside the video
    video.muted = false;
    video.volume = 1;

    // Play the video
    video.play().catch(function() {
        console.log("Click the video again to enable sound.");
    });

    // Hide overlay while playing
    box.classList.add("playing");
}
function toggleCategory(element) {
    element.classList.toggle("active");
}


