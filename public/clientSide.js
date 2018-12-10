var journal_name = "1946-1950";
var journal_month = "01";
var journal_day = "01";

function checkLocalStorage() {
    if (typeof(localStorage) !== "undefined") { //checking for browser compatibility with local storage
        if (localStorage.journalMode === null || "read") {
            displayRead();
        }
        if (localStorage.journalMode === "transcribe") {
            displayTranscribe();
        }
        if (localStorage.journal_name !== undefined) {
            journal_name = localStorage.journal_name;
        }
        if (localStorage.journal_name === undefined) {
        	localStorage.setItem(journal_name, "1946-1950")
        }
        if (localStorage.journal_month !== undefined) {
            journal_month = localStorage.journal_month;
        }
        if (localStorage.journal_month === undefined) {
        	localStorage.setItem(journal_month, "01")
        }
        if (localStorage.journal_day !== undefined) {
            journal_day = localStorage.journal_day;
        }
        if (localStorage.journal_day === undefined) {
        	localStorage.setItem(journal_day, "01")
        }

    } else {
        alert("Some features on this site are incompatible with your browser. For the best experience please update this browser or use a different one.");
    }
}

//document.querySelector('#date_selector_go').addEventListener('click', dateSelectionPersistance);

function dateSelectionPersistance() {
    // document.getElementById('journal_name').options[document.getElementById('journal_name').selectedIndex].text;
    // document.getElementById('journal_month').options[document.getElementById('journal_month').selectedIndex].text;
    // document.getElementById('journal_day').options[document.getElementById('journal_day').selectedIndex].text;
    var journalDayIndex = document.getElementById('journal_day').selectedIndex;
    console.log("selected day index is " + journalDayIndex);
}

function displayRead() {
    document.getElementById('section_read').style.display = 'block';
    document.getElementById('section_transcribe').style.display = 'none';
    localStorage.setItem("journalMode", "read");
}

function displayTranscribe() {
    document.getElementById('section_read').style.display = 'none';
    document.getElementById('section_transcribe').style.display = 'block';
    localStorage.setItem("journalMode", "transcribe");
}