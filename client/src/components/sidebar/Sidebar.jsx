import "./sidebar.scss";
import {
  Chat,
} from "@material-ui/icons";

export default function Siderbar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <Chat className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
    </div>
  </div>
  )
}
