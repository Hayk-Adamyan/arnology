function Nav() {
  function menClick() {
    document.getElementById("menu") &&
      document.getElementById("menu").classList.toggle("active");
  }
  return (
    <div>
      <nav role="navigation-mob">
        <div id="menuToggle" onClick={() => menClick()}>
          <input type="checkbox"/>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
