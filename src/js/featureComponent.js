
var FeatureComponent = function () {};

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');

var templateAddCell = require('../html/templateAddCell.js');

var Hogan = require('./hogan.js');

var intId = 1;
FeatureComponent.prototype.constants = {
  noOfElementsInARow: 2,
  newItem: {
    "contentId": "newItem_"+intId,   
    "displaySequence":"1",
    "primaryTitle": "Add Feature Title",
    "secondaryTitle": "Add Title",
    "description": "Add a short description that briefly describes the feature.",
    "resourceUrl": "https://i.imgsafe.org/2c3a6a7.png",
    "ctaText":"Add Button Label",
    "ctaUrl":"Enter or Paste URL"
  }
};



FeatureComponent.prototype.init = function(options, data, element) {

  this.element = element;
  window.$featureData= data;
  var _compiledTemplate = this._prepareTemplate(data.contents, options);
  document.getElementById(element).appendChild(_compiledTemplate);

  if (options.editMode) {
      FeatureComponent.prototype.addEventListenerToOverlay(document.getElementsByClassName('o-feature-overlay'));
  }

  return this;
};

  FeatureComponent.prototype.addNew = function () {
    var _cell = document.createElement('article');
    _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');
var newFeature = JSON.parse(JSON.stringify(FeatureComponent.prototype.constants.newItem)); 

    _cell.innerHTML = Hogan.compile(templateEditCell).render(newFeature);
    //this.parentNode.insertBefore(_cell, this.nextSibling);
    var node;
  if(window.$featureData.contents.length == 0){
      node = document.getElementById('testId');
     
       node.getElementsByTagName('section')[0].appendChild(_cell);
  }
  else{
  var itemId = window.$featureData.contents[window.$featureData.contents.length - 1].contentId;
  node = document.getElementById('feature_' + itemId);

  node.parentNode.parentNode.insertBefore(_cell, null);
  }

    FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
     window.$featureData.contents.push(newFeature);
     intId += 1;

  };
FeatureComponent.prototype.removeItem = function (item,event) {
   for(var i = 0; i < window.$featureData.contents.length ; i++) {
    if(window.$featureData.contents[i].contentId ===item){
      window.$featureData.contents.splice(i,1);
    }
   }

};
FeatureComponent.prototype.saveItem = function (item,event) {
 
  console.log(intId);
    console.log(this.element);

 var node = document.getElementById('feature_'+item); //= event.target.parentNode.parentNode.parentNode


// console.log(node.getElementsByClassName('o-feature-brand')[0].textContent);
  for(var i = 0; i < window.$featureData.contents.length ; i++) {
    if(window.$featureData.contents[i].contentId ===item){
      window.$featureData.contents[i].primaryTitle = node.getElementsByClassName('o-feature-brand')[0].textContent;
      window.$featureData.contents[i].secondaryTitle = node.getElementsByClassName('o-feature-title')[0].textContent;
      window.$featureData.contents[i].description = node.getElementsByClassName('o-feature-description')[0].textContent;
      window.$featureData.contents[i].resourceUrl = node.getElementsByClassName('o-feature-img-src')[0].value;    
      window.$featureData.contents[i].ctaText = node.getElementsByClassName('o-feature-action-button')[0].textContent;
      window.$featureData.contents[i].ctaUrl = node.getElementsByClassName('o-feature-action-url')[0].textContent;    
    }
  }

};

FeatureComponent.prototype.cancelItem = function (item,event) {
 var node = event.target.parentNode.parentNode.parentNode;
 if(node.classList.contains('o-feature-editable-content')) {
    node.classList.remove('o-feature-editable-content'); 
     node.getElementsByClassName('o-feature-img-border')[0].className = node.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
  
      }// console.log(node.getElementsByClassName('o-feature-brand')[0].textContent);
};

FeatureComponent.prototype.addEventListenerToOverlay = function (nodeList) {
    for(var i = 0; i <nodeList.length ; i++) {
        FeatureComponent.prototype._addEventListenerToNode(nodeList[i]);
    }
};

