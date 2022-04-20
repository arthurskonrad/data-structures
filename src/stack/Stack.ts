export interface IStack<T> {
  size(): number
  isEmpty(): boolean
  peek(): T | undefined
  push(...items: T[]): void
  pop(): T | undefined
  clear(): void
}

export default class Stack<T> implements IStack<T> {
  private items: T[]

  constructor() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return !this.items.length
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  push(...items: T[]) {
    this.items.push(...items)
  }

  pop() {
    return this.items.pop()
  }

  clear() {
    this.items = []
  }
}
