const createRegex = (str: string): RegExp => {
  // check for media queries
  const mediaQueryParts = str.split(":");

  // dynamically created last part of the regex
  const lastPart = str.includes("calc")
    ? "\\[calc\\([\\w\\.%]+[\\+\\-\\*\\/][\\w\\.%]+\\)\\]"
    : str.includes("theme")
    ? "[a-z\\-]+theme"
    : "\\[?[\\w\\.%()]+\\]?";

  // if there is tailwind media query in the class name
  if (mediaQueryParts.length > 1) {
    // if classname contains the word "theme"
    if (str.includes("theme")) {
      return new RegExp(` ${mediaQueryParts[0]}:${lastPart} `);
    }
    // classname without the word "theme"
    else {
      const parts = mediaQueryParts[1].split("-");

      return new RegExp(` ${mediaQueryParts[0]}:${parts[0]}-${lastPart} `);
    }
  }
  // if there is no tailwind media query
  else {
    const parts = str.split("-");

    return new RegExp(` ${parts[0]}-${lastPart} `);
  }
};

export default createRegex;
