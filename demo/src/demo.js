/*global require*/
require('../../main');

var data = {};

data.contents = [
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
    {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
      "ctaText":"Launch Activity",
      "ctaUrl":"http://www.youtube,com"
     },
     {
      "type":"video",
      "displaySequence":"1",
      "primaryTitle": "Revel Tm History Feature",
      "secondaryTitle": "Explorer Activities",
      "description": "some description",
      "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
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

window.editComp = new $featureComponent().init(options, data, 'testId');

window.viewComp = new $featureComponent().init(options2, data, 'testId2');