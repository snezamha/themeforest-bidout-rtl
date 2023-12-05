import Link from 'next/link';
import React from 'react';
import Select from 'react-select';
function OrderTab() {
  const orderListOptions = [
    { value: 'Show: Last 10 Order', label: 'Show: Last 10 Order' },
    { value: 'Show: Last 05 Order', label: 'Show: Last 05 Order' },
    { value: 'Show: Last 20 Order', label: 'Show: Last 20 Order' }
  ]
  const customStyle = {

    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#EEEEEE',
      padding: 0,
      '&:hover': { borderColor: '#32c36c' },
      boxShadow: state.isFocused ? null : null,

    }),
  }
  return (
    <div className="tab-pane fade" id="v-pills-order" role="tabpanel" aria-labelledby="v-pills-order-tab">
      {/* table title*/}
      <div className="table-title-area">
        <h3>Order Bidding List</h3>
        <Select placeholder="Filter Order History" valueContainer="select" options={orderListOptions} styles={customStyle} />
      </div>
      {/* table */}
      <div className="table-wrapper">
        <table className="eg-table order-table table mb-0">
          <thead>
            <tr>
              <th>Image</th>
              <th>Bidding ID</th>
              <th>Bid Amount(USD)</th>
              <th>Highest Bid</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order1.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order2.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order3.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order4.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order1.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order1.png" className="img-fluid" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$1222.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order2.png" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$6622.8955</td>
              <td data-label="Status" className="text-red">Reject</td>
              <td data-label="Action"><button className="eg-btn action-btn red"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order3.png" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$9022.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order4.png" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$9022.8955</td>
              <td data-label="Status" className="text-red">Reject</td>
              <td data-label="Action"><button className="eg-btn action-btn red"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
            <tr>
              <td data-label="Image"><img alt="image" src="assets/images/bg/order5.png" /></td>
              <td data-label="Bidding ID">Bidding_HvO253gT</td>
              <td data-label="Bid Amount(USD)">1222.8955</td>
              <td data-label="Highest Bid">$9022.8955</td>
              <td data-label="Status" className="text-green">Approved</td>
              <td data-label="Action"><button className="eg-btn action-btn green"><img alt="image" src="assets/images/icons/aiction-icon.svg" /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* pagination area */}
      <div className="table-pagination">
        <p>Showing 10 to 20 of 1 entries</p>
        <nav className="pagination-wrap">
          <ul className="pagination style-two d-flex justify-content-center gap-md-3 gap-2">
            <li className="page-item">
              <Link className="page-link" href={"#"} tabIndex={-1}>Prev</Link>
            </li>
            <li className="page-item active" aria-current="page"><Link className="page-link" href={"#"}>01</Link></li>
            <li className="page-item">
              <Link className="page-link" href={"#"}>02</Link>
            </li>
            <li className="page-item"><Link className="page-link" href={"#"}>03</Link></li>
            <li className="page-item">
              <Link className="page-link" href={"#"}>Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default OrderTab