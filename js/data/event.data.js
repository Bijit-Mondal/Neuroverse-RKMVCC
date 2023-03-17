/* ********************************************************** */
// Events Timeline Data Object
/* ********************************************************** */

const intDate = new Date().getTime();
const intValue = 1000 * 60 * 60 * 24;

let eventsTimeline = [
    {
        id: 1,
        date: "18 March, 2023",
        name: "Neuroverse program announce",
        desc: "This is where we set the ball rolling!",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("18 March, 2023 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 2,
        date: "19 March, 2023",
        name: "Neurotechy Registration",
        desc: "Registration begins for Neurotechies",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("19 March, 2023 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 3,
        date: "23 March, 2023",
        name: "Competition Starts",
        desc: "The wait is over! First day of competition starts",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("23 March, 2023 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
    {
        id: 4,
        date: "25 March, 2023",
        name: "Final Day of Competition",
        desc: "Standup for the Champions! <a href='#' target='_blank'>Get Here!</a>",

        completeClass: "bx bx-check",
        completeStyle: "display:none",
        daysLeft: Math.floor(
            (new Date("25 March, 2023 23:59:59").getTime() - intDate) /
                intValue +
                1
        ),
    },
];

/* ********************************************************** */
// Events Preview Mapping
/* ********************************************************** */

let eventsDiv = document.querySelector(".events");

Object.values(eventsTimeline).map((val) => {
    eventsDiv.innerHTML += `
        <!-- Event ${val.id} -->
        <div class="event_card">
            <i class="${val.completeClass}"></i>
            <span style="${val.completeStyle}">
                ${val.daysLeft} Days
            </span>
            <h2>${val.date}</h2>
            <h4>${val.name}</h4>
            <p>${val.desc}</p>
        </div>
    `;
});
