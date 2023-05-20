import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, ready, setUser } = useContext(UserContext);

  let { subpage } = useParams(); // url me jo humny subpage ka prams banaya tha usko grap krny k liye
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading ...";
  }

  if (ready && !user && !redirect) {
    // yaha ready likhna faidah nhi because oper check ho chuka agar ready na hota to return ho chuka hota. ready h tabhi to niche aaya
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;
