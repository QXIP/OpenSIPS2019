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
         "TEXTIMG":"",
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
         "TEXTIMG":"",
         "TEXTTITLE":"Razvan Crainea",
         "COMPANY":"OpenSIPS Solutions",
         "DESC":"Open-source hacker, one of the core developers of the OpenSIPS project since 2010.",
         "TWITTER":"",
         "POSITION":""
      },
       {
         "NAME":"Liviu Chircu",
         "SPEECHTITLE":"",
         "SPEECHABSTRACT":"",
         "TEXTIMG":"",
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
         "TEXTIMG":"",
         "TEXTTITLE":"Lorenzo Mangani",
         "COMPANY":"QXIP",
         "DESC":"",
         "TWITTER":"twitter.com/qxip",
         "POSITION":""
      },
      {
         "NAME":"Marvi Benedet",
         "SPEECHTITLE":"HOMER Seven and the RTC dwarfs",
         "SPEECHABSTRACT":"",
         "TEXTIMG":"",
         "TEXTTITLE":"Marvi Benedet",
         "COMPANY":"Insiel S.p.A.",
         "DESC":"46 years old, electronic eng. working in Insiel since 2002. Involved in VoIP in the last 4 years in a little but very efficent working group. Very interested in evolutions of telephony.",
         "TWITTER":"twitter.com/qxip",
         "POSITION":""
      },
      
    
   ],
   
   "schedule": [ 
      { "id": "first-day",
        "active": "in active",
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
   document.getElementById('speakers').appendChild(html`
     <ul>${summitData.SPEAKERS.map(text => html`  
       <li>NAME: ${text.NAME}</li>
     `)}
     </ul>
   `);
});   
