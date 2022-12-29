import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Editor from "@monaco-editor/react";
import IframeOutput from "@site/src/components/IframeOutput";
import { Grid, Box } from "@mui/material";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [html, setHTML] = useState<string>("");
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is a playground of HTML"
    >
      <Box p={2} mt={2}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6}>
            <Editor
              height="80vh"
              defaultLanguage="html"
              defaultValue={`\
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>\
`}
              onChange={(value) => {
                setHTML(value);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <IframeOutput height={window.innerHeight * 0.8}>
              {html}
            </IframeOutput>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
