const createRegex = (str: string): RegExp => {
  // check for media queries
  const mediaQueryParts = str.split(":");
  const lastPart =
    "\\[?([\\w\\.%()\\]+ | calc\\([\\w\\.%]+[\\+\\-\\*\\/][\\w\\.%]+\\))\\]?";

  if (mediaQueryParts.length > 1) {
    const parts = mediaQueryParts[1].split("-");

    return new RegExp(`${mediaQueryParts[0]}:${parts[0]}-${lastPart}`);
  } else {
    const parts = str.split("-");

    return new RegExp(`${parts[0]}-${lastPart}`);
  }
};

export default createRegex;
