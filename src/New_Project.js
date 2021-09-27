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
import { Link } from "react-router-dom";
import Box from "./Box";

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

const MyContent = () => {
  const [blogs, setblogs] = useState([
    {
      checked: false,
      id: 1,
      code: "#6293620",
      Name: "Lamees Khaled",
      Status: "Pending confirmation",
      Supplier: "Souq",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 2,
      code: "#6293621",
      Name: "Mohamed Salah",
      Status: "Confirmed",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 3,
      code: "#6293622",
      Name: "Yousef Khaled",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 4,
      code: "#6293623",
      Name: "Maryam Khaled",
      Status: "Confirmed",
      Supplier: "Apple",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 5,
      code: "#6293624",
      Name: "Lamees Khaled",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 6,
      code: "#6293625",
      Name: "Maryam Khaled",
      Status: "Confirmed",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 7,
      code: "#6393626",
      Name: "Yousef Khaled",
      Status: "Confirmed",
      Supplier: "Souq",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 8,
      code: "#6393627",
      Name: "Eslam Fahmy",
      Status: "Confirmed",
      Supplier: "Apple",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 9,
      code: "#6393628",
      Name: "Adel Emam",
      Status: "Pending confirmation",
      Supplier: "Souq",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 10,
      code: "#6393629",
      Name: "Mohamed Nabil",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 11,
      code: "#6393631",
      Name: "Ashraf Wagdy",
      Status: "Confirmed",
      Supplier: "Souq",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 12,
      code: "#6393632",
      Name: "Lamees Khaled",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 13,
      code: "#6393633",
      Name: "Lamees Khaled",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
    {
      checked: false,
      id: 14,
      code: "#6393634",
      Name: "Maryam Khaled",
      Status: "Pending confirmation",
      Supplier: "Amazon",
      Date: "Dec 30, 1:30pm, 2020",
    },
  ]);

  const [selected, setSelected] = useState([]);

  function onChange(event, item) {
    if (event.target.checked) {
      setSelected([...selected, item]);
    } else {
      setSelected((prev) =>
        prev.filter((currItem) => currItem.code !== item.code)
      );
    }
  }

  const [Name, setName] = useState("");

  const [foundUsers, setFoundUsers] = useState(blogs);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = blogs.filter((blog) => {
        return blog.Name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(blogs);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  const [code, setcode] = useState("");
  const filtercode = () => {
    const value = 20;
    const results = blogs.filter((blog) => {
      return blog.code.endsWith(value);
      // Use the toLowerCase() method to make it case-insensitive
    });
    setFoundUsers(results);
  };

  const [Status, setstatus] = useState("");

  const filterStatus = () => {
    const results = blogs.filter((blog) => {
      return blog.Status.toLowerCase().startsWith("Pending".toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });

    setFoundUsers(results);
  };

  const filterStatus2 = () => {
    const results = blogs.filter((blog) => {
      return blog.Status.toLowerCase().startsWith("Confirmed".toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });

    setFoundUsers(results);
  };
  const [Supplier, Setsupplier] = useState([]);

  const handlechange = (event) => {
    const keyword = event.target.value;
    if (keyword == "Supplier") {
      const results = setblogs((blogs) =>
        [...blogs].sort((a, b) => {
          if (a.Supplier < b.Supplier) {
            return -1;
          }

          if (a.Supplier > b.Supplier) {
            return 1;
          }

          return 0;
        })
      );

      //setFoundUsers(results);
    }
    if (keyword == "Name") {
      const results = setblogs((blogs) =>
        [...blogs].sort((a, b) => {
          if (a.Name < b.Name) {
            return -1;
          }

          if (a.Name > b.Name) {
            return 1;
          }

          return 0;
        })
      );

      // setFoundUsers(results);
    }
    setFoundUsers(blogs);
  };
  useEffect(() => {
    // Update the document title using the browser API
    console.log(blogs);
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

            <Link to="/" className="secoundslidebar">
              <a className="secoundslidebar">Requests</a>
            </Link>
            <div className="secondimage">
              <img src={image2} />
            </div>
            <nav className="hide">
              <a className="pending" onClick={filterStatus}>
                Pending
              </a>
              <div className="Pendingimage">
                <img src={orange} />
              </div>

              <a className="Confirmed" onClick={filterStatus2}>
                Confirmed
              </a>
              <div className="ConfirmedImage">
                <img src={green} />
              </div>
              <Link to="/" className="AllRequest">
                <button className="AllRequest" onClick={filter}>
                  All Request
                </button>
              </Link>
            </nav>
            <nav className="down">
              <button className="tagged" onClick={filterStatus2}>
                Users
              </button>
              <div className="ConfirmedImage13">
                <img src={userimage} />
              </div>
              <Link to="/Box">
                <button className="Box">Boxes</button>
              </Link>
              <div className="ConfirmedImage2">
                <img src={box} />
              </div>
              <Link to="/Order">
                <button className="Order">Orders</button>
              </Link>
              <div className="ConfirmedImage3">
                <img src={order} />
              </div>
            </nav>
            <button className="Setting" onClick={filterStatus2}>
              Setting
            </button>
            <div className="ConfirmedImage4">
              <img src={setting} />
            </div>
            <button className="Logout" onClick={filterStatus2}>
              Logout
            </button>
            <div className="ConfirmedImage5">
              <img src={Logout} />
            </div>
            <hr></hr>
          </nav>
        </nav>
      </div>
      <div className="searchbararea">
        <div className="searchbarimage">
          <img src={image5} />
        </div>
        <p className="searchbar">
          {" "}
          <input
            type="search"
            value={Name}
            onChange={filter}
            placeholder="Search for a contact"
          />{" "}
        </p>
        <div className="searchbarimage2">
          <img src={image6} />
        </div>
      </div>
      <p className="Request">Requests</p>
      <p className=" heading ">Sort by:</p>
      <select className="sort" onChange={handlechange}>
        <option value="Supplier">Name A-Z</option>
        <option value="Name">Supplier A-Z</option>
      </select>
      <p className="heading1">Filter:</p>

      <select className="filterheader" onClick={filtercode}>
        <option value="Code 20-25">Code 20-25</option>
      </select>

      <table>
        <div className="content1">
          <tr className="firstrow">
            <th className="different">
              <input type="checkbox" />
              <p className="counter">
                {selected.length > 0 ? selected.length : null}
              </p>
            </th>
            <th className="same">ID number</th>
            <th className="same">Name</th>
            <th className="same">Status</th>
            <th className="same">Supplier</th>
            <th className="same">Date</th>
          </tr>
        </div>
      </table>
      {foundUsers && foundUsers.length > 0 ? (
        foundUsers.map((blog, i) => (
          <div className="content2" key={i}>
            <div className="secrow">
              <div className="different" key={blog.id}>
                <input
                  type="checkbox"
                  onChange={(event) => onChange(event, blog)}
                />
                <div className="mark">L</div>
              </div>
              <div className="B1">{blog.code}</div>
              <div className="B2">{blog.Name}</div>
              <div className="B3">{blog.Status}</div>
              <div className="B4">{blog.Supplier}</div>
              <div className="B5">{blog.Date}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="NO">No results found!</div>
      )}
    </nav>
  );
};

export default MyContent;
