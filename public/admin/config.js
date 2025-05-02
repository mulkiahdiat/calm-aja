export default {
  backend: {
    name: "github",
    repo: "mulkiahdiat/calm-aja",
    branch: "main",
    site_domain: "calmaja.com"
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
};
