import React from 'react'

const Nav = () => {
  return (
    <div>
    
    <div className="banner">
       
    <img className='char-img' src="https://aniwatchtv.to/images/anw-min.webp" alt="Characcters" />
   <nav className="nav">
       <a href="#">Home</a>
       <a href="#">Movies</a>
       <a href="#">TV Series</a>
       <a href="#">Most Popular</a>
       <a href="#">Top Airing</a>
   </nav>

   <img src="https://aniwatchtv.to/images/logo.png" alt="Aniwatch logo" className="logo-img" />

<div className="srch-container">
     <input className='search' type="text" placeholder="Search anime... " />
      <a href=""> <button className='srch-btn'>search</button></a>
 </div>

                                <div className="banner-content">
                                    <strong>topsearch:</strong>
                                    <span>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas ducimus ut soluta
                                    dicta. Iusto laudantium in cumque autem
                                    facere deserunt mollitia non similique
                                    magni, temporibus distinctio hic perferendis
                                    perspiciatis tempore?</span>

                                </div>
                            

</div>

    <div className="site-btn">
        <a href="#">View Full site</a>
    </div>


    </div>
  )
}

export default Nav