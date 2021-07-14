import "./Envelope.css";
const toPerson = {
  name: "Rakib Jobless",
  street: "Post Office Road",
  address: "Pabna District",
};
const fromPerson = {
  name: "Zakir Hossain",
  street: "123 Fake St.",
  address: "main town,habiganj",
};

const AddressLabel = ({ info }) => {
  return (
    <div>
      <h2>{info.name}</h2>
      <p>{info.street}</p>
      <p>{info.address}</p>
    </div>
  );
};
const Envelope = () => {
  return (
    <div className="envelop">
      <div className="sender">
        <div>
          <AddressLabel info={fromPerson} />
        </div>
        <div>
          <div className="stamp">
            <span>STAMP</span>
          </div>
        </div>
      </div>

      <div className="receiver">
        <AddressLabel info={toPerson} />
      </div>
    </div>
  );
};
export default Envelope;
