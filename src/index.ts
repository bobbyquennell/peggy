const greeter = (person: string): string => {
  return 'Hello, ' + person;
};

const user = 'Jane';

document.body.textContent = greeter(user);
