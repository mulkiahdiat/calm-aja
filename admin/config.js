window.CMS_MANUAL_INIT = true;

CMS.init({
  backend: {
    name: "github",
    repo: "mulkiahdiat/calm-aja", // your GitHub repo
    branch: "main",
    site_domain: "splendorous-pie-8b9224.netlify.app"
  },
  media_folder: "public/assets",
  public_folder: "/assets",
  collections: [
    {
      name: "posts",
      label: "Posts",
      folder: "posts",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Date", name: "date", widget: "datetime" },
        { label: "Body", name: "body", widget: "markdown" }
      ]
    }
  ]
});
