import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AddWarehouseForm, {
  initialWarehouseFormState,
} from "../customForms/AddWarehouseForm";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import { setWarehousesAction } from "../../../store/actions/WarehouseActions";
import { useDispatch } from "react-redux";
import { useStateValue } from "../../../store/selectors/useStateValue";
import { warehousesData } from "../../mocks/warehouseMock";

const MyWarehouse = () => {
  const dispatch = useDispatch();
  const { warehouses } = useStateValue();

  const [addCard, setAddCard] = useState(false);
  const [addFormData, setAddFormData] = useState(initialWarehouseFormState);
  const [warehouseData, setWarehouseData] = useState(
    warehouses.warehousesState
  );

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  //Add Submit data
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    let error = false;
    let errorMsg = "";
    if (addFormData.warehouseName === "") {
      error = true;
      errorMsg = "Please fill Warehouse Name";
    } else if (addFormData.firstLine === "") {
      error = true;
      errorMsg = "Please fill first line.";
    } else if (addFormData.city === "") {
      error = true;
      errorMsg = "Please fill city";
    } else if (addFormData.county === "") {
      error = true;
      errorMsg = "Please fill county";
    } else if (addFormData.zipCode === "") {
      error = true;
      errorMsg = "Please fill zip code";
    } else if (addFormData.country === "") {
      error = true;
      errorMsg = "Please fill country";
    }
    if (!error) {
      const newWarehouse = {
        id: nanoid(),
        warehouseName: addFormData.warehouseName,
        firstLine: addFormData.firstLine,
        city: addFormData.city,
        county: addFormData.county,
        zipCode: addFormData.zipCode,
        country: addFormData.country,
      };
      const newWarehouses = [...warehouseData, newWarehouse];
      setWarehouseData(newWarehouses);
      dispatch(setWarehousesAction(newWarehouses));
      setAddCard(false);
      swal("Good job!", "Successfully Added", "success");
      addFormData.name = addFormData.productSKU = addFormData.productThumb = "";
    } else {
      swal("Oops", errorMsg, "error");
    }
  };

  return (
    <>
      <Modal className="modal fade" show={addCard} onHide={setAddCard} size="lg">
        <div className="modal-header">
          <h4 className="modal-title fs-20">Add a Warehouse</h4>
          <button
            type="button"
            className="btn-close"
            onClick={() => setAddCard(false)}
          ></button>
        </div>
        <form>
          <AddWarehouseForm
            onWarehouseNameChange={handleAddFormChange}
            onFirstLineChange={handleAddFormChange}
            onCityChange={handleAddFormChange}
            onCountyChange={handleAddFormChange}
            onZipCodeChange={handleAddFormChange}
            onCountryChange={handleAddFormChange}
            onClickSubmit={handleAddFormSubmit}
            onClickCancel={() => setAddCard(false)}
          />
        </form>
      </Modal>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items">
              <div
                onClick={() => setAddCard(true)}
                className="card contact-bx item-content"
              >
                <div className="card-body user-profile add-item">
                  <div className="media-body user-meta-info add-item-card">
                    <i class="fas fa-solid fa-plus"></i>
                    <h4 className="fs-18 font-w600 my-1">Add a Warehouse</h4>
                  </div>
                </div>
              </div>
            </div>
            {warehouseData.map((warehouse) => (
              <div
                key={warehouse.id}
                className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6 items"
              >
                <div className="card contact-bx item-content">
                  <div className="card-body user-profile">
                    <div className="media-body user-meta-info item-card">
                      <h4 className="fs-18 text-primary font-w600 my-1">
                        {warehouse.warehouseName}
                      </h4>
                      <h6>{warehouse.firstLine}</h6>
                      <h6>{warehouse.city}</h6>
                      <h6>{warehouse.county}</h6>
                      <h6>{warehouse.zipCode}</h6>
                      <h6>{warehouse.country}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWarehouse;
