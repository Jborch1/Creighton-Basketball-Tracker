// Sample player data (replace with actual data from your database)
const players = [
    //2023
    { name: "Ryan Kalkburner", points: 15.9, assists: 1.2, rebounds: 6.1, gamesPlayed: 34, hometown: "Florissant, MO	", year: "2023" },
    { name: "Trey Alexander", points: 13.6, assists: 2.6, rebounds: 4.2, gamesPlayed: 37, hometown: "Oklahoma City, OK", year: "2023" },
    { name: "Baylor Scheierman", points: 12.8, assists: 3.3, rebounds: 8.3, gamesPlayed: 37, hometown: "Aurora, NE", year: "2023" },
    { name: "Ryan Nembhard", points: 12.1, assists: 4.8, rebounds: 4.0, gamesPlayed: 37, hometown: "Aurora, ON", year: "2023" },
    { name: "Arthur Kaluma", points: 11.8, assists: 1.6, rebounds: 6.0, gamesPlayed: 37, hometown: "Glendale, AZ", year: "2023" },
    { name: "Frederick King", points: 3.4, assists: 0.1, rebounds: 2.5, gamesPlayed: 37, hometown: "Andros, Bahamas", year: "2023" },
    { name: "Francisco Farabello", points: 3.0, assists: 0.9, rebounds: 1.3, gamesPlayed: 34, hometown: "Canada de Gomez, Argentina", year: "2023" },
    { name: "Mason Miller", points: 2.3, assists: 0.2, rebounds: 1.6, gamesPlayed: 36, hometown: "Germantown, TN", year: "2023" },
    { name: "Shareef Mitchell", points: 1.8, assists: 0.5, rebounds: 0.6, gamesPlayed: 36, hometown: "Omaha, NE", year: "2023" },
    { name: "Zander Yates", points: 1.5, assists: 0.4, rebounds: 0.5, gamesPlayed: 11, hometown: "Lee's Summit, Missouri", year: "2023" },
    { name: "Ben Shtolzerbeg", points: 1.5, assists: 0.6, rebounds: 0.9, gamesPlayed: 17, hometown: "Germantown, TN", year: "2023" },
    { name: "Sami Osmani", points: 0.8, assists: 0.4, rebounds: 0.7, gamesPlayed: 11, hometown: "Northridge, CA", year: "2023" },
    { name: "Evan Young", points: 0.6, assists: 0.2, rebounds: 0.0, gamesPlayed: 9, hometown: "Alpine, UT", year: "2023" },



    //2022
    { name: "Ryan Kalkburner", points: 10, assists: 3, rebounds: 6, gamesPlayed: 20, hometown: "Omaha, Nebraska", year: "2022" },
    { name: "Shereef Mitchell", points: 9, assists: 5, rebounds: 2, gamesPlayed: 20, hometown: "Omaha, Nebraska", year: "2022" },
    { name: "Antwann Jones", points: 8, assists: 2, rebounds: 3, gamesPlayed: 20, hometown: "Orlando, Florida", year: "2022" },
    { name: "Alex O'Connell", points: 7, assists: 1, rebounds: 4, gamesPlayed: 20, hometown: "Rosedale, Maryland", year: "2022" },
    { name: "Modestas Kancleris", points: 6, assists: 1, rebounds: 3, gamesPlayed: 20, hometown: "Vilnius, Lithuania", year: "2022" },

    //2021
];

const winningSeasonsData = [
    {
        year: "2023",
        stage: "Elite 8",
        opponent: "San Diego State",
    },
    {
        year: "2022",
        stage: "Second Round",
        opponent: "Kansas",
    },
    {
        year: "2021",
        stage: "Sweet Sixteen",
        opponent: "Gonzaga",
    },
    {
        year: "2018",
        stage: "First Round",
        opponent: "K-State",
    },
];

const allTimeScorers = [
    "Doug McDermott",
    "Rodney Buford",
    "Bob Harstad",
    "Chad Gallagher",
    "Bob Portman",
    "Kyle Korver",
    "Nate Funk",
    "Rick Apke",
    "Paul Silas",
    "Vernon Moore"
];

