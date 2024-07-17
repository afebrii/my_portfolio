import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="mb-4 border-b border-neutral-900 pb-200">
      <h1 className="my-10 text-4xl text-center">Get in Touch</h1>
      <div className="tracking-tighter text-center">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contacts;
