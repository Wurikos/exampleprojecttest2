import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script async={true} crossorigin={"some value"} place={"endOfHead"} rawKey={"601fa2fad1b4e03fd5d985f5"}>
				{"alert(\"Main page\")"}
			</script>
			<style place={"endOfHead"} rawKey={"601fa30fa3674f2337459903"}>
				{"body {\nbackground-color: yellow}"}
			</style>
			<meta
				name={"keywords"}
				content={"HTML CSS JavaScript "}
				http-equiv={"some value"}
				place={"endOfHead"}
				rawKey={"601fa324f35ace056b02a713"}
			/>
			<link
				href={"https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap"}
				rel={"stylesheet"}
				sizes={""}
				media={"screen"}
				type={"text/css"}
				place={"endOfHead"}
				rawKey={"601fa33907f1c138ea035691"}
			/>
		</RawHtml>
	</Theme>;
});