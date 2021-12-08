export default function Layout(props) {
    const { children } = props;

    return (
        <div className="App container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3 className="text-info mx-auto text-center  mt-5">Sign UP</h3>
                    {children}
                </div>
            </div>
        </div>
    );
}
