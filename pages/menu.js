import HeroSection from '../components/HeroSection'
import styles from '../styles/Menu.module.css'
import Image from "next/image"
import PizzaCard from '../components/PizzaCard'

const Menu = () => {
  return (
    <div className={styles.container}>
        <HeroSection text={'Pizza Menu'} />
        <div className='container'>
        <div className='row text-center mt-5 mb-5'>
          <PizzaCard image={'pizza1'} name={'Kimchi BBQ Chicken'} description={'Slow Cooked Pulled Chicken marinated in Bulgogi sauce, Shitake Mushrooms, Shallots on a Garlic base, Garnished with Kimchi, Red & Green Chilli'} price={'21.00'} />
          <PizzaCard image={'pizza2'} name={'Peri-Peri'} description={'Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce'} price={'24.00'} />
          <PizzaCard image={'pizza3'} name={'Moorish Lamb'} description={'Slow Cooked Pulled Lamb marinated in Moorish spices, Tomatoes, Capsicum Medley, Garbanzos , topped with a Slice of Lemon & Yoghurt sauce'} price={'19.00'} />
          <PizzaCard image={'pizza4'} name={'Meat Deluxe'} description={'Chorizo Sausage, Spanish Onions, Roasted Capsicum, Jalapeños & Chilli on a Spicy Tomato Salsa base, served with Fresh Avocado Salsa.'} price={'20.00'} />
          <PizzaCard image={'pizza5'} name={'Sriracha Beef'} description={'Slow Cooked Pulled Beef, Red Capsicum on a Tomato base, Garnished with Pico De Gallo, Avocado, Coriander & Lime, topped with Sriracha mayo'} price={'18.00'} />
          <PizzaCard image={'pizza6'} name={'Wild Mushroom Wagyu'} description={'4+ Marble Score Wagyu Beef, Portobello, Shiitake & Oyster Mushrooms, Asparagus, Caramelised Onions & Toasted Pine Nuts, on a Béchamel base'} price={'22.00'} />
          <PizzaCard image={'pizza7'} name={'Mediterranean'} description={'Slow Cooked Marinated Lamb, Tomatoes, Green Capsicum, Spanish Onions, Feta & Oregano on a Garlic infused base, garnished with Mint Yoghurt & Lemon'} price={'20.00'} />
          <PizzaCard image={'pizza8'} name={'Pepperoni'} description={'Pepperoni, Spanish Onions, Fresh Capsicum, Ground Beef, Olive Tapenade & Garlic on a Tomato base (Chilli optional)'} price={'23.00'} />
        </div>
        </div>

        <div className={`${styles.middleSection} text-center mx-0`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it's about finding pizza.</h2>
        </div>
       

    </div>
  )
}

export default Menu