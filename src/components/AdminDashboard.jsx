import '../styles/AdminDashBoard.css'

const AdminDashboard = () => {
    return (
        <div className="adminDashboard">
            <div className="admin">

                <div  style={{marginTop:'100px'}} className="bak1">
                    <div className="text1">
                        <a href="" style={{textDecoration:'none'}}> <h1 style={{width:'450px'}}>Greenwich Library to Host</h1> <br /> <h1 style={{width:'415px'}}>an Evening of Broadway</h1> <br /><h1 style={{width:'135px'}}> Cabaret</h1></a>
                        <p>By <a href="" style={{textDecoration:'none',color:'gray'}}>Erika Berlin</a> on January 12, 2023</p>
                        <p>The Friends of Greenwich Library are pleased to <br /> host a special night of cabaret-style <br /> performances with How I Got to…</p>
                        <a href=""  style={{textDecoration:'none',color:'orange',borderBottom:'2px solid orange',fontSize:'20px'}}>Take a look</a>
                    </div>
                </div>
                    
                <div className="bak1">
                    <div className="text1">
                        <a href="" style={{textDecoration:'none'}}> <h1 style={{width:'460px'}}>At the Library this January </h1> <br /> <h1 style={{width:'30px'}}>…</h1> <br /><h1 style={{width:'135px'}}> Cabaret</h1></a>
                        <p>By <a href="" style={{textDecoration:'none',color:'gray'}}>Erika Berlin</a> on December 29, 2022</p>
                        <p>Greenwich Library has a full schedule of (free!)<br /> enrichment events throughout January. Speak<br /> with a librarian or check the online…</p>
                        <a href=""  style={{textDecoration:'none',color:'orange',borderBottom:'2px solid orange',fontSize:'20px'}}>Take a look</a>
                    </div>
                </div>
                
                <div className="bak1">
                    <div className="text1">
                        <a href="" style={{textDecoration:'none'}}> <h1 style={{width:'400px'}}>Signature Series: In the</h1> <br /> <h1 style={{width:'445px'}}>News with Fareed Zakaria</h1></a>
                        <p>By <a href="" style={{textDecoration:'none',color:'gray'}}>Erika Berlin</a> on January 11, 2023</p>
                        <p>Greenwich Library’s Signature Series is pleased <br />to welcome bestselling author and journalist <br />Fareed Zakaria to the Library’s Berkley <br />Theater on Thursday,…</p>
                        <a href=""  style={{textDecoration:'none',color:'orange',borderBottom:'2px solid orange',fontSize:'20px'}}>Take a look</a>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default AdminDashboard;