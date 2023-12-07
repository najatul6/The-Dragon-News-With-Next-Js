export function getCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get the current day, month, date, and year
    var day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    return `${day}, ${month}, ${date}, ${year}`
  
    // Display the result
    // console.log('Current day: ' + day);
    // console.log('Current date: ' + month + ' ' + date + ', ' + year);
  }
  
  // Call the function
//   showCurrentDateTime();
  