const scheduleData = {
    "2023": [
        { date: "January 3, 2023", time: "1:00 PM", opponent: "Seaton Hall", location: "Home Arena", score: "83 - 61", winner: "Creighton" },
        { date: "January 7, 2023", time: "4:00 PM", opponent: "UConn<sup>4</sup>", location: "Away Arena", score: "60 - 69", winner: "UConn" },
        { date: "January 11, 2023", time: "11:00 AM", opponent: "Xavier<sup>12</sup>", location: "Away Arena", score: "90 - 87", winner: "Xavier" },
        { date: "January 14, 2023", time: "3:50 PM", opponent: "Providence<sup>19</sup>", location: "Home Arena", score: "73 - 67", winner: "Creighton" },
        { date: "January 17, 2023", time: "8:00 PM", opponent: "Butler", location: "Away Arena", score: "73 - 52", winner: "Creighton" },
        { date: "January 25, 2023", time: "3:00 PM", opponent: "St. Johns", location: "Home Arena", score: "104 - 76", winner: "Creighton" },
        { date: "January 28, 2023", time: "7:00 PM", opponent: "Xavier<sup>13</sup>", location: "Home Arena", score: "84 - 67", winner: "Creighton" },
        { date: "February 1, 2023", time: "5:30 PM", opponent: "Georgetown", location: "Away Arena", score: "63 - 53", winner: "Creighton" },


        // Add more games for 2023
    ],
    "2022": [
        { date: "November 7, 2022", time: "7:30 PM", opponent: "St. Thomas Minnesota", location: "Home Arena", score: "72 - 60", winner: "Creighton" },
        { date: "November 10, 2022", time: "3:30 PM", opponent: "North Dakota", location: "Home Arena", score: "96 - 61", winner: "Creighton" },
        { date: "November 14, 2022", time: "5:30 PM", opponent: "Holy Cross", location: "Home Arena", score: "94 - 65", winner: "Creighton" },
        { date: "November 17, 2022", time: "1:30 PM", opponent: "UC Riverside", location: "Home Arena", score: "80 - 51", winner: "Creighton" },
        { date: "November 21, 2022", time: "8:30 PM", opponent: "Texas Tech<sup>21</sup>", location: "Tournament Game", score: "76 - 65", winner: "Creighton" },
        { date: "November 22, 2022", time: "11:30 PM", opponent: "Arkansas<sup>9</sup>", location: "Tournament Game", score: "90 - 87", winner: "Arizona" },
        { date: "December 1, 2022", time: "3:00 PM", opponent: "Texas<sup>2</sup>", location: "Away Arena", score: "67 - 72", winner: "Texas" },
        { date: "December 4, 2022", time: "1:30 PM", opponent: "Nebraska<", location: "Home Arena", score: "53 - 63", winner: "Nebraska" },
        { date: "December 10, 2022", time: "4:00 PM", opponent: "BYU", location: "Home Arena", score: "80 - 83", winner: "BYU" },
        { date: "December 12, 2022", time: "5:30 PM", opponent: "Arizona State", location: "Home Arena", score: "71 - 73", winner: "Arizona State" },
        { date: "December 16, 2022", time: "3:00 PM", opponent: "Marquette", location: "Away Arena", score: "58 - 69", winner: "Marquette" },
        { date: "December 22, 2022", time: "6:00 PM", opponent: "Butler", location: "Home Arena", score: "78 - 56", winner: "Creighton" },
        { date: "December 25, 2022", time: "3:30 PM", opponent: "Depaul", location: "Home Arena", score: "80 - 65", winner: "Creighton" },
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
winningSeasonsData.forEach(season => {
    const listItem = document.createElement("li");
    listItem.textContent = `${season.year}: Made it to: ${season.stage}, Opponent: ${season.opponent}`;
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

// Call the populateData function when the page loads
window.onload = function () {
    // Initialize with the default year
    populateData("2023");

    
    // Mapbox initialization
    mapboxgl.accessToken = 'pk.eyJ1IjoiamJvcmNoZXJ0MSIsImEiOiJjbHBrYTRzbTQwNm1iMmpwZXdoaXdnejJ2In0.mGu9pueDICrUzoimt5euXg'; 

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-95.9345, 41.2565],
        zoom: 10,
    });

    // Sample player data (replace with actual data from your database)
    const playerLocations = [
        { name: "Ryan Kalkburner", coordinates: [-95.9345, 41.2565] },
        // Add coordinates for other players
    ];

    // Add map markers for each player
    playerLocations.forEach(player => {
        new mapboxgl.Marker()
            .setLngLat(player.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${player.name}</h3>`))
            .addTo(map);
    });
};