import styles from "./Address.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useModal } from "../../modal/ModalContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAddressModal from "../../components/AddAddressModal";
import { deleteAddress, getAllAddresses } from "../../services/address";

export default function Address() {
  const { name, email } = useContext(AppContext);
  const { isModalOpen, openModal, closeModal } = useModal();
  const modalRef = useRef(null);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const result = await getAllAddresses(email);
          if(result.status === 200)
          setAddresses(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleEditClick = (addressId) => {
    setSelectedAddressId(addressId);
    openModal();
  };

  const handleDelete = async (id) => {
    try {
        const result = await deleteAddress(id);
        if (result.status === 200) {
          toast.success(result.data.message);
          setTimeout(() => {
            closeModal();
          }, [1000]);
        }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred!");
      }
    }
  };

  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="./images/backArrow.png" alt="Go Back" />
        <h1 className={styles.title}>Your Addesses</h1>
      </div>

      <div className={styles.addresses}>
        <div className={styles.cards}>
          <div className={styles.addAddress}>
            <span className={styles.cardIcon}>
              <img src="./images/plusYellow.png" alt="Add Address" onClick={() => handleEditClick()} />
            </span>
            <div className={styles.cardDetail}>
              <p>Add Address</p>
            </div>
          </div>

          {addresses.length > 0 && addresses.map((address) => (
          <div className={styles.cardAddress} key = {address._id}>
            <div className={styles.header}>
              <h3 className={styles.name}>{name}</h3>
            </div>
            <p className={styles.address}>
              {address.fullAddress}
            </p>
            <p className={styles.phone}>
              Phone Number:{" "}
              <span className={styles.phoneNumber}>{address.mobile}</span>
            </p>
            <div className={styles.actions}>
              <button className={styles.editButton} onClick={() => handleEditClick(address._id)}>Edit</button>
              <span className={styles.divider}>|</span>
              <button className={styles.removeButton} onClick={()=>handleDelete(address._id)}>Remove</button>
            </div>
          </div>
          ))}

        </div>
      </div>
    </div>
    <ToastContainer />
    {isModalOpen && (
        <div className={styles.modal} ref={modalRef}>
          <AddAddressModal addressId={selectedAddressId} />
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </>
  );
}
