import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

function RootLayout() {
  return (
    <>
      <AppRouter />
      <Footer />
    </>
  );
}

export default RootLayout;
