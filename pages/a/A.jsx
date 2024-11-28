import styles from './A.module.css';

const A = ({ isOpen, onClose }) => {
  if (isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Payment Method</h2>
        <form>
          <div className={styles.field}>
            <label>Card Number</label>
            <input type="text" value="XXXX XXXX XXXX 1234" readOnly />
          </div>
          <div className={styles.field}>
            <label>Expiration</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.field}>
            <label>CVC</label>
            <input type="password" placeholder="XXX" />
          </div>
          <div className={styles.field}>
            <label>Name on Card</label>
            <input type="text" defaultValue="Mike Ross" />
          </div>
          <div className={styles.addPaymentFooter} >
          <div className={styles.actions}>
            <button type="button" className={styles.remove}>Remove</button>
            <div className={styles.rightButtons}>
            <button type="button" className={styles.cancel} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.save}>Save Changes</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default A;
