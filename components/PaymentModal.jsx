import { useContext, useEffect, useState } from "react";
import { useModal } from "../modal/ModalContext";
import styles from "./PaymentModal.module.css";
import {
  deletePayment,
  getPaymentById,
  updatePayment,
} from "../services/payment";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentModal = ({ paymentId }) => {
  const { closeModal } = useModal();
  const { email } = useContext(AppContext);

  const [formData, setFormData] = useState({
    id: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    cardNumber: false,
    expiration: false,
    cvc: false,
    name: false,
    email: false,
  });

  useEffect(() => {
    if (email) {
      setFormData((prevData) => ({ ...prevData, email }));
    }
  }, [email]);
  const errorMessages = {
    cardNumber: {
      message: "Card Number is required and should be only digits!",
      isValid:
        formData?.cardNumber?.length > 0 && /^\d+$/.test(formData?.cardNumber),
      onError: () => {
        setError((error) => ({ ...error, cardNumber: true }));
      },
    },
    cvc: {
      message: "Card CVC is required!",
      isValid: formData?.cvc?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, cvc: true }));
      },
    },
    expiration: {
      message: "Card Expiration is required!",
      isValid: formData?.expiration?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, expiration: true }));
      },
    },
    name: {
      message: "Card Name is required!",
      isValid: formData?.name?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (paymentId) {
          const result = await getPaymentById(paymentId);
          setFormData({
            id: result.data._id,
            cardNumber: result.data.cardNumber,
            expiration: result.data.expiration,
            cvc: result.data.cvc,
            name: result.data.name,
            email: result.data.email ? result.data.email : email,
          });
        }
      } catch (error) {
        console.error("Failed to fetch payment details:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
  };

  const validateForm = () => {
    let valid = true;
    Object.keys(errorMessages).forEach((field) => {
      if (!errorMessages[field].isValid) {
        errorMessages[field].onError();
        valid = false;
      }
    });
    return valid;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await updatePayment(formData);
      if (res.status === 201 || res.status === 200) {
        toast.success(res.data.message);
        setTimeout(() => {
          closeModal();
        }, [1000]);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError((prevError) => ({
          ...prevError,
          updateError: error.response.data.message,
        }));
        toast.error(error.response.data.message);
      } else {
        setError((prevError) => ({
          ...prevError,
          updateError: "An unexpected error occurred!",
        }));
        toast.error("An unexpected error occurred!");
      }
    }
  }

  const handleDelete = async () => {
    try {
      if (paymentId) {
        const result = await deletePayment(paymentId);
        if (result.status === 200) {
          toast.success(result.data.message);
          setTimeout(() => {
            closeModal();
          }, [1000]);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError((prevError) => ({
          ...prevError,
          updateError: error.response.data.message,
        }));
        toast.error(error.response.data.message);
      } else {
        setError((prevError) => ({
          ...prevError,
          updateError: "An unexpected error occurred!",
        }));
        toast.error("An unexpected error occurred!");
      }
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2>{paymentId ? "Edit" : "Add"} Payment Method</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" value={email} name="email" />
            <div className={styles.field}>
              <label>Card Number</label>
              <input
                type="text"
                value={formData.cardNumber}
                onChange={handleInputChange}
                name="cardNumber"
                placeholder="XXXX XXXX XXXX 1234"
              />
            </div>
            <span className={styles.errorMsge}>
              {error.cardNumber && errorMessages.cardNumber.message}
            </span>
            <div className={styles.field}>
              <label>Expiration</label>
              <input
                type="text"
                name="expiration"
                placeholder="MM/YY"
                value={formData.expiration}
                onChange={handleInputChange}
              />
            </div>
            <span className={styles.errorMsge}>
              {error.expiration && errorMessages.expiration.message}
            </span>
            <div className={styles.field}>
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                placeholder="XXX"
                value={formData.cvc}
                onChange={handleInputChange}
              />
            </div>
            <span className={styles.errorMsge}>
              {error.cvc && errorMessages.cvc.message}
            </span>
            <div className={styles.field}>
              <label>Name on Card</label>
              <input
                type="text"
                name="name"
                placeholder="Mike Ross"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <span className={styles.errorMsge}>
              {error.name && errorMessages.name.message}
            </span>
            <div className={styles.addPaymentFooter}>
              <div className={styles.actions}>
              {paymentId &&<button
                  type="button"
                  className={styles.remove}
                  onClick={handleDelete}
                >
                  Remove
                </button>}
                <div className={styles.rightButtons}>
                  <button
                    type="button"
                    className={styles.cancel}
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.save}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default PaymentModal;
