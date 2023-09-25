const Header = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "1", fontWeight: "bold" }}>Hi, Ishita 👋</div>
      <div>
        <img
          style={{ width: "32px", borderRadius: "50%" }}
          src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
        />
      </div>
    </div>
  );
};

export default Header;
