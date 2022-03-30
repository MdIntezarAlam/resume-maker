import React from 'react'
import int from '../../image/int.jpg'
import saketh from '../../image/saketh.PNG'
import fr from '../../image/fr.jpeg'
import dp from '../../image/dp.jpeg'
import ms from '../../image/ms.jpeg'
import '../../styles/team.css';

const OurTeam = () => {
  return (
    <div className="ourteam_page">
      <div className="team_member">

        {/* Intezar component */}
        <div className="intezar">
          <div className="intezar_name">
            <div className='heading'>Md Intezar Alam</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="intezar_images">
            <img src={int} alt="" className='imgs' />
          </div>
        </div>

        {/* Saketh component */}
        <div className="Saketh">
          <div className="Saketh_name">
            <div className='heading'>Rama Saketh</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="Saketh_images">
            <img src={saketh} alt="" className='imgs' />
          </div>
        </div>
        {/* Frhaan component */}

        <div className="frhan">
          <div className="frhan_name">
          <div className='heading'>Farhaan Ali</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="frhan_images">
            <img src={fr} alt="" className='imgs' />
          </div>
        </div>

        {/* deepak component */}
        <div className="deepak">
          <div className="deepak_name">
          <div className='heading'>Deepak </div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="deepak_images">
            <img src={dp} alt="" className='imgs' />
          </div>
        </div>

        {/* mushab component */}
        <div className="mushab">
          <div className="mushab_name">
          <div className='heading'>Mushab Siddique</div>
            <div className='same'>Computer Science Engineer</div>
          </div>
          <div className="mushab_images">
            <img src={ms} alt="" className='imgs' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurTeam;