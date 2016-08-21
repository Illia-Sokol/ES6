class Task {
    constructor(title = Task.getDefaultTask()) {
        this.title = title;
        this._done = false;
        console.log('Creating task');
        Task.count += 1;
    }
    get done() {
        return this._done === true ? 'complete' : 'no complete';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.error('error! set true or false')
        }
    }

    complete() {
        this.done = true;
        console.log(`Task "${this.title}" is done`)
    }
    static getDefaultTask() {
        return 'Buy some milk';
    }
}

Task.count = 0;

let task = new Task('Clean a rom');
let task2 = new Task('Shopping');
let task3 = new Task();

console.log(typeof Task)
console.log(typeof task);
console.log(task instanceof Task);

console.log('task.count', Task.count);

console.log('task.title', task.title);
console.log('task2.title', task2.title);
console.log('task3.title', task3.title);
task2.complete();

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
