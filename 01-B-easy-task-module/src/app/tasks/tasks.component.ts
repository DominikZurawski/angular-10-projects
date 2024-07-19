import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type  NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',

})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;


  constructor(private taskService: TasksService){
    this.taskService = taskService;

  }
  // @Input({ required: true }) name: string | undefined;


  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

//   onCompleteTask(id: string) {
    
//   }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

//   onAddTask(taskData: NewTaskData ){
    
//     this.isAddingTask = false;
//   }
}
