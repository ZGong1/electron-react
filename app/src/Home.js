const Home = () => {
    const electron = window.electron;
    return ( 
        <div className="home">
            <p>This is the home element</p><br />
            The home direcetory is @ {electron.homeDir}
            <p id="info"></p>
        </div>
     );
}
 
export default Home;