export interface Stack<T> {
  size(): number
  isEmpty(): boolean
  peek(): T | undefined
  push(...elements: T[]): void
  pop(): T | undefined
  clear(): void
}

export class StackArray<T> implements Stack<T> {
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

  push(...elements: T[]) {
    this.items.push(...elements)
  }

  pop() {
    return this.items.pop()
  }

  clear() {
    this.items = []
  }
}

export class StackObject<T> implements Stack<T> {
  private count: number
  private items: {[key: string]: T}

  constructor() {
    this.count = 0
    this.items = {}
  }

  size(): number {
    return this.count
  }

  isEmpty(): boolean {
    return !this.count
  }

  peek(): T | undefined {
    return this.items[this.count - 1]
  }

  push(...elements: T[]): void {
    elements.forEach((element) => {
      this.items[this.count] = element
      this.count++
    })
  }

  pop(): T | undefined {
    const returnedValue = this.items[this.count]

    delete this.items[this.count]
    this.count--

    return returnedValue
  }

  clear(): void {
    this.count = 0
    this.items = {}
  }
}
