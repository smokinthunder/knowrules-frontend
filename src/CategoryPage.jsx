import React,{useState} from 'react';
import './Style/CategoryPage.css'; // Import the CSS file for styling
import './Style/popup.css'; // Import the CSS file for styling

const CategoryPage = ({setShowPage,setSelectedCategory }) => {
    const categories = [
        {
          name: "Motor vehicle",
          background: '/images/Category/Motor-Vehicle-laws.jpg',
        },
        {
          name: 'Cyber security',
          background: '/images/Category/CyberSecurity.jpg',
        },
        {
          name: 'Environmental laws',
          background: '/images/Category/EnvironmentalLaws.jpg',
        },
        {
          name: 'Health care',
          background: '/images/Category/HealthCare.jpg',
        },
        {
          name: 'LGBTQ',
          background: '/images/Category/LGBTQ.jpg',
        },
        {
          name: 'Consumer protection',
          background: '/images/Category/consumer-Protetcion.jpg',
        },
        {
          name: 'E-commerce',
          background: '/images/Category/E-Commerce.jpg',
        },
        {
          name: 'Youth rights laws',
          background: '/images/Category/Youth-right-laws.jpg',
        },
      ];
      


       // State to manage the popup visibility and content
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Function to show the popup with a message
  const showPopupWithMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  // Function to hide the popup
  const hidePopup = () => {
    setShowPopup(false);
  };




  return (
    <div className="category-page">
      <div className="svg-container2" 
      onClick={() => setShowPage("Home")}
      onMouseOver={() => showPopupWithMessage('Home')}
      onMouseOut={hidePopup}
      >
        <img src="/icons/home_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
      </div>
      <div className="svg-container">
        <img src="/icons/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
      </div>
      <div className="category-buttons"  >
        {categories.map((category, index) => (
          <div key={index} className="category-button" onClick={() => {setShowPage("SubCategory") ;setSelectedCategory(category.name)} } >
            <div
              className="category-image"
              style={{ backgroundImage: `url(${category.background})` }}
            />
            <div className="category-name">
              <span>{category.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {showPopup && ( // Render the popup conditionally based on showPopup state
        <div className="popup-container">
          <div className="popup-message">{popupMessage}</div>
        </div>
      )}
      
    </div>
  );
};

export default CategoryPage;
