export default [
  {
    path: '/',
    name: 'task-list',
    component: require('components/TaskListView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
