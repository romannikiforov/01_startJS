const curry = (fn) => {
  return (...args) => {
    return fn.bind(null, ...args);
  };
};

const title = "BEETROOT ACADEMY";

/* todo -> перевести строку до нижнього регистру */

const out = "";

console.log(out);
