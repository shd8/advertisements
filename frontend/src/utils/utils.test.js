import { timestampToDate, dateToTimestamp } from './time';
import capitalizeFirstLetter from './texts';

describe('Given utils', () => {
  test('Should transform a timestamp to date', () => {
    const date = timestampToDate(1647438636000);
    expect(date).toBe('16/3/2022');
  });

  test('Should transform a date to a timestamp', () => {
    const timestamp = dateToTimestamp('2022-3-21');
    expect(timestamp).toBe(1647817200000);
  });

  test('Should capitalize only the first letter of a string', () => {
    const result = capitalizeFirstLetter('a B C d');
    expect(result).toBe('A B C d');
  });
});
