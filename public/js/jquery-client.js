// Register page visit.
$(document).ready(function() {
    var host = window.location.hostname;
    var path = window.location.pathname;
    if (host && path) {
        var url = 'https://l086.herokuapp.com/api/newpageview';
        var data = { host: host, path: path };
        $.get('https://ifconfig.me/ip', function(ip) {
            if (ip) {
                data.ip = ip;
            }
            console.log(data);
            $.post(url, data);
        });
    }
});
