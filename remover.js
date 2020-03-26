function findTickets() {
	let
		a = Array.from(document.querySelectorAll("div[data-test-id^='software-backlog.card-list.card.content-container']")),
		b = a.filter(t => getComputedStyle(t.querySelectorAll('a')[1]).textDecoration.includes("line-through"));
	return [a, b];
}

function addToggleButton() {
	let
		[allTickets, doneTickets] = findTickets(),
		lastLocation = window.locaiton;

	setTimeout(() => {
		if (allTickets.length === 0) {
			[allTickets, doneTickets] = findTickets();
		}
	}, 4000);

	let doneShow = true;
	const btn = document.createElement("button");

	btn.innerText = "Toggle Done";
	btn.classList.add("jira-done-remove-button");
	btn.onclick = () => {
		doneTickets.forEach(t => {
			t.style.display = doneShow ? "none" : "block"
		});
		doneShow = !doneShow;
	};


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
}

function defineIndicatorButton() {
	// check we don't run twice
	const indicator = document.createElement("div");
	indicator.display = "none";
	indicator.classList.add("JiraDone-indicator");
	const backlogWindow = document.querySelector("div[data-test-id='software-backlog.backlog']");
	if (backlogWindow) {
		backlogWindow.appendChild(indicator);
	}
}

function main() {
	console.log("remover is running RIGHT NOW REMOVER!! KILL THEM ALL");
	if (document.querySelectorAll(".JiraDone-indicator").length !== 0) {
		console.log("JiraDone: toggle button already defined");
		return;
	}

	defineIndicatorButton();
	addToggleButton()
}

main();
