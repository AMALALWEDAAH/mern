import styles from "./colorful.module.css"
function colorful({color}){
    // const color =props.color
    // const {color} = props;
    return(
        <div className={styles.box} style={{background: color}}>

        </div>
    )
}
export default colorful;