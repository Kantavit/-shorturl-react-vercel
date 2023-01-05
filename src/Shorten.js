import React, { useState } from 'react'
import axios from 'axios'

function Shorten() {

  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urlCode, setUrlCode] = useState("");

  const getShortUrl = (e) => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post('https://shorturl-nodejs-api-vercel-kantavit.vercel.app/api/url/shorten', { 
      longUrl: longUrl
    },
    { headers: headers}).then(res => {
      setLongUrl(res.data.longUrl);
      setShortUrl(res.data.shortUrl);
      setUrlCode(res.data.urlCode);
    })
  }
  
  return (
    <div className='container'>
      <div className='topContainer'>
        <h1>Url Shortener</h1>
        <form>
          <input 
            type="text" 
            value={longUrl}
            placeholder="Place the link right here"
            onChange={(e) => setLongUrl(e.target.value)}>
          </input>
          <button className='btn' onClick={getShortUrl}>Shorten</button>
        </form>
      </div>

      <div className="bottomContainer">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Output</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Shorten Url:</span>
            <span className="parameter-value">{shortUrl}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Origin Url:</span>
            <span className="parameter-value">{longUrl}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shorten