// observer.test.js

const { Subject, Observer } = require("./observer");

test("Observer should receive notifications from Subject", () => {
  const subject = new Subject();

  const mockUpdate = jest.fn();

  const observer1 = { update: mockUpdate };

  subject.addObserver(observer1);

  subject.notifyObservers("Test data");

  expect(mockUpdate).toHaveBeenCalledWith("Test data");
});

test("Observer should be able to unsubscribe from notifications", () => {
  const subject = new Subject();

  const mockUpdate1 = jest.fn();
  const mockUpdate2 = jest.fn();

  const observer1 = { update: mockUpdate1 };
  const observer2 = { update: mockUpdate2 };

  subject.addObserver(observer1);
  subject.addObserver(observer2);

  subject.notifyObservers("First notification");

  subject.removeObserver(observer1);

  subject.notifyObservers("Second notification");

  expect(mockUpdate1).toHaveBeenCalledTimes(1);
  expect(mockUpdate1).toHaveBeenCalledWith("First notification");

  expect(mockUpdate2).toHaveBeenCalledTimes(2);
  expect(mockUpdate2).toHaveBeenCalledWith("Second notification");
});
