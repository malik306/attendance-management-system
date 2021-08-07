import SideBar from "./sidebar.component";
import Top from "./top.component";
export default function UserDashboard() {
  return (
    <>
      <div className="userdash">
        <SideBar />
        <Top />
      </div>
    </>
  );
}
