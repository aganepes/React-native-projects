declare module "uniwind"{
    import {ViewStyle,TextStyle,ImageStyle} from 'react-natve';

    export type RNStyle = ViewStyle | TextStyle | ImageStyle;

    export function uniwind(classNames: string): RNStyle;
}