// Time Variables   

// current time shown in header and add time blocks to color (past/pres/future)
var timeEl = $("#currentDay");
var currentTime;
timeClock();
//Load data from local storage on start
loadData();

//Set interval to constantly update time
var clock = setInterval(timeClock, 1600)

//Set current time and check time blocks
function timeClock(){
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}

// coordinate the color of time blocks based on current time
function checkTimeBlock(){
    var currentHour = currentTime.hours();
    var timeBlock = $(".time-block");
    for(var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];
        if(parseInt(block.id.split("-")[0]) < currentHour){
            $(block).addClass("past");
        }
        else if(parseInt(block.id.split("-")[0]) === currentHour){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

//Save button click listener
$(".saveBtn").on("click", handleSaveClick);

function handleSaveClick(e){
    var text = $(e.target).siblings(".content").val();
    var time = $(e.target).parent().attr("id");

    if(text === "")
        alert("To save task the text input field must not be blank!")
    else{
        localStorage.setItem(time, text);
        alert("Task has been saved");
    }

}

//Clear button click listener
$(".clearBtn").on("click", handleClearClick);

//Save input to local storage
function handleClearClick(e){
    
    var clear = confirm("Click ok if you would like to clear the schedule");

    if(clear){
        localStorage.clear();
        loadData();
    }
    
}

//Load data from local storage to each time block
function loadData(){ 
    $('#7 .content').val(localStorage.getItem('7'));
    $('#8 .content').val(localStorage.getItem('8'));
    $('#9 .content').val(localStorage.getItem('9'));
    $('#10 .content').val(localStorage.getItem('10'));
    $('#11 .content').val(localStorage.getItem('11'));
    $('#12 .content').val(localStorage.getItem('12'));
    $('#13 .content').val(localStorage.getItem('13'));
    $('#14 .content').val(localStorage.getItem('14'));
    $('#15 .content').val(localStorage.getItem('15'));
    $('#16 .content').val(localStorage.getItem('16'));
    $('#17 .content').val(localStorage.getItem('17'));
    $('#18 .content').val(localStorage.getItem('18'));
    $('#19 .content').val(localStorage.getItem('19'));
    $('#20 .content').val(localStorage.getItem('20'));
    $('#21 .content').val(localStorage.getItem('21'));
}