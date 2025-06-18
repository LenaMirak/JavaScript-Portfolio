

const { add, subtract, multiply, divide } = require('./calculator');
test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

test('substract 4-7 to equal -3', ()=>{
    expect(subtract(4,7)).toBe(-3);
});  
 test('multiply 5*4 to equal 20', () =>{
   expect(multiply(5,4)).toBe(20);
 });
 test('divite 20 by 4 is equal 5', () =>{
    expect(divide(20,4)).toBe(5);
 });

 test('divide by 0', () => {
  // Expect the function to throw an error when dividing by 0
  expect(() => divide(3, 0)).toThrow('Cannot divide by zero');
});
