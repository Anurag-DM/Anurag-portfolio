function mes() {
    const p = document.createElement("p");
    p.innerText = document.getElementById("message").value;
    document.getElementById("rec").appendChild(p);
}
