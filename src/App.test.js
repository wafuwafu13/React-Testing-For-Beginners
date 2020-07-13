import { add, total } from './App'

// Unit test | It only test one thing
test('add', () => {
    expect(add(1, 2)).toBe(3)
})

// Integration test | when add does not pass, it also does not pass 
test('total', () => {
    expect(total(5, 20)).toBe('$25')
})