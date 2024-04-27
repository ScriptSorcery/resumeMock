import { Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { routeLink } from '../../shared/shared';
import { FaCheck } from 'react-icons/fa';

import 'react-toastify/dist/ReactToastify.css';

import "./NavBar.css"
import { toast } from 'react-toastify';

interface Props {

}

const NavBar = (props: Props) => {
  const { pathname } = useLocation();

  const copyTextToClipboard = async (eMail: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(eMail);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const notify = () => {

    const eMail: string = "ali.mubashir40@gmail.com"

    copyTextToClipboard(eMail);

    return (toast.success("EMail ID Copied", {
      position: "top-center",
      icon: <FaCheck />,
      pauseOnFocusLoss: false
    }))
  }

  return (
    <Fragment>
      <div className="d-flex">
        <div className="px-4 py-2">
          <span>
            <NavLink tag={Link} to="/" className={pathname === routeLink.home ? "active" : ""} exact>Home</NavLink>
          </span>
        </div>
        <div className="px-4 py-2">
          <span>
            <NavLink tag={Link} to="/about" className={pathname === routeLink.about ? "active" : ""}>About</NavLink>
          </span>
        </div>
        <div className="px-4 py-2">
          <span>
            <NavLink tag={Link} to="/process" className={pathname === routeLink.process ? "active" : ""}>Process</NavLink>
          </span>
        </div>
        <div onClick={notify} className="email_id_container ms-auto p-2">
          <span className="email_id">ali.mubashir40@gmail.com</span>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
