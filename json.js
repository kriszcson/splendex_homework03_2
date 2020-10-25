fetch('https://my.api.mockaroo.com/users.json?key=533a0b60')
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        if (data.length > 0) {
            let temp = "";
            let i = 1
            data.forEach(u => {
                if (i % 2 === 0) {
                    temp += "<tr>";
                    temp += "<td class = first>" + u.i + "</td>"
                    temp += "<td class = first>" + u.f + "</td>"
                    temp += "<td class = first>" + u.l + "</td>"
                    temp += "<td class = first>" + u.e + "</td>"
                    temp += "<td class = first>" + u.g + "</td></tr>"
                } else {
                    temp += "<tr>";
                    temp += "<td class = second>" + u.i + "</td>"
                    temp += "<td class = second>" + u.f + "</td>"
                    temp += "<td class = second>" + u.l + "</td>"
                    temp += "<td class = second>" + u.e + "</td>"
                    temp += "<td class = second>" + u.g + "</td></tr>"
                }
                i++;
            })
            document.querySelector(
                ".data").innerHTML = temp;
        }
    })