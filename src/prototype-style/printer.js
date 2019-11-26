function Printer() {}

Printer.prototype.print = function (obj) {};

//--------------------------------------

function ConsolePrinter() {}

ConsolePrinter.prototype = Object.create(Printer.prototype);
ConsolePrinter.prototype.constructor = ConsolePrinter;

ConsolePrinter.prototype.print = function (obj) {
    console.log(obj.toString());
};

//--------------------------------------

function DomPrinter() {}


DomPrinter.prototype = Object.create(Printer.prototype);
DomPrinter.prototype.constructor = DomPrinter;

DomPrinter.prototype.print = function (obj) {
    document.body.innerHTML += '<p>' + obj.toString().replace(/\n/g, '<br>') + '</p>';
};