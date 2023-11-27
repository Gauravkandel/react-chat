import AuthUser from "./AuthUser";
const Dashboard = () => {
    const { user } = AuthUser();
    return (
        <div className="container">
            <p className="mt-5">Name:<b>{user.name}</b></p><br />
            <p className="mt-5">Email:<b>{user.email}</b></p>
        </div>
    );
}

export default Dashboard;