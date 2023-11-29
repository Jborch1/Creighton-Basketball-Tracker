// Sample player data (replace with actual data from your database)
const players = [
    { name: "Ryan Kalkburner", points: 20, assists: 5, rebounds: 10, gamesPlayed: 20, hometown: "Omaha, Nebraska", year: "2023" },
    { name: "Trey Alexander", points: 15, assists: 8, rebounds: 6, gamesPlayed: 20, hometown: "Tulsa, Oklahoma", year: "2023" },
    { name: "Baylor Scheierman", points: 20, assists: 5, rebounds: 10, gamesPlayed: 20, hometown: "Rapid City, South Dakota", year: "2023" },
    { name: "Ryan Nembhard", points: 15, assists: 8, rebounds: 6, gamesPlayed: 20, hometown: "Aurora, Canada", year: "2023" },
    { name: "Marcus Zegarowski", points: 17, assists: 4, rebounds: 3, gamesPlayed: 20, hometown: "Hamilton, Massachusetts", year: "2023" },
    { name: "Mitch Ballock", points: 15, assists: 3, rebounds: 5, gamesPlayed: 20, hometown: "Eudora, Kansas", year: "2023" },
    { name: "Denzel Mahoney", points: 14, assists: 2, rebounds: 4, gamesPlayed: 20, hometown: "Oviedo, Florida", year: "2023" },
    { name: "Christian Bishop", points: 12, assists: 1, rebounds: 7, gamesPlayed: 20, hometown: "Lee's Summit, Missouri", year: "2023" },
    { name: "Ryan Kalkburner", points: 10, assists: 3, rebounds: 6, gamesPlayed: 20, hometown: "Omaha, Nebraska", year: "2022" },
    { name: "Shereef Mitchell", points: 9, assists: 5, rebounds: 2, gamesPlayed: 20, hometown: "Omaha, Nebraska", year: "2022" },
    { name: "Antwann Jones", points: 8, assists: 2, rebounds: 3, gamesPlayed: 20, hometown: "Orlando, Florida", year: "2022" },
    { name: "Alex O'Connell", points: 7, assists: 1, rebounds: 4, gamesPlayed: 20, hometown: "Rosedale, Maryland", year: "2022" },
    { name: "Modestas Kancleris", points: 6, assists: 1, rebounds: 3, gamesPlayed: 20, hometown: "Vilnius, Lithuania", year: "2022" },
    // Add more players as needed
];

const winningSeasonsData = [
    { player: "Ryan Kalkburner", seasons: ["2018-2019", "2019-2020"] },
    { player: "Trey Alexander", seasons: ["2019-2020"] },
    { player: "Baylor Scheierman", seasons: ["2017-2018", "2018-2019", "2019-2020"] },
    { player: "Ryan Nembhard", seasons: ["2018-2019", "2019-2020"] },
];

const allTimeScorers = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
    "Player 7",
    "Player 8",
    "Player 9",
    "Player 10"
];

const scheduleData = {
    "2023": [
        { date: "March 1, 2023", time: "7:00 PM", opponent: "Opponent 1", location: "Home Arena", score: "88 - 97", winner: "Creighton" },
        { date: "March 6, 2023", time: "3:30 PM", opponent: "Opponent 2", location: "Away Arena", score: "99 - 98", winner: "Creighton" },
        // Add more games for 2023
    ],
    "2022": [
        { date: "March 1, 2022", time: "7:00 PM", opponent: "Opponent 3", location: "Home Arena", score: "75 - 80", winner: "Opponent 3" },
        { date: "March 23, 2022", time: "3:30 PM", opponent: "Opponent 4", location: "Away Arena", score: "92 - 89", winner: "Creighton" },
        // Add more games for 2022
    ],
    "2021": [
        // Add games for 2021
    ],
    // Add more years as needed
};

function populateData(year) {
    const statsTableBody = document.querySelector("#stats-table tbody");
    const winningSeasonsList = document.querySelector("#winning-seasons-list");
    const allTimeScorersList = document.querySelector("#all-time-scorers ol");
    const scheduleTableBody = document.querySelector("#schedule-table tbody");

    // Clear previous data
    statsTableBody.innerHTML = "";
    winningSeasonsList.innerHTML = "";
    allTimeScorersList.innerHTML = "";
    scheduleTableBody.innerHTML = "";

    // Populate player stats table and schedule table based on the selected year
    players.filter(player => player.year === year).forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.points}</td>
            <td>${player.assists}</td>
            <td>${player.rebounds}</td>
            <td>${player.gamesPlayed}</td>
            <td>${player.hometown}</td>
        `;
        statsTableBody.appendChild(row);
    });

    // Populate winning seasons list
    winningSeasonsData.forEach(player => {
        const listItem = document.createElement("li");
        listItem.textContent = `${player.player}: ${player.seasons.join(", ")}`;
        winningSeasonsList.appendChild(listItem);
    });

    // Populate the all-time scorers list
    allTimeScorers.forEach(scorer => {
        const listItem = document.createElement("li");
        listItem.textContent = scorer;
        allTimeScorersList.appendChild(listItem);
    });

    // Populate schedule table based on the selected year
    if (scheduleData[year]) {
        scheduleData[year].forEach(game => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${game.date}</td>
                <td>${game.time}</td>
                <td>${game.opponent}</td>
                <td>${game.location}</td>
                <td>${game.score}</td>
                <td>${game.winner}</td>
            `;
            scheduleTableBody.appendChild(row);
        });
    }
}

// Call the populateData function when the page loads
window.onload = function () {
    // Initialize with the default year
    populateData("2023");
};

function updateTable() {
    console.log("Update table called!");
    const yearDropdown = document.getElementById("year");
    const selectedYear = yearDropdown.value;

    // Update both the player stats and schedule sections based on the selected year
    populateData(selectedYear);
}