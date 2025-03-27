import Navbar from "../navbar/Navbar";

export default function Hero() {
return (
    <div >
        <div>
                <div className="bg-[url('/hero.jpg')]   bg-cover">
                    <Navbar/>
                    <div className="flex justify-between items-center pt-50 mx-auto max-w-7xl px-4 py-4">
                        <div><h2 >Your Next Adventure <br></br>Starts With Us</h2></div>
                        <div className="relative inline-block">
  <img src="./Circular-text.svg" alt="Circular Text" className="block animate-spin-slow"></img>
  <img src="./down-arrow.svg" alt="Down Arrow" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></img>
</div>
                        
                    </div>
                </div>
            </div>
    </div>
);
}