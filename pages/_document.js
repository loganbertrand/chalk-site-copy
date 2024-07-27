// Dependencies
import React, { Fragment } from "react"
import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

// Extend document
export default class extends Document {
    // Expose getInitialProps
    static async getInitialProps(ctx) {
        // Prepare styled-components stylesheet
        const sheet = new ServerStyleSheet()

        // Save original renderPage method
        const originalRenderPage = ctx.renderPage

        try {
            // Render page
            ctx.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })
            }

            // Call getInitialProps
            const initialProps = await Document.getInitialProps(ctx)

            // Return a combination of collected styled and initial props
            return {
                ...initialProps,
                styles: (
                    <Fragment>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Fragment>
                )
            }
        } finally {
            // Seal the deal!
            sheet.seal()
        }
    }
}