FeatureComponent.prototype._addEventListenerToNode = function (node) {  
  node.addEventListener('click', function () {
      if(this.parentNode.className.indexOf('o-feature-editable-content') == -1) {
          this.parentNode.className +=  ' '+ 'o-feature-editable-content';
      }
  });
  node.parentNode.getElementsByClassName('o-feature-save')[0].addEventListener('click', function () {
      this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className.replace(' o-feature-editable-content', '');
      this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className = this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
  });
  node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("img")[0].addEventListener('click', function () {
      if(this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
          this.parentNode.className +=  ' '+ 'o-feature-img-border-edit';
      }
  });
  node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("a")[0].addEventListener('click', function () {
      if(this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
          this.parentNode.className +=  ' '+ 'o-feature-img-border-edit';
      }
  });
   node.parentNode.getElementsByClassName('o-feature-remove')[0].addEventListener('click', function () {
	    this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode);
	  });
};

FeatureComponent.prototype._prepareTemplate = function (data, options) {

    var _output = document.createElement('section');
    _output.setAttribute('class','o-feature-main');

    var _previous_row = document.createElement('section');
    _previous_row.setAttribute('class','o-feature-row');

    var _addCellAdded = false;

    for (var cellCount = 0; cellCount < data.length; cellCount++) {

      if(cellCount % FeatureComponent.prototype.constants.noOfElementsInARow == 0) {

        var _row = document.createElement('section');
         if (options.editMode) {
            _row.setAttribute('class','o-feature-row o-feature-row-edit');
         } else {
            _row.setAttribute('class','o-feature-row o-feature-published');
         }
        

        
        var _cell = '';
        if (options.editMode) {
          _cell = document.createElement('article');
          _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');
          _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
        } else {
          _cell = document.createElement('article');
          _cell.setAttribute('class','o-feature-cell');
          _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
        }
        

        _row.appendChild(_cell);
        _previous_row = _row;
      
       if (cellCount == data.length - 1) {
      //     if(options.editMode) {
      //         var _addCell = document.createElement('article');
      //         _addCell.setAttribute('class','o-feature-cell o-feature-cell-edit');
      //         _addCell.innerHTML = Hogan.compile(templateAddCell).render();
      //         _previous_row.appendChild(_addCell)

      //         _addCellAdded = true;
      //     }
         _output.appendChild(_previous_row);
        }

      } else {

        var _cell = document.createElement('article');
        

        if (options.editMode) {
          _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');
          _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
        } else {
          _cell.setAttribute('class','o-feature-cell');
          _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
        }

      _previous_row.appendChild(_cell);
      
      _output.appendChild(_previous_row);
        

      }
    }

    /*if(!_addCellAdded && options.editMode) {
      var _row = document.createElement('section');
      _row.setAttribute('class','o-feature-row');

      var _cell = document.createElement('article');
      _cell.setAttribute('class','o-feature-cell');

      _cell.innerHTML = Hogan.compile(templateAddCell).render();
      _row.appendChild(_cell);
      
      _output.appendChild(_row);
    }*/

  return _output;
};

var defaults = {
  editMode: false
};

FeatureComponent.prototype.triggerAddNew = function () {
  var element = document.getElementById(this.element);
  var cellArray = element.getElementsByClassName('o-feature-cell');
  for (var i = cellArray.length - 1; i >= 0; i--) {
    var childNode = cellArray[i];
    FeatureComponent.prototype._insertAddNew(childNode);
    
  };
};

FeatureComponent.prototype._insertAddNew = function (childNode) {
  var clearfixElement = document.createElement('div');
  clearfixElement.setAttribute('class', 'o-feature-clearfix');

  var addNewElement = document.createElement('div');
  addNewElement.setAttribute('class', 'o-feature-add-new-container');
  addNewElement.innerHTML = '<a class=\'o-feature-add-new-button\'> Add New + </a>';
  addNewElement.addEventListener('click', function () {
    var _cell = document.createElement('article');
    _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');

    _cell.innerHTML = Hogan.compile(templateEditCell).render(FeatureComponent.prototype.constants.newItem);
    this.parentNode.insertBefore(_cell,this.nextSibling);
    FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
  });

  childNode.parentNode.insertBefore(addNewElement,childNode.nextSibling);
  childNode.parentNode.insertBefore(clearfixElement,childNode.nextSibling);
};

module.exports = FeatureComponent;
