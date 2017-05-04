function fetch (key) {
  var tasks = JSON.parse(localStorage.getItem(key) || '[]')
  return tasks
}

function fetchSubject (key) {
  var subject = JSON.parse(localStorage.getItem(key) || 'null')
  return subject
}

function save (key, tasks) {
  localStorage.setItem(key, JSON.stringify(tasks))
}

function getCurrentId (key) {
  var tasks = JSON.parse(localStorage.getItem(key) || '[]')
  var id = 0
  tasks.map(function (task) {
    if (id < task.id) {
      id = task.id
    }
  })
  return id
}
export { fetch, fetchSubject, save, getCurrentId }
