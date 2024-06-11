import React, { useState }  from 'react'
import Home from './Home'
import CategoryPage from './CategoryPage';
import SubCategoryPage from './SubCategoryPage';
import ChatroomComponent from './ChatroomComponent';

function App() {


  const [showPage, setShowPage] = useState("Home");
  const [selectedCategory, setSelectedCategory] = useState('');

  switch (showPage) {
    case "Home": return <Home setShowPage={setShowPage}/> ;
    case "Category" : return <CategoryPage setShowPage={setShowPage} setSelectedCategory={setSelectedCategory} /> ;
    case "SubCategory": return <SubCategoryPage setShowPage={setShowPage} selectedCategory={selectedCategory} /> ;
    case "Chatroom": return <ChatroomComponent setShowPage={setShowPage}  /> ;

    default :return <Home setShowPage={setShowPage} /> ;
  }

  
 
}

export default App