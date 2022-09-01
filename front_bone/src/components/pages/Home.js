import React from 'react'
import  Header  from "../shared/Header.js";
import Banner from '../shared/sharedHome/Banner.js';
import CodingEvents from '../shared/sharedHome/CodingEvents.js';
import CompetitorsTable from '../shared/sharedHome/CompetitorsTable.js';
import SupportingLanguages from '../shared/sharedHome/SupportingLanguages.js';


export default function Home() {
    return (
            <React.Fragment>
                <Header/>
                <Banner/>
                <CompetitorsTable></CompetitorsTable>
                <SupportingLanguages/>
                <CodingEvents/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
          </React.Fragment>


    )
}
