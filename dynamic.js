// Sample player data (replace with actual data from your database)
const players = [
    { name: "Ryan Kalkburner", points: 20, assists: 5, rebounds: 10, gamesPlayed: 20, hometown: "Omaha, Nebraska" },
    { name: "Trey Alexander", points: 15, assists: 8, rebounds: 6, gamesPlayed: 20, hometown: "Tulsa, Oklahoma" },
    { name: "Baylor Scheierman", points: 20, assists: 5, rebounds: 10, gamesPlayed: 20, hometown: "Rapid City, South Dakota" },
    { name: "Ryan Nembhard", points: 15, assists: 8, rebounds: 6, gamesPlayed: 20, hometown: "Aurora, Canada" },
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

// Function to populate the player stats table, winning seasons list, and all-time scorers list
function populateData() {
    const statsTableBody = document.querySelector("#stats-table tbody");
    const winningSeasonsList = document.querySelector("#winning-seasons-list");
    const allTimeScorersList = document.querySelector("#all-time-scorers ol");

    // Populate player stats table
    players.forEach(player => {
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
}

// Call the populateData function when the page loads
window.onload = populateData;
