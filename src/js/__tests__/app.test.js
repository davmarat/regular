import Validator from '../app';

const example = new Validator();

test.each(['Danny', 'Mi-ke', 'S17Marat', 'Carl_P', 'Dron12K', 'Jo-5Fran'])(
  'Validation of the name',
  (item) => {
    expect(example.validateUsername(item)).toBeTruthy();
  },
);

test.each(['-gggff', '_anuiy', '5gewhg', 'fbhwwff-', 'fhfhssaf_', 'fjf7', 'h3909'])(
  "Username shouldn't have more than 3 digits, begin and end with -, _ or digits",
  (item) => {
    expect(() => example.validateUsername(item)).toThrow();
  },
);
