/*global require*/
require('../../main');
var userPermissions =  {
 Create  : true,
 Read    : true,
 Delete  : true,
 Update  : true
};

var data = {};

data.contents = [
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
    {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "https://www.pearsonhighered.com/revel/assets/images/discipline-grid/thumb/closer-look.jpg",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     }
   ];

var options = {
  editMode: true
};

var options2 = {
  editMode: false
};

window.viewComp = new $featureComponent().init(options, data, 'testId1',userPermissions);
window.editComp = new $featureComponent().init(options2, data, 'testId2',userPermissions);