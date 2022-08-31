
import React, {CSSProperties, ReactElement} from "react"

export const PrimaryBox: React.FC<{
		squaresBackgroundColor?: string;
		style?: CSSProperties | undefined;
		mainContainerStyle?: CSSProperties | undefined;
		children: ReactElement;
}> = ({
								squaresBackgroundColor = "#000000",
								style,
								mainContainerStyle,
								children,
						}) => {

		return (
<div
style={Object.assign({ flexDirection: "row" }, style)}
>
{/* ---- Gradient Content container */}
<div
style={{
		width: "100%",
		height: "100%",
		borderRadius: mainContainerStyle?.borderRadius || 10,
		padding: 1,
		background: "linear-gradient(120deg, #01B7C5, #782C96)",
		position: "relative"
}}
>
{/* ---- Content container */}
<div
		style={Object.assign(
				{
						width: "100%",
						height: "100%",
            display: "flex",
            flexDirection :'column',
						borderRadius: mainContainerStyle?.borderRadius || 10,
						zIndex: 1,
						alignItems: "center",
						justifyContent: "center",
				},
				mainContainerStyle,
		)}
>
		{/* ===== Content */}
		<>{children}</>
</div>

{/* ---- Top left corner*/}
<div
		style={{
				width: 8,
				height: 20,
				left: -1,
				top: -7,
				backgroundColor: squaresBackgroundColor,
				transform: "rotate(45deg)",
				position: "absolute",
				zIndex: 3,
		}}
/>

{/* ---- Gradient Top left corner*/}
<div
		style={{
				width: 8,
				height: 17,
				left: 0,
				top: -4.5,
				backgroundColor: squaresBackgroundColor,
				transform: "rotate(45deg)",
				position: "absolute",
				zIndex: 2,
				background: "linear-gradient(#04B4C4, #04B3C3)",
		}}
/>

{/* ---- Bottom right corner*/}
<div
		style={{
				width: 8,
				height: 20,
				right: -1,
				bottom: -7,
				transform: "rotate(225deg)",
				backgroundColor: squaresBackgroundColor,
				position: "absolute",
				zIndex: 3,
		}}
/>

{/* ---- Gradient Bottom right corner*/}
<div
		style={{
				width: 8,
				height: 17,
				right: 0,
				bottom: -4.5,
				backgroundColor: squaresBackgroundColor,
				transform: "rotate(225deg)",
				position: "absolute",
				zIndex: 2,
				background: "linear-gradient(#7c31a0, #7c2fa2)",
		}}
/>
</div>
</div>
		);
};
