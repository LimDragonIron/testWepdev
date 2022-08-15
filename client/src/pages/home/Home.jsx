import HomeTopbar  from "../../components/homeTopbar/HomeTopbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
    <HomeTopbar/>
    <div className="homeContainer">
        <Sidebar />
      </div>
  </>
  )
}
