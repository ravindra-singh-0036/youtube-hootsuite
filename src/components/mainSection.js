
const MainSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Share Your Vision with the World</h1>
        <p>
        Whether you’re a vlogger, filmmaker, or business owner, uploading your videos has never been easier. Share your story with the world in just one click!
        </p>
        
        
        <div className="shopping">
          

        <div className="brand-icons">
           {/*<img src="./images/youtube.png" alt="YouTube-logo" />
            <img src="./images/hootsuite.png" alt="Hootsuite-logo" />*/}
          </div>
        </div>
        <div className="hero-btn">
        
        <a href="https://www.youtube.com/upload" target="_blank" rel="noopener noreferrer">
            <button>YouTube</button>
        </a>
        <a href="https://hootsuite.com/dashboard" target="_blank" rel="noopener noreferrer">
          <button className="secondary-btn">Hootsuite</button>
        </a>
        
        </div>
        
        
      </div>
      
    </main>
  );
};

export default MainSection;
