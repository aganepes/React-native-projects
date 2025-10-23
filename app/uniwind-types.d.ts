declare module 'uniwind/native' {
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

  export type ClassNameProps = {
    className?: string;
  };

  export function uniwind(className: string): ViewStyle | TextStyle | ImageStyle;
}