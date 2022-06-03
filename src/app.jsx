import { QueryClient, QueryClientProvider } from "react-query";

import { globalStyles } from "./styles/globalstyles";

import { Layout } from "./components/layout";

import { Card } from "./components/card";

const queryClient = new QueryClient();

const App = () => {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Card
          city="Nuuk"
          country="GL"
          latitude={64.1835}
          longitude={-51.7216}
        />
        <Card
          city="Urubici"
          country="BR"
          latitude={-28.015}
          longitude={-49.5917}
          highlight
        />
        <Card
          city="Nairobi"
          country="KE"
          latitude={-1.2833}
          longitude={36.8167}
        />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
