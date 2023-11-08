let myArray = [];

const addFriendButton = document.getElementById("addNew");
const inputField = document.getElementById("addFriend");
const outputTable = document.getElementById("output");

addFriendButton.addEventListener("click", () => {
  const friendName = inputField.value;
  if (friendName) {
    myArray.push(friendName);
    inputField.value = ""; 
    buildPageContent(); 
  }
});

function buildPageContent() {
  outputTable.innerHTML = ""; 
  myArray.forEach((name, index) => {
    createTableRow(index, name);
  });
}

function createTableRow(index, name) {
  const row = document.createElement("tr");
  const indexCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const voteCell = document.createElement("td");

  indexCell.textContent = index + 1;
  nameCell.textContent = name;
  voteCell.textContent = 0;

  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(voteCell);
  outputTable.appendChild(row);

  row.addEventListener("click", () => {

    let currentVoteCount = parseInt(voteCell.textContent);
    currentVoteCount++;

    voteCell.textContent = currentVoteCount;
  });
}