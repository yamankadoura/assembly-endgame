export default function Chip(props) {
    const style = {
        backgroundColor: props.color,
        color: props.fontColor
    }

    return (
        <span style={style} className={props.className}> {props.text}</span>
    )
}