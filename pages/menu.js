import HeroSection from '../components/HeroSection'
import styles from '../styles/Menu.module.css'
import Image from "next/image"
import PizzaCard from '../components/PizzaCard'
import axios from 'axios'

const Menu = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <HeroSection text={'Pizza Menu'} />
        <div className='container'>
        <div className='row text-center mt-5 mb-5'>
          {
            pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
            ))
          }
        </div>
        </div>

        <div className={`${styles.middleSection} text-center mx-0`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
        </div>
       

    </div>
  )
}

export default Menu

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/pizza")
  return{
    props:{
      pizzaList:res.data
    }
  }

}