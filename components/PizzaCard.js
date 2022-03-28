import styles from '../styles/components/PizzaCard.module.css'
import Image from "next/image"

const PizzaCard = ({name,description,price,image}) => {
  return (
    <div className={`${styles.pizzaCard} col-12 col-sm-6 col-md-3 mt-4 d-block d-md-flex`}>
            <Image src={require(`../public/${image}.png`)}  alt=""/>
            <h3 className={styles.pizzaName}>{name}</h3>
            <p className={styles.pizzaDesc}>{description}</p>
            <div className={styles.bottomContent}>
                <p className={styles.pizzaPrice}>${price}</p>
                <butto className={`${styles.button} btn`}>Add</butto>
            </div>
           
    </div>
  )
}

export default PizzaCard