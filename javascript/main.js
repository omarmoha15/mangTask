document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#taskTable tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', () => {
            const taskId = row.getAttribute('data-task-id');
            console.log(`Row clicked, taskId: ${taskId}`);
            window.location.href = `main-details.html?taskId=${taskId}`;
        });
    });
});

function searchTasks() {
    const adminFilter = document.getElementById('searchAdmin').value.toLowerCase();
    const taskNameFilter = document.getElementById('searchTaskName').value.toLowerCase();
    const dateFilter = document.getElementById('searchDate').value;

    const table = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const adminCell = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        const taskNameCell = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        const dateCell = rows[i].getElementsByTagName('td')[2].textContent;

        const matchesAdmin = adminCell.includes(adminFilter);
        const matchesTaskName = taskNameCell.includes(taskNameFilter);
        const matchesDate = !dateFilter || dateCell === dateFilter;

        if (matchesAdmin && matchesTaskName && matchesDate) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}
