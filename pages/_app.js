import React, { Fragment } from "react"
import App from "next/app"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import GlobalStyle from "../components/GlobalTheme"
import { createStore } from "redux"
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper"
import Amplify, { API } from "aws-amplify"
import awsconfig from "../aws-exports"
import { ModalProvider } from "styled-react-modal"
import { ParallaxProvider } from "react-scroll-parallax"
import "react-phone-input-2/lib/style.css"
API.configure(awsconfig)

const reducer = (
	state = {
		condition: false,
	},
	action
) => {
	switch (action.type) {
		case "ACTION":
			return { ...state, condition: true }
		default:
			return state
	}
}

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = (initialState, options) => {
	return createStore(reducer, initialState)
}

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {}

		return { pageProps }
	}
	render() {
		const { Component, pageProps, store } = this.props

		return (
			<Provider store={store}>
				<ThemeProvider {...{ theme }}>
					<ParallaxProvider>
						<ModalProvider>
							<Fragment>
								<GlobalStyle />
								<Component {...pageProps} />
							</Fragment>
						</ModalProvider>
					</ParallaxProvider>
				</ThemeProvider>
			</Provider>
		)
	}
}

export default withRedux(makeStore)(MyApp)
