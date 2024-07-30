document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const taskId = params.get('taskId');
    console.log(`taskId from URL: ${taskId}`);

    if (taskId) {
        populateFormWithTaskDetails(taskId);
    }
});

function populateFormWithTaskDetails(taskId) {
    // Example data, replace with actual data fetching logic
    const taskDetails = {
        1: {
            name: 'مهمة 1',
            details: 'تفاصيل مهمة 1',
            department: 'التميز المؤسسي',
            time: '10:00 AM',
            assignmentDate: '2024-07-29',
            completionDate: '2024-08-01',
            attachment: 'path/to/attachment1.pdf',
            status: 'منجزة'
        },
        2: {
            name: 'مهمة 2',
            details: 'تفاصيل مهمة 2',
            department: 'تقنية المعلومات',
            time: '11:00 AM',
            assignmentDate: '2024-07-30',
            completionDate: '2024-08-02',
            attachment: 'path/to/attachment2.pdf',
            status: 'جاري الانجاز'
        }
    };

    const task = taskDetails[taskId];
    if (task) {
        document.getElementById('taskName').value = task.name;
        document.getElementById('taskDetails').value = task.details;
        document.getElementById('taskDepartment').value = task.department;
        document.getElementById('timePicker').value = task.time;
        document.getElementById('assignmentDate').value = task.assignmentDate;
        document.getElementById('completionDate').value = task.completionDate;
        document.getElementById('downloadAttachment').href = task.attachment;

        // Set the status radio button
        if (task.status === 'منجزة') {
            document.getElementById('dot-1').checked = true;
        } else if (task.status === 'جاري الانجاز') {
            document.getElementById('dot-2').checked = true;
        } else if (task.status === 'متأخرة') {
            document.getElementById('dot-3').checked = true;
        }
    } else {
        console.log('Task not found.');
    }
}
