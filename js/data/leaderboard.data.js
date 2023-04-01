/* ********************************************************** */
// Leaderboard Data Object
/* ********************************************************** */

// Leaderboard Winners Data

let winnersData = [
    {
        id: 1,
        rank: "1",
        points: "240.98",
        name: "Rohan Deb Sarkar!",
        college: "Ramakrishna Mission Vivekananda Centenary College",
        githubUser: "rohandebsarkar",
        githubLink: "https://hackerrank.com/rohandebsarkar",
        githubImg: "https://hrcdn.net/s3_pub/hr-avatars/7c950619-4b20-4328-9402-490d4962213b/150x150.png",
    },
    {
        id: 2,
        rank: "2",
        points: "240.98",
        name: "Aneendya Datta Gupta!",
        college: "Ramakrishna Mission Vivekananda Centenary College",
        githubUser: "aneendyadg",
        githubLink: "https://hackerrank.com/aneendyadg",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 3,
        rank: "3",
        points: "238.56",
        name: "Ritayudh Laha!",
        college: "Ramakrishna Mission Vivekananda Centenary College",
        githubUser: "ritayudhlahaoff1",
        githubLink: "https://hackerrank.com/ritayudhlahaoff1",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
];

// Leaderboard Ranks Data

let ranksData = [
    {
        id: 1,
        rank: "4",
        points: "227.87",
        name: "Arya Bhattacharjee",
        githubUser: "aryabhatta108",
        githubLink: "https://hackerrank.com/aryabhatta108",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 2,
        rank: "5",
        points: "140.98",
        name: "Sauvik Dutta",
        githubUser: "sauvik_duttaname2",
        githubLink: "https://hackerrank.com/@sauvik_dutta",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 3,
        rank: "6",
        points: "136.15",
        name: "Arif Ahmed Begg",
        githubUser: "arifahmedbegg201",
        githubLink: "https://hackerrank.com/arifahmedbegg201",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 4,
        rank: "7",
        points: "127.87",
        name: "Kartick Samanta",
        githubUser: "theEpsilon",
        githubLink: "https://hackerrank.com/theEpsilon",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 5,
        rank: "8",
        points: "124.59",
        name: "ISHAN BASU",
        githubUser: "ishaanwithu",
        githubLink: "https://hackerrank.com/ishaanwithu",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
    {
        id: 6,
        rank: "9",
        points: "124.59",
        name: "Upayan Chaudhuri",
        githubUser: "upayan2003",
        githubLink: "https://hackerrank.com/upayan2003",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },{
        id: 7,
        rank: "10",
        points: "103.28",
        name: "Arnav",
        githubUser: "arnavbhattachar2",
        githubLink: "https://hackerrank.com/arnavbhattachar2",
        githubImg: "https://hrcdn.net/fcore/assets/profile/default_avatar_bg-fba6466c4f.png",
    },
];

/* ********************************************************** */
// Leaderboard Preview Mapping
/* ********************************************************** */

let winnersContent = document.querySelector("div.leaderboard div.winners");
let ranksContent = document.querySelector(
    "div.leaderboard div.rank_table table tbody"
);

// Leaderboard Winners Preview

Object.values(winnersData).map((val) => {
    winnersContent.innerHTML += `
        <div class="position_card">
            <div class="stats">
                <h2>${val.points}</h2>
                <p>Points</p>
                <span>Rank: ${val.rank}</span>
            </div>
            <div class="desc">
                <img src="${val.githubImg}" alt="Github Avatar" />
                <h1>${val.name}</h1>
                <a href="${val.githubLink}" class="btn">@${val.githubUser}</a>
                <p>${val.college}</p>
            </div>
        </div>
    `;
});

// Leaderboard Ranks Preview

Object.values(ranksData).map((val) => {
    ranksContent.innerHTML += `
        <tr>
            <td>${val.rank}</td>
            <td><img src="${val.githubImg}" /> ${val.name}</td>
            <td><a href="${val.githubLink}">${val.githubUser}</a></td>
            <td>${val.points}</td>
        </tr>
    `;
});

// Confetti Particles *******************************************************

var end = Date.now() + 3 * 1000;

(function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 100,
        origin: { x: 0 },
        colors: ["#ff1700", "#5800ff"],
        zIndex: -1,
        resize: true,
        useWorker: true,
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
        colors: ["#ff1700", "#5800ff"],
        zIndex: -1,
        resize: true,
        useWorker: true,
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
})();