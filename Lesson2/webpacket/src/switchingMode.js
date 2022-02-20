const classDateForm = document.getElementById('datecalc').classList;
const classTimerForm = document.getElementById('timer').classList;

export const switchingMode = () => {
    if (classDateForm.contains('unvisible')) {
        classTimerForm.add('unvisible');
        classDateForm.remove('unvisible');
    } else {
        classDateForm.add('unvisible');
        classTimerForm.remove('unvisible');
    }
}