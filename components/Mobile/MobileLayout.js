import React from "react"
import Head from "next/head"
import styled, { css, keyframes } from "styled-components"
import { Flex, Box } from "reflexbox"
import ChalkLogo from "../../public/static/svgs/chalklogo.svg"

export default function MobileLayout({ children }) {
	return (
		<>
			<Head>
				<title>Video Game Tournaments | Cash Prizes</title>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
					crossOrigin
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com/"
					crossOrigin
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
					rel="stylesheet"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://use.typekit.net/yed0qhw.css"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/favicon.ico" />
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-KCNNM6M');`,
					}}
				></script>
				{/* Facebook Pixel Code
				 */}
				<noscript>
					<img
						height="1"
						width="1"
						style="display:none"
						src="https://www.facebook.com/tr?id=450196780055889&ev=PageView&noscript=1"
					/>
				</noscript>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						adroll_adv_id = "JTYZR2KAD5DSHCAWH74DZH"; adroll_pix_id = "EBSTJU6XHVDVJAY5RMR6IG"; adroll_version = "2.0";  (function(w, d, e, o, a) { w.__adroll_loaded = true; w.adroll = w.adroll || []; w.adroll.f = [ 'setProperties', 'identify', 'track' ]; var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id + "/roundtrip.js"; for (a = 0; a < w.adroll.f.length; a++) { w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) { return function() { w.adroll.push([ n, arguments ]) } })(w.adroll.f[a]) }  e = d.createElement('script'); o = d.getElementsByTagName('script')[0]; e.async = 1; e.src = roundtripUrl; o.parentNode.insertBefore(e, o); })(window, document); adroll.track("pageView");`,
					}}
				/>
			</Head>
			<Container>{children}</Container>
		</>
	)
}

const Container = styled.div``
