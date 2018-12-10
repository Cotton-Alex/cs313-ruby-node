var journal_name = "1946-1950";
var journal_month = "01";
var journal_day = "01";

function checkLocalStorage() {
	document.getElementById('journal_day').selectedIndex = 6;
    if (typeof(localStorage) !== "undefined") { //checking for browser compatibility with local storage
        if (localStorage.journalMode === "transcribe") {
            displayTranscribe();
        }
        if (localStorage.journalMode === null) {
            displayRead();
        }
        if (localStorage.journalMode === "read") {
            displayRead();
        }
        if (localStorage.lsJournal_day !== undefined) {
            journal_day = localStorage.lsJournal_day;
        }
        if (localStorage.lsJournal_day === null) {
            localStorage.setItem(lsJournal_day, "01");
        }
        if (localStorage.lsJournal_month !== undefined) {
            journal_month = localStorage.lsJournal_month;
        }
        if (localStorage.lsJournal_month === null) {
            localStorage.setItem(lsJournal_month, "01");
        }
        if (localStorage.lsJournal_name !== undefined) {
            journal_name = localStorage.lsJournal_name;
        }
        if (localStorage.lsJournal_name === null) {
            localStorage.setItem(lsJournal_name, "1946-1950");
        }

    } else {
        alert("Some features on this site are incompatible with your browser. For the best experience please update this browser or use a different one.");
    }
}

document.querySelector("#journal_day").addEventListener('change', dateSelectionPersistance);

function dateSelectionPersistance() {
    // document.getElementById('journal_name').options[document.getElementById('journal_name').selectedIndex].text;
    // document.getElementById('journal_month').options[document.getElementById('journal_month').selectedIndex].text;
    // document.getElementById('journal_day').options[document.getElementById('journal_day').selectedIndex].text;
    localStorage.setItem(lsJournal_day, document.getElementById('journal_day').selectedIndex);
    localStorage.setItem(lsJournal_month, document.getElementById('journal_month').selectedIndex);
    localStorage.setItem(lsJournal_name, document.getElementById('journal_name').selectedIndex);

    console.log("selected day index is " + journalDayIndex);
    console.log("selected month index is " + journalMonthIndex);
    console.log("selected journal index is " + journalNameIndex);
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