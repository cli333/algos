// EXAMPLE 1
console.log("// EXAMPLE 1 //");

const Identity = (x) => ({
  emit: () => x,
  chain: (f) => f(x),
  map: (f) => IdentityOf(f(x)),
  inspect: () => `Identity(${x})`,
});

const IdentityOf = (x) => Identity(x);

const exportIdentity = {
  of: IdentityOf,
};

const one = exportIdentity.of(1);
console.log(1, one.inspect());

const two = one.map((x) => x + 1);
console.log(2, two.inspect());

// EXAMPLE 2

console.log("// EXAMPLE 2 //");

const Just = (x) => ({
  chain: (f) => f(x),
  emit: () => x,
  map: (f) => MaybeOf(f(x)),
  fork: (_, g) => g(x),
  isJust: true,
  isNothing: false,
  inspect: () => `Just(${x})`,
});

const Nothing = (x) => ({
  chain: (_) => Nothing(),
  emit: () => Nothing(),
  map: (_) => Nothing(),
  fork: (f, _) => f(),
  isJust: false,
  isNothing: true,
  inspect: () => `Nothing`,
});

const MaybeOf = (x) =>
  x === null || x === undefined || x.isNothing ? Nothing() : Just(x);

const fahrenheitToCelsius = (a) => (a - 32) * 0.5556;

//

const reading1 = 15;
const reading2 = null;

const temp1C = MaybeOf(reading1).map(fahrenheitToCelsius);
console.log(1, temp1C.inspect()); // Just

const temp2C = MaybeOf(reading2).map(fahrenheitToCelsius);
console.log(2, temp2C.inspect()); // Nothing!!

// EXAMPLE 3

console.log("// EXAMPLE 3 //");

const display = (a) => {
  console.log(a);
  return a;
};

MaybeOf(reading1) // good value JUST
  .map(fahrenheitToCelsius)
  .fork(
    (_) => display("ERR!"),
    (t) => display(`${t}°C`) // will read `-9.4452°C`
  );

MaybeOf(reading2) // null value NOTHING
  .map(fahrenheitToCelsius)
  .fork(
    (_) => display("ERR!"), // will read `ERR!`
    (t) => display(`${t}°C`)
  );
