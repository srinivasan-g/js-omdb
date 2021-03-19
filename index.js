const appDiv = document.getElementById("app");
pathToData = "chatTranscript.lines";

const updateCallback = function(data) {
  console.log("***updateCallback****");
  // Do something with the returning data
  // console.log(JSON.stringify(data));
  // const path = data.key;
  const value = data.newValue;
  const index = value.length - 1;
  const messageObj = value[index];

  if (messageObj.source === "visitor") {
    fetch("https://www.omdbapi.com?t=" + messageObj.text + "&apikey=a5599b52")
      .then(response => response.json())
      .then(resut => {
        // console.log(resut)
        if (resut.Response === "True") {
          appDiv.innerHTML =
            "<div>Title: " +
            resut.Title +
            "</div>" +
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
        } else {
          appDiv.innerHTML = resut.Error;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // called each time the value is updated.
  // If there's an existing value when bind is called - this callback
  // will be called with the existing value
};

const notifyWhenDone = function(err) {
  if (err) {
    // Do something with the error
    console.log("error", err);
  }
  // called when the bind is completed successfully,
  // or when the action terminated with an error.
};

lpTag.agentSDK.init({});
lpTag.agentSDK.bind(pathToData, updateCallback, notifyWhenDone);
