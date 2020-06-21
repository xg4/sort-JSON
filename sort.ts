export default function sort(value: any): any {
  if (Array.isArray(value)) {
    return value.sort().map(sort);
  }

  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => {
          return [key, sort(value[key])];
        })
    );
  }

  return value;
}
