let ranksData = [
    {
        id: 1,
        name: "Sayan Das",
        designation:"Co-Organizer"
    },
    {
        id: 2,
        name: "Srijan Dutta",
        designation:"Co-Organizer"
    },
    {
        id: 3,
        name: "Shubham Pal",
        designation:"Co-Organizer"
    },
    {
        id: 4,
        name: "Aniruddha Karmakar",
        designation:"Lead Volunteer"
    },
    {
        id: 5,
        name: "Joydipta Biswas",
        designation:"Volunteer"
    },
    {
        id: 6,
        name: "Debjit Dey",
        designation:"Volunteer"
    },{
        id: 7,
        name: "Soham Palodhy",
        designation:"Volunteer"
    },{
        id: 8,
        name: "Soumyadip Ghosh",
        designation:"Volunteer"
    },{
        id: 9,
        name: "Sujoy Mondal",
        designation:"Volunteer"
    },{
        id: 10,
        name: "Samyabrata Bose",
        designation:"Volunteer"
    },{
        id: 11,
        name: "Rishi Dutta",
        designation:"Volunteer"
    },{
        id: 12,
        name: "Tapan Biswas",
        designation:"Volunteer"
    },{
        id: 13,
        name: "Ayan Paul",
        designation:"Volunteer"
    },{
        id: 14,
        name: "Anshuman Panja",
        designation:"Volunteer"
    },{
        id: 15,
        name: "Sayantan Mondal",
        designation:"Volunteer"
    },{
        id: 16,
        name: "Soubhagya Paul",
        designation:"Volunteer"
    },{
        id: 17,
        name: "Arkodip Ganguly",
        designation:"Photographer"
    },
];

/* ********************************************************** */
// Leaderboard Preview Mapping
/* ********************************************************** */

// let winnersContent = document.querySelector("div.leaderboard div.winners");
let ranksContent = document.querySelector(
    "div.leaderboard div.rank_table table tbody"
);


Object.values(ranksData).map((val) => {
    ranksContent.innerHTML += `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>
            <td><a href="#">${val.designation}</a></td>
        </tr>
    `;
});

// Confetti Particles *******************************************************
