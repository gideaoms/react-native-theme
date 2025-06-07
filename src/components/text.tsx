import Native from 'react-native';

const theme = {
  color: {
    primary: 'red',
    secondary: 'blue',
  },
  font: {
    size: {
      1: 12,
      2: 20,
    },
  },
};

namespace Text {
  export type Props = {
    children: string
    color?: 'primary' | 'secondary'
    fontSize?: '1' | '2'
  }
}

export function Text(props: Text.Props) {
  return (
    <Native.Text
      style={{
        color: theme.color[props.color!],
        fontSize: theme.font.size[props.fontSize!],
      }}
    >{props.children}</Native.Text>
  );
}