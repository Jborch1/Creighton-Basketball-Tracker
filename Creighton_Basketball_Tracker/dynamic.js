// Sample player data (replace with actual data from your database)
const players = [
    //2023-2024
    { name: "Baylor Scheierman", points: 19.3, assists: 3.4, rebounds: 7.5, gamesPlayed: 8, hometown: "Aurora, NE", year: "2023" },
    { name: "Trey Alexander", points: 16.0, assists: 4.5, rebounds: 6.4, gamesPlayed: 8, hometown: "Oklahoma City, OK", year: "2023" },
    { name: "Ryan Kalkbrenner", points: 15.1, assists: 1.5, rebounds: 7.1, gamesPlayed: 8, hometown: "Omaha, Nebraska", year: "2023" },
    { name: "Steven Ashworth", points: 9.8, assists: 3.5, rebounds: 3.1, gamesPlayed: 8, hometown: "Lone Peak, UT", year: "2023" },
    { name: "Mason Miller", points: 5.8, assists: 0.8, rebounds: 3.8, gamesPlayed: 6, hometown: "Germantown, TN", year: "2023" },
    { name: "Francisco Farabello", points: 5.6, assists: 1.6, rebounds: 2.6, gamesPlayed: 8, hometown: "Canada de Gomez, Argentina", year: "2023" },
    { name: "Isaac Traudt", points: 5.6, assists: 0.8, rebounds: 3.0, gamesPlayed: 8, hometown: "Grand Island, NE", year: "2023" },
    { name: "Fredrick King", points: 5.5, assists: 0.1, rebounds: 4.9, gamesPlayed: 8, hometown: "Andros, Bahamas", year: "2023" },
    { name: "Josiah Dotzler", points: 1.7, assists: 0.1, rebounds: 0.6, gamesPlayed: 7, hometown: "Omaha, NE", year: "2023" },
    { name: "Johnathan Lawson", points: 1.3, assists: 0.8, rebounds: 1.3, gamesPlayed: 6, hometown: "Memphis, TN", year: "2023" },
    { name: "Jasen Green", points: 0.5, assists: 0.3, rebounds: 1.3, gamesPlayed: 4, hometown: "Lathrop, CA", year: "2023" },



    //2022-2023
    { name: "Ryan Kalkbrenner", points: 15.9, assists: 1.2, rebounds: 6.1, gamesPlayed: 34, hometown: "Omaha, Nebraska", year: "2022" },
    { name: "Trey Alexander", points: 13.6, assists: 2.6, rebounds: 4.2, gamesPlayed: 37, hometown: "Oklahoma City, OK", year: "2022" },
    { name: "Baylor Scheierman", points: 12.8, assists: 3.3, rebounds: 8.3, gamesPlayed: 37, hometown: "Aurora, NE", year: "2022" },
    { name: "Ryan Nembhard", points: 12.1, assists: 4.8, rebounds: 4.0, gamesPlayed: 37, hometown: "Aurora, ON", year: "2022" },
    { name: "Arthur Kaluma", points: 11.8, assists: 1.6, rebounds: 6.0, gamesPlayed: 37, hometown: "Glendale, AZ", year: "2022" },
    { name: "Frederick King", points: 3.4, assists: 0.1, rebounds: 2.5, gamesPlayed: 37, hometown: "Andros, Bahamas", year: "2022" },
    { name: "Francisco Farabello", points: 3.0, assists: 0.9, rebounds: 1.3, gamesPlayed: 34, hometown: "Canada de Gomez, Argentina", year: "2022" },
    { name: "Mason Miller", points: 2.3, assists: 0.2, rebounds: 1.6, gamesPlayed: 36, hometown: "Germantown, TN", year: "2022" },
    { name: "Shareef Mitchell", points: 1.8, assists: 0.5, rebounds: 0.6, gamesPlayed: 36, hometown: "Omaha, NE", year: "2022" },
    { name: "Zander Yates", points: 1.5, assists: 0.4, rebounds: 0.5, gamesPlayed: 11, hometown: "Lee's Summit, Missouri", year: "2022" },
    { name: "Ben Shtolzerbeg", points: 1.5, assists: 0.6, rebounds: 0.9, gamesPlayed: 17, hometown: "Germantown, TN", year: "2022" },
    { name: "Sami Osmani", points: 0.8, assists: 0.4, rebounds: 0.7, gamesPlayed: 11, hometown: "Northridge, CA", year: "2022" },
    { name: "Evan Young", points: 0.6, assists: 0.2, rebounds: 0.0, gamesPlayed: 9, hometown: "Alpine, UT", year: "2022" },

    //2021
];

