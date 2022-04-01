import styles from '../styles/Home.module.css'
import Image from "next/image"
import Background from '../public/home_bg.jpg'
import Pizza from '../public/2.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`${styles.hero} px-5 pb-3 text-center`}>
        <h1 className={`${styles.title} display-5 fw-bold mt-md-4`}>Get it while it is hot!</h1>
        <div className="col-lg-6 mx-auto">
          <p className={`${styles.subTitle} lead mb-4 mt-md-2`}>We create custom, personal pizzas with quality ingredients in only five minutes.</p>
        </div>
        <button className={`${styles.order_button} btn`}>VIEW MENU</button>
      </div>

      <div className='container mt-5 px-3 px-md-5'>
        <div className='text-center'>
          <h1 className={styles.headerText}>We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</h1>
          <p className={styles.simpleText}>We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud.</p>
          <p className={styles.simpleText}>It’s pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family.
          And really, isn’t that what it’s all about? Because when pizza feeds all your senses, it’s not just great, it’s sensational.</p>
        </div>
       
        <div className='row mt-5 mb-5 text-center text-md-start'>
          <div className='col-12 col-md-4'>
            <i className="bi bi-bookmark-plus" style={{color:'#D24D2A',fontSize:30}}></i>
            <h2 className={styles.headerText} style={{marginBottom:20}}>We’re Careful</h2>
            <p className={styles.simpleText}>The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</p>
          </div>
          <div className='col-12 col-md-4'>
            <i className="bi bi-award" style={{color:'#D24D2A',fontSize:30}}></i>
            <h2 className={styles.headerText} style={{marginBottom:20}}>We’re Certified</h2>
            <p className={styles.simpleText}>Our cheese-only and cheese-and-pepperoni gluten-free pizzas are prepared using the procedures certified by the Gluten Intolerance Group (GIG), and we take specific caution when making these pizzas.</p>
          </div>
          <div className='col-12 col-md-4'>
            <i className="bi bi-pencil" style={{color:'#D24D2A',fontSize:30}}></i>
            <h2 className={styles.headerText} style={{marginBottom:20}}>You’re Creative</h2>
            <p className={styles.simpleText}>For those simply looking to reduce gluten in their diets, we offer a Create Your Own pizza option. The cheese, pepperoni and marinara come from our gluten-free kit, but all additional toppings are stored at our standard make table.</p>
          </div>
        </div>
      </div>

    <div className={`${styles.middleSection} row align-items-center text-center text-md-start mx-0`}>
      
        <div className='col-12 col-md-3 offset-md-3'>
          <h1 className={styles.headerText} style={{color:'white',marginBottom:10}}>Peri-Peri</h1>
          <h2 className={styles.title} style={{color:'black',fontSize:32}}>$18 - $40</h2>
          <p className={styles.simpleText}>Marinated Chicken Breast Fillets, Shallots, Roasted Capsicum, Caramelised Onions & Bocconcini on a Tomato base, topped with Peri-Peri sauce</p>
          <button className={`${styles.order_button} btn `}>ORDER NOW</button>
        </div>
        <div className='col-12 col-md-6'>
          <Image src={Pizza} alt="" className='img-fluid'/>
        </div>
      </div>

    </div>
  )
}
