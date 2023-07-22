import styles from "./image.module.css";

export default function Image({ src, caption }: { src: string; caption?: string }) {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt={caption} className={styles.image} />
      {caption &&
        <p className={styles.caption}>{caption}</p>
      }
    </div>
  );
}
