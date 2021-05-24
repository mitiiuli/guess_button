var winningButton = Math.floor(Math.random() * 3 + 1);
function guess(source)
{
    if (source === winningButton.toString()) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "Status: Winner!!!";
  } else {
    document.getElementById("status").style.color = "red";
    document.getElementById("status").innerHTML = "Status: Loser!!!";
  }

}
