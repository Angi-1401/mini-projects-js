/**
 * Class representing a task.
 */
class Task {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.completed = false;
  }
}

/**
 * Class representing a task manager.
 * It has methods for add, remove and complete tasks.
 */
class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  /**
   * Displays a list of tasks with their names, dates, descriptions, and
   * completion status in an alert message.
   */
  getTasks() {
    if (this.tasks.length == 0) {
      alert("There's no tasks");
    } else {
      let list = "Tasks:\n";
      this.tasks.forEach((t) => {
        list += `${t.name} (${t.date}):\n`;
        list += `${t.description}\n`;
        list += `Status: ${t.completed ? "Completed" : "Pending"}\n`;
        list += "----------------------\n";
      });
      alert(list);
    }
  }

  /**
   * Adds a task to a list and displays an alert message confirming the task was
   * added successfully.
   * @param {object} task - Object that contains information about the task to be added,
   * such as its name, description, deadline, etc.
   */
  addTask(task) {
    this.tasks.push(task);
    alert(`Task "${task.name}" added successfully.`);
  }

  /**
   * Removes a task from the list by its name and displays an alert message
   * confirming the task was removed successfully.
   * @param {string} name - Name of the task to be removed.
   */
  removeTask(name) {
    const index = this.tasks.findIndex((t) => name === t.name);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      alert(`Task "${name}" removed successfully.`);
    } else {
      alert(`Task "${name}" not found.`);
    }
  }

  /**
   * Marks a task as completed by its name and displays an alert message
   * confirming the task was completed successfully.
   * @param {string} name - Name of the task to be marked as completed.
   */
  completeTask(name) {
    const index = this.tasks.findIndex((t) => name === t.name);
    if (index !== -1) {
      this.tasks[index].completed = true;
      alert(`Task "${name}" completed successfully.`);
    } else {
      alert(`Task "${name}" not found.`);
    }
  }
}

// Create a new instance of the TaskManager class
const taskManager = new TaskManager();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  while (true) {
    // Display menu
    const option = prompt(
      "Task Manager (Select an option (1-5)): \n" +
        "1. Add task\n" +
        "2. Remove task\n" +
        "3. Complete task\n" +
        "4. Show tasks\n" +
        "5. Exit"
    );

    switch (option) {
      // Add task
      case "1":
        const name = prompt("Name:");
        const description = prompt("Description:");
        const date = prompt("Date:");
        const task = new Task(name, description, date);
        taskManager.addTask(task);
        break;

      // Remove task
      case "2":
        const taskToRemove = prompt("Task name:");
        taskManager.removeTask(taskToRemove);
        break;

      // Complete task
      case "3":
        const taskToComplete = prompt("Task name:");
        taskManager.completeTask(taskToComplete);
        break;

      // Show tasks
      case "4":
        taskManager.getTasks();
        break;

      // Exit
      case "5":
        alert("Goodbye!");
        return;

      // Invalid option
      default:
        alert("Invalid option");
    }
  }
});
