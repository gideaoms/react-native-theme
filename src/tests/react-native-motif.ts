type Layout = {
  color?: string;
  fontSize?: number;
};

type Shape = {
  base?: Layout;
  variants?: Record<string, Record<string, Layout>>;
};

type Variants<T> = {
  [K in keyof T]: {
    [U in keyof T[K]]: T[K][U];
  };
};

type Props<T extends Shape["variants"]> = {
  [K in keyof T]?: keyof T[K];
};

export type VariantProps<T extends (...args: any[]) => any> = {
  [K in keyof ReturnType<T>]: "dd";
};

export function styled<T extends Shape>(config: T) {
  return function (props: Props<T["variants"]>) {
    const base = config.base as T["base"] | undefined;
    const variants = config.variants as Variants<T["variants"]> | undefined;
    // return { ...base, ...variants };
    // -----
    // const variants = config.variants as Variants<T["variants"]> | undefined;
    // if (!base && !variants) {
    //   return {} as T;
    // }
    if (!variants) {
      return base;
    }
    const keys = Object.keys(variants) as Array<keyof Variants<T["variants"]>>;
    // const mapped = keys.map((variant) => variants[variant][props[variant]]);
    // return { ...config.base, ...mapped };
  };
}

const title = styled({
  base: {
    fontSize: 18,
  },
  variants: {
    variant: {
      primary: {
        color: "red",
      },
      secondary: {
        color: "blue",
      },
    },
  },
});

console.log(title({ variant: "secondary" }));

type Res = VariantProps<typeof title>;
