import Image from "next/image"
import styles from "../styles/custom.module.css"

function CustomImage({img, alt, customClass}) {
  return (
    <div className={[customClass]}>
      <Image src={img} alt={alt} className={styles.customImageChild} fill/>
    </div>
  )
}

export default CustomImage