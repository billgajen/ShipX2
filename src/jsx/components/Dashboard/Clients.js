import React, { useState } from "react";
import ProfileCard from "../molecules/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../store/selectors/useStateValue";
import { useDispatch } from "react-redux";
import { setSelectedClientIdAction } from "../../../store/actions/clientActions";

const Clients = () => {
	const { clients } = useStateValue();
  const dispatch = useDispatch();

  const [clientsData, ] = useState(clients.clientsState);

  const handleSelectClient = (id) => {
    const newClientData = [...clientsData];
    const selectedClient = newClientData.find(
      (client) => client.id === id
    );
    dispatch(setSelectedClientIdAction(selectedClient.id));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="input-group contacts-search mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
          <span className="input-group-text">
            <Link to={"#"}>
              <i className="flaticon-381-search-2"></i>
            </Link>
          </span>
        </div>
        <div className="mb-4">
          <Link to={"#"} className="btn btn-primary btn-rounded fs-18">
            + Add Client
          </Link>
        </div>
      </div>
      <div className="row">
        {clientsData.map((client) => {
          return (
            <ProfileCard
              key={client.id}
              profileName={client.name}
              profileType="Client"
              profileImage={client.image}
              profileLocation={client.location}
              profileEmail={client.email}
              profilePhone={client.phoneNumber}
              profileProducts={client.products}
              link1="#"
              link2={`/client-profile/${client.id}`}
              onClick2={() => handleSelectClient(client.id)}
            />
          );
        })}
      </div>
    </>
  );
};
export default Clients;
