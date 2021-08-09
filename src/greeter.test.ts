import greeter from 'greeter';

it('should pass', () => {
  const result = greeter('Peggy');
  expect(result).toBe('Hello, Peggy');
});
