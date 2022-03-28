import HeroSection from '../components/HeroSection'
import styles from '../styles/Pizza.module.css'
import Image from "next/image"
import PizzaCard from '../components/PizzaCard'

const Menu = () => {
  return (
    <div className={styles.container}>
        <HeroSection text={'Pizza Menu'}/>
        <div className='container'>
            <br /><br />
            <hr style={{height:5,color:'#D94F2B'}} />
            <div className='row mt-5 mb-5'>
                <div className='col-12 col-md-6'>
                    <Image src={require('../public/1.png')} alt="" className='img-fluid' />
                </div>
                <div className='col-12 col-md-6'>
                    <h1 className={styles.pizzaName}>Peri-Peri</h1>
                    <p className={styles.pizzaDesc}>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce</p>
                    <h6 className={styles.smallHeader}>Available Sizes</h6>
                    <h1 className={styles.pizzaPrice}>Price: $21</h1>
                    <h6 className={styles.smallHeader}>Quantity</h6>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={styles.enumerator}>
                                <a className={styles.enumerator_btn}>-</a>
                                <p className={styles.enumerator_btn}>1</p>
                                <a className={styles.enumerator_btn}>+</a>
                            </div>
                        </div>
                        <div className='col-12 mt-2'>
                            <button className={`${styles.button} btn px-5 py-2`}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.middleSection} text-center mx-0`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it's about finding pizza.</h2>
        </div>
       

    </div>
  )
}

export default Menu