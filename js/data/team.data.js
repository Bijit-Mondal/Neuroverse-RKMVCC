/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Jishnu Bandyopadhyay",
        avatar: "/assets/img/team/utpalendu_barman.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/utpalendubarman",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/utpalendubarman/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://twitter.com/badhanbarman",
    },
    {
        id: 2,
        name: "Darpan Bhattacharya",
        avatar: "/assets/img/team/niloy_sikdar.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/niloysikdar",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/niloysikdar/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://twitter.com/niloysikdar_",
    },
    {
        id: 3,
        name: "Bitan Majumder",
        avatar: "/assets/img/team/anubhab_sarkar.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/anubhab1710",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/anubhabsarkar/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://twitter.com/xperiencewhiz",
    },
    {
        id: 4,
        name: "Bijit Mondal",
        avatar: "/assets/img/team/niladri_mondal.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/imniladri",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/imniladrimondal/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://twitter.com/imniladrimondal",
    }
];

/* ********************************************************** */
// Team Members Preview Mapping
/* ********************************************************** */

let teamDiv = document.querySelector(".members");

Object.values(teamDetails).map((val) => {
    teamDiv.innerHTML += `
        <!-- Member ${val.id} -->
        <div class="member_card">
            <img src="${val.avatar}" alt="Profile Img" />
            <h2>${val.name}</h2>
            <p><span>${val.desc}</span></p>
            <div class="social">
                <a href="${val.socialLink1}" target="_blank"><i class="${val.socialIcon1}"></i></a>
                <a href="${val.socialLink2}" target="_blank"><i class="${val.socialIcon2}"></i></a>
                <a href="${val.socialLink3}" target="_blank"><i class="${val.socialIcon3}"></i></a>
            </div>
        </div>
    `;
});
