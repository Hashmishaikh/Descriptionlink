import { useState } from 'react'
import './App.css'

function App() {
  // const descriptionWithLinks = "Visit our websites: https://www.example.com and https://www.another-example.com for more information.";

  const descriptionWithLinks = `🎥 Explore the Wonders of Nature - Virtual Nature Walk 🌿

  Join us for a breathtaking virtual nature walk through the lush forests and serene meadows of our favorite national park! 🏞️ Immerse yourself in the beauty of untouched landscapes and discover the fascinating wildlife that calls this place home.
  
  🔗 Experience the magic firsthand: [Watch Now](https://www.example.com/virtual-nature-walk)
  
  In this captivating journey, you'll:
  
  🌲 Wander through towering ancient trees, their leaves dancing in the gentle breeze.
  🦌 Encounter graceful deer grazing peacefully in sunlit clearings.
  🦋 Marvel at the vibrant colors of butterflies as they flutter by.
  🐦 Listen to the soothing melodies of various bird species filling the air.
  🏞️ Relax by a crystal-clear stream, its waters reflecting the surrounding beauty.
  
  Whether you're a nature enthusiast or simply seeking a moment of tranquility, this virtual nature walk is sure to leave you refreshed and inspired. Grab your headphones, click the link above, and let the adventure begin!
  
  Don't forget to like, subscribe, and hit the notification bell to stay updated on more immersive experiences like this.
  
  Connect with us:
  📷 Instagram: [@NatureExplorers](https://www.instagram.com/natureexplorers)
  🐦 Twitter: [@ExploreNature](https://twitter.com/explorenature)
  🌐 Website: [www.example.com](https://www.example.com)
  
  #VirtualNatureWalk #NatureExploration #VirtualAdventure`


  const extractLinks = (text) => {
    // Regular expression to match URLs
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlPattern);

    return matches || []; // Return an array of matched links, or an empty array if none found
  };

  const extractedLinks = extractLinks(descriptionWithLinks);

  return (
    <>
     <div>
      Descrition Link
      <br/><p>Extracted Link: {descriptionWithLinks}</p>
      <ul>
        {extractedLinks.map((link, index) => (
          <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
        ))}
      </ul>
     </div>
        
    </>
  )
}

export default App
