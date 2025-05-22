import Nav from "../Nav/Nav"

export function Header () {
    return(
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="#" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">Beeedu</h1>
        </a>

        <Nav></Nav>

      </div>
  </header>
    )
}
