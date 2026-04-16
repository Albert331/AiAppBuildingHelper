import React, { useState } from 'react';

function Home() {
  // We use a string for 'view' to handle multiple states easily: 'menu', 'create', 'list'
  const [view, setView] = useState('menu');

  // Dummy data for your projects
  

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-6rem)] p-4 overflow-hidden">
      
      <div className="relative w-full max-w-4xl h-full flex flex-col bg-[#0B192C]/60 border border-[#1E3E62]/30 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* TOP SECTION: DATA DISPLAY (Observation Window) */}
        <div className="relative flex-1 w-full bg-black/40 border-b border-[#1E3E62]/20 flex flex-col items-center justify-center">
          <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] text-[#1E3E62] uppercase">
             Monitor_Output: <span className="text-[#FF6500] animate-pulse">System_Idle</span>
          </div>
          
          {/* Placeholder for where your visual engine will eventually return */}
          <div className="text-[#1E3E62] font-mono text-[10px] tracking-widest uppercase opacity-50">
            [ Visual_Feed_Suspended ]
          </div>
        </div>

        {/* BOTTOM SECTION: COMMAND CONSOLE */}
        <div className="relative w-full p-8 flex flex-col items-center justify-center min-h-[300px] bg-[#0B192C]/80">
          
          {/* --- VIEW 1: MAIN MENU --- */}
          {view === 'menu' && (
            <div className='flex flex-row gap-6 items-center animate-in fade-in slide-in-from-bottom-2 duration-500'>
              <button 
                onClick={() => setView('create')}
                className='px-8 py-4 bg-[#FF6500] text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-[0_0_20px_rgba(255,101,0,0.3)] hover:scale-105 transition-all'
              >
                Start New Project
              </button>

              <button 
                onClick={() => setView('list')}
                className='px-8 py-4 border border-[#1E3E62] text-white hover:border-[#FF6500] hover:text-[#FF6500] font-black uppercase tracking-widest text-xs rounded-xl transition-all'
              >
                Your Projects
              </button>
            </div>
          )}

          {/* --- VIEW 2: CREATE FORM --- */}
          {view === 'create' && (
            <div className="w-full max-w-md flex flex-col gap-4 animate-in zoom-in-95 duration-300">
              <h3 className="text-[#FF6500] font-mono text-[10px] tracking-widest uppercase mb-2">/Initialize_New_Entry</h3>
              <input type="text" placeholder="PROJECT_NAME" className="bg-transparent border-b border-[#1E3E62] text-white py-2 focus:outline-none focus:border-[#FF6500] font-mono text-sm uppercase" />
              <textarea rows="2" placeholder="DESCRIPTION..." className="bg-transparent border-b border-[#1E3E62] text-white py-2 focus:outline-none focus:border-[#FF6500] font-mono text-xs resize-none" />
              <div className="flex gap-4 mt-2">
                <button onClick={() => setView('menu')} className="text-[#1E3E62] hover:text-[#FF6500] uppercase font-bold text-[10px] tracking-widest">[ Cancel ]</button>
                <button className="flex-1 py-2 bg-[#FF6500] text-black uppercase font-black text-[10px] tracking-widest rounded">Initialize</button>
              </div>
            </div>
          )}

          {/* --- VIEW 3: PROJECTS LIST --- */}
          {view === 'list' && (
            <div className="w-full max-w-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="flex justify-between items-center border-b border-[#1E3E62] pb-2 mb-2">
                <h3 className="text-[#FF6500] font-mono text-[10px] tracking-widest uppercase">/Registry_Database</h3>
                <button onClick={() => setView('menu')} className="text-[#1E3E62] hover:text-white text-[9px] tracking-widest font-bold uppercase underline decoration-[#FF6500]">Back_to_Menu</button>
              </div>
              
              <div className="max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                {projects.map((proj) => (
                  <div key={proj.id} className="group flex items-center justify-between p-3 border border-[#1E3E62]/30 hover:border-[#FF6500]/50 rounded-lg mb-2 transition-all cursor-pointer bg-white/5">
                    <div className="flex flex-col">
                      <span className="text-white font-mono text-xs tracking-wider group-hover:text-[#FF6500]">{proj.name}</span>
                      <span className="text-[9px] text-[#1E3E62] font-mono">{proj.date}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-[9px] font-bold tracking-tighter ${proj.status === 'STABLE' ? 'text-green-500/60' : 'text-blue-400/60'}`}>
                        [{proj.status}]
                      </span>
                      <span className="text-[#FF6500] text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity"> &gt; OPEN </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FOOTER HUD */}
          <div className="absolute bottom-4 right-6 font-mono text-[8px] tracking-[0.3em] text-[#1E3E62] uppercase">
            System_Link: <span className={view === 'list' ? 'text-[#FF6500]' : 'text-green-500/50'}>
              {view === 'list' ? 'Browsing_Files' : 'Ready'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;