// import yargs from "yargs"; es6

const yargs = require("yargs"); // es5

const fs = require("fs"); // file system
const {readAll, createTask, updateTask, deleteTask} = require("./model/task.js");


// tao lenh test
yargs.command({
    command : "test",
    handler : () => {
        console.log("test");
    }
});


// CRUD

// read
yargs.command({
    command : "read",
    builder : {
        id : {
            type : "string"
        }
    },
    handler : (args) => {
        const {id} = args;
        console.log(id);
        console.log("read");
    }
});


// create

yargs.command({
    command : "create",
    builder : {
        title : {
            type : "string"
        },
        des : {
            type : "string"
        }
    },
    handler : (args) => {
        const {title, des} = args;
        const newT = createTask(title,des);
        console.log("da tao moi cong viec thanh cong" , newT );
        
    }
})

// delete

yargs.command({
    command : "delete",
    builder : {
        id : {
            type : "string"
        }
    },
    handler : (args) => {
        const {id} = args;
        const deleted = deleteTask(id);
        if (deleted) {
            console.log("da xoa thanh cong", deleted);
        } else {
            console.log("khong tim thay id hop le");
        }
    }
})

// update

yargs.command({
    command : "update",
    builder : {
        title : {
            type : "string"
        },

        des : {
            type : "string"
        },

        id : {
            type : "string"
        }
    },
    handler : (args) => {
        const {id, title, des} = args;
        const updateTask2 = updateTask(id, title, des);
        if (updateTask2) {
            console.log(updateTask2);
        } else {
            console.log("cant find the id");
        }
    }
});

// read all

yargs.command({
    command : "read-all",
    handler : () => {
        
        const taskString =  readAll();
        console.log(taskString);
        console.log("read all detail")
    }
})

// luu lai cac lenh vua tao
yargs.parse();