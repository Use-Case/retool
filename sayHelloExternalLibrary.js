(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.MyModule = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // Your module code here
    var MyModule = {
        sayHello: function() {
            return 'Hello, world!';
        }
    };

    return MyModule;
}));
