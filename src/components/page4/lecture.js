import React, { useState } from 'react';
import Header from '../../pages/header';
import '../page4/lecture.css';
import cn from '../../assets/computerNetwork.jpg';
import da from '../../assets/dataAnalytics.jpg';
import dbms from '../../assets/dbms.jpg';
import daa from '../../assets/daa.jpg';
import mlt from '../../assets/mlt.jpg'
import cd from '../../assets/compilerdesign.jpg';
import oops from '../../assets/oops.jpg';
import wt from '../../assets/wt.jpg';
import se from '../../assets/se.jpg';
import bd from '../../assets/bd.jpg';
import {FaMagnifyingGlass } from 'react-icons/fa6'
import NoResultsFound from '../noResultsFound/index.js'
import Footer from './../../pages/footer.js';
function Lecture() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Array of lecture items
  const lectureItems = [
    { title: 'Data analytics', image: da, link: 'https://www.youtube.com/watch?v=FyxA8JsKn90&list=PL1uhi2_UdvkDp2KlegPmEjmF70O3WUODA' },
    { title: 'Machine Learning', image: mlt, link: 'https://www.youtube.com/watch?v=OZkYkWYNTRo&list=PL5vhyNmOQ5ORE-wzDcfhQZiRM7jESvzhD' },
    { title: 'OOPs', image: oops, link: 'https://www.youtube.com/watch?v=82ba_at_TkM&list=PLDt-fuLi9lO9cej3TpU6_umkt_KSM8H7b' },
    { title: 'Web Technology', image: wt, link: 'https://www.youtube.com/watch?v=M8i-1oeHaDw&list=PL-JvKqQx2Atf5w_httliQrmqPpL7oLc-W' },
    { title: 'Big Data', image: bd, link: 'https://www.youtube.com/watch?v=I_ku0D4uQzQ&list=PLPIwNooIb9vi4f8tVkzLnr1tll6Pubbqhi' },
    { title: 'Software Engineering', image: se, link: 'https://www.youtube.com/watch?v=imzSpM_5R6k&list=PL-JvKqQx2AtdZ7m5Nui3RwqEnNcZZ9N1L' },
    // Add more items here
  ];

  // Filtered lecture items based on search query
  const filteredItems = lectureItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="lecturetrd">
        <h1>Lecture</h1>
      </div>
      {/* Input field for search */}
      <div class='inputDiv'>
      <FaMagnifyingGlass className='left'/>

        <input
          type='text'
          className='inputField'
          placeholder='Search For Lectures ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Display filtered lecture items */}
      { filteredItems.length !== 0 ?
      <div className="container">
        {filteredItems.map((item, index) => (
          <div className="box" key={index}>
            <div className="upper">
              <img src={item.image} alt={item.title} />
            </div>
            <span className="text-box-in">{item.title}</span>
            <a href={item.link}>View Content</a>
          </div>
        ))}
      </div>
      : <NoResultsFound />}
      <Footer />
    </div>
  );
}

export default Lecture;