
function checkLocalStorage() {
    if (typeof(localStorage) !== "undefined") { //checking for browser compatibility with local storage
        if (localStorage.journalMode === "transcribe") {
            displayTranscribe();
        } else {
            displayRead();
        }
        if (localStorage.lsJournal_day !== undefined) {
            document.getElementById('day' + localStorage.lsJournal_day).selected = true;
        } else {
            localStorage.setItem("lsJournal_day", "01");
        }
        if (localStorage.lsJournal_month !== undefined) {
            document.getElementById('month' + localStorage.lsJournal_month).selected = true;
        } else {
            localStorage.setItem("lsJournal_month", "01");
        }
        if (localStorage.lsJournal_name !== undefined) {
            document.getElementById(localStorage.lsJournal_name).selected = true;
        } else {
            localStorage.setItem("lsJournal_name", "1946-1950");
        }

    } else {
        alert("Some features on this site are incompatible with your browser. For the best experience please update this browser or use a different one.");
    }
}

//document.querySelector("#journal_day").addEventListener('change', dateSelectionPersistance);

function dateSelectionPersistance() {
    var journalDayValue = document.getElementById('journal_day_selector').value;
    document.getElementById('day' + journalDayValue).selected = true;

    var journalMonthValue = document.getElementById('journal_month_selector').value;
    document.getElementById('month' + journalMonthValue).selected = true;

    var journalNameValue = document.getElementById('journal_name_selector').value;
    document.getElementById(journalNameValue).selected = true;

    localStorage.setItem("lsJournal_day", journalDayValue);
    localStorage.setItem("lsJournal_month", journalMonthValue);
    localStorage.setItem("lsJournal_name", journalNameValue);
}

function readOrTranscribe() {
    if (localStorage.journalMode === "transcribe") {
        displayTranscribe();
    } else {
        displayRead();
    }
}

function displayRead() {
    document.getElementById('section_read').style.display = 'block';
    document.getElementById('section_transcribe').style.display = 'none';
    localStorage.setItem("journalMode", "read");

    var journal_day_selector_value = $('#journal_day_selector').val();
    var journal_month_selector_value = $('#journal_month_selector').val();
    var journal_name_selector_value = $('#journal_name_selector').val();
    var image_file_name = (journal_name_selector_value + "-" + journal_month_selector_value + "-" + journal_day_selector_value + ".jpg");
    document.getElementById("journal_page").src = ("http://www.rubysjournal.com/single_images/" + image_file_name);

    $.get("/read", { image_file_name: image_file_name }, function(data) {
        
        $('#readId').html("");
        $('#transcribeId').html("");

        for (var i = 0; i < data.list.length; i++) {
            var entry = data.list[i];
            $("#readId").append("<tr><td id=\"tdDate\">" + entry.entry_date.substr(0, 10) + "</td><td>" + entry.entry_text + "</td></tr><tr></tr>");
        }
    })
}

function displayTranscribe() {
    document.getElementById('section_read').style.display = 'none';
    document.getElementById('section_transcribe').style.display = 'block';
    localStorage.setItem("journalMode", "transcribe");

    var journal_day_selector_value = $('#journal_day_selector').val();
    console.log(journal_day_selector_value);
    var journal_month_selector_value = $('#journal_month_selector').val();
    var journal_name_selector_value = $('#journal_name_selector').val();
    var image_file_name = (journal_name_selector_value + "-" + journal_month_selector_value + "-" + journal_day_selector_value + ".jpg");
    document.getElementById("journal_page").src = ("http://www.rubysjournal.com/single_images/" + image_file_name);

    $.get("/transcribe", { image_file_name: image_file_name }, function(data) {

        $('#transcribeId').html("");
        $('#readId').html("");

        for (var i = 0; i < data.list.length; i++) {
            var entry = data.list[i];
            $("#transcribeId").append("<div id=\"journal_text\"><form method = \"post\" action = \"/transcribe\">\n" +
                "<input type = \"hidden\" name = \"entry_id\" value = " + entry.entry_id + ">\n" +
                "<input type = \"hidden\" name = \"journal_id\" value = " + entry.journal_id + ">\n" +
                "<input type = \"hidden\" name = \"page_date\" value = " + entry.page_date.substr(0, 10) + ">\n" +
                "<input type = \"hidden\" name = \"image_id\" value = " + entry.image_id + ">\n" +
                "<input type = \"hidden\" name = \"entry_date\" value = " + entry.entry_date.substr(0, 10) + ">\n" +
                "<input type = \"hidden\" name = \"image_name\" value = " + entry.image_name + ">\n" +
                "<tr>\n" +
                "<label class=\"labelDate\">Date:</label>\n" +
                "<input class=\"inputDate\" type=\"date\" name=\"entry_date\" value=" + entry.entry_date.substr(0, 10) + ">\n" +
                "<input type=\"submit\" value=\"Add Entry\" class=\"addEntryButton\"/>\n" +
                "<br>\n" +
                "<textarea class=\"transcribeTxtarea\" name=\"entry_text\" rows=\"4\" cols=\"44\" wrap=\"soft\" style=\"overflow:auto\">" + entry.entry_text + "</textarea>\n" +
                "<br>\n" +
                "</form>\n" +
                "</div>");
        }
    })
}