import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Anderson Freitas</title>
        <meta name="description" content="Portfólio de Anderson Freitas" />
        <link rel="icon" type="image/x-icon" href="https://baldino.dinho.dev/baldino-public/portifolio/assets/nerdola.gif" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
