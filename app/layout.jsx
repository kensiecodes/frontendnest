import "../styles/globals.css";

import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "Nest",
  description: "Supercharge your workflow",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital@0;1&family=Martian+Mono:wght@300&family=Merriweather:wght@700&family=Poppins:wght@800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital@0;1&family=Martian+Mono:wght@300&family=Merriweather:wght@700&family=Poppins:wght@800&display=swap%&text=%E2%86%90%20%E2%86%99%20%E2%86%98%20%E2%86%97%20%E2%86%96%20%E2%86%91%20%E2%86%92%20%E2%86%93"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="dmsans bg-slate-800 text-white">
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
            <footer>
              <p className="mt-16 mb-20 text-slate-700 text-center w-full">
                Site made with{" "}
                <i
                  class="fa fa-heart"
                  style={{ color: "#FF7070" }}
                  aria-hidden="true"
                ></i>{" "}
                by{" "}
                <a
                  className="text-indigo-500"
                  href="https://kensiejack.netlify.app/"
                >
                  Kensie Jack
                </a>
                .{" "}
              </p>
            </footer>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
