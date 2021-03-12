let checkSpec = (spec, value) => {
  for (let name in spec) {
    let error;

    try {
      error = spec[name](value, name);
    } catch (ex) {
      error = ex;
    }

    if (error instanceof Error) {
      return error.message;
    }
  }
};

export let checkTypes = (...rest) => {
  let error = checkSpec(...rest);

  if (error != null) {
    console.log(error);
  }
};
