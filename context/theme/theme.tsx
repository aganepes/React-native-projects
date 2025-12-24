import { createContext, ReactNode, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme, type colorScheme } from '@/content/theme';

interface ITheme {
	theme: colorScheme;
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ITheme | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const deviceTheme = useColorScheme();
	const [isDark, setIsDark] = useState<boolean>(deviceTheme === "dark");
	const toggleTheme = () => { setIsDark(!isDark) }
	const theme = isDark ? darkTheme : lightTheme;

	return (
		<ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = ():null|ITheme=>{
	const context = useContext(ThemeContext);
	if(!context){
		throw new Error('Theme context is null');
	}
	return context;
}