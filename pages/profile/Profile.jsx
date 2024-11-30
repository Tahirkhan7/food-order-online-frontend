import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { myDetails, updateUser } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Profile.module.css";
import { useModal } from "../../modal/ModalContext";
import PaymentModal from "../../components/PaymentModal";
import { getAllPayments } from "../../services/payment";
useModal;

export default function Profile() {
  const { name, email, logout } = useContext(AppContext);
  const [edit, isEdit] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal();
  const modalRef = useRef(null);
  const [payments, setPayments] = useState([]);
  const [selectedPaymentId, setSelectedPaymentId] = useState(null);

  const handleEditToggle = () => isEdit(!edit);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    updateError: false,
  });

  const errorMessages = {
    name: {
      message: "Name is required!",
      isValid: formData.name.length > 0,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
    email: {
      message: "Email is required and should be a valid!",
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const result = await myDetails(email);
          const paymentResult = await getAllPayments(email);
          setFormData({
            id: result.data._id,
            name: result.data.name,
            email: result.data.email,
            gender: result.data.gender ? result.data.gender : "male",
            country: result.data.country ? result.data.country : "India",
          });

          setPayments(paymentResult ? paymentResult.data : []);
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
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
      const res = await updateUser(formData);
      if (res.status == 200) {
        handleEditToggle();
        toast.success(res.data.message);
        setTimeout(() => {
          logout();
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

  const handleEditClick = (paymentId) => {
    setSelectedPaymentId(paymentId);
    openModal();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.backButton}>&larr;</button>
          <h1 className={styles.title}>My Profile</h1>
        </div>

        <div className={styles.profileSection}>
          <img
            src="./images/profile.png"
            alt="Profile"
            className={styles.avatar}
          />
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{name}</h2>
            {!edit ? (
              <button onClick={handleEditToggle} className={styles.editButton}>
                Edit
              </button>
            ) : (
              <button onClick={handleSubmit} className={styles.editButton}>
                Save
              </button>
            )}
          </div>
        </div>

        <form>
          <div className={styles.detailsSection}>
            <div className={styles.detailItem}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <span className={styles.errorMsge}>
                {error.name && errorMessages.name.message}
              </span>
            </div>
            <div className={styles.detailItem}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Update Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className={styles.errorMsge}>
                {error.email && errorMessages.email.message}
              </span>
            </div>
            <div className={styles.detailItem}>
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                placeholder="Male"
                value={formData.gender}
                onChange={handleInputChange}
              />
              <span className={styles.errorMsge}>
                {error.gender && errorMessages.gender.message}
              </span>
            </div>
            <div className={styles.detailItem}>
              <label>Country</label>
              <input
                type="text"
                name="country"
                placeholder="India"
                value={formData.country}
                onChange={handleInputChange}
              />
              <span className={styles.errorMsge}>
                {error.country && errorMessages.country.message}
              </span>
            </div>
          </div>
        </form>
        <div className={styles.end}></div>
        <div className={styles.paymentMethods}>
          <h3>Saved Payment Methods</h3>
          <div className={styles.cards}>
            {payments.length > 0 && payments.map((payment) => (
              <div className={styles.card} key={payment._id}>
                <span className={styles.cardIcon}>
                  <img src="./images/creditCard.png" alt="Credit Card" />
                </span>
                <div className={styles.cardDetail}>
                  <p>{payment.cardNumber}</p>
                  <span className={styles.cardType}>{payment.name}</span>
                </div>
                <button className={styles.editIcon}>
                  <img
                    src="./images/pencil.png"
                    alt="Edit"
                    onClick={() => handleEditClick(payment._id)}
                  />
                </button>
              </div>
            ))}
            <div className={styles.card}>
              <span className={styles.cardIcon}>
                <img
                  src="./images/plusYellow.png"
                  alt="Add Payment"
                  onClick={() => handleEditClick()}
                />
              </span>
              <div className={styles.cardDetail}>
                <p>Add New Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      {isModalOpen && (
        <div className={styles.modal} ref={modalRef}>
          <PaymentModal paymentId={selectedPaymentId} />
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </>
  );
}
