'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTask() : arguments[0];

        _classCallCheck(this, Task);

        this.title = title;
        this._done = false;
        console.log('Creating task');
        Task.count += 1;
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('Task "' + this.title + '" is done');
        }
    }, {
        key: 'done',
        get: function get() {
            return this._done === true ? 'complete' : 'no complete';
        },
        set: function set(value) {
            if (value !== undefined && typeof value === 'boolean') {
                this._done = value;
            } else {
                console.error('error! set true or false');
            }
        }
    }], [{
        key: 'getDefaultTask',
        value: function getDefaultTask() {
            return 'Buy some milk';
        }
    }]);

    return Task;
}();

Task.count = 0;

var task = new Task('Clean a rom');
var task2 = new Task('Shopping');
var task3 = new Task();

console.log(typeof Task === 'undefined' ? 'undefined' : _typeof(Task));
console.log(typeof task === 'undefined' ? 'undefined' : _typeof(task));
console.log(task instanceof Task);

console.log('task.count', Task.count);

console.log('task.title', task.title);
console.log('task2.title', task2.title);
console.log('task3.title', task3.title);
task2.complete();

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);