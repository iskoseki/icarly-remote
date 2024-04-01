import "./App.css";
import Logo from "./assets/Icarly-logo 1.svg";
import SoundPack from "./api/json/soundPack.json";
import Star from "./assets/Star-1.svg";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [currentSound, setCurrentSound] = useState<HTMLAudioElement | null>(
    null
  );

  const handleAudio = (url: string) => {
    if (currentSound) {
      currentSound.pause();
    }
    const soundSelected = new Audio(url);
    setCurrentSound(soundSelected);
    soundSelected.play();
  };

  const handlePause = () => {
    if (currentSound) {
      currentSound.pause();
    }
  };
  return (
    <div className="">
      <main className="bg-primary rounded-xl z-50 relative border-[2px] border-slate-200 drop-shadow-2xl shadow-inner">
        <div className="pb-4">
          <div className="p-8 rounded-b-xl border-b-[0.5px]  shadow-xl ">
            <img className="logo" src={Logo} alt="Logotipo" />
          </div>
          <section className="grid gap-2 grid-cols-2 w-full p-4">
            <div className="flex justify-center items-center ">
              <a
                onClick={() => handlePause()}
                className="hover:opacity-85 hover:scale-95 hover:shadow-inner text-slate-400 hover:text-white cursor-pointer"
              >
                <img
                  className="w-28 h-28 z-10 rounded-lg"
                  src={Star}
                  alt="start-icon"
                />
                Pause
              </a>
            </div>
            {SoundPack.map((soundPack) => {
              return (
                <div
                  key={soundPack.id}
                  className="flex justify-center  items-center w-full h-full"
                >
                  <div className="flex justify-center items-center">
                    <a
                      onClick={() => handleAudio(soundPack.sound)}
                      className="cursor-pointer text-center text-wrap justify-center  hover:opacity-85 hover:scale-95 hover:shadow-inner text-slate-400 hover:text-white"
                    >
                      <div>
                        <img
                          src={soundPack.image}
                          className="rounded-xl w-28 h-28"
                        />
                        <span>{soundPack.name}</span>
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
