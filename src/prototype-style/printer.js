function Printer() {}

Printer.prototype.print = function (obj) {};

//--------------------------------------

function ConsolePrinter() {
    Printer.apply(this, arguments);
}

ConsolePrinter.prototype = Object.create(Printer.prototype);
ConsolePrinter.prototype.constructor = ConsolePrinter;

ConsolePrinter.prototype.print = function (obj) {
    Printer.prototype.print.apply(this, arguments);

    console.log(obj.toString());
};

//--------------------------------------

function DomPrinter() {
    Printer.apply(this, arguments);
}

DomPrinter.prototype = Object.create(Printer.prototype);
DomPrinter.prototype.constructor = DomPrinter;

DomPrinter.prototype.print = function (obj) {
    Printer.prototype.print.apply(this, arguments);

    document.body.innerHTML += '<p>' + obj.toString().replace(/\n/g, '<br>') + '</p>';
};
