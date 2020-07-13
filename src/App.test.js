import { total } from './App'

const add = jest.fn(() => 3)

// Unit test | It only test one thing
test('add', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(3, 6)).toBe(3)
    expect(add).toHaveBeenCalledTimes(2)
})

// Integration test | when add does not pass, it also does not pass 
test('total', () => {
    expect(total(5, 20)).toBe('$25')
    expect(add).toHaveBeenCalledTimes(2)
})