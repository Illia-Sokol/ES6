class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }
    complete() {
        this.done = true;
        console.log(`Задание ${this.title} выполнена`);
    }
    get title() {
        return this._title
    }
    set title(value) {
        this._title = value;
    }
    static getDefaultTitle() {
        return 'Задача';
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }
    complete() {
        super.complete();
        console.log(`Подзадание ${this.title} выполнена`);
    }
}

Task.count = 0;

let task = new Task('Изучить JS');
let subTask =  new SubTask('Изучить ES6', task)

console.log(task);
console.log(subTask);

console.log(subTask instanceof Task);
console.log(subTask instanceof SubTask);

task.complete();
subTask.complete();

console.log('Task.count', SubTask.count)
console.log('subTask.getDefault', SubTask.getDefaultTitle());