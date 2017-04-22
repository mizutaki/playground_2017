module.exports = {
  fetch: function (key) {
    console.log('fetch')
    var tasks = JSON.parse(localStorage.getItem(key) || '[]')
    return tasks
  },

  /*save: function (key, tasks) {
    localStorage.setItem(key, JSON.stringify(tasks))
  },*/

  getCurrentId (key) {
    var tasks = JSON.parse(localStorage.getItem(key) || '[]')
    var id = 0
    tasks.map(function (task) {
      if (id < task.id) {
        id = task.id
      }
    })
    return id
  }
}
