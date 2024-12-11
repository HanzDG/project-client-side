/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <h2>Welcome To The Campus Management System!</h2>
      <img width="600px" src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/schools/lehman-college/Lehman_College_Campus.jpg"></img>
      <p>Click on 'All Campuses' or 'All Students' to view the currently saved information!</p>
    </div>
  );    
}

export default HomePageView;