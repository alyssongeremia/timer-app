const today = document.getElementById('date-today')

function getWeek() {
    let week = new Date
    week = week.getDay()

    switch(week) {
        case 0:
            week = 'Domingo'
            break;
        case 1:
            week = 'Segunda'
            break;
        case 2:
            week = 'Terça-feira'
        case 3:
            week = 'Quarta-feira';
            break;
        case 4:
            week = 'Quinta-feira';
            break
        case 5:
            week = 'Sexta-feira'
            break;
        case 6:
            week = 'Sábado'
    }

    return week;
}

function getMonth() {
    let month = new Date
    month = month.getMonth()

    switch(month) {
        case 0:
            month = 'Janeiro'
            break;
        case 1:
            month = 'Fevereiro'
            break;
        case 2:
            month = 'Março'
            break;
        case 3:
            month = 'Abril'
            break;
        case 4:
            month = 'Maio'
            break;
        case 5:
            month = 'Junho'
            break;
        case 6:
            month = 'Julho'
            break;
        case 7: 
            month = 'Agosto'
            break;
        case 8:
            month = 'Setembro'
            break;
        case 9:
            month = 'Outubro'
            break;
        case 10:
            month = 'Novembro'
            break;
        case 11:
            month = 'Dezembro'
            break;
    }

    return month;
}

function getDay() {
    let day = new Date
    day = String(day.getDate()).padStart(2, "0")

    return day;
}

function updateToday() {
    today.textContent = `${getWeek()}, ${getDay()} de ${getMonth()}`
}

updateToday()