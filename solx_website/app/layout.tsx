import { Footer, Navbar, ThirdWebWrapper } from "@components";
import "./globals.css";
import { ThirdWebContextProvider } from "@context";
// import riveWASMResource from "@rive-app/rive-wasm";

export const metadata = {
  title: "SolX",
  description: "Sell your green energy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThirdWebWrapper>
        <ThirdWebContextProvider>
          <body className={"relative"}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </ThirdWebContextProvider>
      </ThirdWebWrapper>
    </html>
  );
}
