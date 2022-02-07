const result = document.getElementById('datecalc__result');

export const printError = (errorText) => {
    result.innerText = errorText;
}

export const printResult = ({ years, months, days }) => {
    result.innerText = `Лет - ${years}, месяцев - ${months}, дней - ${days}`;
}