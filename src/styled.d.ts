import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
    };
    fonts: {
      main: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}
