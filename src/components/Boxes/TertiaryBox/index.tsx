import React, {CSSProperties, ReactElement} from "react"

const TertiaryBox: React.FC<{
children: ReactElement;
style?: CSSProperties;
mainContainerStyle?: CSSProperties;
squaresBackgroundColor?: string;
}> = ({
	style,
	mainContainerStyle,
	children,
	squaresBackgroundColor = "#000000",
	
}) => {

return (
<div
style={Object.assign({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: 'center',
}, style)}
>

{/* ---- Content container */}
<div style={Object.assign(
	{
			border: "1px solid #333333",
			borderRadius: 10,
			display: "flex",
			flexDirection: "column",
			backgroundColor: "#000000",
			width: "fit-content",
			height: "fit-content",
			position: "relative"
	}, mainContainerStyle
)}>

	{/* ===== Content */}
	{children}

	{/* ---- Top left corner*/}
	<div
			style={{
					position: "absolute",
					zIndex: 2,
					borderRight: "1px solid #333333",
					backgroundColor: squaresBackgroundColor,
					width: 8,
					height: 18,
					left: -1,
					top: -6,
					transform: "rotate(45deg)"
			}}
	/>

	{/* ---- Bottom right corner*/}
	<div
			style={{
					position: "absolute",
					zIndex: 2,
					borderRight: "1px solid #333333",
					backgroundColor: squaresBackgroundColor,
					width: 8,
					height: 18,
					right: -1,
					bottom: -6,
					transform: "rotate(225deg)"
			}}
	/>
</div>
</div>
)
}

export default TertiaryBox