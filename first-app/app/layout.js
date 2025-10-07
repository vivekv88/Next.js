

export const metadata = {
  title : {
    template : "%s | My Next App",
    default : "My Next App",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background: "teal"}}>Header</header>
        {children}
        <footer style={{background: "brown"}}>Footer</footer>
      </body>
    </html>
  );
}
