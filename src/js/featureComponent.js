
var FeatureComponent = function () {};

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');

var templateAddCell = require('../html/templateAddCell.js');

var Hogan = require('./hogan.js');

FeatureComponent.prototype.constants = {
  noOfElementsInARow: 2,
  placeHolderText: {
    "type":"image",
    "displaySequence":"1",
    "primaryTitle": "Add Feature Title",
    "secondaryTitle": "Add Title",
    "description": "Add a short description that briefly describes the feature.",
    "resourceUrl": "http://imageshack.com/a/img903/1701/u1yK5g.png",
    "ctaText":"Add Button Label",
    "ctaUrl":"Enter or Paste URL"
  }
};

FeatureComponent.prototype.init = function(options, data, element) {

  this.element = element;
  this.data = data;
  var _compiledTemplate = this._prepareTemplate(data, options);
  document.getElementById(element).appendChild(_compiledTemplate);

  if (options.editMode) {
      FeatureComponent.prototype.addEventListenerToOverlay(document.getElementsByClassName('o-feature-overlay'));
  }
  return this;
};

FeatureComponent.prototype.addEventListenerToOverlay = function (nodeList) {
    for(var i = 0; i <nodeList.length -1 ; i++) {
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
          this.parentNode.parentNode.parentNode.parentNode.removeChild(node.parentNode);
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
            _row.setAttribute('class','o-feature-row');
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
          if(options.editMode) {
              var _addCell = document.createElement('article');
              _addCell.setAttribute('class','o-feature-cell o-feature-cell-edit');
              _addCell.innerHTML = Hogan.compile(templateAddCell).render();
              _previous_row.appendChild(_addCell)

              _addCellAdded = true;
          }
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

    _cell.innerHTML = Hogan.compile(templateEditCell).render(FeatureComponent.prototype.constants.placeHolderText);
    this.parentNode.insertBefore(_cell,this.nextSibling);
    FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
  });

  childNode.parentNode.insertBefore(addNewElement,childNode.nextSibling);
  childNode.parentNode.insertBefore(clearfixElement,childNode.nextSibling);
};

module.exports = FeatureComponent;
