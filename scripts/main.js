document.querySelector(".search-icon").addEventListener('click', function(){
    document.querySelector("#search-input").focus();
})

const taskListElement = document.querySelector(".task-list").getElementsByTagName("ul");
let taskCounter = taskListElement[0].getElementsByTagName("li").length;

document.querySelector("#add-task-btn").addEventListener('click', function() {
    const tasks = [
        "Create initial layout for homepage",
        "Fixing icons with transparent background",
        "Discussions regarding workflow improvement",
        "Create questions for app redesign project"
    ]
    const statuses = [
        '<span class="status approved">Approved</span>',
        '<span class="status in-progress">In Progress</span>',
        '<span class="status in-preview">In Preview</span>',
        '<span class="status waiting">Waiting</span>'
    ]
    const numbTask = Math.floor(Math.random() * 4);
    const numbStatus = Math.floor(Math.random() * 4);
    taskCounter++;

    const task = `
    <li>
        <div class="input-check">
            <input type="checkbox" id="checkbox-${taskCounter}" />
            <label for="checkbox-${taskCounter}"></label>
        </div>
        <p>${tasks[numbTask]}</p>
        ${statuses[numbStatus]}
    </li>`;
    
    taskListElement[0].insertAdjacentHTML( 'beforeend', task );
})