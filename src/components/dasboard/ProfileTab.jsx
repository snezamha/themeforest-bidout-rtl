import React, { useState } from "react";
import Select from "react-select";
function ProfileTab() {
  const [openEye, setOpenEye] = useState(false);
  const handleEyeIcon = () => {
    if (openEye === false || openEye === 0) {
      setOpenEye(1);
    } else {
      setOpenEye(false);
    }
  };
  const countryListOptions = [
    { value: "Afghanistan", label: "Afghanistan" },
    { value: "Albania", label: "Albania" },
    { value: "Algeria", label: "Algeria" },
    { value: "Andorra", label: "Andorra" },
    { value: "Angola", label: "Angola" },
    { value: "Antigua", label: "Antigua" },
    { value: "Brunei", label: "Brunei" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Denmark", label: "Denmark" },
    { value: "Guinea", label: "Guinea" },
    { value: "Laos", label: "Laos" },
    { value: "Mexico", label: "Mexico" },
    { value: "Peru", label: "Peru" },
    { value: "Serbia", label: "Serbia" },
    { value: "Switzerland", label: "Switzerland" },
  ];
  const stateListOptions = [
    { value: "Comilla", label: "Comilla" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Bogra", label: "Bogra" },
    { value: "Pabna", label: "Pabna" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Rangpur", label: "Rangpur" },
  ];
  const cityListOptions = [
    { value: "Rangpur", label: "Rangpur" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Barisal", label: "Barisal" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Dinajpur", label: "Dinajpur" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Comilla", label: "Comilla" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Bogra", label: "Bogra" },
    { value: "Pabna", label: "Pabna" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Rangpur", label: "Rangpur" },
  ];
  const customStyle = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 51,
      width: "100%",
      maxWidth: "650px",
      // marginTop: "-5px",,
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      marginTop: "-10px",
    }),
    input: (provided) => ({
      ...provided,
      marginTop: "-5px",
    }),
  };
  return (
    <div
      className="tab-pane fade"
      id="v-pills-profile"
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      <div className="dashboard-profile">
        <div className="owner">
          <div className="image">
            <img alt="images" src="assets/images/bg/pro-pic.png" />
          </div>
          <div className="content">
            <h3>Johan Martin SR-</h3>
            <p className="para">Johan Martin SR-</p>
          </div>
        </div>
        <div className="form-wrapper">
          <form action="#">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Frist Name *</label>
                  <input type="text" placeholder="Your first name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Contact Number</label>
                  <input type="text" placeholder={+8801} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Email</label>
                  <input type="text" placeholder="Your Email" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner">
                  <label>Address</label>
                  <input type="text" name="message" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>City</label>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      padding: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#f6f6f6",
                        primary: "#32c36c",
                      },
                      zIndex: 10,
                    })}
                    placeholder="City"
                    valueContainer="select"
                    options={cityListOptions}
                    width="330px"
                    styles={customStyle}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>State</label>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      padding: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#f6f6f6",
                        primary: "#32c36c",
                      },
                      zIndex: 10,
                    })}
                    placeholder="State"
                    valueContainer="select"
                    width="330px"
                    options={stateListOptions}
                    styles={customStyle}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Zip Code</label>
                  <input type="text" placeholder="00000" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <div className="form-inner">
                  <label>Country</label>
                  <Select
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      padding: 0,
                      colors: {
                        ...theme.colors,
                        primary25: "#f6f6f6",
                        primary: "#32c36c",
                      },
                      zIndex: 10,
                    })}
                    placeholder="country"
                    valueContainer="select"
                    width="330px"
                    options={countryListOptions}
                    styles={customStyle}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner">
                  <label>Password *</label>
                  <input
                    type={openEye === 1 ? "text" : "new-password"}
                    name="new-password"
                    placeholder="Create A Password"
                  />
                  <i
                    className={
                      openEye === 1
                        ? "bi bi-eye-slash bi-eye"
                        : "bi bi-eye-slash"
                    }
                    id="togglePassword"
                    onClick={handleEyeIcon}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-inner mb-0">
                  <label>Confirm Password *</label>
                  <input
                    type={openEye === 1 ? "text" : "current-password"}
                    name="password"
                    placeholder="Confor Password"
                  />
                  <i
                    className={
                      openEye === 1
                        ? "bi bi-eye-slash bi-eye"
                        : "bi bi-eye-slash"
                    }
                    id="togglePassword"
                    onClick={handleEyeIcon}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="button-group">
                  <button type="submit" className="eg-btn profile-btn">
                    Update Profile
                  </button>
                  <button className="eg-btn cancel-btn">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileTab;
