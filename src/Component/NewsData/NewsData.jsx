import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsAllData from '../NewsAllData/NewsAllData';
import discover_ctgs from '../../assets/categories.js';

const NewsData = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(discover_ctgs);
  }, []);

  return (
    <div className='news__data__main py-8 lg:py-20'>
      <h1 className='text-3xl lg:text-left text-center lg:text-5xl font-bold'>Discover Daily</h1>

      <div className='news__all__data mt-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {categories.map((data) => (
            <NewsAllData key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsData;
