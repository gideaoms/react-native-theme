type UI = {
  fontSize?: number;
  color?: string;
  flex?: number;
};

type Config<U, T> = {
  base?: U;
  variants?: {
    [K in keyof T]: {
      [Y in keyof T[K]]: T[K][Y];
    };
  };
};

type Props<T> = {
  [K in keyof T]?: keyof T[K];
};

export function styled<
  U extends UI,
  T extends Record<string, Record<string, UI>>,
  Y extends T[keyof T]
>(config: Config<U, T>) {
  return function <I extends Props<T>>(props: I) {
    return config as { [G in keyof I]: T };
    // const variants = config.variants as T | undefined;
    // if (!variants) {
    //   return config.base;
    // }
    // const keys = Object.keys(variants) as Array<keyof Config<U, T>["variants"]>;
    // const reduced = keys.reduce((prev, variant) => {
    //   console.log({ prev, variant });
    //   const selected = props[variant] as string;
    //   return { ...prev, ...variants[variant][selected] };
    // }, {});
    // return reduced;
  };
}

const title = styled({
  base: {
    fontSize: 2,
  },
  variants: {
    size: {
      p1: {
        flex: 1,
      },
      p2: {
        color: "blue",
      },
    },
  },
});

title({ size: "p1" }).size;
