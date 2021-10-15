/* eslint-disable @next/next/no-document-import-in-page */
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

type DocumentReturn =
    | DocumentInitialProps
    | {
          styles: JSX.Element;
          html: string;
      };

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentReturn> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
