const vacationData = [];

        // Botão "Adicionar Férias"
        const addVacationBtn = document.getElementById("add-vacation-btn");

        addVacationBtn.addEventListener("click", function () {
            const employeeSelect = document.getElementById("employee-select");
            const startDateInput = document.getElementById("start-date");
            const endDateInput = document.getElementById("end-date");

            const employeeName = employeeSelect.options[employeeSelect.selectedIndex].text;
            const startDate = startDateInput.value;
            const endDate = endDateInput.value;

            // Validar as datas
            if (new Date(startDate) > new Date(endDate)) {
                alert("A data de término deve ser posterior à data de início.");
                return;
            }

            // Adicionar informações sobre férias ao array
            vacationData.push({ employee: employeeName, startDate: startDate, endDate: endDate });

            // Atualizar a lista de férias registradas
            updateVacationList();
        });

        // Função para atualizar a lista de férias registradas
        function updateVacationList() {
            const vacationList = document.getElementById("vacation-list");
            vacationList.innerHTML = "";

            vacationData.forEach((entry, index) => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.innerHTML = `<strong>Funcionário:</strong> ${entry.employee}<br><strong>Data de Início:</strong> ${entry.startDate}<br><strong>Data de Término:</strong> ${entry.endDate}`;
                vacationList.appendChild(listItem);
            });
        }
    