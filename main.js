import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "FCL",
  author: "FCL",
  avatar: "./ry.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:cherrycreamco@gmail.com" },
    { title: "GitHub", url: "https://github.com/A-childs-encyclopedia" },
  ],
  background: "#0a20b6",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
