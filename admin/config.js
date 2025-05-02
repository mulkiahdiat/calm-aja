window.CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "mulkiahdiat/calm-aja",
      branch: "main",
      auth_type: "oauth",
    },
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    collections: [
      {
        name: "posts",
        label: "Artikel",
        folder: "posts",
        create: true,
        slug: "{{slug}}",
        fields: [
          { label: "Judul", name: "title", widget: "string" },
          { label: "Tanggal", name: "date", widget: "datetime" },
          { label: "Konten", name: "body", widget: "markdown" }
        ]
      }
    ]
  }
});
