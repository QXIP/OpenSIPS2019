var summitData = {
   "SPEAKERS":[
      {
         "NAME":"Bogdan-Andrei Iancu",
         "SPEECHTITLE":"Key Notes - OpenSIPS 3.0",
         "SPEECHABSTRACT":"OpenISPS 3.0",
         "TEXTIMG":"http://i.imgur.com/c0q8TjB.png",
         "TEXTTITLE":"Bogdan-Andrei Iancu",
         "COMPANY":"OpenSIPS Project",
         "DESC":"Bogdan is the OpenSIPS project founder with an experience of 15+ year in the SIP world. Practicing the symbioses between managing the Open Source project and building commercial products around OpenSIPS, gives the best results in producing a viable SIP Server software for the real-life needs.",
         "TWITTER":"https://twitter.com/@bogdan_iancu",
         "POSITION":"Founder"
      },
       {
         "NAME":"Bruno Haas",
         "SPEECHTITLE":"Interaction recording for CSPs, Call Centers and the Enterprise",
         "SPEECHABSTRACT":"This talk will take you through various aspects and techniques for recording interactions and will touch on the following subjects: SIPREC standard and OrecX sponsored OpenSIPS implementation, Packet interception, freeswitch mod_oreka, Voice Analytics, Screen recording, Legal aspects",
         "TEXTIMG":"https://opensips.org/events/index.html/assets/img/logo.png",
         "TEXTTITLE":"Bruno Haas",
         "COMPANY":"OrecX LLC",
         "DESC":"Prior to co-founding OrecX, Bruno successively worked as a software architect in electronic warfare, high capacity optical switches and advanced speech processing systems at Thales, Nortel and Autonomy Systems.",
         "TWITTER":"",
         "POSITION":"Co-founder"
      },
      {
         "NAME":"Razvan Crainea",
         "SPEECHTITLE":"Real-Time Call Recording using OpenSIPS",
         "SPEECHABSTRACT":"Find out how you can record your calls in real-time using OpenSIPS as a controller and different media servers alternatives as recorders.",
         "TEXTIMG":"http://i.imgur.com/YbMlg4m.png",
         "TEXTTITLE":"Razvan Crainea",
         "COMPANY":"OpenSIPS Solutions",
         "DESC":"Open-source hacker, one of the core developers of the OpenSIPS project since 2010.",
         "TWITTER":"https://twitter.com/@razvancrainea",
         "POSITION":""
      },
       {
         "NAME":"Liviu Chircu",
         "SPEECHTITLE":"",
         "SPEECHABSTRACT":"",
         "TEXTIMG":"http://i.imgur.com/LmSk7gI.jpg",
         "TEXTTITLE":"Liviu Chircu",
         "COMPANY":"OpenSIPS Solutions",
         "DESC":"",
         "TWITTER":"twitter.com/liviuchircu",
         "POSITION":""
      },
      {
         "NAME":"Lorenzo Mangani",
         "SPEECHTITLE":"HOMER Seven and the RTC dwarfs",
         "SPEECHABSTRACT":"",
         "TEXTIMG":"http://i.imgur.com/XJS0Ihj.png",
         "TEXTTITLE":"Lorenzo Mangani",
         "COMPANY":"QXIP",
         "DESC":"",
         "TWITTER":"twitter.com/qxip",
         "POSITION":""
      },
      {
         "NAME":"Marvi Benedet",
         "SPEECHTITLE":"",
         "SPEECHABSTRACT":"",
         "TEXTIMG":"https://opensips.org/events/index.html/assets/img/logo.png",
         "TEXTTITLE":"Marvi Benedet",
         "COMPANY":"Insiel S.p.A.",
         "DESC":"46 years old, electronic eng. working in Insiel since 2002. Involved in VoIP in the last 4 years in a little but very efficent working group. Very interested in evolutions of telephony.",
         "TWITTER":"twitter.com",
         "POSITION":""
      },
      
    
   ],
   
   "schedule": [ 
      { "id": "Tuesday",
        "text": "Some Date",
        "active": "active",
        "items": [ 
          { "time": "8:30-9:30", 
            "description": "Registration & Breakfast", 
            "subtitle": "Venue Front-Desk", 
            "icon": "assets/images/lunch.png" },
          { "time": "9:30-13:00", 
            "description": "First Conference Day", 
            "subtitle": "Speakers TBA", 
            "icon": "assets/images/speaker.png" },
          { "time": "13:00-14:00", 
            "description": "Opensource Lunch", 
            "subtitle": "Sponsored by OpenSIPS", 
            "icon": "assets/images/lunch.png" },
          { "time": "14:00-17:00", 
            "description": "Conference Day", 
            "subtitle": "Speakers TBA", 
            "icon": "assets/images/speaker.png" },
          { "time": "17:00-18:00", 
            "description": "Round Tables", 
            "subtitle": "Featuring Speakers & OpenSIPS Team", 
            "icon": "assets/images/round-table.png" }
        ] 
      }
    ]
 };
  
// Append to Document element id `speakers`
document.addEventListener("DOMContentLoaded", function(event) { 
   //do work
   const {render, html, svg} = lighterhtml;
   /*
   document.getElementById('team').appendChild(html`
     <ul>${summitData.SPEAKERS.map(text => html`  
       <li>NAME: ${text.NAME}</li>
     `)}
     </ul>
   `);
   */
   
   document.getElementById('team').appendChild(html`  
   <div class="container">
	<div class="row">
		<div class="col-md-12">
			<div class="clearfix">
       				 <div class="flexslider carousel">
        				  <ul class="slides">
               				   ${summitData.SPEAKERS.map(item => html`  
                 				  <li>
                    				 <img src="${item.TEXTIMG}" alt="${item.NAME}" style="width:200px;height:200px;"/>
		     				  <div class="mu-single-speakers-info">
                     				   <h4>
                       				  ${item.NAME}
                      				   <a href="item.TWITTER" target="_blank" tabindex="0"><i class="${item.TWITTER}"></i></a>
                     				   </h4>
						<h6 style="color: #777777">${item.COMPANY}</h6>
		 				<p style="color: #ABCC42">${item.POSITION}</p>
                    			 	 </div>	
                  				 </li>
                					 `)}
         				  </ul>
       				  </div>
     			 </div>
		 </div>
	 </div>
    </div>`);

/*
   // Dynamic Tabs
   document.getElementById('myTabDynamic').appendChild(html`
     <ul class="nav nav-tabs" id="myTabDynamicIn" role="tablist">       
     ${summitData.schedule.map(item => html`
      <li class="nav-item">
        <a class="nav-link ${item.active}" id="${item.id}-tab" data-toggle="tab" href="#${item.id}" role="tab" aria-controls="${item.id}" aria-expanded="true">
            <div class="item-text">
                <h4>${item.id}</h4>
                <h5>${item.text}</h5>
            </div>
        </a>
      </li>
     `)} 
     </ul>
   `);
*/
	
   // Dynamic Content 
   document.getElementById('myTabContentDynamic').appendChild(html`  
     ${summitData.schedule.map(item => html`
              <div class="tab-pane fade show active" id="${item.id}" role="tabpanel" aria-labelledby="${item.id}-tab">
                <div id="accordion">
		  ${item.items.map(card => html`
			<p>${card.description}</p>
		  `)}
                </div> 
              </div>
     `)}
   `);



});   




