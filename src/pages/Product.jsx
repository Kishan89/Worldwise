import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About GlobeSense.</h2>
          <p>
            GlobeSense is your ultimate companion for exploring the globe with
            confidence. Whether you're planning your next adventure or analyzing
            travel trends, our platform offers real-time location data,
            personalized insights, and a seamless user experience to keep you
            informed — wherever you go.
          </p>
          <p>
            Built for curious travellers, digital nomads, and data enthusiasts,
            GlobeSense connects places, people, and stories in one interactive
            ecosystem. Discover smarter, travel further, and stay ahead with
            GlobeSense.
          </p>
        </div>
      </section>
    </main>
  );
}
