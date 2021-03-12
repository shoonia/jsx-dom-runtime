let checkSpec = (spec, value, locale, _, getStack) => {
  for (let name in spec) {
    let error;

    try {
      error = spec[name](
        value,
        name,
        _,
        locale,
        null
      );
    } catch (ex) {
      error = ex;
    }

    if (error instanceof Error) {
      let stack = getStack && getStack() || '';
      return 'Failed ' + locale + ' type: ' + error.message + stack;
    }
  }
};

export let checkTypes = (...rest) => {
  let error = checkSpec(...rest);

  if (error != null) {
    console.log(error);
  }
};
