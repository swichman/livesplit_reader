function readxml(inputfile) {
    console.log(inputfile);
    fs = require('fs');
    var parser = require('xml2json');
    fs.readFile( inputfile, function(err, data) {
        var json = parser.toJson(data);
        console.log("to json ->", json);
    });

    return json;

}
