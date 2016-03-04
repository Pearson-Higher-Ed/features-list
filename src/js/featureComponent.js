
var FeatureComponent = function () {};

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');

var templateAddCell = require('../html/templateAddCell.js');

var Hogan = require('./hogan.js');

var intId = 1;
FeatureComponent.prototype.constants = {
  noOfElementsInARow: 2,
  newItem: [{
    "contentId": "newItem_"+intId,   
    "displaySequence":1,
    "primaryTitle": "Add Feature Title",
    "secondaryTitle": "Add Title",
    "description": "Add a short description that briefly describes the feature.",
    "resourceUrl": "https://i.imgsafe.org/2c3a6a7.png",
    "ctaText":"Add Button Label",
      "ctaUrl": "https://www.sample.com"
  }]
};



FeatureComponent.prototype.init = function(options, data, element) {
    document.getElementById("saveWatcher").value = false;
    // Disable Make Live button if no features
    if(data.contents.length === 0){
        document.getElementById("makeLiveBtn").disabled = true;
    }
    for (var i = 0; i < data.contents.length; i++) {
        if(data.contents[i].ctaUrl === undefined){
            data.contents[i].ctaText = "Add Button Label";
            data.contents[i].ctaUrl = "https://sample.com";

        }
        if(data.contents[i].resourceUrl === undefined){
            data.contents[i].resourceUrl = '';
        }
    }
  this.element = element;
  window.$featureData= data;
  window.$featureData.featureEdited = false;
  var _compiledTemplate = this._prepareTemplate(data.contents, options);
  document.getElementById(element).appendChild(_compiledTemplate);

  if (options.editMode) {
      FeatureComponent.prototype.addEventListenerToOverlay(document.getElementsByClassName('o-feature-overlay'));
  }

  return this;
};

  FeatureComponent.prototype.addNew = function () {
      document.getElementById("makeLiveBtn").disabled = false; //Enable Make Live button
  var newFeature = JSON.parse(JSON.stringify(FeatureComponent.prototype.constants.newItem));
      newFeature[0].contentId = "newItem_" + intId;
  //this.parentNode.insertBefore(_cell, this.nextSibling);
  var node;
  if (window.$featureData.contents.length == 0) {
    node = document.getElementById('testId');

    var _compiledTemplate = this._prepareTemplate(newFeature, {
      editMode: true
    });
    node.appendChild(_compiledTemplate);
    FeatureComponent.prototype._addEventListenerToNode(_compiledTemplate.getElementsByClassName('o-feature-overlay')[0]);
  } else {
    var _cell = document.createElement('article');
    _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');

    _cell.innerHTML = Hogan.compile(templateEditCell).render(newFeature[0]);
    var itemId = window.$featureData.contents[window.$featureData.contents.length - 1].contentId;
    node = document.getElementById('feature_' + itemId);

    node.parentNode.parentNode.insertBefore(_cell, null);
    FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
  }
      FeatureComponent.prototype.setDisplaySequence();

  window.$featureData.contents.push(newFeature[0]);
  intId += 1;
};
FeatureComponent.prototype.removeItem = function (item, event) {
    for (var i = 0; i < window.$featureData.contents.length; i++) {
        if (window.$featureData.contents[i].contentId === item) {
            window.$featureData.contents.splice(i, 1);
        }
    }
    FeatureComponent.prototype.setDisplaySequence();
};
FeatureComponent.prototype.saveItem = function (item,event) {
    console.log(intId);
    console.log(this.element);

    var node = document.getElementById('feature_'+item); //= event.target.parentNode.parentNode.parentNode
    var isValid = true;

    var newItem = FeatureComponent.prototype._validateItem(node);
    console.log(newItem);

    if(newItem !== null){
        newItem.contentId = item;
        // console.log(node.getElementsByClassName('o-feature-brand')[0].textContent);
        for(var i = 0; i < window.$featureData.contents.length ; i++) {

            if(window.$featureData.contents[i].contentId ===item){
                window.$featureData.contents[i] = newItem;

            }
        }
        document.getElementById("saveWatcher").value = true;
        FeatureComponent.prototype.setDisplaySequence();
        document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
         window.$featureData.featureEdited = false;// Enable edit to other feature components
    }else{
        node.className += ' ' + 'o-feature-editable-content';
    }

};
FeatureComponent.prototype.setDisplaySequence = function() {
    for (var i = 0; i < window.$featureData.contents.length; i++) {
        window.$featureData.contents[i].displaySequence = i;
    }
}
FeatureComponent.prototype._validateItem = function(node){

    var newFeature = JSON.parse(JSON.stringify(FeatureComponent.prototype.constants.newItem[0]));
    var urlRegex = /(https):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    newFeature.primaryTitle =      node.getElementsByClassName('o-feature-brand')[0].textContent;
    newFeature.secondaryTitle =    node.getElementsByClassName('o-feature-title')[0].textContent;
    newFeature.description =       node.getElementsByClassName('o-feature-description')[0].textContent;
    newFeature.resourceUrl =       node.getElementsByClassName('o-feature-img-src')[0].value;
    newFeature.ctaText =           node.getElementsByClassName('o-feature-action-button')[0].textContent;
    newFeature.ctaUrl =            node.getElementsByClassName('o-feature-action-url')[0].textContent;

    ////validation logics
    if (newFeature.primaryTitle.trim().length == 0) {
        alert("Feature Title is Mandatory");
        return null;
    }
    if (newFeature.secondaryTitle.trim().length == 0) {
        alert("Title is Mandatory");
        return null;
    }
    if (newFeature.description.trim().length == 0) {
        alert("Description is Mandatory");
        return null;
    }
    if ((newFeature.ctaUrl.trim().length != 0) && (!urlRegex.test(newFeature.ctaUrl.trim()))) {
        alert("Invalid CTA URL");
        return null;
    }
    if ((newFeature.resourceUrl.trim().length != 0) && (!urlRegex.test(newFeature.resourceUrl.trim()))) {
        alert("Invalid Image URL"); // Image or Resource??
        return null;
    }


    return newFeature;
};

