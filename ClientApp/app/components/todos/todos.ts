import * as _ from "lodash"

export class Todos {
    userInput: string = "";

    todos: Todo[] = [];

    constructor() { 
        this.todos = [];
    }

    addTodo() {
        let todo = new Todo(this.userInput);
        this.todos.push(todo);
        console.log("what is it now", this.todos, this);
        this.reset();
    }

    reset() {
        this.userInput = "";
    }

    get completeTodos() {
        return this.todos.filter(t => t.complete);
    }

    get incompleteTodos() {
        return this.todos.filter(t => !t.complete);
    }

    remove(id: number) {
        const index = this.todos.findIndex(t => t.id === id);
        this.todos.splice(index, 1);
    }
}

export class Todo {
    name: string;
    complete = false;
    readonly id: number;

    constructor(name?: string, complete: boolean = false) {
        this.id = parseInt(_.uniqueId());
        if(typeof(name) !== undefined){
            this.name = name;
        }
        if(typeof(complete) !== undefined){
            this.complete = complete;
        }
    }
}