const winningSeasonsData = [
    { year: "1941", stage: "Elite Eight", opponent: "Washington State" },
    { year: "1962", stage: "Regional Third Place Game", opponent: "Texas Tech" },
    { year: "1964", stage: "Regional Third Place Game", opponent: "Texas Western" },
    { year: "1974", stage: "Regional Third Place Game", opponent: "Louisville" },
    { year: "1975", stage: "First Round", opponent: "Maryland" },
    { year: "1978", stage: "First Round", opponent: "DePaul" },
    { year: "1981", stage: "First Round", opponent: "St. Joseph's" },
    { year: "1989", stage: "First Round", opponent: "Missouri" },
    { year: "1991", stage: "Second Round", opponent: "Seton Hall" },
    { year: "1999", stage: "Second Round", opponent: "Maryland" },
    { year: "2000", stage: "First Round", opponent: "Auburn" },
    { year: "2001", stage: "First Round", opponent: "Iowa" },
    { year: "2002", stage: "Second Round", opponent: "Illinois" },
    { year: "2003", stage: "First Round", opponent: "Central Michigan" },
    { year: "2005", stage: "First Round", opponent: "West Virginia" },
    { year: "2007", stage: "First Round", opponent: "Nevada" },
    { year: "2012", stage: "Third Round", opponent: "North Carolina" },
    { year: "2013", stage: "Third Round", opponent: "Duke" },
    { year: "2014", stage: "Third Round", opponent: "Baylor" },
    { year: "2017", stage: "First Round", opponent: "Rhode Island" },
    { year: "2018", stage: "First Round", opponent: "Kansas State" },
    { year: "2021", stage: "Sweet Sixteen", opponent: "Gonzaga" },
    { year: "2022", stage: "Second Round", opponent: "Kansas" },
    { year: "2023", stage: "Elite Eight", opponent: "San Diego State" }
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
        { date: "November 7, 2022", time: "8:00 PM", opponent: "Florida A&M", location: "Home Arena", score: "105 - 54", winner: "Creighton" },
        { date: "November 11, 2022", time: "2:00 PM", opponent: "North Dakota State", location: "Home Arena", score: "89 - 60", winner: "Creighton" },
        { date: "November 14, 2022", time: "10:00 PM", opponent: "Iowa", location: "Home Arena", score: "92 - 84", winner: "Creighton" },
        { date: "November 18, 2022", time: "8:30 PM", opponent: "Texas Southern", location: "Home Arena", score: "82 - 50", winner: "Creighton" },
        { date: "November 22, 2022", time: "4:00 PM", opponent: "Loyola Chicago", location: "Home Arena", score: "88 - 65", winner: "Creighton" },
        { date: "November 23, 2022", time: "4:00 PM", opponent: "Colorado State", location: "Home Arena", score: "69 - 48", winner: "Colorado State" },
        { date: "November 30, 2022", time: "9:00 PM", opponent: "@ Oklahoma State", location: "Oklahoma State", score: "79 - 65", winner: "Creighton" },
        { date: "December 3, 2022", time: "4:30 PM", opponent: "@ Nebraska", location: "Nebraska", score: "89 - 60", winner: "Creighton" },
        { date: "December 9, 2022", time: "1:00 PM", opponent: "Central Michigan", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "December 13, 2022", time: "8:00 PM", opponent: "UNLV", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "December 16, 2022", time: "7:00 PM", opponent: "Alabama", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "December 20, 2022", time: "8:00 PM", opponent: "Villanova", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "December 30, 2022", time: "1:00 PM", opponent: "@ Marquette", location: "Marquette", score: "TBD", winner: "TBD" },
        { date: "January 2, 2023", time: "6:00 PM", opponent: "@ Georgetown", location: "Georgetown", score: "TBD", winner: "TBD" },
        { date: "January 6, 2023", time: "1:00 PM", opponent: "Providence", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "January 9, 2023", time: "8:00 PM", opponent: "@ DePaul", location: "DePaul", score: "TBD", winner: "TBD" },
        { date: "January 13, 2023", time: "12:00 PM", opponent: "St. John's", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "January 17, 2023", time: "6:00 PM", opponent: "@ UConn", location: "UConn", score: "TBD", winner: "TBD" },
        { date: "January 20, 2023", time: "11:00 AM", opponent: "@ Seton Hall", location: "Seton Hall", score: "TBD", winner: "TBD" },
        { date: "January 23, 2023", time: "7:30 PM", opponent: "Xavier", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "January 27, 2023", time: "6:00 PM", opponent: "DePaul", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "February 2, 2023", time: "8:00 PM", opponent: "Butler", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "February 7, 2023", time: "7:30 PM", opponent: "@ Providence", location: "Providence", score: "TBD", winner: "TBD" },
        { date: "February 10, 2023", time: "11:30 AM", opponent: "@ Xavier", location: "Xavier", score: "TBD", winner: "TBD" },
        { date: "February 13, 2023", time: "7:30 PM", opponent: "Georgetown", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "February 17, 2023", time: "11:30 AM", opponent: "@ Butler", location: "Butler", score: "TBD", winner: "TBD" },
        { date: "February 20, 2023", time: "7:30 PM", opponent: "UConn", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "February 25, 2023", time: "11:00 AM", opponent: "@ St. John's", location: "St. John's", score: "TBD", winner: "TBD" },
        { date: "February 28, 2023", time: "8:00 PM", opponent: "Seton Hall", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "March 2, 2023", time: "1:30 PM", opponent: "Marquette", location: "Home Arena", score: "TBD", winner: "TBD" },
        { date: "March 9, 2023", time: "TBD", opponent: "@ Villanova", location: "Villanova", score: "TBD", winner: "TBD" },
    ],
    "2022": [
        { date: "November 7, 2022", time: "7:30 PM", opponent: "St. Thomas Minnesota", location: "Home Arena", score: "72 - 60", winner: "Creighton" },
        { date: "November 10, 2022", time: "3:30 PM", opponent: "North Dakota", location: "Home Arena", score: "96 - 61", winner: "Creighton" },
        { date: "November 14, 2022", time: "5:30 PM", opponent: "Holy Cross", location: "Home Arena", score: "94 - 65", winner: "Creighton" },
        { date: "November 17, 2022", time: "1:30 PM", opponent: "UC Riverside", location: "Home Arena", score: "80 - 51", winner: "Creighton" },
        { date: "November 21, 2022", time: "8:30 PM", opponent: "Texas Tech<sup>21</sup>", location: "Tournament Game", score: "76 - 65", winner: "Creighton" },
        { date: "November 22, 2022", time: "11:30 PM", opponent: "Arkansas<sup>9</sup>", location: "Tournament Game", score: "90 - 87", winner: "Arizona" },
        { date: "December 1, 2022", time: "3:00 PM", opponent: "Texas<sup>2</sup>", location: "Away Arena", score: "67 - 72", winner: "Texas" },
        { date: "December 4, 2022", time: "1:30 PM", opponent: "Nebraska", location: "Home Arena", score: "53 - 63", winner: "Nebraska" },
        { date: "December 10, 2022", time: "4:00 PM", opponent: "BYU", location: "Home Arena", score: "80 - 83", winner: "BYU" },
        { date: "December 12, 2022", time: "5:30 PM", opponent: "Arizona State", location: "Home Arena", score: "71 - 73", winner: "Arizona State" },
        { date: "December 16, 2022", time: "3:00 PM", opponent: "Marquette", location: "Away Arena", score: "58 - 69", winner: "Marquette" },
        { date: "December 22, 2022", time: "6:00 PM", opponent: "Butler", location: "Home Arena", score: "78 - 56", winner: "Creighton" },
        { date: "December 25, 2022", time: "3:30 PM", opponent: "Depaul", location: "Home Arena", score: "80 - 65", winner: "Creighton" },
        { date: "January 7, 2023", time: "12:00 PM", opponent: "UConn<sup>4</sup>", location: "Away Arena", score: "69 - 60", winner: "UConn" },
        { date: "January 11, 2023", time: "7:00 PM", opponent: "Xavier<sup>12</sup>", location: "Away Arena", score: "90 - 87", winner: "Xavier" },
        { date: "January 14, 2023", time: "2:00 PM", opponent: "Providence<sup>19</sup>", location: "Home Arena", score: "73 - 67", winner: "Creighton" },
        { date: "January 17, 2023", time: "7:00 PM", opponent: "Butler", location: "Away Arena", score: "73 - 52", winner: "Creighton" },
        { date: "January 25, 2023", time: "9:00 PM", opponent: "St. John's", location: "Home Arena", score: "104 - 76", winner: "Creighton" },
        { date: "January 28, 2023", time: "7:30 PM", opponent: "Xavier<sup>13</sup>", location: "Home Arena", score: "84 - 67", winner: "Creighton" },
        { date: "February 1, 2023", time: "6:30 PM", opponent: "Georgetown", location: "Away Arena", score: "63 - 53", winner: "Creighton" },
        { date: "February 4, 2023", time: "7:30 PM", opponent: "Villanova", location: "Home Arena", score: "66 - 61", winner: "Creighton" },
        { date: "February 8, 2023", time: "6:30 PM", opponent: "Seton Hall", location: "Away Arena", score: "75 - 62", winner: "Creighton" },
        { date: "February 11, 2023", time: "2:00 PM", opponent: "UConn<sup>21</sup>", location: "Home Arena", score: "56 - 53", winner: "Creighton" },
        { date: "February 14, 2023", time: "7:00 PM", opponent: "Providence<sup>24</sup>", location: "Away Arena", score: "94 - 86 2OT", winner: "Providence" },
        { date: "February 18, 2023", time: "7:30 PM", opponent: "St. John's", location: "Away Arena", score: "77 - 67", winner: "Creighton" },
        { date: "February 21, 2023", time: "8:30 PM", opponent: "Marquette<sup>10</sup>", location: "Home Arena", score: "73 - 71", winner: "Marquette" },
        { date: "February 25, 2023", time: "12:00 PM", opponent: "Villanova", location: "Away Arena", score: "79 - 67", winner: "Villanova" },
        { date: "March 1, 2023", time: "8:30 PM", opponent: "Georgetown", location: "Home Arena", score: "99 - 59", winner: "Creighton" },
        { date: "March 4, 2023", time: "9:00 PM", opponent: "DePaul", location: "Away Arena", score: "84 - 70", winner: "Creighton" },
        { date: "March 9, 2023", time: "9:30 PM", opponent: "Villanova", location: "Home Arena", score: "87 - 74", winner: "Creighton" },
        { date: "March 10, 2023", time: "9:00 PM", opponent: "Xavier<sup>15</sup>", location: "Home Arena", score: "82 - 60", winner: "Xavier" },
        // Add more games for 2022
    ],
    "2021": [
        // Add games for 2021
    ],
    // Add more years as needed
};



