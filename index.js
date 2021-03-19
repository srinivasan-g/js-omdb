const appDiv = document.getElementById("app");

pathToData = "chatTranscript.lines";

const updateCallback = function(data) {
  console.log("***updateCallback****");
  // Do something with the returning data
  // console.log(JSON.stringify(data));
  const path = data.key;
  const value = data.newValue;
  const index = value.length - 1;
  const messageObj = value[index];

  // if (messageObj.source === "visitor") {
  fetch("https://www.omdbapi.com?t=" + messageObj.text + "&apikey=a5599b52")
    .then(response => response.json())
    .then(resut => {
      // console.log(resut)
      appDiv.innerHTML =
        "<div>Title: " +
        resut.Title +
        "</div> <br>" +
        "<div>Year: " +
        resut.Year +
        "</div>" +
        "<div>Rated: " +
        resut.Rated +
        "</div>" +
        "<div>Released: " +
        resut.Released +
        "</div>" +
        "<div>Runtime: " +
        resut.Runtime +
        "</div>" +
        "<div>Genre: " +
        resut.Genre +
        "</div>" +
        "<div>Director: " +
        resut.Director +
        "</div>" +
        "<div>Actors: " +
        resut.Actors +
        "</div>" +
        "<div>Plot: " +
        resut.Plot +
        "</div>" +
        "<div>Awards: " +
        resut.Awards +
        "</div>" +
        "<div>imdbRating: " +
        resut.imdbRating +
        "</div>";
    });
  // }

  // called each time the value is updated.
  // If there's an existing value when bind is called - this callback
  // will be called with the existing value
};

const notifyWhenDone = function(err) {
  if (err) {
    // Do something with the error
  }
  // called when the bind is completed successfully,
  // or when the action terminated with an error.
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);

// Data Object
// by: "srinivasan.g2@infosys.com"
// clientProperties: undefined
// dialogId: "76b1f25f-6912-46a2-8274-195cb2be8f27"
// id: "76b1f25f-6912-46a2-8274-195cb2be8f27::7"
// source: "agent"
// status: "SENT"
// text: "hi"
// time: 1616153108071
// type: "line"

// Actors: "Sharman Joshi, Amrita Arora, Sohail Khan, Isha Koppikar"
// Awards: "N/A"
// BoxOffice: "N/A"
// Country: "India"
// DVD: "05 Apr 2018"
// Director: "Atul Agnihotri"
// Genre: "Drama, Romance"
// Language: "Hindi"
// Metascore: "N/A"
// Plot: "Call-center workers receive a phone call from God."
// Poster: "https://m.media-amazon.com/images/M/MV5BZGM5NjliODgtODVlOS00OWZmLWIzYzMtMTI2OWIzMTM1ZGRhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "N/A"
// Ratings: (2) [{…}, {…}]
// Released: "10 Oct 2008"
// Response: "True"
// Runtime: "129 min"
// Title: "Hello"
// Type: "movie"
// Website: "N/A"
// Writer: "Atul Agnihotri (screenplay), Chetan Bhagat (additional dialogue), Chetan Bhagat (book), Jalees Sherwani (lyrics), Alok Upadhyay (additional dialogue)"
// Year: "2008"
// imdbID: "tt1087856"
// imdbRating: "3.3"
// imdbVotes: "1,892";
