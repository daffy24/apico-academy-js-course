function printSeasonByMonth(month) {
    if (month === "DECEMBER" || month === "JANUARY" || month === "FEBRUARY") {
        console.log("winter");
    } else if (month === "MARCH" || month === "APRIL" || month === "MAY") {
        console.log("spring");
    } else if (month === "JUNE" || month === "JULY" || month === "AUGUST") {
        console.log("summer");
    } else if (month === "SEPTEMBER" || month === "OCTOBER" || month === "NOVEMBER") {
        console.log("autumn");
    } else {
        console.log("Invalid month");
    }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");