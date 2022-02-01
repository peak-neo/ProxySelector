var proxies_link = "https://proxy.yugogo.xyz/clash/proxies";

function isChecked() {
    // check if the checkbox was selected
    var checke = document.getElementById("checkAll").checked
    if (checke == true) {
        proxies_url = proxies_url;
        // alert(checke);
    }
}

function getProxies() {
    var temp = document.getElementById("result_proxies").value;
    alert(temp);
}

// function getInfo() {
//     // to get the info user input to generate the link
//     var country = document.getElementById("country").value;
//     var type = document.getElementById("type").value;
//     var speedLow = document.getElementById("speedLow").value;
//     var speedTop = document.getElementById("speedTop").value;
// }

function genLink() {
    // to get the info user input to generate the link
    // to see if the checkbox checked, return a boolean.
    var isChecked = document.getElementById("checkAll").checked;
    // to get the data inputed in the table.
    // get country/region
    var country = document.getElementById("country").value;
    // get protocol type.
    var type = document.getElementById("type").value;
    // get speed data: low, top.
    var speedLow = document.getElementById("speedLow").value;
    var speedTop = document.getElementById("speedTop").value;

    // to generate a link for iframe to show the proxies link
    // here gen country/region,protocol type.
    var c_arg = country, type_arg = type;
    // here gen speed.
    if (speedLow != "" & speedTop != "") {
        speed_arg = speedLow + "," + speedTop;
    } else {
        speed_arg = ""
    }
    var link = proxies_link;
    if (c_arg == "") {
        if (type_arg == "") {
            if (speed_arg == "") {
                link = proxies_link;
            } else {
                link += "?speed=" + speed_arg;
            }

        } else {
            link += "?type=" + type_arg;
            if (speed_arg != "") {
                link += "&speed=" + speed_arg;
            }
        }
    } else {
        link += "?c=" + c_arg;
        if (type_arg == "") {
            if (speed_arg != "") {
                link += "&speed=" + speed_arg;
            }
        } else {
            link += "&type=" + type_arg;
            if (speed_arg != "") {
                link += "&speed" + speed_arg;
            }
        }
    }
    if (isChecked) {
        link = proxies_link;
    }
    goon = confirm("Are you sure you wanna submit?(Please check the table again) \n 你确定要提交吗？（请在此检查信息是否正确）");
    if (goon) {
        document.getElementById("result_proxies").src = link;
    }
}
