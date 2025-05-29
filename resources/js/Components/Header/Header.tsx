import { useState, useRef } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Nav from "../Nav/Nav";

export function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleToggle = () => {
        setIsMobileNavOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        if (isMobileNavOpen) {
            setIsMobileNavOpen(false);
        }
    };
    
    type AuthProps = {
        user?: any;
    };

    const { auth } = usePage().props as { auth?: AuthProps };
    const user = auth?.user;


    return (
        <header
            id="header"
            className={`header d-flex align-items-center sticky-top ${
                isMobileNavOpen ? "mobile-nav-active" : ""
            }`}
        >
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <a href="#" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">Beeedu</h1>
                </a>

                <i
                    className={`mobile-nav-toggle bi ${
                        isMobileNavOpen ? "bi-x" : "bi-list"
                    } d-xl-none`}
                    onClick={handleToggle}
                    style={{ cursor: "pointer" }}
                ></i>

                <div
                    id="navbar"
                    ref={navbarRef}
                    className={`navbar ${
                        isMobileNavOpen ? "navbar-mobile" : ""
                    }`}
                >
                    <Nav onLinkClick={handleLinkClick} />
                </div>
                { (user && (
                    <button
                        onClick={() => router.post("/logout")}
                        className="btn btn-outline-danger ms-3"
                    >
                        Sair
                    </button>
                )) || (
                    <a className="btn-getstarted" href="#" onClick={() => router.get("/login")}>
                        Entrar
                    </a>
                )}
            </div>
        </header>
    );
}
