const header = document.querySelector('#header-container').style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.querySelector('.emergency-tasks').style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeader = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeader.length; index += 1) {
  emergencyTasksHeader[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks').style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTasksheader = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksheader.length; index += 1) {
  noEmergencyTasksheader[index].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.querySelector('#footer-container').style.backgroundColor = 'rgb(0, 53, 51)';