FeatureComponent.prototype.cancelItem = function (item,event) {
    var node = event.target.parentNode.parentNode.parentNode;

    if (node.classList.contains('o-feature-editable-content')) {
        node.classList.remove('o-feature-editable-content');
        node.getElementsByClassName('o-feature-img-border')[0].className = node.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');

    } // console.log(node.getElementsByClassName('o-feature-brand')[0].textContent);
    for(var i = 0; i < window.$featureData.contents.length ; i++) {
        if(window.$featureData.contents[i].contentId ===item){
            node.getElementsByClassName('o-feature-brand')[0].textContent = window.$featureData.contents[i].primaryTitle;
            node.getElementsByClassName('o-feature-title')[0].textContent = window.$featureData.contents[i].secondaryTitle;
            node.getElementsByClassName('o-feature-description')[0].textContent = window.$featureData.contents[i].description;
            node.getElementsByClassName('o-feature-img-src')[0].value = window.$featureData.contents[i].resourceUrl;
            node.getElementsByClassName('o-feature-action-button')[0].textContent = window.$featureData.contents[i].ctaText;
            node.getElementsByClassName('o-feature-action-url')[0].textContent = window.$featureData.contents[i].ctaUrl;
        }
    }

    document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
    window.$featureData.featureEdited = false; // Enable edit to other feature components
};

FeatureComponent.prototype.addEventListenerToOverlay = function (nodeList) {
    for(var i = 0; i <nodeList.length ; i++) {
        FeatureComponent.prototype._addEventListenerToNode(nodeList[i]);
    }
};

FeatureComponent.prototype._addEventListenerToNode = function (node) {  
	node.addEventListener('click', function () {
		//Check if any other feature components are in edit mode
		if(window.$featureData.featureEdited == false){
            document.getElementById("makeLiveBtn").disabled = true; // Disable Make Live button
			if (this.parentNode.className.indexOf('o-feature-editable-content') == -1) {
				this.parentNode.className += ' ' + 'o-feature-editable-content';
				window.$featureData.featureEdited = true;// Disable edit to other feature components
			}
		}
	});
  node.parentNode.getElementsByClassName('o-feature-save')[0].addEventListener('click', function () {
      this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className.replace(' o-feature-editable-content', '');
      this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className = this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
  });
  //node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("img")[0].addEventListener('click', function () {
  //    if(this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
  //        this.parentNode.className +=  ' '+ 'o-feature-img-border-edit';
  //    }
  //});
  node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("a")[0].addEventListener('click', function (args) {

      var linkId = args.target.id;

      if (args.target.innerHTML == 'Change Image') {
          document.getElementById(linkId).innerHTML = 'Done';
          if (this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
              this.parentNode.className += ' ' + 'o-feature-img-border-edit';
          }
      }else if (args.target.innerHTML == 'Done') {
          document.getElementById(linkId).innerHTML = 'Change Image';
          var perentNode = document.getElementById(linkId).parentNode;
          var newUrl = perentNode.getElementsByTagName('textarea')[0].value;
          perentNode.getElementsByTagName('img')[0].src = newUrl;
          if (this.parentNode.className.indexOf('o-feature-img-border-edit') > -1) {
              this.parentNode.classList.remove("o-feature-img-border-edit");
          }
      }
  });
    node.parentNode.getElementsByClassName('o-feature-remove')[0].addEventListener('click', function () {
        if (confirm("Do you want to remove this item?") == true) {
            this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode);
            document.getElementById("makeLiveBtn").disabled = false; // Enable Make Live button
            window.$featureData.featureEdited = false; // Enable edit to other feature components
            document.getElementById("saveWatcher").value = true;
        }
    });
};

FeatureComponent.prototype._prepareTemplate = function (data, options) {

    var _output = document.createElement('section');
    _output.setAttribute('class','o-feature-main');

    var _previous_row = document.createElement('section');
    _previous_row.setAttribute('class','o-feature-row');

    var _addCellAdded = false;

    var _row = document.createElement('section');
    if (options.editMode) {
        _row.setAttribute('class','o-feature-row o-feature-row-edit');
    } else {
        _row.setAttribute('class','o-feature-row o-feature-published');
    }


    for (var cellCount = 0; cellCount < data.length; cellCount++) {
          var _cell = '';
        _cell = document.createElement('article');
        if (false /*options.editMode*/) {

          _cell.setAttribute('class','o-feature-cell o-feature-cell-edit');
          _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
        } else {
         // _cell = document.createElement('article');
          _cell.setAttribute('class','o-feature-cell');
          _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
        }
        

        _row.appendChild(_cell);
        _previous_row = _row;
      
       if (cellCount == data.length - 1) {
         _output.appendChild(_previous_row);
        }
    }


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
