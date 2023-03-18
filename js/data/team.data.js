/* ********************************************************** */
// Team Members Data Object
/* ********************************************************** */

let teamDetails = [
    {
        id: 1,
        name: "Jishnu Bandyopadhyay",
        avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Jishnu_uid_6414962903dff.jpeg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/TheRealJishnu",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/jishnu-bandyopadhyay-051353246/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://www.hackerrank.com/therealjishnu",
    },
    {
        id: 2,
        name: "Darpan Bhattacharya",
        avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Darpan_uid_64149629daefa.jpeg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/darpan-b",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "http://in.linkedin.com/in/darpan-bhattacharya-b79811247",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "http://hackerrank.com/winxtron",
    },
    {
        id: 3,
        name: "Bitan Majumder",
        avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Bitan_uid_6414962a694a6.jpeg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/bitanM",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/bitan-majumder-672801237",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://www.hackerrank.com/bitanmajumder201",
    },
    {
        id: 4,
        name: "Sayan Das",
        avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/18/pci_uid_6415d3080cc88.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/SayanDasDev",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/das-sayan/",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://www.hackerrank.com/SayanDasDev",
    
    },
    {
        id: 5,
        name: "Bijit Mondal",
        avatar: "https://bijit.xyz/cockpit-master/storage/uploads/2023/03/17/Bijit_uid_641496a7a8e4d.jpg",
        desc: "Organizer",

        socialIcon1: "bx bxl-github",
        socialLink1: "https://github.com/Bijit-Mondal",

        socialIcon2: "bx bxl-linkedin",
        socialLink2: "https://www.linkedin.com/in/bijit-mondal-3b196721b",

        socialIcon3: "bx bx-code-alt",
        socialLink3: "https://www.hackerrank.com/bijitmondal567",
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
            <img src="${val.avatar}" width="200px" height="200px" alt="Profile Img" />
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
