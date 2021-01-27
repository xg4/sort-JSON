function sort<T>(value: T): T;

// deno-lint-ignore no-explicit-any
function sort(value: any): any {
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

export default sort;
