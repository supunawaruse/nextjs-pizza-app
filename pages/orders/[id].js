import axios from 'axios';
import HeroSection from '../../components/HeroSection'
import styles from '../../styles/Order.module.css'

const OrderPage = ({order}) => {

    const status = order.status;

    const statusClass = (index) =>{
        if(index-status <1) return styles.done
        if(index-status === 1) return styles.inProgress
        if(index-status > 1 ) return styles.undone
    }

  return (
    <div className={styles.container}>
    <HeroSection text={'Order'} />
        <div className='container mt-5 px-3 px-md-5'>
            <div className='text-center'>
                <h1 className={styles.headerText}>Thank You for Ordering...</h1>
            </div>
            <table className="table text-center">
                    <thead>
                        <tr>
                        <th style={{width:'25%'}} className={styles.tableHeader} scope="col">Order ID</th>
                        <th style={{width:'30%'}} className={styles.tableHeader} scope="col">Customer</th>
                        <th style={{width:'30%'}} className={styles.tableHeader} scope="col">Address</th>
                        <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                           <tr>
                            <td className={styles.tablePrice}>{order._id}</td>
                            <td className={styles.tableAddress}>{order.firstName} {order.lastName}</td>
                            <td className={styles.tableAddress}>{order.address}</td>
                            <td className={styles.tablePrice}>$ {order.total}</td>
                           </tr>
                    </tbody>
                </table>
                <div className='mt-4'>
                <h1 className={styles.tableAddress}>Ordered Items :</h1>
                <br />
                {
                    order.pizzas.map((pizza)=> (
                        <p key={pizza._id} className={styles.tableHeader}>{pizza.title} (Size: {pizza.size === 0 ? 'Small' : pizza.size === 1 ? 'Medium' : 'Large'} - Quantity: {pizza.quantity})</p>
                    ))
                }
                </div>
                <div className='mt-4'>
                <h1 className={styles.tableAddress}>Order Status :</h1>
                <div className='row text-center'>
                    <div className='col-6 col-sm-3'>
                        <div className={statusClass(0)}>
                            <i className="bi bi-receipt-cutoff" style={{color:'#c9c9c9',fontSize:60}}></i>
                            <span style={{color:'#c9c9c9',fontWeight:'bold'}} >Payment</span>
                            <div className={styles.checkedIcon}>
                                <i className="bi bi-check-circle-fill" style={{color:'green'}}></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-3'>
                        <div className={statusClass(1)}>
                        <i className="bi bi-basket" style={{color:'#c9c9c9',fontSize:60}}></i>
                        <span style={{color:'#c9c9c9',fontWeight:'bold'}} >Preparing</span>
                        <div className={styles.checkedIcon}>
                            <i className="bi bi-check-circle-fill" style={{color:'green'}}></i>
                        </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-3'>
                        <div className={statusClass(2)}>
                        <i className="bi bi-truck" style={{color:'#c9c9c9',fontSize:60}}></i>
                        <span style={{color:'#c9c9c9',fontWeight:'bold'}} >On the way</span>
                        <div className={styles.checkedIcon}>
                            <i className="bi bi-check-circle-fill" style={{color:'green'}}></i>
                        </div>
                        </div>
                    </div>
                    <div className='col-6 col-sm-3'>
                        <div className={statusClass(3)}>
                            <i className="bi bi-calendar-check" style={{color:'#c9c9c9',fontSize:60}}></i>
                            <span style={{color:'#c9c9c9',fontWeight:'bold'}}>Delivered</span>
                            <div className={styles.checkedIcon}>
                                <i className="bi bi-check-circle-fill" style={{color:'green'}}></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        <div className={`${styles.middleSection} text-center mx-0 mt-5`}>
            <h2 className={styles.textStyle}>Life is not about finding yourself, it is about finding pizza.</h2>
        </div>
    </div>
  )
}

export default OrderPage

export const getServerSideProps = async ({params}) =>{
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
     
    return{
        props:{
            order:res.data
        }
    }
}
