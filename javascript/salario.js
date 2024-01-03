document.addEventListener("DOMContentLoaded", function () {
    const exampleSelect = document.getElementById("exampleSelect");
    const useExampleBtn = document.getElementById("useExampleBtn");
    const nameInput = document.getElementById("name");
    const positionInput = document.getElementById("position");
    const hourlyRateInput = document.getElementById("hourlyRate");
    const hoursWorkedInput = document.getElementById("hoursWorked"); // Adicionado
    const salaryForm = document.getElementById("salary-form");
    const displayName = document.getElementById("displayName");
    const displayPosition = document.getElementById("displayPosition");
    const salaryAmount = document.getElementById("salaryAmount");

    const employees = {
        funcionario0: { name: "Escolha um Colaborador", position: "Escolha um Colaborador", rate: 0 },
        funcionario1: { name: "José Carlos Lorandi", position: "Gerente", rate: 18 },
        funcionario2: { name: "Joao Pedro Araujo", position: "Assistente", rate: 6 },
        funcionario3: { name: "Gislaine Ferreira", position: "Diretor", rate: 25 }
    };

    function updateEmployeeData(selectedEmployee) {
        const employee = employees[selectedEmployee];
        if (employee) {
            nameInput.value = employee.name;
            positionInput.value = employee.position;
            hourlyRateInput.value = employee.rate;
        }
    }

    exampleSelect.addEventListener("change", function () {
        updateEmployeeData(exampleSelect.value);
    });

    useExampleBtn.addEventListener("click", function () {
        updateEmployeeData(exampleSelect.value);
    });

    salaryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const hoursWorked = parseFloat(hoursWorkedInput.value);
        const hourlyRate = parseFloat(hourlyRateInput.value);

        if (isNaN(hoursWorked) || isNaN(hourlyRate)) {
            salaryAmount.textContent = "Preencha valores válidos para as horas trabalhadas e a taxa por hora.";
        } else {
            displayName.textContent = nameInput.value;
            displayPosition.textContent = positionInput.value;
            const totalSalary = hoursWorked * hourlyRate;
            salaryAmount.textContent = `Líquido: R$ ${totalSalary.toFixed(2)}`;
        }
    });
});
