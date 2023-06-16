import '../styles/UserDashBoard.css'

const UserDashBoard = () => {
   return (
      <div className="userDasgBoard">
         <div className="user1">
            <h1>Learning Lab</h1>
            <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and <br /> patrons can empower themselves with a practical understanding of current technology.</p>
         </div>

         <div className="user2">
            <div className="backimg">
               <div className="user2Text">
                  <p>LEARN</p>
                  <h1>LinkedIn Learning</h1>
                  <p>LinkedIn Learning (formerly Lynda) is an online educational site that features <br /> thousands of courses and video tutorials where you can discover, complete, and <br /> track courses related to your industry or interests.</p>
                  <div className="bton">
                     <button style={{ backgroundColor: 'skyblue', border: '0', color: 'white', marginLeft: '639px', padding: '10px' }}>Get Started</button>
                     <button style={{padding:'0px 9px',paddingTop:'8px',paddingBottom:'10px',border:'0',backgroundColor:'rgb(7, 114, 156)'}}>➜</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="user3">
            <div className="backimg2">
               <div className="user3Text">
                  <h1>Learn Something New or Get Tech Help</h1>
                  <p>Register on the online calendar. For more information call (203) 622-7920.</p>
                  <button style={{ backgroundColor: "white", border: '0', color: ' rgb(68, 64, 64)',padding: '10px',fontSize:'15px' }}>View Calender</button>
                  <button style={{padding:'10px',border:'0',paddingLeft:'20px'}}>➜</button>
               </div>

            </div>
         </div>

      </div>

   );
}

export default UserDashBoard;