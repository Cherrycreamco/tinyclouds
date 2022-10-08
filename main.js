import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Friend's Cricket League",
  author: "FCL",
  avatar: "./20221007_062103_0000.jpg",
  avatarClass: "full",
  footer: <footer>Copyright Cherrycream co<footer>,
  links: [
    { title: "Email", url: "mailto:cherrycreamco@gmail.com" },
    { title: "GitHub", url: "https://github.com/Cherrycreamco" },
  ],
  background: "#0021ff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
