const touristSpots = [
    {
        id: "tourist-spot-1",
       
        description: "An ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. Sigiriya is a UNESCO World Heritage Site.",
        
    },
    {
        id: "tourist-spot-2",
       
        description: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of granite approximately 180 m (590 ft) high.",
       
    },
    {
        id: "tourist-spot-3",
       
        description: "Nuwara Eliya  is a city in the hill country of the Central Province, Sri Lanka. Its name means city on the plain table land  or city  light. The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate - the coolest area in Sri Lanka.",
        
    },


    
        {id: "tourist-spot-4",
       
         description: 
         "Sinharaja Forest Reserve is a forest reserve and a biodiversity hotspot in Sri Lanka It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by unesco According to International Union for Conservation of NatureIUCN Sinharaja is the country s last viable area of primary tropical rainforest. More than 60% of the trees are endemic and many of them are considered rare. 50% of Sri Lankans  endemics species of animals especially butterfly amphibians birds snakes and fish species It is home to 95% endemic birdss The hilly virgin rainforest part of the Sri Lanka lowland rain forests ecoregi was saved from the worst of commercial logging by its inaccessibility and was designated a World Biosphere Reserve in 1978 and a World Heritage Site in 1988 Because of the dense vegetation wildlife is not as easily seen as at dryzone national parks such as Yala The most common larger mammal is the endemic purplefaced langurBirds tend to move in mixed feeding flocks invariably led by the fearless Sri Lanka crested drongo and the noisy orange-billed babbler Of Sri Lankas 26 endemic birds the 20 rainforest species all occur here, including the elusive red-faced malkoha green-billed coucal and Sri Lanka blue magpie Reptiles include the endemic green pit viper and humpnosed vipers and there are a large variety of amphibians especially tree frogsInvertebrates include the endemic Sri Lankan birdwing butterfly and leeches"},

           
            
         {id: "tourist-spot-5",
           
        description: "Nuwara Eliya  is a city in the hill country of the Central Province, Sri Lanka. Its name means city on the plain table land  or city  light. The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. Nuwara Eliya is known for its temperate, cool climate - the coolest area in Sri Lanka."},
        
             
];


function populateTouristSpotInfo() {
    touristSpots.forEach(spot => {
        const spotElement = document.getElementById(spot.id);
        spotElement.innerHTML = `
            
            <p>${spot.description}</p>
        `;
    });
}


populateTouristSpotInfo();
