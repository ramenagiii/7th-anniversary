/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


timelineItems.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform = "translateY(30px)";

    item.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(item);

});