import styles from '../styles/components/HeroSection.module.css'

const HeroSection = ({text}) => {
  return (
    <div className={styles.section}>
        <div className='container'>
            <h1 className={styles.title}>{text}</h1>
        </div>
    </div>
  )
}

export default HeroSection