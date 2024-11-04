import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext({ theme: 'light', setTheme: (_theme: Theme) => {} });

function App() {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Page />
        </ThemeContext.Provider>
    );
}

function Page() {
    const theme = useContext(ThemeContext);

    return (
        <div className={`w-64 h-64 rounded-md p-8 ${theme.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <div className="text-2xl font-bold">Hello World</div>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => theme.setTheme(theme.theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
        </div>
    );
}

export default App;
