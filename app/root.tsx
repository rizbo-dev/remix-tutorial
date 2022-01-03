import { LiveReload } from "remix";

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Remix: So great, its funny!</title>
      </head>
      <body>
        Hello world
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
