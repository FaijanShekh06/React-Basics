import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Api from "./components/Api";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { DataContext } from "./Context/UserContext";

const App = () => {
  const data = React.useContext(DataContext);
  console.log(data);
  const contacts = [
    {
      name: "Beyonce",
      imgURL:
        "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      phone: "+123 456 789",
      email: "b@beyonce.com",
    },
    {
      name: "Jack Bauer",
      imgURL:
        "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      phone: "+987 654 321",
      email: "jack@nowhere.com",
    },
    {
      name: "Chuck Norris",
      imgURL:
        "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      phone: "+918 372 574",
      email: "gmail@chucknorris.com",
    },
  ];
  const users = [
    {
      name: "Faizan Sheikh",
      city: "Ahmedabad",
      age: 24,
      profession: "Web Developer",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Ayesha Khan",
      city: "Mumbai",
      age: 27,
      profession: "Graphic Designer",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Rohan Mehta",
      city: "Delhi",
      age: 29,
      profession: "Software Engineer",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Sneha Patel",
      city: "Surat",
      age: 22,
      profession: "UI/UX Designer",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
    {
      name: "Arjun Verma",
      city: "Bengaluru",
      age: 31,
      profession: "Data Scientist",
      profile_image:
        "https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg",
    },
  ];

  return (
    <>
      <Header />
      {/* React Router DOM */}
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      <h1>This is App.js {data}</h1>
      <Navbar />
      <div className="p-10">
        {users.map(function (elem, indx) {
          return (
            <Card
              key={indx}
              user={elem.name}
              city={elem.city}
              age={elem.age}
              photue={elem.profile_image}
              profession={elem.profession}
            />
          );
        })}
      </div>
      <div>
        <h1 className="heading text-amber-50 text-4xl text-center font-bold my-8">
          My Contacts
        </h1>
        {contacts.map(function (elem, indx) {
          return (
            <Contact
              key={indx}
              name={elem.name}
              imgURL={elem.imgURL}
              phone={elem.phone}
              email={elem.email}
            />
          );
        })}
      </div>
      <Api />
      <Footer />
    </>
  );
};

export default App;
