// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
    const HH = String(Math.floor(seconds / 60 / 60)).padStart(2, 0);
    const MM = String(Math.floor(seconds / 60 % 60)).padStart(2, 0);
    const SS = String(seconds % 60).padStart(2, 0);
    
    return `${HH}:${MM}:${SS}`
  }

  humanReadable(8274)