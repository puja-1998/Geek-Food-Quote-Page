import "./Header.css"

export default function(){
    return(
        <header className="App-header">
       <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoods Logo"></img>
        <h1>GeekFoods</h1>
       </div>

        <div  className="tabs">
          <a href="#" className='home'>Home</a>
          <a href="#">Quote</a>
          <a href="#">Resturants</a>
          <a href="#">Foods</a>
          <a href="#">Contact</a>
        </div>

        <div>
          <button className="getStartedBtn">Get Started</button>
        </div>
      </header>
    );
}