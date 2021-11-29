// Time Variables (time by 24hr clock)

// current time shown in header
var timeEl = $("#currentDay");
var currentTime;
timeClock();
//Load data from start
loadData();

//Set interval to constantly update time
var clock = setInterval(timeClock, 1600)

//Set current time to user local time and check time blocks
function timeClock() {
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}

// coordinate the color of time blocks based on current time
function checkTimeBlock() {
    var currentHour = currentTime.hours();
    var timeBlock = $(".time-block");
    for (var i = 0; i < timeBlock.length; i++) {
        var block = timeBlock[i];
        if (parseInt(block.id.split("-")[0]) < currentHour) {
            $(block).addClass("past");
        }
        else if (parseInt(block.id.split("-")[0]) === currentHour) {
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else {
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

//Save button click listener/function
$(".saveBtn").on("click", handleSaveClick);

function handleSaveClick(e) {
    var text = $(e.target).siblings(".description").val();
    var time = $(e.target).parent().attr("id");

    if (text === "")
        alert("To save your task the text input field must not be blank!")
    else {
        localStorage.setItem(time, text);
        alert("Task has been saved");
    }

}

//Clear button click listener/function
$(".clearBtn").on("click", handleClearClick);

//Save input to local storage
function handleClearClick(e) {

    var clear = confirm("Click ok if you would like to clear the schedule");

    if (clear) {
        localStorage.clear();
        loadData();
    }

}

//local storage for each time block (24hr clock) starting at 7am-9pm
function loadData() {
    $('#7 .description').val(localStorage.getItem('7'));
    $('#8 .description').val(localStorage.getItem('8'));
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
    $('#19 .description').val(localStorage.getItem('19'));
    $('#20 .description').val(localStorage.getItem('20'));
    $('#21 .description').val(localStorage.getItem('21'));
}