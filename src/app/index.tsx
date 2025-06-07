import { useColorScheme, useWindowDimensions, View } from "react-native";
import { Text } from '../components/text.tsx';

function useColor() {
  const schema = useColorScheme();
  return function <const T extends string>(props: { light: T; dark: T }) {
    if (schema === 'dark') {
      return props.dark;
    }
    return props.light;
  }
}

function useWindow() {
  const window = useWindowDimensions();
  return function <const T extends string>(props: { base: T; bp1?: T; bp2?: T }) {
    if (props.bp1 && window.width >= 768) {
      return props.bp1;
    }
    if (props.bp2 && window.width >= 478) {
      return props.bp2;
    }
    return props.base;
  }
}

export default function Page() {
  const color = useColor();
  const window = useWindow();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        color={color({ light: 'primary', dark: 'secondary' })}
        fontSize={window({ base: '1', bp2: '2' })}
      >Hello world!!!</Text>
    </View>
  );
}
