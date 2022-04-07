import HeroSection from '../../components/HeroSection'
import styles from '../../styles/Admin.module.css'
import Image from "next/image"
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import {Modal,Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'

const Index = ({orders,pizzas}) => {
    const router = useRouter()
    const [file,setFile] = useState(null)
    const [pizzaList,setPizzaList] = useState(pizzas)
    const [orderList,setOrderList] = useState(orders)
    const [newPizza,setNewPizza] = useState({title:'', prices:[0,0,0], desc:'', extraOptions:[], img:''})
    const [extraOptions,setExtraOptions] = useState({text:"",price:0})
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setNewPizza({title:'', prices:[0,0,0], desc:'', extraOptions:[], img:''})
        setExtraOptions({text:"",price:0})
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const onPizzaDetailsChange = (e) => {
        if(e.target.name === 'smallPrice'){
            setNewPizza({
                ...newPizza,
                prices:[e.target.value,newPizza.prices[1],newPizza.prices[2]]
            })
        }else if(e.target.name === 'mediumPrice'){
            setNewPizza({
                ...newPizza,
                prices:[newPizza.prices[0],e.target.value,newPizza.prices[2]]
            })
        }else if(e.target.name === 'largePrice'){
            setNewPizza({
                ...newPizza,
                prices:[newPizza.prices[0],newPizza.prices[1],e.target.value]
            })
        }else{
            setNewPizza({
                ...newPizza,
                [ e.target.name]:e.target.value
            })
        }
    }

    const onChangeExtras = (e) =>{
        setExtraOptions({
            ...extraOptions,
            [ e.target.name]:e.target.value
        })
    }

    const onAddExtras = () =>{
        if(extraOptions.text !== '' && extraOptions.price !== 0){
            setNewPizza({
            ...newPizza,
            extraOptions:[...newPizza.extraOptions,extraOptions]
            })
        }
    }

    const onLogout = async() =>{
        const res = await axios.post("http://localhost:3000/api/logout")
        router.push('/admin/login')
    }

    const onAddPizza = async() =>{
        const data = new FormData();
        data.append("file",file)
        data.append("upload_preset","uploads")
        
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dle7urchd/image/upload",data)
            await axios.post("http://localhost:3000/api/pizza",{...newPizza,img:uploadRes.data.url})
            toast.success("Pizza Successfully Added")
            setNewPizza({title:'', prices:[0,0,0], desc:'', extraOptions:[], img:''})
            setExtraOptions({text:"",price:0})
            setShow(false)
            router.reload(window.location.pathname)
        } catch (error) {
            console.log(error)
        }
    }

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
    <>
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false}>
        <div className={styles.modalContent}>
        <Modal.Header closeButton>
            <Modal.Title>Add Pizza</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
        <div className={`${styles.loginBox} row`}>
                <div className="col-12 mb-3">
                    <label className="form-label">Title</label>
                    <input name='title' type="text" className="form-control" value={newPizza.title} onChange={(e)=>onPizzaDetailsChange(e)}/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control" onChange={(e)=> setFile(e.target.files[0])}/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Prices</label>
                    <div className='row'>
                    <div className="form-group col-md-4">
                    <label>Small ($)</label>
                    <input name='smallPrice' min={1} type="number" className="form-control" value={newPizza.prices[0]} onChange={(e)=>onPizzaDetailsChange(e)}/>
                    </div>
                    <div className="form-group col-md-4">
                    <label>Medium ($)</label>
                    <input name='mediumPrice' min={1} type="number" className="form-control" value={newPizza.prices[1]} onChange={(e)=>onPizzaDetailsChange(e)}/>
                    </div>
                    <div className="form-group col-md-4">
                    <label>Large ($)</label>
                    <input name='largePrice' min={1} type="number" className="form-control" value={newPizza.prices[2]} onChange={(e)=>onPizzaDetailsChange(e)}/>
                    </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label">Description</label>
                    <input name='desc' type="text" className="form-control" value={newPizza.desc} onChange={(e)=>onPizzaDetailsChange(e)}/>
                </div>
                <div className="col-12 mb-3">
                    <label className="form-label">Extras</label>
                    <div className='row'>
                    <div className="form-group col-md-6">
                    <label>Option</label>
                    <input name='text' type="text" className="form-control" value={extraOptions.text} onChange={(e)=>onChangeExtras(e)} />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Price ($)</label>
                    <input name='price' min={0} type="number" className="form-control" value={extraOptions.price} onChange={(e)=>onChangeExtras(e)} />
                    </div>
                    </div>
                    <button className='btn btn-primary mt-2 mb-2' onClick={onAddExtras}>Add</button>
                    {
                        newPizza.extraOptions.map((extra)=> (
                            <p className='m-0'>Extras - {extra.text} - Price - {extra.price}</p>
                        ))
                    }
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="warning" onClick={onAddPizza}>
            Add Pizza
            </Button>
        </Modal.Footer>
        </div>
    </Modal>
    
    <div className={styles.container}>
    <ToastContainer theme='dark' autoClose={2000} />
    <HeroSection text={'Admin'} />
    <div className='container mt-5'>
        <button className='btn btn-secondary mb-3' onClick={onLogout}>Logout</button>
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
                <button type='button' className={`${styles.addButton} btn`} onClick={handleShow} >Add Product</button>
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
                                    <Image src={pizza.img} width={120} height={120} alt="" className={`${styles.pizzaImg} img-fluid`} /> 
                                    </td>
                                    <td className={styles.tableRed}>{pizza._id}</td>
                                    <td className={styles.tableQty}>{pizza.title}</td>
                                    <td className={styles.tablePrice}>
                                        <div>S - ${pizza.prices[0]}</div>
                                        <div>M - ${pizza.prices[1]}</div>
                                        <div>L - ${pizza.prices[2]}</div>
                                    </td>
                                    <td className={styles.tableRed}>
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
    
  </>
  )
}

export default Index

export const getServerSideProps = async (context) =>{
    const products = await axios.get("http://localhost:3000/api/pizza");
    const orders = await axios.get('http://localhost:3000/api/orders');
    const cookie = context.req?.cookies || '';

    if(cookie.token !== process.env.TOKEN){
        return{
            redirect:{
                destination:'/admin/login',
                permanent:false,
            },
        }
    }

    return {
        props:{
            orders:orders.data,
            pizzas:products.data
        }
    }
}