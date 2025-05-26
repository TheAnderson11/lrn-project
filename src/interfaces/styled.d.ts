import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundLayout: string;
    backgroundMain: string;
    text: string;
    inputBackground: string;
    inputBorder: string;
    divider: string;
  }
}
