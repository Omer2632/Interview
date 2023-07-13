import logo from "../helper/logo192.png";

const Header = () => {
  return (
    <div className="container d-flex p-5 align-items-center justify-content-center">
      <div>
        <img
          style={({ width: "100px" }, { height: "100px" })}
          src={logo}
          alt=""
        />
      </div>
      <h1 className="text-center display-5 text-white mx-4">
        REACT QUESTION AND ANSWER
      </h1>
    </div>
  );
};

export default Header;
