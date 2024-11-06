import Head from "next/head";
import Image from "next/image";
import styles from "@/pages/components/Products.module.css";



export default function Products() {
  return (
    <>
    <main className={styles.main}>
        <div className={styles.productContainer}>
            <div className={styles.image}>
            <Image className={styles.desktopImage}
            src="/image-product-desktop.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            />
            <Image className={styles.mobileImage}
            src="/image-product-mobile.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            />
            </div>
            <div className={styles.text}>
                <h2 className={styles.headline}>Perfume</h2>
                <h2 className={styles.title}>Gabrielle Essence Eau De Parfum</h2>
                <p className={styles.description}>a floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer Creator for the House of CHANEL</p>
                <div className={styles.price}>
                    <h1 className={styles.itemPrice}>$149.99</h1> <span className={styles.discount}>$169.99</span>
                </div>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </main>
    </>
  );
}