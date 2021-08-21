import { Todos} from "./TodoStore"

const todos = new Todos()

describe("Todos store", () => {
  it("should have todos", () => {
    expect(todos.todos).toHaveLength(4)
    expect(todos.remainingTodos).toEqual(3)
  })
  it("should have todos that toggle", () => {
    todos.toggleTodo(3)
    expect(todos.todos).toHaveLength(4)
    expect(todos.remainingTodos).toEqual(2)
  })
})
