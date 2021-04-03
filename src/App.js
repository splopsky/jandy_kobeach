import React from "react";
import './App.css';
import Beach from "./Beach";
import beaches from './beaches0.json';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <header>
        <h1>🏖 해변으로 가요 🏝</h1>
      </header>
      <div class="searchBar">
        <input 
        type="text" 
        placeholder="검색어를 입력하세요..." 
        onchange={(event) => 
        { setSearchTerm(event.target.value);
        }} />
      </div>
      <div class="container">
        {beaches.filter((val) => {
            if (searchTerm == "") {
              return val
            }
            else if (val.sido_nm.toLowerCase().includes(searchTerm.toLowerCase()))
            {return val}
          })
            .map(beach => (
              <Beach
                key={beach.sido_nm}
                name={beach.sta_nm}
                image={beach.beach_img}
              />
            ))
        }
      </div>

    </div>

  );
}

export default App;
