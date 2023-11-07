$(document).ready(function () {
    const tableBody = $('#dataTable tbody');
    const addRowButton = $('#addRow');

    // Initial data for the table
    const data = [
        { name: 'Ajay', age: 30, cgpa:'8.9', location: 'Dahaisar'},
        { name: 'Raj', age: 25 , cgpa:'7.9', location: 'Malad'},
        { name: 'jay', age: 25 , cgpa:'9.9', location: 'Andheri'}
    ];

    // Function to add a new row to the table
    function addRow(rowData) {
        const newRow = `<tr>
            <td contenteditable="true">${rowData.name}</td>
            <td contenteditable="true">${rowData.age}</td>
            <td contenteditable="true">${rowData.cgpa}</td>
            <td contenteditable="true">${rowData.location}</td>
            <td>
                <button class="editRow">Edit</button>
                <button class="deleteRow">Delete</button>
            </td>
        </tr>`;
        tableBody.append(newRow);
    }

    // Function to handle row deletion
    tableBody.on('click', '.deleteRow', function () {
        $(this).closest('tr').remove();
    });

    // Function to handle row editing
    tableBody.on('click', '.editRow', function () {
        const row = $(this).closest('tr');
        const name = row.find('td:eq(0)').text();
        const age = row.find('td:eq(1)').text();
        const cgpa = row.find('td:eq(2)').text();
        const location = row.find('td:eq(3)').text();
        
        
        row.find('td:eq(0)').attr('contenteditable', 'true');
        row.find('td:eq(1)').attr('contenteditable', 'true');
        row.find('td:eq(2)').attr('contenteditable', 'true');
        row.find('td:eq(3)').attr('contenteditable', 'true');
        row.find('.editRow').text('Save').addClass('saveRow').removeClass('editRow');
    });

    // Function to save edited row
    tableBody.on('click', '.saveRow', function () {
        const row = $(this).closest('tr');
        const name = row.find('td:eq(0)').text();
        const age = row.find('td:eq(1)').text();
        const cgpa = row.find('td:eq(2)').text();
        const location = row.find('td:eq(3)').text();
       

        row.find('td:eq(0)').attr('contenteditable', 'false');
        row.find('td:eq(1)').attr('contenteditable', 'false');
        row.find('td:eq(2)').attr('contenteditable', 'false');
        row.find('td:eq(3)').attr('contenteditable', 'false');
        row.find('.saveRow').text('Edit').addClass('editRow').removeClass('saveRow');
    });
    // Initial table population
    data.forEach(addRow);

    // Add a new row when the "Add Row" button is clicked
    addRowButton.on('click', function () {
        const newRowData = { name: 'New Name', age: 'New Age', cgpa:'New cgpa', location: 'New Location' };
        data.push(newRowData);
        addRow(newRowData);
    });
});
