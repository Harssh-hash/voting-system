function vote(party) {
  fetch("/vote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ party })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("message").innerText = data.message;
  })
  .catch(err => console.error(err));
}

