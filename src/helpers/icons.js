import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faFileDownload,
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
      faTrash,
      faSignOutAlt,
      faEdit,
      faSpinner,
      faPlusCircle,
      faPhone,
      faEnvelope,
      faMapMarkedAlt,
      faLock,
      faFileDownload,
      fab
    );
};

export default Icons;