//new Code added for ordering tables
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr));

})));



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

    const playerLocations = [
        { name: "Trey Alexander", coordinates: [-97.5171, 35.4676] }, // Oklahoma City, OK
        { name: "Ryan Kalkbrenner", coordinates: [-90.1994, 38.6270] }, // St. Louis, Missouri
        { name: "Steven Ashworth", coordinates: [-111.7619, 40.4641] }, // Lone Peak, UT
        { name: "Mason Miller", coordinates: [-89.7920, 35.0868] }, // Germantown, TN
        { name: "Francisco Farabello", coordinates: [-61.3922, -32.8140] }, // Canada de Gomez, Argentina
        { name: "Isaac Traudt", coordinates: [-98.3420, 40.9236] }, // Grand Island, NE
        { name: "Fredrick King", coordinates: [-77.5946, 24.7036] }, // Andros, Bahamas
        { name: "Josiah Dotzler", coordinates: [-95.9404, 41.2565] }, // Omaha, NE
        { name: "Johnathan Lawson", coordinates: [-90.0515, 35.1495] }, // Memphis, TN
        { name: "Jasen Green", coordinates: [-121.2836, 37.8252] }, // Lathrop, CA
    ];

    // Add map markers for each player
    playerLocations.forEach(player => {
        new mapboxgl.Marker()
            .setLngLat(player.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${player.name}</h3>`))
            .addTo(map);
});
};