import { useContext, useEffect, useState } from "react";
import { useModal } from "../modal/ModalContext";
import styles from "./AddAddressModal.module.css";
import { AppContext } from "../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAddressById, updateAddress } from "../services/address";

const AddAddressModal = ({ addressId }) => {
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  const { closeModal } = useModal();
  const { email } = useContext(AppContext);

  const [formData, setFormData] = useState({
    id: "",
    state: "",
    city: "",
    pincode: "",
    mobile: "",
    fullAddress: "",
    email: "",
  });
  const [error, setError] = useState({
    state: false,
    city: false,
    pincode: false,
    mobile: false,
    fullAddress: false,
    email: false,
  });

  useEffect(() => {
    if (email) {
      setFormData((prevData) => ({ ...prevData, email }));
    }
  }, [email]);
  const errorMessages = {
    state: {
      message: "State is required!",
      isValid: formData?.state?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, state: true }));
      },
    },
    city: {
      message: "City is required!",
      isValid: formData?.city?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, city: true }));
      },
    },
    pincode: {
      message: "Pincode is required and should be only digits!",
      isValid: formData?.pincode?.length > 0 && /^\d+$/.test(formData?.pincode),
      onError: () => {
        setError((error) => ({ ...error, pincode: true }));
      },
    },
    mobile: {
      message: "Mobile Number is required and should be only digits!",
      isValid: formData?.mobile?.length > 0 && /^\d+$/.test(formData?.mobile),
      onError: () => {
        setError((error) => ({ ...error, mobile: true }));
      },
    },
    fullAddress: {
      message: "Full Address is required!",
      isValid: formData?.fullAddress?.length > 0,
      onError: () => {
        setError((error) => ({ ...error, fullAddress: true }));
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (addressId) {
          const result = await getAddressById(addressId);
          setFormData({
            id: result.data._id,
            state: result.data.state,
            city: result.data.city,
            pincode: result.data.pincode,
            mobile: result.data.mobile,
            fullAddress: result.data.fullAddress,
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
      const res = await updateAddress(formData);
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

  return (
    <>
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalHeader}>
            <img src="./images/locationWhite.png" alt="Address" />
            <h2 className={styles.modalTitle}>{addressId ? "Edit" : "Add"} Address</h2>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {error &&
              Object.keys(errorMessages).map((key) => {
                const errorMessage = errorMessages[key];
                if (!errorMessage.isValid && error[key]) {
                  return (
                    <span key={key} className={styles.errorMsge}>
                      {errorMessage.message}
                    </span>
                  );
                }
                return null;
              })}

            <input type="hidden" value={email} name="email" />
            <div className={styles.row}>
              <select
                className={styles.input}
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                style={error.state ? { borderColor: "red" } : {}}
              >
                <option value="" disabled>
                  Select State
                </option>
                {indianStates.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className={styles.input}
                placeholder="City/District"
                value={formData.city}
                onChange={handleInputChange}
                name="city"
                style={error.city ? { borderColor: "red" } : {}}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Pin Code"
                value={formData.pincode}
                onChange={handleInputChange}
                name="pincode"
                style={error.pincode ? { borderColor: "red" } : {}}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Phone Number"
                value={formData.mobile}
                onChange={handleInputChange}
                name="mobile"
                style={error.mobile ? { borderColor: "red" } : {}}
              />
            </div>
            <textarea
              className={styles.textarea}
              placeholder="Enter full address"
              rows="4"
              value={formData.fullAddress}
              onChange={handleInputChange}
              name="fullAddress"
              style={error.fullAddress ? { borderColor: "red" } : {}}
            ></textarea>
            <div className={styles.footer}>
              <button type="submit" className={styles.saveButton}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddAddressModal;
