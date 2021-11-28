//Set current time to header and check time blocks to color them
var timeEl = $("#currentDay");
var currentTime;
clockUpdater();
//Load data from local storage on start
loadData();

//Set interval to  update time
var clock = setInterval(clockUpdater, 1000)

//Set current time and check time blocks
function clockUpdater(){
    currentTime = moment();
    timeEl.text(currentTime);
    checkTimeBlock();
}

//Color coordinate time blocks based on current time
function checkTimeBlock(){
    var currentHour = currentTime.hours();
    var timeBlock = $(".row");
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
$(".saveBtn").on("click", saveClick);

//Save input to local storage
function saveClick(e){
    var text = $(e.target).siblings(".description").val();
    var time = $(e.target).parent().attr("id");

    if(text === "")
        alert("Type text into the field to save it on the calendar")
    else{
        localStorage.setItem(time, text);
        alert("Task has been saved");
    }

}

//Clear button click listener
$(".clearBtn").on("click", clearClick);

//Save input to local storage
function clearClick(e){
    
    var clear = confirm("Are you sure you want to clear your day calendar");

    if(clear){
        localStorage.clear();
        loadData();
    }
    
}

//Load data from local storage to each time block
function loadData(){ 
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}