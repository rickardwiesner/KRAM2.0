﻿window.setInterval(function () {
    $.ajax({
        method: 'GET',
        url: '/Image/NotificationCount',
        data: 'json',
        error: function (jqXHR, textStatus, errorThrown) {
            //   alert('Något gick fel! status:' + textStatus + "\nerror: " + errorThrown);
        },
        success: function (data) {
            if (data === 0) {

            }
            else {
                $('#notifcationCount').html(data);
            }
        }
    })
}, 5000);