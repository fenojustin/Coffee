const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white-100  bg-yellow py-6 ">
            <div className="max-w-7xl mx-auto p-2 rounded-3xl shadow-lg overflow-hidden bg-orange-100">
                {children}
            </div>
        </div>
    );
};

export default Layout;
