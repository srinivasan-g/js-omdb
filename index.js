const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

pathToData = "chatTranscript.lines";

const updateCallback = function(data) {
  console.log("***updateCallback****");
  // Do something with the returning data
  console.log(JSON.stringify(data));
  const path = data.key;
  const value = data.newValue;
  const index = value.length - 1;
  const messageObj = value[index];

  if (messageObj.source === "visitor") {
    console.log(messageObj.text);
  }

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
