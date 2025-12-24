const composeProviders = (...providers) => {
  return ({ children }) => {
    return providers.reduceRight((acc, Provider) => {
      return <Provider>{acc}</Provider>;
    }, children);
  };
};

// Kullanımı:
const AllProviders = composeProviders(
  ThemeProvider,
  TodoProvider,
  SafeAreaProvider
);

export default function App() {
  return (
    <AllProviders>
       <Stack />
    </AllProviders>
  );
}