const dateTimeNow = new Date();

const messageDate = dateTimeNow.toLocaleDateString();
const messageTime = dateTimeNow.toLocaleTimeString();

function addDateTime(message) {
   return `${messageDate} ${messageTime} ${message}`;
}

//const messageDateTime = `${messageDate} ${messageTime}: This is the best moment to have a look at this website !`;

alert(addDateTime(": This is the best moment to have a look at this website !`"));


console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15
