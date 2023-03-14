export function CircleTextComponent ({text, rotation}) {
    return(
        text.split("").map((char, index) =>
        <span key={index + 1} style={{transform: "rotate(" + rotation * (index + 1) + "deg)"}}>{char}</span>
        )
    )
}