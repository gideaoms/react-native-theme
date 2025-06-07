import Native from 'react-native';
import { Color, Width, color, width } from '../theme.ts';

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
    color?: Color;
    fontSize?: Width;
  }
}

export function Text(props: Text.Props) {
  return (
    <Native.Text
      style={{
        color: color(props.color),
        fontSize: width(props.fontSize),
      }}
    >{props.children}</Native.Text>
  );
}
