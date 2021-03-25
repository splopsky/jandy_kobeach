import React from "react";
import './App.css';
import Beach from "./Beach";
import beaches from './beaches0.json';

function App() {
  return (
    <div className="App">
      <header>
        <h1>🏖 해변으로 가요 🏝</h1>
      </header>
      <div class="searchBar">
        <input type="text" placeholder="검색어를 입력하세요..." />
      </div>

      <div class="container">
            {
              beaches.map(beach => (
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
