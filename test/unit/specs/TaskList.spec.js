import Vue from 'vue'
import TaskList from 'src/components/TaskList'
import { Task } from 'src/models/Tasks'

function getMountedComponent(Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({propsData}).$mount();
  return vm;
}


describe('TaskList.vue', () => {
  let vm = {}
  beforeEach(function() {
    let taskList = []
    let task = new Task()
    task.title = 'Comprar frango'
    let task2 = new Task()
    task2.title = 'Comprar batata doce'
    let task3 = new Task()
    task3.title = 'Ficar monstro'
    taskList.push(task)
    taskList.push(task2)
    taskList.push(task3)

    vm = getMountedComponent(TaskList, {
      todoList: taskList
    })

  })

  it('should render correct contents', () => {
    expect(vm.todoList.length).to.equal(3)
  })
})
