function findTickets() {
	let a = Array.from(document.querySelectorAll("div[data-test-id^='software-backlog.card-list.card.content-container']")),
b = a.filter(t => getComputedStyle(t.querySelectorAll('a')[1]).textDecoration.includes("line-through"));
return [a, b];
}

let
	[allTickets, doneTickets] = findTickets(),
	buttonsList = document.querySelector("div[data-test-id='software-filters.ui.list-filter-container']");

setTimeout(() => {
if (allTickets.length === 0) {
[allTickets, doneTickets] = findTickets();
}
}, 4000)

let doneShow = true;
const btn = document.createElement("button");
btn.innerText = "Toggle Done";
btn.classList.add("removeButton");
btn.onclick = () => {
	doneTickets.forEach(t => {t.style.display = doneShow?"none":"block"});
	doneShow = !doneShow;
}


function addFilterButton() {
const filters = document.querySelector("div[data-test-id='software-filters.ui.list-filter-container']");
if (filters) {
		filters.appendChild(btn);
} else {
console.log("cannot find filter elements");
addFilterButton();
	}

}
setTimeout(addFilterButton, 3000);
