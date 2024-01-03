document.addEventListener("DOMContentLoaded", function () {
    const addHoursBtn = document.getElementById("add-hours-btn");
    const hoursWorkedInput = document.getElementById("hours-worked");
    const employeeSelect = document.getElementById("employee-select");
    const hoursList = document.getElementById("hours-list");

    const hoursWorkedData = {}; // Objeto para armazenar as horas trabalhadas por funcionário

    addHoursBtn.addEventListener("click", function () {
        const selectedEmployee = employeeSelect.value;
        const employeeName = employeeSelect.options[employeeSelect.selectedIndex].text;
        const hours = parseFloat(hoursWorkedInput.value);
        const date = document.getElementById("date-worked").value;

        if (hours <= 0) {
            alert("Por favor, insira um número válido de horas trabalhadas.");
            return;
        }

        // Verifica se o funcionário já tem horas trabalhadas registradas
        if (!hoursWorkedData[selectedEmployee]) {
            hoursWorkedData[selectedEmployee] = [];
        }

        // Adiciona as horas trabalhadas ao array correspondente ao funcionário
        hoursWorkedData[selectedEmployee].push({ employee: employeeName, hours: hours, date: date });

        // Atualiza a lista de horas trabalhadas
        updateHoursList();
    });

    // Função para atualizar a lista de horas trabalhadas
    function updateHoursList() {
        hoursList.innerHTML = "";

        for (const employeeId in hoursWorkedData) {
            if (hoursWorkedData.hasOwnProperty(employeeId)) {
                const employeeHours = hoursWorkedData[employeeId];
                employeeHours.forEach((entry, index) => {
                    const listItem = document.createElement("li");
                    listItem.classList.add("list-group-item");
                    listItem.innerHTML = `<strong>Funcionário:</strong> ${entry.employee}<br><strong>Horas Trabalhadas:</strong> ${entry.hours} horas<br><strong>Data:</strong> ${entry.date}`;
                    hoursList.appendChild(listItem);
                });
            }
        }
    }
});
