const intDate = new Date().getTime();
const intValue = 1000 * 60 * 60 * 24;

let eventsTimeline = [
  {
    id: 1,
    date: "18 March, 2023",
    name: "Neuroverse program announce",
    desc: "This is where we set the ball rolling!",
    daysLeft: Math.floor(
      (new Date("18 March, 2023 23:59:59").getTime() - new Date().getTime()) /
        intValue +
        1
    ),
  },
  {
    id: 2,
    date: "19 March, 2023",
    name: "Neurotechy Registration",
    desc: "Registration begins for Neurotechies",
    daysLeft: Math.floor(
      (new Date("19 March, 2023 23:59:59").getTime() - new Date().getTime()) /
        intValue +
        1
    ),
  },
  {
    id: 3,
    date: "25 March, 2023",
    name: "Registration End",
    desc: "Registration ends for Neuroverse",
    daysLeft: Math.floor(
      (new Date("25 March, 2023 23:59:59").getTime() - new Date().getTime()) /
        intValue +
        1
    ),
  },
  {
    id: 3,
    date: "30 March, 2023",
    name: "Competition Starts",
    desc: "The wait is over! First day of competition starts",
    daysLeft: Math.floor(
      (new Date("30 March, 2023 23:59:59").getTime() - new Date().getTime()) /
        intValue +
        1
    ),
  },
  {
    id: 4,
    date: "1 April, 2023",
    name: "Final Day of Competition",
    desc:
      "Standup for the Champions! <a href='#' target='_blank'>Get Here!</a>",
    daysLeft: Math.floor(
      (new Date("1 April, 2023 23:59:59").getTime() - new Date().getTime()) /
        intValue +
        1
    ),
  },
];

// Modify eventsTimeline array to add completeClass based on date
eventsTimeline = eventsTimeline.map((event) => {
  const eventDate = new Date(event.date).getTime();
  const isPastEvent = eventDate < intDate;

  if (isPastEvent) {
    return {
      ...event,
      completeClass: "bx bx-check",
      completeStyle: "display:block",
    };
  } else {
    return {
      ...event,
      completeClass: "",
      completeStyle: "display:none",
    };
  }
});

// Render events on the page
let eventsDiv = document.querySelector(".events");

eventsTimeline.forEach((event) => {
  eventsDiv.innerHTML += `
    <!-- Event ${event.id} -->
    <div class="event_card">
        <i class="${event.completeClass}"></i>
        <span style="${event.completeStyle}">
            ${event.daysLeft} Days
        </span>
        <h2>${event.date}</h2>
        <h4>${event.name}</h4>
        <p>${event.desc}</p>
    </div>
`;
});
