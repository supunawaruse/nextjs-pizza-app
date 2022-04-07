import styles from '../styles/components/PizzaCard.module.css'
import Image from "next/image"
import Link from "next/link"

const PizzaCard = ({pizza}) => {
  return (
    <div className={`${styles.pizzaCard} col-12 col-sm-6 col-md-3 mt-4 d-block d-md-flex`}>
        <Image src={pizza.img} height={250} width={'150%'}  alt=""/>
        <h3 className={styles.pizzaName}>{pizza.title}</h3>
        <p className={styles.pizzaDesc}>{pizza.desc}</p>
        <div className={styles.bottomContent}>
            <p className={styles.pizzaPrice}>Large: ${pizza.prices[2]}</p>
            <Link href={`/pizza/${pizza._id}`} passHref>
              <a className={`${styles.button} btn`}>Add to Cart</a>
            </Link>
        </div>
           
    </div>
  )
}

export default PizzaCard