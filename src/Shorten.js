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

      <h3>Long Url: {longUrl}</h3>
      <h3>Short Url: {shortUrl}</h3>
      <h3>Url Code: {urlCode}</h3>
    </div>
  )
}

export default Shorten