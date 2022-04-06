import HeroSection from '../../components/HeroSection'
import styles from '../../styles/Admin.module.css'
import Image from "next/image"
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Index = ({orders,pizzas}) => {

    const [pizzaList,setPizzaList] = useState(pizzas)
    const [orderList,setOrderList] = useState(orders)

    const handleDelete = async(id) =>{
        try {
            if(window.confirm("Are you sure to delete this Pizza?")){
                await axios.delete(`http://localhost:3000/api/pizza/${id}`)
                setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = async(id) =>{
        
    }

    const handleStatus = async (id) => {
        const item = orderList.filter(order => order._id === id)[0]
        const currentStatus = item.status
        try {
            const res = await axios.put("http://localhost:3000/api/orders/" + id,{status:currentStatus + 1})
            setOrderList([
                res.data,
                ...orderList.filter((order) => order._id !== id)
            ])
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className={styles.container}>
    <HeroSection text={'Admin'} />
    
    <div className='container mt-5'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className={`${styles.tabText} nav-link active`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Orders</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className={`${styles.tabText} nav-link`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Products</button>
        </li>
        </ul>
        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className='mt-4'>
                <div className="table-responsive mt-3">
                    <table className="table text-center">
                        <thead>
                            <tr>
                            <th style={{width:'25%'}} className={styles.tableHeader} scope="col">Id</th>
                            <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Customer</th>
                            <th style={{width:'10%'}} className={styles.tableHeader} scope="col">Total</th>
                            <th style={{width:'10%'}} className={styles.tableHeader} scope="col">Payment</th>
                            <th style={{width:'20%'}} className={styles.tableHeader} scope="col">Status</th>
                            <th style={{width:'20%'}} className={styles.tableHeader} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList.map((order)=> (
                                    <tr key={order._id}>
                                    <td className={styles.tableRed}>{order._id}</td>
                                    <td className={styles.tableQty}>{order.firstName} {order.lastName}</td>
                                    <td className={styles.tableQty}>${order.total}</td>
                                    <td className={styles.tableQty}>{order.paymentMethod === 0 ? 'Online' : 'Cash on Delivery'}</td>
                                    <td className={styles.tableRed}>{order.status === 0 ? 'Paid' : order.status === 1 ? 'Preparing' : order.status === 2 ? 'On the way' : 'Delivered'}</td>
                                    <td className={styles.tablePrice}>
                                        <Link href={`orders/${order._id}`} passHref >
                                            <button className='mb-2 btn btn-light'>View Order</button> 
                                        </Link>
                                        {
                                            order.status !== 3 && (
                                                <button className='btn btn-warning' onClick={()=>handleStatus(order._id)}>Update Status</button> 
                                            )
                                        }
                                       
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className='mt-4'>
                <button className={`${styles.addButton} btn`}>Add Product</button>
                <div className="table-responsive mt-3">
                    <table className="table text-center">
                        <thead>
                            <tr>
                            <th style={{width:'25%'}} className={styles.tableHeader} scope="col">Image</th>
                            <th style={{width:'25%'}} className={styles.tableHeader} scope="col">Id</th>
                            <th style={{width:'25%'}} className={styles.tableHeader} scope="col">Title</th>
                            <th style={{width:'10%'}} className={styles.tableHeader} scope="col">Prices</th>
                            <th style={{width:'15%'}} className={styles.tableHeader} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pizzaList.map((pizza)=> (
                                    <tr key={pizza._id}>
                                    <td className={styles.tableRed}>
                                    <Image src={require(`../../public/${pizza.img}.png`)} width={120} height={120} alt="" className={`${styles.pizzaImg} img-fluid`} />
                                    </td>
                                    <td className={styles.tableRed}>{pizza._id}</td>
                                    <td className={styles.tableQty}>{pizza.title}</td>
                                    <td className={styles.tablePrice}>
                                        <div>S - ${pizza.prices[0]}</div>
                                        <div>M - ${pizza.prices[1]}</div>
                                        <div>L - ${pizza.prices[2]}</div>
                                    </td>
                                    <td className={styles.tableRed}>
                                        <button className='btn' onClick={()=>handleEdit(pizza._id)} ><i className="bi bi-pencil-square" style={{color:'white',fontSize:24}}></i></button> 
                                        <button className='btn'onClick={()=>handleDelete(pizza._id)} ><i className="bi bi-trash" style={{color:'#D94F2B',fontSize:24}}></i></button> 
                                    </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Index

export const getServerSideProps = async () =>{
    const products = await axios.get("http://localhost:3000/api/pizza");
    const orders = await axios.get('http://localhost:3000/api/orders');

    return {
        props:{
            orders:orders.data,
            pizzas:products.data
        }
    }
}