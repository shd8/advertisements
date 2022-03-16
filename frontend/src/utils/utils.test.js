import timestampToDate from './time';

describe('Given utils', () => {
  test('Should first', () => {
    const date = timestampToDate(1647438636000);
    expect(date).toBe('16/3/2022');
  });
});
