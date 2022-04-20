import Stack from './Stack'

describe('Stack', () => {
  test('New stacks should have size 0', () => {
    const stack = new Stack()

    expect(stack.size()).toBe(0)
  })

  test('adding to the stack should return size 1', () => {
    const stack = new Stack<string>()

    stack.push('first')

    expect(stack.size()).toBe(1)
  })

  test('adding multiple elements to the stack should return 3', () => {
    const stack = new Stack<string>()

    stack.push('first', 'second', 'third')

    expect(stack.size()).toBe(3)
  })

  test('removing an element from the top of the stack', () => {
    const stack = new Stack<string>()

    stack.push('first', 'second')

    expect(stack.size()).toBe(2)

    stack.pop()

    expect(stack.size()).toBe(1)
  })

  test('clearing all elements from stack', () => {
    const stack = new Stack<string>()

    stack.push('first', 'second')

    expect(stack.size()).toBe(2)

    stack.clear()

    expect(stack.size()).toBe(0)
  })

  describe('.isEmpty', () => {
    it('Should return true if the stack has no items', () => {
      const stack = new Stack<string>()

      expect(stack.isEmpty()).toBe(true)
    })

    it('Should return false if the stack has items', () => {
      const stack = new Stack<string>()

      stack.push('first', 'second')

      expect(stack.isEmpty()).toBe(false)
    })
  })

  test('peeks the first element from the Stack', () => {
    const stack = new Stack<string>()

    stack.push('first', 'second')

    expect(stack.peek()).toBe('second')
  })

  test('peeks undefined when there is no element in the Stack', () => {
    const stack = new Stack<string>()

    expect(stack.peek()).toBeUndefined()
  })

  test('using the Stack', () => {
    const stack = new Stack<string>()

    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)

    stack.push('first')

    expect(stack.size()).toBe(1)
    expect(stack.isEmpty()).toBe(false)
    expect(stack.peek()).toBe('first')

    stack.push('second', 'third')

    expect(stack.size()).toBe(3)
    expect(stack.peek()).toBe('third')

    stack.pop()

    expect(stack.size()).toBe(2)
    expect(stack.peek()).toBe('second')

    stack.clear()

    expect(stack.size()).toBe(0)
    expect(stack.isEmpty()).toBe(true)
    expect(stack.peek()).toBeUndefined()
  })
})
