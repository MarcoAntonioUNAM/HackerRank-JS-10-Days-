// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//Dias de la semane ne ingles: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    // Escribe tu codigo aqui
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(dateString);
    dayName = dayNames[date.getDay()];
    return dayName;
}
//Fin del codigo realizado - End of code done

function main() {
    const d = +(readLine());

    for (let i = 0; i < d; i++) {
        const date = readLine();

        console.log(getDayName(date));
    }
}
