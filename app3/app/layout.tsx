export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <h1 style={{textDecoration: "underline"}}>Welcome to app3</h1>
        {children}
      </body>
    </html>
  );
}
