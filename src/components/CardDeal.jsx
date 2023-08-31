import { card } from "../assets";
import styles, {layout} from '../styles';
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal<br className="sm:block hidden"/> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Discovering a superior credit card deal has never been simpler. With our user-friendly platform, you can quickly and effortlessly explore a range of options that match your financial goals. Our streamlined process guides you through just a few easy steps, ensuring you find a card deal that aligns perfectly with your needs.</p>
      <Button styles='mt-10'  />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] " />
    </div>
    
  </section>
)

export default CardDeal