import styles from '../CSS/footer/footer.module.css';

function Footer(props) {
    return (
        <footer className={styles.container + ' flex'}>
            <div className={styles.text_block}>
                <span className={styles.text}>
                © TEST, 1022–2022
                </span>
            </div>
        </footer>
    )
}

export default Footer