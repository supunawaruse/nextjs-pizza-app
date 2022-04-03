import HeroSection from '../../components/HeroSection.js'
import styles from '../../styles/Pizza.module.css'
import Image from "next/image"
import PizzaCard from '../../components/PizzaCard.js'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice.js'
import { ToastContainer, toast } from 'react-toastify';


const PizzaPage = ({pizza}) => {

    const [price,setPrice] = useState(pizza.prices[0])
    const [size,setSize] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const [options,setOptions] = useState([])
    const dispatch = useDispatch()

    const changePrice = (number) =>{
        setPrice(price + number)
    }

    const onSizeChange = (value) =>{
        const dif = pizza.prices[value] - pizza.prices[size]
        setSize(value)
        changePrice(dif)
    }

    const onHandleChange = (e,option) =>{
        const checked = e.target.checked
        if(checked){
            changePrice(option.price)
            setOptions([...options,option])
        }else{
            changePrice(-option.price)
            setOptions(options.filter((extra)=> extra._id !== option._id))
        }
    }

    const handleAddToCart = () =>{
        dispatch(
            addProduct({...pizza,options,price,quantity,size})
        )
        toast.success("Cart Updated")
    }

  return (
    <div className={styles.container}>
        <ToastContainer theme='dark' autoClose={2000} />
        <HeroSection text={'Pizza Menu'}/>
        <div className='container'>
            <br /><br />
            <hr style={{height:5,color:'#D94F2B'}} />
            <div className='row mt-5 mb-5'>
                <div className='col-12 col-md-6'>
                    <Image src={require(`../../public/${pizza.img}.png`)} alt="" className='img-fluid' />
                </div>
                <div className='col-12 col-md-6'>
                    <h1 className={styles.pizzaName}>{pizza.title}</h1>
                    <p className={styles.pizzaDesc}>{pizza.desc}</p>
                    <h6 className={styles.smallHeader}>Available Sizes {size}</h6>
                    <div className={styles.sizes}>
                        <div className={`${styles.size} btn ` + `${size === 0 && styles.selectedSize}`} onClick={()=>onSizeChange(0)}>
                            <Image src={require('../../public/clipart17874.png')} alt="" className='img-fluid' />
                            <span className={styles.sizeText}>Small</span>
                        </div>
                        <div className={`${styles.size} btn ` + `${size === 1 && styles.selectedSize}`} onClick={()=>onSizeChange(1)}>
                            <Image src={require('../../public/clipart17874.png')}  alt="" className='img-fluid' />
                            <span className={styles.sizeText}>Medium</span>
                        </div>
                        <div className={`${styles.size} btn ` + `${size === 2 && styles.selectedSize}`} onClick={()=>onSizeChange(2)}>
                            <Image src={require('../../public/clipart17874.png')}  alt="" className='img-fluid' />
                            <span className={styles.sizeText}>Large</span>
                        </div>
                    </div>
                    <h6 className={styles.smallHeader}>Additional Ingredients</h6>
                    {
                        pizza.extraOptions.map((option,index) => (
                        <div key={option._id} className="form-check">
                            <input className={`${styles.checkForm} form-check-input`} type="checkbox" name={option.name} value="" id={option.text} onChange={(e)=>onHandleChange(e,option)} />
                            <label className={`${styles.checkLabel} form-check-label`}>
                                {option.text}
                            </label>
                        </div>
                        ))
                    }
                    
                    
                    <h1 className={styles.pizzaPrice}>Price: ${price}</h1>
                    <h6 className={styles.smallHeader}>Quantity</h6>
                    <div className='row'>
                        <div className='col-12'>
                            {/* <div className={styles.enumerator}>
                                <a className={styles.enumerator_btn}>-</a>
                                <p className={styles.enumerator_btn}>1</p>
                                <a className={styles.enumerator_btn}>+</a>
                            </div> */}
                            <input type="number" defaultValue={1} min={1} value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                        </div>
                        <div className='col-12 mt-2'>
                            <button className={`${styles.button} btn px-5 py-2`} onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.middleSection} text-center mx-0`}>
          <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
        </div>
    
    </div>
  )
}

export default PizzaPage

export const getServerSideProps = async ({params}) =>{
    const res = await axios.get(`http://localhost:3000/api/pizza/${params.id}`)
     
    return{
        props:{
            pizza:res.data
        }
    }
}