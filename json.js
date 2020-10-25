fetch('https://my.api.mockaroo.com/users.json?key=533a0b60')
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        if (data.length > 0) {
            let temp = "";
            let i = 1
            data.forEach(u => {
                if (i % 2 !== 0) {
                    temp += "<tr class = first>";
                    temp += "<td>" + u.i + "</td>"
                    temp += "<td>" + u.f + "</td>"
                    temp += "<td>" + u.l + "</td>"
                    temp += "<td>" + u.e + "</td>"
                    temp += "<td>" + u.g + "</td></tr>"
                } else {
                    temp += "<tr class = second>";
                    temp += "<td>" + u.i + "</td>"
                    temp += "<td>" + u.f + "</td>"
                    temp += "<td>" + u.l + "</td>"
                    temp += "<td>" + u.e + "</td>"
                    temp += "<td>" + u.g + "</td></tr>"
                }
                i++;
            })
            document.querySelector(
                ".data").innerHTML = temp;
        }
    })