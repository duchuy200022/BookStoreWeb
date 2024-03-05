var dataTable;

$(document).ready(function () {
    var url = window.location.search;
    if (url.includes("inprocess")) {
        loadDataTabel("inprocess")
    }
    else {
        if (url.includes("completed")) {
            loadDataTabel("completed")
        }
        else {
            if (url.includes("pending")) {
                loadDataTabel("pending")
            }
            else {
                if (url.includes("approved")) {
                    loadDataTabel("approved")
                }
                else {
                    loadDataTabel("all")
                }
            }
        }
    }
    loadDataTable();
});

function loadDataTabel(status) {
    dataTable = $('#tblData').DataTable({
        "ajax": { url: '/admin/order/getall?stauts'+status},
        "columns": [
            { data: 'id', "width": 5% },
            { data: 'name', "width": 25 % },
            { data: 'phoneNumber', "width": 20 % },
            { data: 'applicationUser.email', "width": 20 % },
            { data: 'orderStatus', "width": 10 % },
            { data: 'orderTotal', "width": 10 % },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="gourp">
                        <a href="/admin/order/details?orderId=${data}" class="btn btn-primary mx-2"> <i class="bi bi-pencil-square"></i></a>
                    </div>`
                },
                "width": 10 % 
            }
        ]
    });
}

