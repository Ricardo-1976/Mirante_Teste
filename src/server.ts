import app from "./shared/infra/http/app";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Our app is running on port ${port}`);
});
