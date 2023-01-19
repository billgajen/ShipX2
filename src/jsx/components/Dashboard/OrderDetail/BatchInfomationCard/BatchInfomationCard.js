import React from "react";

const BatchInformationCard = ({ onClickUpdate, info }) => {
  const batchInfo = info
    ? Object.entries(info)
        .map(([key, value]) => {
          const formattedKey = key
            .replace(/^[a-z]/, (char) => char.toUpperCase())
            .replace(/([A-Z])/g, " $1");
          return { name: formattedKey, value: value };
        })
        .filter((batch) => batch.value)
    : null;

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <div className="text-black card-title h5">Batch Information</div>
          </div>
          <ul className="list-group list-group-flush">
            {batchInfo &&
              batchInfo.map((item) => (
                <li
                  key={item.name}
                  className="list-group-item d-flex justify-content-between"
                >
                  <span className="mb-0">{item.name}</span>{" "}
                  <strong className="text-muted">{item.value}</strong>
                </li>
              ))}
          </ul>
          <div className="card-footer text-center border-0 mt-0">
            <button
              type="button"
              class="me-2 btn btn-primary btn-rounded"
              onClick={onClickUpdate}
            >
              <span class="btn-icon-start text-primary">
                <i className="fas fa-edit"></i>
              </span>
              Update Batch Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchInformationCard;
