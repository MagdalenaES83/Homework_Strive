let meetingsData


window.onload = function(){
   

    readFromDisk()
    displayBoard()
}

const displayBoard = function(){
    
    let monthContainer = document.getElementById("month-container")
    monthContainer.innerHTML = ""

    for (let i = 1; i <= 76; i++){
        // Creating the new element (an object in memory)
        let newDay = document.createElement("div") // <div></div>
        
        // Customizing the new element (adding the number and the css class) 
        newDay.innerText = i  // <div>1</div>
        newDay.classList.add("day") // <div class="day">1</day>
        newDay.onclick = selectDay // <div class="day" onlick="selectDay(event)">1</day>

        // Check for existing meetings:
        let existingMeetings = meetingsData[i]
        if ((existingMeetings !== undefined)&&(existingMeetings.length > 0)) {        
            // We add the green underline to the day's box to show it has some meetings
            newDay.classList.add("has-meetings")
        }

        // Append the newly created element as a new child of the month container DIV
        monthContainer.appendChild(newDay)
    }
}

const selectDay = function(event){
    // DESELECT CURRENTLY CHOSEN DAY (IF ANY)
    const currentlySelectedDay = getCurrentlySelectedDay() // We look for any chosen item...
    if (currentlySelectedDay !== null) // ...and if there is one... 
        currentlySelectedDay.classList.remove("chosen") // ..we deselect it by removing the "chosen" CSS class

    // SELECT DAY THAT HAS JUST BEEN CLICKED
    const clickedDay = event.currentTarget // Understaing which HTML element has been clicked...
    clickedDay.classList.add("chosen") //..and applying the "chosen" CSS class to it

    refreshMeetingsList()
}

const getCurrentlySelectedDay = function(){
    return document.querySelector(".chosen")
}

const createMeeting = function(){
   
    const meetingDescription = document.getElementById("meeting-description").value

    
    const meetingsForTheSelectedDay = getSelectedDayMeetings()
    meetingsForTheSelectedDay.push(newMeeting)

    refreshMeetingsList()

    // We add the green underline to the day's box to show it has some meetings
    getCurrentlySelectedDay().classList.add("has-meetings")

    saveToDisk()
}

const refreshMeetingsList = function(){
    const meetingsForTheDay = getSelectedDayMeetings()

    // We find our UL
    const meetingsContainer = document.getElementById("meetings-list")
    meetingsContainer.innerHTML = ""

    for (let meeting of meetingsForTheDay){ // this 'for' here is absolutely equivalent to the two commented lines below
    // for (let i = 0; i < meetingsForTheDay.length; i++) {
    //     meeting = meetingsForTheDay[i]

       

        // Attach it to the DOM
        meetingsContainer.appendChild(newMeetingListItem)
    }
}

const getSelectedDayMeetings = function(){

    // If no days is selected, return null and exit this function
    const selectedDay = getCurrentlySelectedDay()
    if (selectDay === null){
        return null
    }
    
    // We try to get the meetings array for this specific day 
    // (by accessing the meetingsData object as a dictionary, like dictionary["key"] -> "value")
    const selectedDayId = selectedDay.innerText
    let meetingsForTheDayArray = meetingsData[selectedDayId]

    // If no data for this day is present...
    if (meetingsForTheDayArray === undefined){
        meetingsForTheDayArray = []  // ...we create a new empty array to store new meetings...   
        meetingsData[selectedDay.innerText] = meetingsForTheDayArray // ...and we assign it to the meetingsData, associated with the id of the day
    }

    return meetingsForTheDayArray
}

const saveToDisk = function(){
    // We convert our "database" object, with all our days/meetings data, to a string...
    let json = JSON.stringify(meetingsData)
    // ...and then we save this string into the local storage on the disk (max 5mb)
    localStorage.setItem("calendar-app-meetings", json)
}

const readFromDisk = function(){
    // We read the saved string from the local storage
    let json = localStorage.getItem("calendar-app-meetings")
    if (json === null) // If we never ever saved anything...
        meetingsData = {}   // ...we just use an empty object, ready to be filled with more meetings
    else // ...otherwise...
        meetingsData = JSON.parse(json) // ...we transform back the stored string into an object, and we use it as our meeting data 
}