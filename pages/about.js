import HeroSection from '../components/HeroSection'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
    <HeroSection text={'About Us'} />
    <div className='container mt-5 px-3 px-md-5'>
        <div className='text-center'>
            <h1 className={styles.headerText}>We are pizza makers, and our mission is to make cool pizza which feeds all your senses.</h1>
            <p className={styles.simpleText}>We prefer to rely on instinct and feel, measuring by hand, not by the gram. This is the authentic way to make pizza. Sure it’s a little unrefined, but we’re proud.</p>
            <p className={styles.simpleText}>It is pizza like this which feeds your sense of sharing, adding flavour to those occasions when you get together with friends and family.
            And really, is not that what it is all about? Because when pizza feeds all your senses, it is not just great, it is sensational.</p>
        </div>
   
    <div className='row mt-5 mb-5 text-center text-md-start'>
      <div className='col-12 col-md-4'>
        <i className="bi bi-bookmark-plus" style={{color:'#D24D2A',fontSize:30}}></i>
        <h2 className={styles.headerText} style={{marginBottom:20}}>We’re Careful</h2>
        <p className={styles.simpleText}>The crust is stored in a separate container, on a separate shelf in our fridge. The cheese, marinara sauce and pepperoni are stored in a designated kit, and every pizza is freshly baked on designated parchment paper in our ovens.</p>
      </div>
      <div className={`${styles.boder_Card} col-12 col-md-4`}>
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
    <hr style={{color:'#838383',height:2,width:'90%'}} className="mx-auto my-4"  />
    <div className='row mt-5'>
        <div className='col-12 col-md-6'>
            <h2 className={styles.headerText}>From classic pizzeria profiles, to innovative ethnic selections or flavourful health conscious choices, all our products reflect our customers’ desires.</h2>
        </div>
        <div className='col-12 col-md-6'>
        <p className={styles.simpleText}>With more than 40 recipes and more toppings than any other pizza franchise, our selection is unmatched. Our innovative menu ranges from basics, like classic pepperoni or ham and pineapple, to gourmet originals, like our primo pollo and grilled veggie and goat cheese.</p>
        <p className={styles.simpleText}>We know that better pizza starts with better quality, fresh ingredients. Our pepperoni is dry-cured, our mozzarella is rennet-free, our seafood is certified and none of our products contain artificial colours, flavours. With an extensive array of superior toppings, four distinct crusts and nine savoury sauces, we offer the choices our consumers demand—creating strong customer loyalty that leads to improved profitability.</p>
        </div>
    </div>
    <hr style={{color:'#838383',height:2,width:'90%'}} className="mx-auto"  />
    <div className='text-center mt-4'>
            <h1 className={styles.headerText}>Frequently Asked Questions</h1>
            <p className={styles.simpleText}>Here are the answers to the most common questions we receive.</p>

            <div className='accordion'>
                <div className='panel'>
                    
                </div>
            </div>
    </div>

  </div>
  </div>
  )
}

export default about