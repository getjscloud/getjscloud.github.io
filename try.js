var step = 0;
var cloud;
function read() {
    var inp = document.getElementById("input").value;
    document.getElementById("input").value = "";
    var response = eval(inp);
    writeinp(inp);
    writeresp(response);
}

function writeinp(asd) {
    var old = document.getElementById('console').innerHTML;
    var newtext = old + "<span style='color: #ffffff;'>" + asd + "</span>";
    document.getElementById('console').innerHTML = newtext;
}

function writeresp(asd) {
	var old = document.getElementById('console').innerHTML;
    var newtext = old + "<span style='color: #66d9ef;'>" + asd + "</span> <br />";
    document.getElementById('console').innerHTML = newtext;
}

function tutorial() {
	if(step == 0) {
        cloud = new JSCloud('https://indicium-trvrsalom.c9.io/server/jscloud.php');
        step++;
		return "Welcome to JSCloud's tutorial. This is a javascript console.\nWhy don't you get started with:\nvar cloud = new JSCloud('JSCloud_Server.php');\nIf you want to use our server you can just skip this step.\nType 'tutorial()' to move to the next step.";
    }
    else if(step == 1) {
        step++;
        return "Now we have to open a file. Call cloud.open('yourfile.json')";
    }
    else if(step == 2) {
        step++;
        return "Great. Let's write some data. Call cloud.write('yourkey', 'yourdata')\nThe server will convert it to JSON";
    }
    else if(step == 3) {
        step++;
        return "Alright, now we can read our data. \nYou can call JSON.stringify(cloud.read()) to see the whole file. \nOr you can call cloud.read('yourkey') to get some specific data.";
    }
    else if(step == 4) {
        step++;
        return "Of course, if you need to hide something from the NSA, \nyou can with cloud.delete('youtkey')";
    }
    else if(step == 5) {
        step++;
        return "Anyways, thats the tutorial. We hope you enjoy JSCloud.\nIf you want to contribute or download, check out our github.\nIf you want to learn more use help();";
    }
}

function help() {
return "new JSCloud(server) - Creates & returns a new JSCloud object.\ncloud.open(file) - Opens a file for editing.\ncloud.write(key, data) - Takes a key and data and sends it to the server.\ncloud.response() - Returns the last response from the server.\ncloud.read() - Returns the whole file.\ncloud.read(key) - Returns the data stored under a given key.\ncloud.delete(key) - Deletes the a given key/value pair.";
}