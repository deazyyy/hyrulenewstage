import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved




const GlobalStyle = createGlobalStyle`
$bodybg:#FCFCFC;
$lightblack:#57565c;

body,
html {
	margin: 0;
	padding: 0;
}

body {
	background-color: $bodybg;
}

$white:#FFFFFF;

.body_main {
	display: flex;
	justify-content: space-between;
}

.middle_layout {
	width: 65%;
	margin: 50px auto;
}

.middle_layout_outer {
	margin-left: 250px;
	width: 100%;
	min-height: 100vh;
}

.left_layout {
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 250px;
	height: 100vh;
	background-color: $white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-height: 100vh;

	.llogo {
		display: block;
		margin: 0 auto 20px;
	}

	.header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: scroll;
		-ms-overflow-style: none;
		/* IE and Edge */
		scrollbar-width: none;

		/* Firefox */
		&::-webkit-scrollbar {
			display: none;
		}
	}
}
.bg-fade{
	position:fixed;
	width:100vw;
	height:100vh;
	background:rgba(0,0,0,0.6);
	top:0;
	right:0;
	left:0;
	bottom:0;
	z-index: 5;
	overflow:hidden;
}

.input-main {
	background-color: rgb(43, 33, 23);
	border: 0px;
	border-radius: 16px;
	box-shadow: rgba(74, 74, 104, 0.1) 0px 2px 2px -1px inset;
	color: rgb(221, 198, 171);
	display: block;
	font-size: 14px;
	height: 40px;
	outline: 0px;
	padding: 5px 16px;
	width: 100%;
}

.input-main::placeholder {
	color: rgb(221, 198, 171);
}

.btn-main.disabled {
	background: url("images/hyrule/btn_disabled.png");
	background-size: 100% 100%;
	background-color: transparent !important;
	border-color: transparent !important;
	color: #9a9388 !important;
	cursor:not-allowed;
}

.homemainheading {
	position: relative;
	text-align: center;
	color: #fff;

	.lgraycolor {
		color: #ddc6ab;
		margin-top: -14px;
	}
}

.btngreen {
	color: #fff !important;

	&:hover {
		color: #fff;
	}
}

.reactswitch {
	transform: scale(0.9);
	margin-right: 10px;

	.react-switch-handle {
		width: 20px !important;
		height: 20px !important;
		top: 5px !important;
		left: -9px !important;
	}
}

.mobilenav {
	display: none;
	justify-content: space-between;
	align-items: center;
	padding: 14px 32px;
	background-color: #332E2A;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 10;
	border-bottom: 3px solid #252324;

	div {
		z-index: 3243;
		color: #fff;
	}

	i {
		font-size: 20px;
		color: #fff;
		cursor: pointer;
	}

	.navlogo {
		width: auto;
		height: 40px;
		display: block;
		margin: 0;
		padding: 0;
	}
}

@media (max-width: 1024px) {
	.middle_layout_outer {
		margin-left: 0px;
	}

	.mobilenav {
		display: flex;
	}

	.left_layout {
		position: fixed;
		z-index: 9;
		padding-top: 80px !important;
		display: none;

		.navlogo {
			display: none;
		}
	}

	.middle_layout {
		padding-top: 60px;
		width: 80%;
		margin: 50px auto
	}
}

// farms
.farmcontrol {
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.farmright {
		display: flex;
		align-items: center;

		.farmswitch {
			display: flex;
			align-items: center;

			label {
				color: rgb(221, 198, 171);
			}
		}
	}

	.farmview {
		margin-right: 10px;

		i {
			color: #4f473d;
			font-size: 20px;
			margin-right: 10px;
			cursor: pointer;
		}
	}

	.farmsearch {
		display: flex;
		align-items: center;

		div {
			margin-left: 20px;
		}

		h4 {
			color: rgb(221, 198, 171);
			margin-bottom: 6px;
		}
	}
}



.farmrowblockouter {
	width: 100%;
	border-radius: 16px;
	margin: 16px 0px;
	padding: 46px 0;
	padding-bottom:80px;
	position:relative;

	.farmrowblockinner {
		max-height: 668px;
		overflow: scroll;
		-ms-overflow-style: none;
		/* IE and Edge */
		scrollbar-width: none;
		position:relative;

		/* Firefox */
		&::-webkit-scrollbar {
			display: none;
		}
		
	}
	.blur1, .blur2{
		content:'';
		position:absolute;
		top:0;
		height: 50px;
   		width: calc(100% - 40px);
		margin:24px auto 0;
		filter:blur(5px);
		background:linear-gradient(to bottom, rgba(62,56,43,1) 70%, rgba(62,56,43,0.5));
		z-index:1;
		left: 50%;
		transform: translateX(-50%);
		border-top-right-radius: 40px;
		border-top-left-radius: 40px;
	}
	.blur2{
		top:unset;
		bottom:0;
		margin:0 auto 50px;
		border-bottom-right-radius: 40px;
		border-bottom-left-radius: 40px;
		background:linear-gradient(to top, rgba(62,56,43,1) 70%, rgba(62,56,43,0.5));
	}

	.farmrowmain {
		border-bottom: 3px solid #352f25;
		margin: 0 40px;
	}

	.farmrow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ddc6ab;
		padding: 20px;

		h4 {
			color: rgb(213, 182, 124)
		}

		.details {
			color: rgb(141, 133, 126);
			cursor: pointer;
		}

		.farmrowcolicon {
			display: flex;
			align-items: center;

			.pairicon {
				height: 60px;
				margin-right: 10px;
			}
		}
	}

	.farmrowdetail {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #3a3428;
		padding: 10px 30px;

		.farmrowcol {
			color: #ddc6ab;

			h4 {
				color: rgb(213, 182, 124)
			}
		}

		.farmrowcolcore {
			min-width: 100px;
		}

		.farmrowcolanchor div {
			margin: 5px 0;
		}

		.btngreen {
			min-width: 300px;
		}
	}
}

.farmcardouter {
	display: flex;
	flex-flow: wrap;
	margin-top: 50px;

	.farmcardmain {
		width: 30%;
		padding: 6px 45px 80px;
		color: #000;
		margin: 10px;
		background-image: 
	url("images/hyrule/frametop.png"), 
	url("images/hyrule/framebtm.png");
	  
	background-position: top, bottom;
	background-repeat: no-repeat, no-repeat;
	background-size: 100%,100%;
	position:relative;

	&:before{
		position:absolute;
		content:"";
		top:50%;
		transform:translateY(-50%);
		left:0;
		width:100%;
		height:80%;
		background: url("images/hyrule/framemid.png");
		background-size: 100%;
		background-repeat:repeat;
		z-index:-1
	}

		.farmrowcolicon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.pairicon {
				width: 150px;
			}

			h3 {
				color: rgb(221, 198, 171);
				font-size: 20px;
			}
		}

		.farmcolcontent {
			margin: 20px 0;
		}

		.controw {
			display: flex;
			justify-content: space-between;
			color: #e2c799;
			margin: 10px 0;
			text-transform: uppercase;
			width: 100%;

			div:first-child {
				color: #d5b67c;
			}
		}

		.btnouter {
			display: flex;
			justify-content: space-between;

			.btn-main {
				width: calc(50% - 5px);
			}
		}

		.btngreen {
			margin: 14px 0;
			width: 100%;
		}

		.details {
			color: rgb(141, 133, 126);
			cursor: pointer;
			text-align: center;
		}

		.farmrowdetail {
			margin: 10px 0;
			line-height: 22px;

			.controw {
				margin: 0;
			}

			a {
				cursor: pointer;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}

/* prettier-ignore */

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, aside, canvas, details, embed, figure, figcaption, footer,header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	font-family: 'Changa', sans-serif;
	font-weight: 500;
	text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}

h1 {
	font-weight: 700 !important;
}

h2 {
	font-weight: 600 !important;
}

/* HTML5 display-role reset for older browsers */

/* prettier-ignore */

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav,
section {
	display: block;
}


.btn-main {
	background: url("images/hyrule/btn_bg.png");
	background-size: 100% 100%;
	background-color: transparent;
	text-align: center;
	cursor: pointer;
	transition: all 0.2s linear;
	min-height:60px;
	display:flex;
	align-items:center;
	justify-content:center;
	padding: 14px 30px;
	border-radius: 16px;
	width: max-content;
	color: #000;
	font-weight: 500;
	border:none;
	&:hover {
		transform: scale(1.1);
	}
	&:focus{
		outline:none;
	}
}

.btnbrown {
	background: url("images/hyrule/btnnavbg.png");
	color: #f3de9f !important;
	background-size: 100% 100%;
}

body {
	line-height: 1;
	font-size: 16px;
	background: url("images/hyrule/Background.png");
	background-size: cover
}

ol,
ul {
	list-style: disc;
	list-style-position: inside;
}

blockquote,
q {
	quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: "";
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
	color: inherit;
	text-decoration: none !important;
	color: initial;
}

[role="button"] {
	cursor: pointer;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

* {
	font-family: 'Kanit', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* Scrollbar */

::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-thumb {
	border-radius: 8px;
}

::-webkit-scrollbar-track {
	border-radius: 10px;
}

th,
td {
	padding: 6px;
}

.farm-block {
	display: flex;
	align-items: center;
	justify-content: space-between
}

.farm-block-lbl {
	font-size: 16px !important;
}

.farmlabelspan {
	font-size: 14px !important;
}

.headingcls {
	text-align: center
}

.statsrow {
	color: #a6a7af;
}

.valuelocked {
	text-align: center;
	margin: auto
}

.farmcardwrapper {
	flex-direction: column
}

.harvest_btn {
	color: #a6a7af;
	background: #e9e9eb;
	font-size: 13px;
	font-weight: 400;
	padding: 6px 8px;
	min-width: 120px;
	height: 38px
}

.harvestheading {
	position: absolute;
	right: 24px;
	margin-top: -85px;
	font-weight: 500;
	font-size: 17px;
}

.connectBtn {
	display: none
}

.connectBtn button {
	padding: 20px 26px;
	border-radius: 12px;

	img {
		width: 14px;
		margin-right: 6px
	}
}

.harvestheading+.bdiIun {
	flex-direction: row !important
}

.farmtabbtn .iYMSbD {
	background-color: #fff;
	padding: 3px;
	color: #000
}

.hONXTO {
	position: relative;
	height: auto;
	border-radius: 50%
}

.homebtmr {
	width: 300px;
	position: absolute;
	left: -210px;
	bottom: 40px;
	transform: translateY(70%);

	@media (max-width: 1400px) {
		display: none;
	}
}

.homebtml {
	width: 200px;
	position: absolute;
	right: -160px;
	bottom: 40px;
	transform: translateY(70%);

	@media (max-width: 1400px) {
		display: none;
	}
}

.homeCardouter {
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column
	}
}

.homeCardouter2 {
	width: 400px;
	margin-left: 30px;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0;
		margin-top: 30px;
	}
}

@media (max-width: 768px) {
	#twitter-widget-0 {
		width: calc(100% - 60px) !important;
		display: block;
		margin: auto
	}
}

@media (max-width: 600px) {
	#twitter-widget-0 {
		width: calc(100% - 0px) !important;
		display: block;
		margin: auto
	}
	.farmrowblockouter {
		.farmrowdetail .farmrowcol{
			flex-direction:column
		}
		.farmrowdetail .btngreen{
			width:100%;
			min-width:unset
		}
	}
}

.fQGwCH {
	margin-top: 5px
}

.panelFooter {
	border-radius: 16px;
	text-align: center;
	margin: 0 26px;
	margin-bottom: 18px;

	.panelinfoouter {
		margin: 10px 0;

		.panelprice {
			display: flex;
			align-items: center;
			color: #ddc6ab;
		}

		.panelsocial {
			display: flex;
			margin: 14px 10px 0;

			img {
				cursor: pointer;
				margin-right: 10px;
				width: 20px;
			}
		}
	}
}

.panelFooter h2 {
	margin-bottom: 20px;
	line-height: 22px;
	font-size: 20px
}

.panelFooter button {
	color: #f3de9f !important;
	background-position-y: 2px;
	width: 100%;
	height: 48px !important;
	font-size: 16px !important;
	margin-bottom: 50px;
}

// .panelFooter button:hover{
// }
.fcardouter {
	padding: 14px;
	overflow: hidden;
	border-radius: 36px;
	// background:#000;
	margin: 0 5px;
	max-width: 350px !important
}

.comingproject {
	background: transparent !important;
	box-shadow: none;
	border: 2px dashed rgba(221, 221, 229, 0.8)
}

.cltlWF {
	margin-top: 30px !important;
	font-size: 24px;
	font-weight: 500 !important
}

.panelFooter button {
	border-radius: 12px;
	font-size: 14px
}


.menuDesktop{
  diplay:flex !important
}
.menuMobile{
  diplay:none !important
}

.menulinkouter {
	margin: 0px;
	padding: 16px 30px;
	border-left: 2px solid rgba(221, 198, 171, 0);
	position: relative;

	.fa-angle-down {
		position: absolute;
		right: 30px;
	}

	a {
		color: rgb(221, 198, 171);
		text-decoration: none;
		display: flex;
		align-items: center;
		padding-left: 36px;

		img {
			position: absolute;
			margin-right: 8px;
			height: 24px;
			margin-bottom: -3px;
			width: auto;
			left: 30px;
		}
	}
}

.menulinkinner {
	margin: 10px 10px 0;
	margin-left: 20px;

	a {
		padding: 8px 20px;
		background: transparent;
	}
}

.menulinkinner:hover {
	background: #2c2724 !important;
}

.menulinkouter:hover {
	background: #2c2724 !important;
	border-left: 2px solid rgb(221, 198, 171);
	background-size: cover !important;
}

.poolheadingouter {
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	justify-content: space-between;
}

// nav img
.navlogo {
	height: auto;
	display: block;
	margin: 0 auto;
	margin-bottom: 40px;
	width: 80%;
	padding: 0 20px;

	@media (max-width: 768px) {
		display: none;
	}
}

.menutopdesk {
	background: transparent;
	border: 0;
	display: none;

	@media (max-width: 768px) {
		border-bottom: solid 2px rgba(133, 133, 133, 0.1);
	}
}

.menutopdesk+div {
	width: 100%;
}

.menutopdesk .cntkGK:first-child {
	opacity: 0;

	@media (max-width: 968px) {
		opacity: 1;
	}
}

.styledpanelcss {
	// overflow:hidden;
	background: url("images/hyrule/navbrownbg.png");
	background-size: cover;
	background-position: right;
	background-repeat: no-repeat;
	min-height: 100vh;
	padding-top: 36px;

	div:nth-child(2) {
		background-color: transparent;
		border-top: solid 2px rgba(133, 133, 133, 0);
	}

	@media (max-width: 768px) {
		border-radius: 0px;
		margin: 0px;
		height: calc(100% - 0px);
		padding-top: 90px;
		min-height: unset;
	}
}

// frm card
.harvestheading {
	@media (max-width: 1200px) {
		margin-top: -156px;
	}
}

.hsEivP {
	@media (max-width: 1200px) {
		flex-direction: column !important;
		width: 100%;

		.harvestheading {
			margin-top: -30px
		}

		.harvest_btn {
			margin: 10px 0;
			width: 100%
		}
	}
}

.qGOfD {
	@media (max-width: 1200px) {
		flex-direction: column !important;
		width: 100%;

		.harvest_btn {
			margin: 10px 0;
			width: 100%
		}
	}
}

.btnOuter {
	position: relative;
	overflow: hidden;
	background-size: 100% 100%;
	height: 60px !important;
	background-position-y: 2px;
}

.btn_shiny:before {
	content: '';
	display: block;
	position: absolute;
	background: rgba(255, 255, 255, 1);
	width: 60px;
	height: 100%;
	left: 0px;
	top: 0;
	opacity: 0;
	-webkit-filter: blur(30px);
	filter: blur(30px);
	transform: translateX(-50px) skewX(-15deg);
}

.btn_shiny:after {
	content: '';
	display: block;
	position: absolute;
	background: rgba(255, 255, 255, 1);
	width: 30px;
	height: 100%;
	left: 30px;
	top: 0;
	opacity: 0;
	-webkit-filter: blur(5px);
	filter: blur(5px);
	transform: translateX(-50px) skewX(-15deg);
}

.btn_shiny:hover:before {
	transform: translateX(400px) skewX(-15deg);
	opacity: 0.6;
	transition: 2s;
}

.btn_shiny:hover:after {
	transform: translateX(400px) skewX(-15deg);
	opacity: 1;
	transition: 2s;
}

.btn_shiny {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 0
}

.fcardouter {
	@media (max-width: 640px) {
		max-width: 85% !important;

		.btnOuter {
			width: 100%;
			margin: 0 0 12px;
		}
	}
}

.farmhyruleheaderbxouter {
	padding: 10px;
	max-width: 300px !important;
	display: flex;
	align-items: center;
	margin: 0;
}

.farmhyruleheaderbx {
	width: 100%;
	background: linear-gradient(-210deg, #007afe 0%, #6f5ffe 40%);
	border-radius: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 60px 24px;
	margin: 0px;
	height: 100%;

	button {
		padding-left: 50px;
		padding-right: 50px;
	}

	img {
		width: 90%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
}

.pancakebxouter {
	padding: 14px
}

.pancakebxouter .farmhyruleheaderbx {
	background: #39C9D2 !important
}

.farmpage {
	max-width: 1600px
}

.farminheading {
	margin: 0 100px 10px;
}

.farminheadingpan {
	margin-top: 20px !important
}

.homeheading {
	margin: 0;
	position: relative;
	height: 150px;

	img {
		height: auto;
	}

	div {
		position: absolute;
		top: 0%;
		left: 50%;
		transform: translate(-50%, 35px);
		font-size: 34px
	}
}

.green {
	color: #6bffb5 !important
}

.dbrown {
	color: #d5b67c;
}

.white {
	color: #fff !important
}

.homecardouter {
	margin-top: 70px;
	display: flex;
	flex-wrap: wrap;

	.homecards {
		width: 50%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		h3 {
			font-size: 24px
		}
	}

	.headingouter {
		color: #fff
	}
	@media (max-width: 768px) {
		flex-direction: column;
	
		.homecards {
			width: 100% !important;
			margin-bottom: 10px !important;
		}
		.rowouter{text-align:left}
	}
	
	
}




.bgbxl {
	background-image: 
	url("images/hyrule/boardbgtop.png"), 
	url("images/hyrule/boardbgbtm.png");
	  
	background-position: top, bottom;
	background-repeat: no-repeat, no-repeat;
	background-size: 100%,100%;
	padding: 50px;
	position:relative;
	&:before{
		position:absolute;
		content:"";
		top:50%;
		transform:translateY(-50%);
		left:0;
		width:100%;
		height:80%;
		background: url("images/hyrule/boardbgmid.png");
		background-size: 100%;
		background-repeat:repeat;
		z-index:-1
	}
	@media (max-width: 550px) {
		background-image: 
		url("images/hyrule/boardbgmbtop.png"), 
		url("images/hyrule/boardbgmbbtm.png");
		background-size: 100%,100%;
		padding:45px;
		&:before{
			background: url("images/hyrule/boardbgmbmid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1;
			height: 60%;
		}
	}
	@media (max-width: 768px) {
		&:first-child {
			margin-bottom: 40px !important;
		}
	}
	

	.headingouterot {
		position: absolute;
		top: 0;
		left: 50%;
		height: 80px;
		width: 90%;
		transform: translate(-50%, -30px);

		.headingouter {
			background: url("images/hyrule/bxheadbg.png");
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			height: 100%;
			position: relative;

			h4 {
				position: absolute;
				top: 0%;
				left: 50%;
				transform: translate(-50%, 35px);
				color: #ddc6ab;
			}
		}
	}

	.infoouter {
		margin-top: 30px;
		display:flex;
		.rowouter{width:50%}
	}
	.rowouter {
		display: flex;
		align-items: center;
		flex-direction:column;
		justify-content:center;
		margin: 8px 0;
		text-align:center;
	
		.rowinner {
			// width: 50%
			margin:6px 0
		}
	}
	
	button {
		width: 100%;
		margin-top: 14px
	}
}

.bgbxsm {
	background-image: 
	url("images/hyrule/boardbgsmtop.png"), 
	url("images/hyrule/boardbgsmbtm.png");
	  
	background-position: top, bottom;
	background-repeat: no-repeat, no-repeat;
	background-size: 100%,100%;
	position:relative;

	&:before{
		position:absolute;
		content:"";
		top:50%;
		transform:translateY(-50%);
		left:0;
		width:100%;
		height:80%;
		background: url("images/hyrule/boardbgsmmid.png");
		background-size: 100%;
		background-repeat:repeat;
		z-index:-1
	}
	@media (max-width: 550px) {
		background-image: 
		url("images/hyrule/boardbgmbtop.png"), 
		url("images/hyrule/boardbgmbbtm.png");
		background-size: 100%,100%;
		&:before{
			background: url("images/hyrule/boardbgmbmid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1;
			height: 60%;
		}
	}

	h2 {
		font-size: 30px;
		margin-bottom: 14px
	}

	.infoouter {
		margin-top: 0px;
		flex-direction:column;
		
	}

	.rowouter {
		display: flex;
		margin: 8px 0;
		justify-content: space-between;
		flex-direction:row;
		align-items: flex-start;
		width:100% !important;

		.rowinner {
			width: auto
		}
	}
}







.harvestactionheading {
	font-size: 14px;
	color: #d5b67c;
	margin-bottom: 5px;
}

.actionpanelouter {
	display: flex;
	flex-flow: row-reverse;
	align-items: center;

	a {
		color: #00d57b;

		svg {
			display: none
		}
	}

	.core {
		color: #00d57b;
		min-width: 75px
	}
}

.detailunlock {
	background: url("images/hyrule/btn_bg.png");
	background-size: 100% 100%;
	background-color: transparent !important;
	border-color: transparent !important;
	color: #fff !important;
	// min-width:200px

}

.farmcardpair {
	width: 170px;
	margin-top: -14px;
	margin-bottom: 14px
}

.harvestval {
	position: absolute;
	top: -28px;
	right: 0;
	font-size: 16px;
	font-weight: 500;
	color: #6bffb5;
}

.harvestvalouter {
	position: relative
}

.dividerfarm {
	background-color: transparent;
	height: 1px;
	margin: 5px auto;
}

.kokiriouter {
	padding: 60px 36px;
	margin-top: 30px;

	.kokirinner {
		max-height: 668px;
		padding: 0;
		width: 100%;
		display: flex;
		flex-flow: wrap;
		justify-content: space-between;
		overflow: scroll;
		-ms-overflow-style: none;
		/* IE and Edge */
		scrollbar-width: none;

		/* Firefox */
		&::-webkit-scrollbar {
			display: none;
		}
	}

	.kokbox {
		width: 20%;
		text-align: center;
		font-size: 18px;
		color: #877862;
		margin: 20px 0;
		padding: 0 10px;

		.kokboximg {
			width: 85px;
			display: block;
			margin: 0 auto 10px
		}

		div {
			text-align: center;
		}

		button {
			margin: 10px auto 0;
			color: #f3de9f;
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 160px;
		}
	}
}

.kokbtn {
	background: url("images/hyrule/btnnavbg.png");
	background-size: 100% 100%;
	width: 100%;
	background-position-y: 2px;
}

.roulettehero {
	display: flex;

	.homeheading {
		img {
			max-width: 400px;
		}

		div {
			transform: translate(-50%, 25px);
		}
	}

	.homeheading {
		height: auto;
	}

	.rouletteherow1 {
		width: 40%;
	}

	.rouletteherow2 {
		width: 60%;
	}

	.rouletteherow {
		.roulecont {
			color: #ddc6ab;
			margin-top: 30px;

			.roulrowouter {
				margin: 20px 0;

				.roulrow {
					margin: 10px 0;
					border-radius: 16px;
					background-color: #24201a;
					padding: 10px 20px;
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;

					div {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.lbordder {
						width: 5px;
						height: calc(100% - 20px);
						border-radius: 4px;
						position: absolute;
						left: 10px;
						top: 10px;
					}
				}

				.roulunlock {
					margin-top: 14px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					@media (max-width: 550px) {
						h4{margin-bottom:10px}
						flex-direction:column;
					}
				}
			}
		}
	}
}

.roulettehomeouter {
	
	.frameroulette{
		background-image: 
		url("images/hyrule/hobgtop.png"), 
		url("images/hyrule/hobgbtm.png");
			
		background-position: top, bottom;
		background-repeat: no-repeat, no-repeat;
		background-size: 100%,100%;
		position:relative;
		&:before{
			position:absolute;
			content:"";
			top:50%;
			transform:translateY(-50%);
			left:0;
			width:100%;
			height:80%;
			background: url("images/hyrule/hobgmid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1
		}
		@media (min-width: 1600px) {
			background-image:  
			url("images/hyrule/hobg.png");
				
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			&:before{
				background: url("images/hyrule/hobgmid.png");
				background-size: 100%;
				background-repeat:repeat;
			}
		
		}
		@media (max-width: 992px) {
			background-image: 
			url("images/hyrule/hobg768top.png"), 
			url("images/hyrule/hobg768btm.png");
			background-size: 100%,100%;
			&:before{
				background: url("images/hyrule/hobg768mid.png");
				background-size: 100%;
				background-repeat:repeat;
				z-index:-1
			}
		}
		@media (max-width: 550px) {
			background-image: 
			url("images/hyrule/hobg402top.png"), 
			url("images/hyrule/hobg402btm.png");
			background-size: 100%,100%;
			&:before{
				background: url("images/hyrule/hobg402mid.png");
				background-size: 100%;
				background-repeat:repeat;
				z-index:-1
			}
		}
	}

	.bgbxl {
		padding: 40px 60px 54px;

		.triangle {
			width: calc(100% - 30px);
			height: auto;
			display: block;
			margin: 20px auto 0;
		}

		.infoouter {
			color: #877862;
			line-height: 28px;
			flex-direction:column;

			span {
				color: #ddc6ab;
			}
		}
	}

	.homecards {
		width: 100%;
	}
}

.wheelouterpouter {
	overflow: hidden;
	pointer-events:none;
}
.wheelouterpouter img{
	pointer-events:none;
}

.wheelouter {
	position: relative;

	.roulcenter {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 6;
		width: 80px;
		margin-top: 10px;
		display: block !important
	}

	.roulborder {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 6;
		height: 100%;
	}
}

.wheelouter div:first-child {
	margin: auto;
	transform: scale(0.9)rotate(-45deg);
	transform-origin: venter center
}

.wheelouter div:first-child+img {
	display: none
}



.framelgbg {
	background-image: 
	url("images/hyrule/frame1920top.png"), 
	url("images/hyrule/frame1920btm.png");
		
	background-position: top, bottom;
	background-repeat: no-repeat, no-repeat;
	background-size: 100%,100%;
	position:relative;
	&:before{
		position:absolute;
		content:"";
		top:50%;
		transform:translateY(-50%);
		left:0;
		width:100%;
		height:80%;
		background: url("images/hyrule/frame1920mid.png");
		background-size: 100%;
		background-repeat:repeat;
		z-index:-1
	}
	@media (max-width: 992px) {
		background-image: 
		url("images/hyrule/frame768top.png"), 
		url("images/hyrule/frame768btm.png");
		background-size: 100%,100%;
		&:before{
			background: url("images/hyrule/frame768mid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1
		}
	}
	@media (max-width: 550px) {
		background-image: 
		url("images/hyrule/frame402top.png"), 
		url("images/hyrule/frame402btm.png");
		background-size: 100%,100%;
		&:before{
			background: url("images/hyrule/frame402mid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1
		}
	}
}





// modal
.modalclose{
	width:56px;
	height:auto;
	position:absolute;
	right:0;
	top:0;
	transform:translate(10px,-10px);
	cursor:pointer;
	z-index:10;
	@media (max-width: 800px) {
		width:48px;
	}
}
.ReactModal__Content {
	width:100% !important;
	max-width: 900px;
	padding:0 10px !important;
	border:0 !important;
	overflow: visible !important;
	.framelgbg {
		@media (max-width: 992px) {
			background-image: 
			url("images/hyrule/frame768topmodal.png"), 
			url("images/hyrule/frame768btmmodal.png");
			background-size: 100%,100%;
			&:before{
				background: url("images/hyrule/frame768midmodal.png");
				background-size: 100%;
				background-repeat:repeat;
				z-index:-1
			}
		}
		@media (max-width: 550px) {
			background-image: 
			url("images/hyrule/frame402top.png"), 
			url("images/hyrule/frame402btm.png");
			background-size: 100%,100%;
			&:before{
				background: url("images/hyrule/frame402mid.png");
				background-size: 100%;
				background-repeat:repeat;
				z-index:-1;
			}
		}
	}
}

.ReactModal__Overlay{
	z-index:10;
	background-color:rgba(42,33,25,0.8) !important;
}
.ModalInner {
	background-image: url(images/hyrule/hobgtop.png), url(images/hyrule/hobgbtm.png);
    background-position: top,bottom;
    background-repeat: no-repeat,no-repeat;
    background-size: 100%,100%;
}

.inputouter{
	display:flex;
	align-items:center;
	justify-content:space-between;
	background-color: #24201a;
	border-radius:12px;
	padding:6px 16px;
	img{height:20px;}
	input{
		background:transparent;
		border:0;
		color:#fff;
		width:calc(100% - 60px);
		&:focus{
			outline:0;
			border:0
		}
	}
}

.afterunlock{
	.Rowmain{
		display:flex;
		margin:0 -20px;
		.Rowouter{
			width:50%;			
		}
		.box{
			width:-webkit-fill-available;
			margin:10px;
			padding:24px;
			background-color: #24201a;
			border-radius:12px;
			color:#fff;
			h2{color: #ddc6ab;margin-bottom:6px;font-weight:500 !important}
			.roulunlock{
				display:flex;
				justify-content:center;
				align-items:center;
				margin:30px 0;
			}
		}
		@media (max-width: 768px) {
			flex-direction:column;
			margin:0;
			.Rowouter{
				width:100%;			
			}
			.box{
				margin: 0 0 10px 0;
			}
		}
		
	}
}



// unlock button
.unlockframe{
	background:url("images/hyrule/boardbgtop.png"), 
	url("images/hyrule/boardbgbtm.png");
		
	background-position: top, bottom;
	background-repeat: no-repeat, no-repeat;
	background-size: 100%,100%;
	padding: 50px;
	position:relative;
	&:before{
		position:absolute;
		content:"";
		top:50%;
		transform:translateY(-50%);
		left:0;
		width:100%;
		height:80%;
		background: url("images/hyrule/boardbgmid.png");
		background-size: 100%;
		background-repeat:repeat;
		z-index:-1
	}
	@media (max-width: 550px) {
		background-image: 
		url("images/hyrule/boardbgmbtop.png"), 
		url("images/hyrule/boardbgmbbtm.png");
		background-size: 100%,100%;
		padding:45px;
		&:before{
			background: url("images/hyrule/boardbgmbmid.png");
			background-size: 100%;
			background-repeat:repeat;
			z-index:-1;
			height: 60%;
		}
	}
}



.kokboxmodal{
	.bottom{
		display:flex;
		justify-content:center;
		align-items:center;
		button{
			max-width: 130px !important;
			justify-content:center !important
		}
	}
	
	@media (max-width: 800px) {
		.bottom{
			flex-direction:column
		}
		
	}
}

.kokmodalouter{
	div{text-align:left !important}
	.icon{
		width:100%;
		max-width:200px;
		margin-right:20px;
	}
	h3{font-size:26px;}
	h3{font-size:24px;margin-top:5px}
	.kokinfouter{
		display:flex;
		flex-flow:wrap;
		.kokinfo{
			display:flex;
			align-items:center;
			margin:6px 0;
			padding: 0 14px;
			min-width:33%;
			.kokvalue{
				margin-right:10px;
				border-radius: 12px;
				background-color: #6f553b;
				border: 3px solid #a27e4f;
				padding:8px;	
			}
		}
	}

	@media (max-width: 800px) {
		flex-direction:column;
		align-items: center;
		.icon{
			max-width:130px;
		}
		.kokinfouter{
			flex-flow: nowrap;
    		overflow: scroll;
			-ms-overflow-style: none;
			/* IE and Edge */
			scrollbar-width: none;

			/* Firefox */
			&::-webkit-scrollbar {
				display: none;
			}
			.kokinfo{
				min-width:unset;
				padding:0;
				padding-right:20px;
			}
			padding-left:100px;
			animation: slidetoleft 1.2s ease;
			animation-fill-mode: forwards;
			@keyframes slidetoleft {
				0%   { padding-left:100px; }
				100% { padding-left:0px; }
			  }
		}
		
	}
	@media (max-width: 800px) {
		flex-direction:column;
		align-items: center;
		
	}
}



// responsive starts

@media (max-width: 1600px) {
	// .framelgbg {
	// 	background: url("images/hyrule/frame1600.png");
	// 	background-size: 100% 100%;
	// }

	.farmcardouter .farmcardmain {
		padding: 6px 45px 80px;
	}

	.btn-main {
		padding: 14px;
	}
}

@media (max-width: 1500px) {
	.farmcardouter .farmcardmain {
		width: calc(50% - 30px);
		margin: 10px auto;
		padding: 6px 45px 80px;
	}

	.btn-main {
		padding: 14px 30px;
	}

	.kokiriouter .kokbox button {
		max-width: 140px;
		padding: 10px 14px;
	}

	.roulettehero .homeheading img {
		width: 100%;
		max-width: 400px;
	}

	.middle_layout {
		width: 80%;
	}
}

@media (max-width: 1400px) {
	// .framelgbg {
	// 	background: url("images/hyrule/frame1400.png");
	// 	background-size: 100% 100%;
	// }
}

@media (max-width: 1300px) {
	.kokiriouter .kokbox button {
		max-width: 100px;
		padding: 10px 14px;
	}

	.roulettehero .homeheading img {
		width: 100%;
		max-width: 400px;
	}

	.roulettehero .homeheading div {
		transform: translate(-50%, 20px);
		font-size: 28px;
	}
}

@media (max-width: 1200px) {
	.roulettehero {
		flex-direction: column;
		align-items: center;
	}

	.rouletteherow2 {
		margin-top: 30px;
		width:90% !important;
	}
	
}

@media (max-width: 992px) {
	// .farmrowblockouter {
	// 	background: url("images/hyrule/boardlong768.png");
	// 	background-size: 100% 100%;
	// }

	.farmrowblockouter {
		.farmrow {
			flex-direction: column;
		}

		.farmrowcolicon {
			margin-bottom: 14px;
		}

		.farmrowcol {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin: 5px 0;

			h4 {
				margin-right: 10px;
			}
		}

		.details {
			margin-top: 14px;
			justify-content: center;
		}

		.farmrowdetail {
			flex-direction: column;

			.btn-main {
				margin: auto;
			}
		}
	}

	.roulettehero {
		.rouletteherow1 {
			width: 100%;
		}

		.rouletteherow2 {
			width: 100% !important;
		}
	}
}

@media (max-width: 768px) {
	// .framelgbg {
	// 	background: url("images/hyrule/frame768.png");
	// 	background-size: 100% 100%;
	// }

	.farmcardouter .farmcardmain {
		width: calc(100% - 200px);
		margin: 10px auto;
		padding: 6px 60px 80px;
		max-width: 500px;
	}

	.middle_layout {
		padding-top: 60px;
		width: 80%;
		margin: 50px auto
	}

	.homeheading {
		img {
			width: 420px;
			;
		}

		div {
			font-size: 30px;
			transform: translate(-50%, 26px);
		}
	}

	.farmcontrol {
		flex-direction: column;

		.farmright {
			margin-bottom: 14px;
		}
	}

	.kokiriouter .kokbox {
		width: auto;
	}
}

@media (max-width: 600px) {
	// .framelgbg {
	// 	background: url("images/hyrule/frame600.png");
	// 	background-size: 100% 100%;
	// }
}

@media (max-width: 500px) {
	.homecardouter .bgbxsm{
		min-height: 254px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.homecardouter .bgbxl{
		min-height: 254px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.farmcardouter .farmcardmain {
		width: calc(100%);
		margin: 10px auto;
		padding: 6px 60px 80px;
		max-width: 500px;
	}

	.middle_layout {
		padding-top: 60px;
		width: 80%;
		margin: 50px auto
	}

	.homeheading {
		height: auto;
		margin-bottom: 14px;

		img {
			width: 100%
		}

		div {
			font-size: 26px;
			transform: translate(-50%, 20px);
		}
	}

	.roulettehomeouter .bgbxl {
		padding: 15px 25px 34px;
	}

	.roulettehomeouter .bgbxl .triangle {
		margin: 20px auto;
		height: auto;
	}
}

@media (max-width: 400px) {
	// .framelgbg {
	// 	background: url("images/hyrule/frame402.png");
	// 	background-size: 100% 100%;
	// }
	.homecardouter .bgbxl{
		// background: url("images/hyrule/framebxl400bg.png");
		// background-size: 100% 100%;
		min-height: 254px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}

@media (max-width: 375px) {
	.farmcardouter .farmcardmain {
		margin: 10px auto;
		padding: 6px 40px 80px;
		max-width: 500px;
	}

	.middle_layout {
		padding-top: 60px;
		width: 80%;
		margin: 50px auto
	}

	.homeheading {
		height: auto;
		margin-bottom: 14px;

		div {
			font-size: 22px;
			transform: translate(-50%, 20px);
		}
	}

	.farmrowblockouter .farmrowmain {
		margin: 0 10px;
	}

	.roulettehomeouter .bgbxl {
		padding: 15px 25px 34px;
	}
}






@media (min-width: 1024px) and (max-width: 1300px) {
	.farmrowblockouter {
		.farmrow {
			flex-direction: column;
			text-align: center;
		}

		.farmrowcol {
			margin: 5px 0;
		}

		.farmrowdetail {
			flex-direction: column;
			text-align: center;
		}
	}
}
`

export default GlobalStyle
