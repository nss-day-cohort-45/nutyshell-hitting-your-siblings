export const TaskHTMLConverter = (taskObject) => {
    return `
        <section class="task">
            <div class="task__title">${taskObject.title}</div>
            <div class="task__due">${taskObject.dueDate}</div>
            <input type="checkbox" id="taskComplete" name="task" value="complete">
                <label for="task"> This task is complete.</label>
            <buitton id="deleteTask--${taskObject.id}">DELETE<//div>
        </section>
    `
}