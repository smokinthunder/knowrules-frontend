import React, { useEffect, useState } from 'react';
import './Style/SubCategoryPage.css';

const SubCategoryPage = ({ selectedCategory, setShowPage }) => {
  const [subCategories, setSubCategories] = useState([]);

  const subCategoriesApi = {
    "Motor vehicle": [
      { "name": "Hit and Run", "background": "/images/SubCategory/MotorVehicleLaws/Hit%20and%20Run.jpg" },
      { "name": "Non-Possession Of Primary Doccuments", "background": "/images/SubCategory/MotorVehicleLaws/Non-Posession%20Of%20Primary%20Documents.jpg" },
      { "name": "Emission Standards", "background": "/images/SubCategory/MotorVehicleLaws/Emission%20Standards.jpg" }
    ],
    "Cyber security": [
      { "name": "Phishing", "background": "/images/SubCategory/CyberSecurityLaws/Phishing.jpg" },
      { "name": "Data Breach", "background": "/images/SubCategory/CyberSecurityLaws/Data%20Breach.jpg" },
      { "name": "Cybber Bullying", "background": "/images/SubCategory/CyberSecurityLaws/Cyber%20Bullying.jpg" }

    ]  };

  useEffect(() => {
    setSubCategories(subCategoriesApi[selectedCategory]);
  }, [selectedCategory]);

  return (
    <div className="subcategory-page">
      <div className="header">
        <div className="svg-container2"  >
          <img src="/icons/home_FILL0_wght400_GRAD0_opsz48.svg" alt="" onClick={() => setShowPage("Home")} />
          <br />
          <img src="/icons/category_FILL0_wght400_GRAD0_opsz48.svg" alt="" onClick={() => setShowPage("Category")} />
        </div>
        <div className="svg-container">
          <img src="/icons/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
        </div>
        <h1 className="category-heading">{selectedCategory}</h1>
      </div>
      <div className="subcategories-list">
        {subCategories.map((subcategory, index) => (
          <div key={index} className="subcategory-item">
            <div
              className="subcategory-image"
              style={{ backgroundImage: `url(${subcategory.background})` }}
              onClick={() => setShowPage("Chatroom")}
            />
            <div className="subcategory-name" onClick={() => setShowPage("Chatroom")} >
              <span>{subcategory.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
