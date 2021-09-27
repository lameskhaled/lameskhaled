import image5 from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/search1.png";
import image6 from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/search2.png";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import image1 from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/image1.png";
import image2 from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/image2.png";
import image3 from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/image3.png";
import orange from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/orange.png";
import green from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/green.png";
import userimage from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/order.png";
import box from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/image10.png";
import order from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/Box.png";
import setting from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/setting.png";
import Logout from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/logout.png";
import editor from "/Users/lameskhaled/Documents/MP/dojo-blog/src/image/editor.png";
import MyContent from "./New_Project";
import OrderPage from "./Order.js";
import { Link } from "react-router-dom";

console.log(image1);
console.log(image2);
console.log(image3);
console.log(orange);
console.log(green);
console.log(userimage);
console.log(box);
console.log(order);
console.log(setting);
console.log(image5);
console.log(image6);
console.log(editor);

const Box = () => {
  const [forms, setform] = useState([
    {
      disabled: true,
      id: 1,
      Name: "Mina Sami",
      Location: "Cairo",
      Contact_Numbers: "01155615229, 0111666321",
      Address: "lorem ipsum, dolores",
      Email: "Mina.Sami@hotmail.com",
      Description: "Meetings",
    },
  ]);
  const routes = {
    "/order": () => <OrderPage />,
    "/New_Project": () => <MyContent />,
  };

  const [disabled, setIsDisabled] = useState(false);
  const [isInputActive, setIsInputActive] = useState(false);
  const [Name, setName] = useState(forms[0].Name);
  const [Location, setLocation] = useState(forms[0].Location);
  const [Contact_Numbers, setContact_Numbers] = useState(
    forms[0].Contact_Numbers
  );
  const [Address, setAddress] = useState(forms[0].Address);
  const [Email, setEmail] = useState(forms[0].Email);
  const [Description, setDescription] = useState(forms[0].Description);

  const edit = (event) => {
    setName(event.target.Name);
  };
  const handleClick = () => {
    setIsDisabled(!disabled);
    console.log(setIsDisabled(!disabled));
  };
  const handleSubmit = (event) => {
    setIsDisabled(!disabled);
    event.preventDefault();
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlelocation = (event) => {
    setLocation(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handlecontact = (event) => {
    setContact_Numbers(event.target.value);
  };
  useEffect(() => {
    // Update the document title using the browser API
    console.log(forms);
  });
  return (
    <nav>
      <div className="SlideNavBar">
        <nav className="SlideNavBar">
          <div className="logo">xo.</div>
          <div className="logoimage">
            <img src={image3} />
          </div>
          <p className="text1">Ahmed Reda</p>
          <p className="text2">#1253724</p>

          <nav className="slideareaa">
            <a className="firstSlidebar" href=".">
              DashBoards
            </a>
            <div className="firstimage">
              <img src={image1} />
            </div>
            <Link to="/" className="secoundslidebar1">
              <a className="secoundslidebar1">Requests</a>
            </Link>
            <div className="secondimage1">
              <img src={image2} />
            </div>

            <button className="tagged1" href="re">
              Users
            </button>
            <div className="ConfirmedImage11">
              <img src={userimage} />
            </div>
            <Link to="/Box">
              <button className="Box1" href="re">
                Boxes
              </button>
            </Link>
            <div className="ConfirmedImage21">
              <img src={box} />
            </div>
            <Link to="/Order">
              <button className="Order1">Orders</button>
            </Link>
            <div className="ConfirmedImage31">
              <img src={order} />
            </div>

            <button className="Setting12">Setting</button>
            <div className="ConfirmedImage412">
              <img src={setting} />
            </div>
            <button className="Logout12">Logout</button>
            <div className="ConfirmedImage512">
              <img src={Logout} />
            </div>
            <hr className="o"></hr>
          </nav>
        </nav>
      </div>
      <div className="searchbararea">
        <div className="searchbarimage">
          <img src={image5} />
        </div>
        <p className="searchbar">
          {" "}
          <input type="search" placeholder="Search for a contact" />{" "}
        </p>
        <div className="searchbarimage2">
          <img src={image6} />
        </div>
      </div>
      <p className="Request">Requests</p>
      {forms.map((form) => (
        <form className="formco" onSubmit={handleSubmit}>
          <div className="content1">
            <label className="labelname" for="name">
              Name
            </label>
            <input
              type="text"
              id="nameform"
              name="name"
              value={Name}
              onChange={handleName}
              disabled={disabled}
            />

            <label className="labellocation" for="Location">
              Location
            </label>

            <input
              type="text"
              id="idLocation"
              name="Location"
              value={Location}
              onChange={handlelocation}
              disabled={disabled}
            />
          </div>
          {/* <div> */}
          <label className="labelnumber" for="Contact">
            Contact Numbers
          </label>

          <input
            type="text"
            id="Contactnumber"
            name="Contact"
            value={Contact_Numbers}
            onChange={handlecontact}
            disabled={disabled}
          />

          <label className="labelAddress" for="Address">
            Address
          </label>

          <input
            type="text"
            id="numberAddress"
            name="Address"
            value={Address}
            onChange={handleAddress}
            disabled={disabled}
          />

          <label className="labelEmail" for="Email">
            Email
          </label>

          <input
            type="text"
            id="Emailid"
            name="Email"
            value={Email}
            onChange={handleEmail}
            disabled={disabled}
          />
          <label className="labelDescription" for="Description">
            Description
          </label>

          <input
            type="text"
            id="idDescription"
            name="Label"
            value={Description}
            onChange={handleDescription}
            disabled={disabled}
          />

          <div className="editor">
            <button type="submit" onChange={handleClick}>
              <img src={editor} />
            </button>
          </div>
        </form>
      ))}
    </nav>
  );
};

export default Box;
