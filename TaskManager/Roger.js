
class TaskManager {

    constructor(maxRunningTask){
        this.maxRunningTask = maxRunningTask;
        this.queue = new Queue();
        this.currentRunningTasks = 0;
    }
    
    async runTask(taskName, taskDuration) {
        try{
            if(this.currentRunningTasks < this.maxRunningTask){
                this.currentRunningTasks ++;
                this.asyncTimeout(taskDuration).then(() => this.handleFinishedTask(taskName));
            }
            else{
                this.queue.Enqueue(new TaskObject(taskName,taskDuration));
            }
        }
        catch(error){
            console.error(error);
        }
    }

    async asyncTimeout(duration){
        return new Promise(resolve => setTimeout(() => {resolve('resolved');}, duration));
    }   
    
    handleFinishedTask(taskName){
        console.log(taskName);
        this.currentRunningTasks --;
        //run next task
        if(this.queue.GetLength() !== 0){
            let taskObject = this.queue.Dequeue();
            this.runTask(taskObject.taskName,taskObject.taskDuration)
        }
    }
}

class TaskObject{
    constructor(taskName,taskDuration){
        this.taskName = taskName;
        this.taskDuration = taskDuration;
    }
}

class Queue{
    constructor(){
        this.data = [];
    }

    Enqueue(objectToadd){
        this.data.push(objectToadd);
    }

    Dequeue(){
        if(this.data.length == 0){
            return "Empty"
        }
        return this.data.shift();
    }

    GetLength(){
        return this.data.length;
    }

}
 
var tm = new TaskManager(2);
tm.runTask("one", 1000);
tm.runTask("two", 1500);
tm.runTask("three", 200);
 
 
