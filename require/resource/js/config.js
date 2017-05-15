requirejs.config({
    baseUrl: "/js/",
    paths: {
        "jquery": "lib/jquery-1.8.3.min"
    },
    urlArgs: "v=0.1.0"
});

var modulePath = document.getElementById("require").getAttribute("module");
var childPath = document.getElementById("require").getAttribute("child");
require(["modules/" + modulePath], function (exports) {
    childPath ? exports[childPath]() : exports.init();
});