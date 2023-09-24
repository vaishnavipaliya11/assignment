type StyleModule = {
  [key: string]: string; // Each property is a class name (string) with a generated value (string)
};

const generateClassName = (style: StyleModule, classString: string) => {
  let resultString = "";
  const classes = classString?.split(" ");

  classes.forEach((element) => {
    if (style[element]) {
      resultString += " " + style[element];
    }
  });

  return resultString;
};

export {generateClassName}
