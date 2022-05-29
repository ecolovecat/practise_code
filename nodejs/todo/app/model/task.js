const fs = require("fs");
const readAll = () => {
    const buffer = fs.readFileSync("task.json");
        // chuyen sang chuoi
        const taskString = JSON.parse(buffer.toString());
        return taskString;
}

const createTask = (title, des) => {
    const newTask = {
        id : Math.random().toString(),
        title,
        des
    };
    let taskList = readAll();
    taskList = [...taskList, newTask];
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
}

const updateTask = (id, title, des) => {
    let Task = readAll();
    const index = Task.findIndex(obj => obj.id === id);
    if (index!==-1) {
        const oldTask = Task[index];
        const newTask = {...oldTask,title,des};
        Task[index] = newTask;
        fs.writeFileSync("task.json", JSON.stringify(Task));
        return newTask;
    } else {
        return false;
    }
}

const deleteTask = (id) => {
    let allTask = readAll();
    const index = allTask.findIndex(task => task.id === id);
    if (index !== -1) {
        const task = allTask[index];
        allTask = allTask.filter(task => task.id !== id);
        fs.writeFileSync("task.json", JSON.stringify(allTask));
        return task;
    } else {
        return false;
    }
    
}

module.exports = {
    readAll,
    createTask,
    updateTask,
    deleteTask
}