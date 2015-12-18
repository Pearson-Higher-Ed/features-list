(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*global require*/
"use strict";

require('../../main');

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

var data = [{
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}, {
  "type": "video",
  "displaySequence": "1",
  "primaryTitle": "Revel Tm History Feature",
  "secondaryTitle": "Explorer Activities",
  "description": "some description",
  "resourceUrl": "http://imageshack.com/a/img910/9714/1QhPgK.png",
  "ctaText": "Launch Activity",
  "ctaUrl": "http://www.youtube,com"
}];

var options = {
  editMode: true
};

var options2 = {
  editMode: false
};

window.editComp = new $featureComponent().init(options, data, 'testId');

window.viewComp = new $featureComponent().init(options2, data, 'testId2');

},{"../../main":2}],2:[function(require,module,exports){
/*global require, module*/
'use strict';

window.$featureComponent = require('./src/js/featureComponent');

},{"./src/js/featureComponent":6}],3:[function(require,module,exports){
"use strict";

var templateAddCell = "";
templateAddCell += "<div class=\"o-feature-cell-container\">";
templateAddCell += "				<div class=\"o-feature-overlay o-feature-add\">";
templateAddCell += "					<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"";
templateAddCell += "	 viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">";
templateAddCell += "";
templateAddCell += "					<g>";
templateAddCell += "						<g id=\"_x31__26_\">";
templateAddCell += "							<g>";
templateAddCell += "								<path d=\"M420.75,286.875h-95.625V191.25c0-10.557-8.568-19.125-19.125-19.125c-10.557,0-19.125,8.568-19.125,19.125v95.625";
templateAddCell += "									H191.25c-10.557,0-19.125,8.568-19.125,19.125c0,10.557,8.568,19.125,19.125,19.125h95.625v95.625";
templateAddCell += "									c0,10.557,8.568,19.125,19.125,19.125c10.557,0,19.125-8.568,19.125-19.125v-95.625h95.625c10.557,0,19.125-8.568,19.125-19.125";
templateAddCell += "									C439.875,295.443,431.307,286.875,420.75,286.875z M535.5,0h-459C34.253,0,0,34.253,0,76.5v459C0,577.747,34.253,612,76.5,612";
templateAddCell += "									h459c42.247,0,76.5-34.253,76.5-76.5v-459C612,34.253,577.747,0,535.5,0z M573.75,535.5c0,21.133-17.136,38.25-38.25,38.25h-459";
templateAddCell += "									c-21.133,0-38.25-17.117-38.25-38.25v-459c0-21.133,17.117-38.25,38.25-38.25h459c21.114,0,38.25,17.136,38.25,38.25V535.5z\"\/>";
templateAddCell += "							<\/g>";
templateAddCell += "						<\/g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "					<g>";
templateAddCell += "					<\/g>";
templateAddCell += "				<\/svg>";
templateAddCell += "				<\/div>";
templateAddCell += "				<div class=\"o-feature-brand\"><\/div>";
templateAddCell += "				<div class=\"o-feature-content\">";
templateAddCell += "					";
templateAddCell += "				<\/div>";
templateAddCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateAddCell += "			<\/div>";

module.exports = templateAddCell;

},{}],4:[function(require,module,exports){
'use strict';

var templateCell = '<div class="o-feature-brand">{{primaryTitle}}</div>' + '<div class="o-feature-content"> ' + '<div class="o-feature-left"> ' + '<header class="o-feature-title"> ' + '{{secondaryTitle}} ' + '</header> ' + '<div class="o-feature-description"> ' + '<p>{{description}}</p> ' + '</div> ' + '</div> ' + '<div class="o-feature-right"> ' + '<div class="o-feature-img-border"> ' + '<img src="{{resourceUrl}}"> ' + '</div> ' + '</div> ' + '</div> ' + '<div class="o-feature-clearfix"></div> ' + '<div class="o-feature-button"> ' + '<button class=\"o-feature-action-button\" href="{{ctaUrl}}"><div>{{ctaText}}<\/div></button> ' + '</div> ';

module.exports = templateCell;

},{}],5:[function(require,module,exports){
"use strict";

var templateEditCell = "";
templateEditCell += "<div class=\"o-feature-cell-container\">";
templateEditCell += "				<div class=\"o-feature-overlay\">";
templateEditCell += "					";
templateEditCell += "					<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"";
templateEditCell += "				 		viewBox=\"0 0 482.14 482.14\" style=\"enable-background:new 0 0 482.14 482.14;\" xml:space=\"preserve\">";
templateEditCell += "					<g>";
templateEditCell += "						<path d=\"M341.766,430.824c0,10.969-8.903,19.874-19.856,19.874H57.687c-10.953,0-19.875-8.905-19.875-19.874V51.315";
templateEditCell += "							c0-10.953,8.922-19.858,19.875-19.858l181.89-0.188v67.217c0,16.991,11.932,31.159,27.849,34.704l58.684-58.683L251.333,0H57.687";
templateEditCell += "							C29.398,0,6.372,23.026,6.372,51.315v379.509c0,28.289,23.026,51.316,51.315,51.316H321.91c28.273,0,51.3-23.026,51.3-51.316";
templateEditCell += "							V215.877l-31.899,31.898L341.766,430.824z\"\/>";
templateEditCell += "						<path d=\"M375.967,70.291c-2.27-2.271-5.352-3.547-8.558-3.547c-3.207,0-6.29,1.276-8.559,3.547L120.476,308.666";
templateEditCell += "							c-1.441,1.441-2.499,3.223-3.065,5.178l-19.93,68.517c-1.229,4.239-0.055,8.818,3.065,11.938c2.301,2.302,5.39,3.548,8.558,3.548";
templateEditCell += "							c1.127,0,2.269-0.158,3.381-0.482l68.518-19.921c1.955-0.568,3.734-1.624,5.177-3.065l238.375-238.376";
templateEditCell += "							c4.729-4.727,4.729-12.387,0-17.115L375.967,70.291z M367.409,95.965l15.737,15.736l-211.04,211.038l-15.736-15.737L367.409,95.965";
templateEditCell += "							z M149.073,361.519l-15.737-15.737l6.211-21.37l30.897,30.889L149.073,361.519z\"\/>";
templateEditCell += "						<path d=\"M462.152,32.695c-8.778-8.78-20.44-13.61-32.852-13.61c-12.413,0-24.074,4.83-32.853,13.61l-4.704,4.704";
templateEditCell += "							c-4.729,4.729-4.729,12.388,0,17.115l48.588,48.598c2.365,2.362,5.462,3.546,8.558,3.546c3.098,0,6.186-1.184,8.55-3.539";
templateEditCell += "							l4.729-4.719c8.77-8.78,13.6-20.449,13.6-32.854C475.768,53.309,470.804,41.331,462.152,32.695z M448.424,76.965l-30.536-30.534";
templateEditCell += "							c8.377-5.044,20.032-3.72,27.155,3.388c4.137,4.138,6.517,9.873,6.517,15.728C451.56,69.63,450.466,73.553,448.424,76.965z\"\/>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<g>";
templateEditCell += "					<\/g>";
templateEditCell += "					<\/svg>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-brand\" contenteditable>{{primaryTitle}}<\/div>";
templateEditCell += "				<div class=\"o-feature-content\">";
templateEditCell += "					<div class=\"o-feature-left\">";
templateEditCell += "						<header class=\"o-feature-title\" contenteditable>";
templateEditCell += "							{{secondaryTitle}}";
templateEditCell += "						<\/header>";
templateEditCell += "						<div class=\"o-feature-description\">";
templateEditCell += "							<p contenteditable>{{description}}<\/p>";
templateEditCell += "						<\/div>";
templateEditCell += "					<\/div>";
templateEditCell += "					<div class=\"o-feature-right\">";
templateEditCell += "						<div class=\"o-feature-img-border\">";
templateEditCell += "							<img src=\"{{resourceUrl}}\">";
templateEditCell += "							<textarea>{{resourceUrl}}<\/textarea>";
templateEditCell += "							<a class=\"o-feature-change-link\">Change Image<\/a>";
templateEditCell += "						<\/div>";
templateEditCell += "					<\/div>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "				<div class=\"o-feature-button\">";
templateEditCell += "					<button class=\"o-feature-action-button\" href=\"{{ctaUrl}}\" contenteditable><div>{{ctaText}}<\/div><\/button>";
templateEditCell += "					<div class=\"o-feature-action-url-colon\">&nbsp;:&nbsp;<\/div>";
templateEditCell += "					<div class=\"o-feature-action-url\" contenteditable>{{ctaUrl}}<\/div>";
templateEditCell += "					<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "					<div class=\"o-feature-button-group\">";
templateEditCell += "						<button class=\"o-feature-cancel\">Cancel<\/button>";
templateEditCell += "						<button class=\"o-feature-save\">Save<\/button>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "			<\/div>";

module.exports = templateEditCell;

},{}],6:[function(require,module,exports){
'use strict';

var FeatureComponent = function FeatureComponent() {};

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');

var templateAddCell = require('../html/templateAddCell.js');

var Hogan = require('./hogan.js');

FeatureComponent.prototype.constants = {
  noOfElementsInARow: 2,
  placeHolderText: {
    "type": "image",
    "displaySequence": "1",
    "primaryTitle": "Add Feature Title",
    "secondaryTitle": "Add Title",
    "description": "Add a short description that briefly describes the feature.",
    "resourceUrl": "http://imageshack.com/a/img903/1701/u1yK5g.png",
    "ctaText": "Add Button Label",
    "ctaUrl": "Enter or Paste URL"
  }
};

FeatureComponent.prototype.init = function (options, data, element) {

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
  for (var i = 0; i < nodeList.length - 1; i++) {
    FeatureComponent.prototype._addEventListenerToNode(nodeList[i]);
  }
};

FeatureComponent.prototype._addEventListenerToNode = function (node) {
  node.addEventListener('click', function () {
    if (this.parentNode.className.indexOf('o-feature-editable-content') == -1) {
      this.parentNode.className += ' ' + 'o-feature-editable-content';
    }
  });
  node.parentNode.getElementsByClassName('o-feature-save')[0].addEventListener('click', function () {
    this.parentNode.parentNode.parentNode.className = this.parentNode.parentNode.parentNode.className.replace(' o-feature-editable-content', '');
    this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className = this.parentNode.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
  });
  node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("img")[0].addEventListener('click', function () {
    if (this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
      this.parentNode.className += ' ' + 'o-feature-img-border-edit';
    }
  });
  node.parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("a")[0].addEventListener('click', function () {
    if (this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
      this.parentNode.className += ' ' + 'o-feature-img-border-edit';
    }
  });
};

FeatureComponent.prototype._prepareTemplate = function (data, options) {

  var _output = document.createElement('section');
  _output.setAttribute('class', 'o-feature-main');

  var _previous_row = document.createElement('section');
  _previous_row.setAttribute('class', 'o-feature-row');

  var _addCellAdded = false;

  for (var cellCount = 0; cellCount < data.length; cellCount++) {

    if (cellCount % FeatureComponent.prototype.constants.noOfElementsInARow == 0) {

      var _row = document.createElement('section');
      if (options.editMode) {
        _row.setAttribute('class', 'o-feature-row o-feature-row-edit');
      } else {
        _row.setAttribute('class', 'o-feature-row');
      }

      var _cell = '';
      if (options.editMode) {
        _cell = document.createElement('article');
        _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');
        _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
      } else {
        _cell = document.createElement('article');
        _cell.setAttribute('class', 'o-feature-cell');
        _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
      }

      _row.appendChild(_cell);
      _previous_row = _row;

      if (cellCount == data.length - 1) {
        if (options.editMode) {
          var _addCell = document.createElement('article');
          _addCell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');
          _addCell.innerHTML = Hogan.compile(templateAddCell).render();
          _previous_row.appendChild(_addCell);

          _addCellAdded = true;
        }
        _output.appendChild(_previous_row);
      }
    } else {

      var _cell = document.createElement('article');

      if (options.editMode) {
        _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');
        _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
      } else {
        _cell.setAttribute('class', 'o-feature-cell');
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
    _cell.setAttribute('class', 'o-feature-cell o-feature-cell-edit');

    _cell.innerHTML = Hogan.compile(templateEditCell).render(FeatureComponent.prototype.constants.placeHolderText);
    this.parentNode.insertBefore(_cell, this.nextSibling);
    FeatureComponent.prototype._addEventListenerToNode(_cell.getElementsByClassName('o-feature-overlay')[0]);
  });

  childNode.parentNode.insertBefore(addNewElement, childNode.nextSibling);
  childNode.parentNode.insertBefore(clearfixElement, childNode.nextSibling);
};

module.exports = FeatureComponent;

},{"../html/templateAddCell.js":3,"../html/templateCell.js":4,"../html/templateEditCell.js":5,"./hogan.js":7}],7:[function(require,module,exports){
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

'use strict';

var HoganTemplate = (function () {

  function constructor(text) {
    this.text = text;
  };

  constructor.prototype = {
    // render: replaced by generated code.
    r: function r(context, partials) {
      return '';
    },

    // variable escaping
    v: hoganEscape,

    render: function render(context, partials) {
      return this.r(context, partials);
    },

    // tries to find a partial in the curent scope and render it
    rp: function rp(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      return partial.render(context, partials);
    },

    // render a section
    rs: function rs(context, partials, section) {
      var buf = '';
      var tail = context[context.length - 1];
      if (!isArray(tail)) {
        buf = section(context, partials);
        return buf;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        buf += section(context, partials);
        context.pop();
      }
      return buf;
    },

    // maybe start a section
    s: function s(val, ctx, partials, inverted, start, end) {
      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (!inverted && typeof val == 'function') {
        val = this.ls(val, ctx, partials, start, end);
      }

      var pass = val === '' || !!val;

      if (!inverted && pass && ctx) {
        ctx.push(typeof val == 'object' ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function d(key, ctx, partials, returnFound) {
      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      var names = key.split('.');
      var val = this.f(names[0], ctx, partials, returnFound);
      var cx = null;
      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function f(key, ctx, partials, returnFound) {
      var val = false;
      var v = null;
      var found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return returnFound ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function ho(val, cx, partials, text) {
      var t = val.call(cx, text, function (t) {
        return Hogan.compile(t).render(cx);
      });
      var s = Hogan.compile(t.toString()).render(cx, partials);
      this.b = s;
      return false;
    },

    // higher order template result buffer
    b: '',

    // lambda replace section
    ls: function ls(val, ctx, partials, start, end) {
      var cx = ctx[ctx.length - 1];
      if (val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end));
      }
      var t = val.call(cx);
      if (typeof t == 'function') {
        return this.ho(t, cx, partials, this.text.substring(start, end));
      }
      return t;
    },

    // lambda replace variable
    lv: function lv(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      return Hogan.compile(val.call(cx).toString()).render(cx, partials);
    }
  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;
  function hoganEscape(str) {
    var s = String(str === null ? '' : str);
    return hChars.test(s) ? s.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : s;
  }

  var isArray = Array.isArray || function (a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

  return constructor;
})();

var Hogan = (function () {

  function scan(text) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace = tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v'] || !tokens[j].tag && tokens[j].match(rIsWhitespace) == null;
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();
      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({ tag: '\n' });
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag;
      var closeIndex = text.indexOf(close, index);
      var delimiters = trim(text.substring(text.indexOf('=', index) + 1, closeIndex)).split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
      return closeIndex + close.length - 1;
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text[i] == '\n') {
            filterLine(seenTag);
          } else {
            buf += text[i];
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        var tag = tagTypes[text[i + 1]];
        tagType = tag ? text[i + 1] : '_v';
        seenTag = i;
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
      } else {
        if (tagChange(ctag, text, i)) {
          i += ctag.length - 1;
          tokens.push({ tag: tagType, n: trim(buf),
            i: tagType == '/' ? seenTag - 1 : i + 1 });
          buf = '';
          state = IN_TEXT;
          if (tagType == '{') {
            i++;
          }
        } else {
          buf += text[i];
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/;

  var tagTypes = {
    '#': 1, '^': 2, '/': 3, '!': 4, '>': 5,
    '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
  };

  function tagChange(tag, text, index) {
    if (text[index] != tag[0]) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text[index + i] != tag[i]) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length == 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function generate(tree, text, options) {
    var code = 'var c = [cx];var b = "";var _ = this;' + walk(tree) + 'return b;';
    if (options.asString) {
      return 'function(cx,p){' + code + ';};';
    }

    var template = new HoganTemplate(text);
    template.r = new Function('cx', 'p', code);
    return template;
  }

  var rQuot = /\"/g,
      rNewline = /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g;
  function esc(s) {
    return s.replace(rSlash, '\\\\').replace(rQuot, '\\\"').replace(rNewline, '\\n').replace(rCr, '\\r');
  };

  function chooseMethod(s) {
    return ~s.indexOf('.') ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n), tree[i].i, tree[i].end);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i].n);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('\n');
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text(tree[i]);
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end) {
    var code = 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),';
    code += 'c,p,0,' + start + ',' + end + ')){';
    code += 'b += _.rs(c,p,';
    code += 'function(c,p){ var b = "";';
    code += walk(nodes);
    code += 'return b;});c.pop();}';
    code += 'else{b += _.b; _.b = ""};';
    return code;
  }

  function invertedSection(nodes, id, method) {
    var code = 'if (!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0)){';
    code += walk(nodes);
    code += '};';
    return code;
  }

  function partial(id) {
    return 'b += _.rp("' + esc(id) + '",c[c.length - 1],p);';
  }

  function tripleStache(id, method) {
    return 'b += (_.' + method + '("' + esc(id) + '",c,p,0));';
  }

  function variable(id, method) {
    return 'b += (_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return 'b += "' + esc(id) + '";';
  }

  return {
    scan: scan,

    parse: function parse(tokens, options) {
      options = options || {};
      return buildTree(tokens, '', [], options.sectionTags || []);
    },

    cache: {},

    compile: function compile(text, options) {
      // options
      //
      // asString: false (default)
      //
      // sectionTags: [{o: '_foo', c: 'foo'}]
      // An array of object with o and c fields that indicate names for custom
      // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
      //
      options = options || {};

      var t = this.cache[text];
      if (t) {
        return t;
      }
      t = generate(this.parse(scan(text), options), text, options);
      return this.cache[text] = t;
    }
  };
})();

// Export the hogan constructor for Node.js and CommonJS.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Hogan;
  module.exports.Template = HoganTemplate;
} else if (typeof exports !== 'undefined') {
  exports.Hogan = Hogan;
  exports.HoganTemplate = HoganTemplate;
}

},{}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL29yaWdhbWktYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW9zL3NyYy9kZW1vLmpzIiwibWFpbi5qcyIsInNyYy9odG1sL3RlbXBsYXRlQWRkQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlRWRpdENlbGwuanMiLCJzcmMvanMvZmVhdHVyZUNvbXBvbmVudC5qcyIsInNyYy9qcy9ob2dhbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7QUFDeEQsY0FBWSxDQUFDO0FBQ2IsVUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDOztBQUVILElBQUksSUFBSSxHQUFHLENBQ047QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsRUFDRjtBQUNFLFFBQU0sRUFBQyxPQUFPO0FBQ2QsbUJBQWlCLEVBQUMsR0FBRztBQUNyQixnQkFBYyxFQUFFLDBCQUEwQjtBQUMxQyxrQkFBZ0IsRUFBRSxxQkFBcUI7QUFDdkMsZUFBYSxFQUFFLGtCQUFrQjtBQUNqQyxlQUFhLEVBQUUsZ0RBQWdEO0FBQy9ELFdBQVMsRUFBQyxpQkFBaUI7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LGVBQWUsSUFBSSxjQUFjLENBQUM7QUFDbEMsZUFBZSxJQUFJLGFBQWEsQ0FBQztBQUNqQyxlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFDOUIsZUFBZSxJQUFJLFlBQVksQ0FBQztBQUNoQyxlQUFlLElBQUksVUFBVSxDQUFDO0FBQzlCLGVBQWUsSUFBSSxZQUFZLENBQUM7QUFDaEMsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUM5QixlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFDOUIsZUFBZSxJQUFJLFlBQVksQ0FBQztBQUNoQyxlQUFlLElBQUksVUFBVSxDQUFDO0FBQzlCLGVBQWUsSUFBSSxZQUFZLENBQUM7QUFDaEMsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUM5QixlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFDOUIsZUFBZSxJQUFJLFlBQVksQ0FBQztBQUNoQyxlQUFlLElBQUksVUFBVSxDQUFDO0FBQzlCLGVBQWUsSUFBSSxZQUFZLENBQUM7QUFDaEMsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUM5QixlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFDOUIsZUFBZSxJQUFJLFlBQVksQ0FBQztBQUNoQyxlQUFlLElBQUksVUFBVSxDQUFDO0FBQzlCLGVBQWUsSUFBSSxZQUFZLENBQUM7QUFDaEMsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUM5QixlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxVQUFVLENBQUM7QUFDOUIsZUFBZSxJQUFJLFlBQVksQ0FBQztBQUNoQyxlQUFlLElBQUksVUFBVSxDQUFDO0FBQzlCLGVBQWUsSUFBSSxZQUFZLENBQUM7QUFDaEMsZUFBZSxJQUFJLFVBQVUsQ0FBQztBQUM5QixlQUFlLElBQUksWUFBWSxDQUFDO0FBQ2hDLGVBQWUsSUFBSSxhQUFhLENBQUM7QUFDakMsZUFBZSxJQUFJLGFBQWEs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QUFFLENBQUMsQ0FBQztLQUM3RDs7QUFFRCxTQUFLLEVBQUUsRUFBRTs7QUFFVCxXQUFPLEVBQUUsaUJBQVMsSUFBSSxFQUFFLE9BQU8sRUFBRTs7Ozs7Ozs7O0FBUy9CLGFBQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDOztBQUV4QixVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxFQUFFO0FBQ0wsZUFBTyxDQUFDLENBQUM7T0FDVjtBQUNELE9BQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzdELGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFFO0NBQ0osQ0FBQSxFQUFHLENBQUM7OztBQUdMLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDbkQsUUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDdkIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0NBQ3pDLE1BQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7QUFDekMsU0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdEIsU0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDdkMiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypnbG9iYWwgcmVxdWlyZSovXG5yZXF1aXJlKCcuLi8uLi9tYWluJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ28uRE9NQ29udGVudExvYWRlZCcpKTtcbn0pO1xuXG52YXIgZGF0YSA9IFtcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH0sXG4gICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH1cbiAgIF07XG5cbnZhciBvcHRpb25zID0ge1xuICBlZGl0TW9kZTogdHJ1ZVxufTtcblxudmFyIG9wdGlvbnMyID0ge1xuICBlZGl0TW9kZTogZmFsc2Vcbn07XG5cbndpbmRvdy5lZGl0Q29tcCA9IG5ldyAkZmVhdHVyZUNvbXBvbmVudCgpLmluaXQob3B0aW9ucywgZGF0YSwgJ3Rlc3RJZCcpO1xuXG53aW5kb3cudmlld0NvbXAgPSBuZXcgJGZlYXR1cmVDb21wb25lbnQoKS5pbml0KG9wdGlvbnMyLCBkYXRhLCAndGVzdElkMicpOyIsIi8qZ2xvYmFsIHJlcXVpcmUsIG1vZHVsZSovXG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy4kZmVhdHVyZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vc3JjL2pzL2ZlYXR1cmVDb21wb25lbnQnKTtcblxuIiwidmFyIHRlbXBsYXRlQWRkQ2VsbD1cIlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiPGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNlbGwtY29udGFpbmVyXFxcIj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLW92ZXJsYXkgby1mZWF0dXJlLWFkZFxcXCI+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmdcXC8yMDAwXFwvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnXFwvMTk5OVxcL3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0IHZpZXdCb3g9XFxcIjAgMCA2MTIgNjEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIgNjEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdDxnIGlkPVxcXCJfeDMxX18yNl9cXFwiPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBkPVxcXCJNNDIwLjc1LDI4Ni44NzVoLTk1LjYyNVYxOTEuMjVjMC0xMC41NTctOC41NjgtMTkuMTI1LTE5LjEyNS0xOS4xMjVjLTEwLjU1NywwLTE5LjEyNSw4LjU2OC0xOS4xMjUsMTkuMTI1djk1LjYyNVwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdFx0SDE5MS4yNWMtMTAuNTU3LDAtMTkuMTI1LDguNTY4LTE5LjEyNSwxOS4xMjVjMCwxMC41NTcsOC41NjgsMTkuMTI1LDE5LjEyNSwxOS4xMjVoOTUuNjI1djk1LjYyNVwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdFx0YzAsMTAuNTU3LDguNTY4LDE5LjEyNSwxOS4xMjUsMTkuMTI1YzEwLjU1NywwLDE5LjEyNS04LjU2OCwxOS4xMjUtMTkuMTI1di05NS42MjVoOTUuNjI1YzEwLjU1NywwLDE5LjEyNS04LjU2OCwxOS4xMjUtMTkuMTI1XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHRDNDM5Ljg3NSwyOTUuNDQzLDQzMS4zMDcsMjg2Ljg3NSw0MjAuNzUsMjg2Ljg3NXogTTUzNS41LDBoLTQ1OUMzNC4yNTMsMCwwLDM0LjI1MywwLDc2LjV2NDU5QzAsNTc3Ljc0NywzNC4yNTMsNjEyLDc2LjUsNjEyXCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHRoNDU5YzQyLjI0NywwLDc2LjUtMzQuMjUzLDc2LjUtNzYuNXYtNDU5QzYxMiwzNC4yNTMsNTc3Ljc0NywwLDUzNS41LDB6IE01NzMuNzUsNTM1LjVjMCwyMS4xMzMtMTcuMTM2LDM4LjI1LTM4LjI1LDM4LjI1aC00NTlcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdGMtMjEuMTMzLDAtMzguMjUtMTcuMTE3LTM4LjI1LTM4LjI1di00NTljMC0yMS4xMzMsMTcuMTE3LTM4LjI1LDM4LjI1LTM4LjI1aDQ1OWMyMS4xMTQsMCwzOC4yNSwxNy4xMzYsMzguMjUsMzguMjVWNTM1LjV6XFxcIlxcLz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PFxcL3N2Zz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWJyYW5kXFxcIj48XFwvZGl2PlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY29udGVudFxcXCI+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jbGVhcmZpeFxcXCI+PFxcL2Rpdj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdDxcXC9kaXY+XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZUFkZENlbGw7IiwiXG5cbnZhciB0ZW1wbGF0ZUNlbGwgPSBcblxuXHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWJyYW5kXCI+e3twcmltYXJ5VGl0bGV9fTwvZGl2PicgK1xuXHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWNvbnRlbnRcIj4gJyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1sZWZ0XCI+ICcgK1xuXHRcdFx0XHQnPGhlYWRlciBjbGFzcz1cIm8tZmVhdHVyZS10aXRsZVwiPiAnICtcblx0XHRcdFx0XHQne3tzZWNvbmRhcnlUaXRsZX19ICcgK1xuXHRcdFx0XHQnPC9oZWFkZXI+ICcgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1kZXNjcmlwdGlvblwiPiAnICtcblx0XHRcdFx0XHQnPHA+e3tkZXNjcmlwdGlvbn19PC9wPiAnICtcblx0XHRcdFx0JzwvZGl2PiAnICtcblx0XHRcdCc8L2Rpdj4gJyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1yaWdodFwiPiAnICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtaW1nLWJvcmRlclwiPiAnICtcblx0XHRcdFx0XHQnPGltZyBzcmM9XCJ7e3Jlc291cmNlVXJsfX1cIj4gJyArXG5cdFx0XHRcdCc8L2Rpdj4gJyArXG5cdFx0XHQnPC9kaXY+ICcgK1xuXHRcdCc8L2Rpdj4gJyArXG5cdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtY2xlYXJmaXhcIj48L2Rpdj4gJyArXG5cdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtYnV0dG9uXCI+ICcgK1xuXHRcdFx0JzxidXR0b24gY2xhc3M9XFxcIm8tZmVhdHVyZS1hY3Rpb24tYnV0dG9uXFxcIiBocmVmPVwie3tjdGFVcmx9fVwiPjxkaXY+e3tjdGFUZXh0fX08XFwvZGl2PjwvYnV0dG9uPiAnICtcblx0XHQnPC9kaXY+ICc7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVDZWxsO1xuIiwiXG5cbnZhciB0ZW1wbGF0ZUVkaXRDZWxsPVwiXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiPGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNlbGwtY29udGFpbmVyXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1vdmVybGF5XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnXFwvMjAwMFxcL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFwvXFwvd3d3LnczLm9yZ1xcLzE5OTlcXC94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQgXHRcdHZpZXdCb3g9XFxcIjAgMCA0ODIuMTQgNDgyLjE0XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODIuMTQgNDgyLjE0O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxwYXRoIGQ9XFxcIk0zNDEuNzY2LDQzMC44MjRjMCwxMC45NjktOC45MDMsMTkuODc0LTE5Ljg1NiwxOS44NzRINTcuNjg3Yy0xMC45NTMsMC0xOS44NzUtOC45MDUtMTkuODc1LTE5Ljg3NFY1MS4zMTVcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMwLTEwLjk1Myw4LjkyMi0xOS44NTgsMTkuODc1LTE5Ljg1OGwxODEuODktMC4xODh2NjcuMjE3YzAsMTYuOTkxLDExLjkzMiwzMS4xNTksMjcuODQ5LDM0LjcwNGw1OC42ODQtNTguNjgzTDI1MS4zMzMsMEg1Ny42ODdcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdEMyOS4zOTgsMCw2LjM3MiwyMy4wMjYsNi4zNzIsNTEuMzE1djM3OS41MDljMCwyOC4yODksMjMuMDI2LDUxLjMxNiw1MS4zMTUsNTEuMzE2SDMyMS45MWMyOC4yNzMsMCw1MS4zLTIzLjAyNiw1MS4zLTUxLjMxNlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0VjIxNS44NzdsLTMxLjg5OSwzMS44OThMMzQxLjc2Niw0MzAuODI0elxcXCJcXC8+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PHBhdGggZD1cXFwiTTM3NS45NjcsNzAuMjkxYy0yLjI3LTIuMjcxLTUuMzUyLTMuNTQ3LTguNTU4LTMuNTQ3Yy0zLjIwNywwLTYuMjksMS4yNzYtOC41NTksMy41NDdMMTIwLjQ3NiwzMDguNjY2XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTEuNDQxLDEuNDQxLTIuNDk5LDMuMjIzLTMuMDY1LDUuMTc4bC0xOS45Myw2OC41MTdjLTEuMjI5LDQuMjM5LTAuMDU1LDguODE4LDMuMDY1LDExLjkzOGMyLjMwMSwyLjMwMiw1LjM5LDMuNTQ4LDguNTU4LDMuNTQ4XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjMS4xMjcsMCwyLjI2OS0wLjE1OCwzLjM4MS0wLjQ4Mmw2OC41MTgtMTkuOTIxYzEuOTU1LTAuNTY4LDMuNzM0LTEuNjI0LDUuMTc3LTMuMDY1bDIzOC4zNzUtMjM4LjM3NlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0YzQuNzI5LTQuNzI3LDQuNzI5LTEyLjM4NywwLTE3LjExNUwzNzUuOTY3LDcwLjI5MXogTTM2Ny40MDksOTUuOTY1bDE1LjczNywxNS43MzZsLTIxMS4wNCwyMTEuMDM4bC0xNS43MzYtMTUuNzM3TDM2Ny40MDksOTUuOTY1XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHR6IE0xNDkuMDczLDM2MS41MTlsLTE1LjczNy0xNS43MzdsNi4yMTEtMjEuMzdsMzAuODk3LDMwLjg4OUwxNDkuMDczLDM2MS41MTl6XFxcIlxcLz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8cGF0aCBkPVxcXCJNNDYyLjE1MiwzMi42OTVjLTguNzc4LTguNzgtMjAuNDQtMTMuNjEtMzIuODUyLTEzLjYxYy0xMi40MTMsMC0yNC4wNzQsNC44My0zMi44NTMsMTMuNjFsLTQuNzA0LDQuNzA0XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTQuNzI5LDQuNzI5LTQuNzI5LDEyLjM4OCwwLDE3LjExNWw0OC41ODgsNDguNTk4YzIuMzY1LDIuMzYyLDUuNDYyLDMuNTQ2LDguNTU4LDMuNTQ2YzMuMDk4LDAsNi4xODYtMS4xODQsOC41NS0zLjUzOVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0bDQuNzI5LTQuNzE5YzguNzctOC43OCwxMy42LTIwLjQ0OSwxMy42LTMyLjg1NEM0NzUuNzY4LDUzLjMwOSw0NzAuODA0LDQxLjMzMSw0NjIuMTUyLDMyLjY5NXogTTQ0OC40MjQsNzYuOTY1bC0zMC41MzYtMzAuNTM0XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjOC4zNzctNS4wNDQsMjAuMDMyLTMuNzIsMjcuMTU1LDMuMzg4YzQuMTM3LDQuMTM4LDYuNTE3LDkuODczLDYuNTE3LDE1LjcyOEM0NTEuNTYsNjkuNjMsNDUwLjQ2Niw3My41NTMsNDQ4LjQyNCw3Ni45NjV6XFxcIlxcLz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9zdmc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWJyYW5kXFxcIiBjb250ZW50ZWRpdGFibGU+e3twcmltYXJ5VGl0bGV9fTxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY29udGVudFxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1sZWZ0XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8aGVhZGVyIGNsYXNzPVxcXCJvLWZlYXR1cmUtdGl0bGVcXFwiIGNvbnRlbnRlZGl0YWJsZT5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdHt7c2Vjb25kYXJ5VGl0bGV9fVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxcXC9oZWFkZXI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWRlc2NyaXB0aW9uXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDxwIGNvbnRlbnRlZGl0YWJsZT57e2Rlc2NyaXB0aW9ufX08XFwvcD5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtcmlnaHRcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1pbWctYm9yZGVyXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVxcXCJ7e3Jlc291cmNlVXJsfX1cXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PHRleHRhcmVhPnt7cmVzb3VyY2VVcmx9fTxcXC90ZXh0YXJlYT5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDxhIGNsYXNzPVxcXCJvLWZlYXR1cmUtY2hhbmdlLWxpbmtcXFwiPkNoYW5nZSBJbWFnZTxcXC9hPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNsZWFyZml4XFxcIj48XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWJ1dHRvblxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XFxcIm8tZmVhdHVyZS1hY3Rpb24tYnV0dG9uXFxcIiBocmVmPVxcXCJ7e2N0YVVybH19XFxcIiBjb250ZW50ZWRpdGFibGU+PGRpdj57e2N0YVRleHR9fTxcXC9kaXY+PFxcL2J1dHRvbj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWFjdGlvbi11cmwtY29sb25cXFwiPiZuYnNwOzombmJzcDs8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYWN0aW9uLXVybFxcXCIgY29udGVudGVkaXRhYmxlPnt7Y3RhVXJsfX08XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2xlYXJmaXhcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1idXR0b24tZ3JvdXBcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XFxcIm8tZmVhdHVyZS1jYW5jZWxcXFwiPkNhbmNlbDxcXC9idXR0b24+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiby1mZWF0dXJlLXNhdmVcXFwiPlNhdmU8XFwvYnV0dG9uPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jbGVhcmZpeFxcXCI+PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHQ8XFwvZGl2PlwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVFZGl0Q2VsbDtcbiIsIlxudmFyIEZlYXR1cmVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi4vaHRtbC90ZW1wbGF0ZUNlbGwuanMnKTtcblxudmFyIHRlbXBsYXRlRWRpdENlbGwgPSByZXF1aXJlKCcuLi9odG1sL3RlbXBsYXRlRWRpdENlbGwuanMnKTtcblxudmFyIHRlbXBsYXRlQWRkQ2VsbCA9IHJlcXVpcmUoJy4uL2h0bWwvdGVtcGxhdGVBZGRDZWxsLmpzJyk7XG5cbnZhciBIb2dhbiA9IHJlcXVpcmUoJy4vaG9nYW4uanMnKTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RhbnRzID0ge1xuICBub09mRWxlbWVudHNJbkFSb3c6IDIsXG4gIHBsYWNlSG9sZGVyVGV4dDoge1xuICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcbiAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiQWRkIEZlYXR1cmUgVGl0bGVcIixcbiAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiQWRkIFRpdGxlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBhIHNob3J0IGRlc2NyaXB0aW9uIHRoYXQgYnJpZWZseSBkZXNjcmliZXMgdGhlIGZlYXR1cmUuXCIsXG4gICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkwMy8xNzAxL3UxeUs1Zy5wbmdcIixcbiAgICBcImN0YVRleHRcIjpcIkFkZCBCdXR0b24gTGFiZWxcIixcbiAgICBcImN0YVVybFwiOlwiRW50ZXIgb3IgUGFzdGUgVVJMXCJcbiAgfVxufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRhdGEsIGVsZW1lbnQpIHtcblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB2YXIgX2NvbXBpbGVkVGVtcGxhdGUgPSB0aGlzLl9wcmVwYXJlVGVtcGxhdGUoZGF0YSwgb3B0aW9ucyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLmFwcGVuZENoaWxkKF9jb21waWxlZFRlbXBsYXRlKTtcblxuICBpZiAob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclRvT3ZlcmxheShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtb3ZlcmxheScpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJUb092ZXJsYXkgPSBmdW5jdGlvbiAobm9kZUxpc3QpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDxub2RlTGlzdC5sZW5ndGggLTEgOyBpKyspIHtcbiAgICAgICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJUb05vZGUobm9kZUxpc3RbaV0pO1xuICAgIH1cbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLl9hZGRFdmVudExpc3RlbmVyVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnKSA9PSAtMSkge1xuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gICcgJysgJ28tZmVhdHVyZS1lZGl0YWJsZS1jb250ZW50JztcbiAgICAgIH1cbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtc2F2ZScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZS5yZXBsYWNlKCcgby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnLCAnJyk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ28tZmVhdHVyZS1pbWctYm9yZGVyJylbMF0uY2xhc3NOYW1lID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmNsYXNzTmFtZS5yZXBsYWNlKCcgby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCcsICcnKTtcbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JykgPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NOYW1lICs9ICAnICcrICdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JztcbiAgICAgIH1cbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCcpID09IC0xKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSAgJyAnKyAnby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCc7XG4gICAgICB9XG4gIH0pO1xufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX3ByZXBhcmVUZW1wbGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgX291dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBfb3V0cHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtbWFpbicpO1xuXG4gICAgdmFyIF9wcmV2aW91c19yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgX3ByZXZpb3VzX3Jvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLXJvdycpO1xuXG4gICAgdmFyIF9hZGRDZWxsQWRkZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGNlbGxDb3VudCA9IDA7IGNlbGxDb3VudCA8IGRhdGEubGVuZ3RoOyBjZWxsQ291bnQrKykge1xuXG4gICAgICBpZihjZWxsQ291bnQgJSBGZWF0dXJlQ29tcG9uZW50LnByb3RvdHlwZS5jb25zdGFudHMubm9PZkVsZW1lbnRzSW5BUm93ID09IDApIHtcblxuICAgICAgICB2YXIgX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgIGlmIChvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICBfcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtcm93IG8tZmVhdHVyZS1yb3ctZWRpdCcpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcbiAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBfY2VsbCA9ICcnO1xuICAgICAgICBpZiAob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgICAgIF9jZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICAgIF9jZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtY2VsbCBvLWZlYXR1cmUtY2VsbC1lZGl0Jyk7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwnKTtcbiAgICAgICAgICBfY2VsbC5pbm5lckhUTUwgPSBIb2dhbi5jb21waWxlKHRlbXBsYXRlKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBfcm93LmFwcGVuZENoaWxkKF9jZWxsKTtcbiAgICAgICAgX3ByZXZpb3VzX3JvdyA9IF9yb3c7XG4gICAgICBcbiAgICAgIGlmIChjZWxsQ291bnQgPT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgaWYob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICB2YXIgX2FkZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgICAgICAgICAgIF9hZGRDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtY2VsbCBvLWZlYXR1cmUtY2VsbC1lZGl0Jyk7XG4gICAgICAgICAgICAgIF9hZGRDZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVBZGRDZWxsKS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgX3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfYWRkQ2VsbClcblxuICAgICAgICAgICAgICBfYWRkQ2VsbEFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX291dHB1dC5hcHBlbmRDaGlsZChfcHJldmlvdXNfcm93KTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZWRpdE1vZGUpIHtcbiAgICAgICAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwgby1mZWF0dXJlLWNlbGwtZWRpdCcpO1xuICAgICAgICAgIF9jZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVFZGl0Q2VsbCkucmVuZGVyKGRhdGFbY2VsbENvdW50XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2NlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZSkucmVuZGVyKGRhdGFbY2VsbENvdW50XSk7XG4gICAgICAgIH1cblxuICAgICAgX3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfY2VsbCk7XG4gICAgICBcbiAgICAgIF9vdXRwdXQuYXBwZW5kQ2hpbGQoX3ByZXZpb3VzX3Jvdyk7XG4gICAgICAgIFxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyppZighX2FkZENlbGxBZGRlZCAmJiBvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICB2YXIgX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgIF9yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcblxuICAgICAgdmFyIF9jZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgX2NlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG5cbiAgICAgIF9jZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVBZGRDZWxsKS5yZW5kZXIoKTtcbiAgICAgIF9yb3cuYXBwZW5kQ2hpbGQoX2NlbGwpO1xuICAgICAgXG4gICAgICBfb3V0cHV0LmFwcGVuZENoaWxkKF9yb3cpO1xuICAgIH0qL1xuXG4gIHJldHVybiBfb3V0cHV0O1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBlZGl0TW9kZTogZmFsc2Vcbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLnRyaWdnZXJBZGROZXcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50KTtcbiAgdmFyIGNlbGxBcnJheSA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnby1mZWF0dXJlLWNlbGwnKTtcbiAgZm9yICh2YXIgaSA9IGNlbGxBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBjaGlsZE5vZGUgPSBjZWxsQXJyYXlbaV07XG4gICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2luc2VydEFkZE5ldyhjaGlsZE5vZGUpO1xuICAgIFxuICB9O1xufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2luc2VydEFkZE5ldyA9IGZ1bmN0aW9uIChjaGlsZE5vZGUpIHtcbiAgdmFyIGNsZWFyZml4RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGVhcmZpeEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvLWZlYXR1cmUtY2xlYXJmaXgnKTtcblxuICB2YXIgYWRkTmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGROZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnby1mZWF0dXJlLWFkZC1uZXctY29udGFpbmVyJyk7XG4gIGFkZE5ld0VsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGNsYXNzPVxcJ28tZmVhdHVyZS1hZGQtbmV3LWJ1dHRvblxcJz4gQWRkIE5ldyArIDwvYT4nO1xuICBhZGROZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwgby1mZWF0dXJlLWNlbGwtZWRpdCcpO1xuXG4gICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RhbnRzLnBsYWNlSG9sZGVyVGV4dCk7XG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShfY2VsbCx0aGlzLm5leHRTaWJsaW5nKTtcbiAgICBGZWF0dXJlQ29tcG9uZW50LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lclRvTm9kZShfY2VsbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtb3ZlcmxheScpWzBdKTtcbiAgfSk7XG5cbiAgY2hpbGROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGFkZE5ld0VsZW1lbnQsY2hpbGROb2RlLm5leHRTaWJsaW5nKTtcbiAgY2hpbGROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsZWFyZml4RWxlbWVudCxjaGlsZE5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGZWF0dXJlQ29tcG9uZW50O1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG52YXIgSG9nYW5UZW1wbGF0ZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgZnVuY3Rpb24gY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH07XG5cbiAgY29uc3RydWN0b3IucHJvdG90eXBlID0ge1xuICAgIC8vIHJlbmRlcjogcmVwbGFjZWQgYnkgZ2VuZXJhdGVkIGNvZGUuXG4gICAgcjogZnVuY3Rpb24gKGNvbnRleHQsIHBhcnRpYWxzKSB7IHJldHVybiAnJzsgfSxcblxuICAgIC8vIHZhcmlhYmxlIGVzY2FwaW5nXG4gICAgdjogaG9nYW5Fc2NhcGUsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBwYXJ0aWFscykge1xuICAgICAgcmV0dXJuIHRoaXMucihjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfSxcblxuICAgIC8vIHRyaWVzIHRvIGZpbmQgYSBwYXJ0aWFsIGluIHRoZSBjdXJlbnQgc2NvcGUgYW5kIHJlbmRlciBpdFxuICAgIHJwOiBmdW5jdGlvbihuYW1lLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICB2YXIgcGFydGlhbCA9IHBhcnRpYWxzW25hbWVdO1xuXG4gICAgICBpZiAoIXBhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydGlhbC5yZW5kZXIoY29udGV4dCwgcGFydGlhbHMpO1xuICAgIH0sXG5cbiAgICAvLyByZW5kZXIgYSBzZWN0aW9uXG4gICAgcnM6IGZ1bmN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCBzZWN0aW9uKSB7XG4gICAgICB2YXIgYnVmID0gJyc7XG4gICAgICB2YXIgdGFpbCA9IGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXTtcbiAgICAgIGlmICghaXNBcnJheSh0YWlsKSkge1xuICAgICAgICBidWYgPSBzZWN0aW9uKGNvbnRleHQsIHBhcnRpYWxzKTtcbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWlsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRleHQucHVzaCh0YWlsW2ldKTtcbiAgICAgICAgYnVmICs9IHNlY3Rpb24oY29udGV4dCwgcGFydGlhbHMpO1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9LFxuXG4gICAgLy8gbWF5YmUgc3RhcnQgYSBzZWN0aW9uXG4gICAgczogZnVuY3Rpb24odmFsLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKGlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbnZlcnRlZCAmJiB0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsID0gdGhpcy5scyh2YWwsIGN0eCwgcGFydGlhbHMsIHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFzcyA9ICh2YWwgPT09ICcnKSB8fCAhIXZhbDtcblxuICAgICAgaWYgKCFpbnZlcnRlZCAmJiBwYXNzICYmIGN0eCkge1xuICAgICAgICBjdHgucHVzaCgodHlwZW9mIHZhbCA9PSAnb2JqZWN0JykgPyB2YWwgOiBjdHhbY3R4Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhc3M7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggZG90dGVkIG5hbWVzXG4gICAgZDogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgaWYgKGtleSA9PT0gJy4nICYmIGlzQXJyYXkoY3R4W2N0eC5sZW5ndGggLSAyXSkpIHtcbiAgICAgICAgcmV0dXJuIGN0eFtjdHgubGVuZ3RoIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lcyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMuZihuYW1lc1swXSwgY3R4LCBwYXJ0aWFscywgcmV0dXJuRm91bmQpO1xuICAgICAgdmFyIGN4ID0gbnVsbDtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIG5hbWVzW2ldIGluIHZhbCkge1xuICAgICAgICAgIGN4ID0gdmFsO1xuICAgICAgICAgIHZhbCA9IHZhbFtuYW1lc1tpXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybkZvdW5kICYmICF2YWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJldHVybkZvdW5kICYmIHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjdHgucHVzaChjeCk7XG4gICAgICAgIHZhbCA9IHRoaXMubHYodmFsLCBjdHgsIHBhcnRpYWxzKTtcbiAgICAgICAgY3R4LnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvLyBmaW5kIHZhbHVlcyB3aXRoIG5vcm1hbCBuYW1lc1xuICAgIGY6IGZ1bmN0aW9uKGtleSwgY3R4LCBwYXJ0aWFscywgcmV0dXJuRm91bmQpIHtcbiAgICAgIHZhciB2YWwgPSBmYWxzZTtcbiAgICAgIHZhciB2ID0gbnVsbDtcbiAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gY3R4Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHYgPSBjdHhbaV07XG4gICAgICAgIGlmICh2ICYmIHR5cGVvZiB2ID09ICdvYmplY3QnICYmIGtleSBpbiB2KSB7XG4gICAgICAgICAgdmFsID0gdltrZXldO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHJldHVybiAocmV0dXJuRm91bmQpID8gZmFsc2UgOiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJldHVybkZvdW5kICYmIHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWwgPSB0aGlzLmx2KHZhbCwgY3R4LCBwYXJ0aWFscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8vIGhpZ2hlciBvcmRlciB0ZW1wbGF0ZXNcbiAgICBobzogZnVuY3Rpb24odmFsLCBjeCwgcGFydGlhbHMsIHRleHQpIHtcbiAgICAgIHZhciB0ID0gdmFsLmNhbGwoY3gsIHRleHQsIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIEhvZ2FuLmNvbXBpbGUodCkucmVuZGVyKGN4KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHMgPSBIb2dhbi5jb21waWxlKHQudG9TdHJpbmcoKSkucmVuZGVyKGN4LCBwYXJ0aWFscyk7XG4gICAgICB0aGlzLmIgPSBzO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBoaWdoZXIgb3JkZXIgdGVtcGxhdGUgcmVzdWx0IGJ1ZmZlclxuICAgIGI6ICcnLFxuXG4gICAgLy8gbGFtYmRhIHJlcGxhY2Ugc2VjdGlvblxuICAgIGxzOiBmdW5jdGlvbih2YWwsIGN0eCwgcGFydGlhbHMsIHN0YXJ0LCBlbmQpIHtcbiAgICAgIHZhciBjeCA9IGN0eFtjdHgubGVuZ3RoIC0gMV07XG4gICAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG8odmFsLCBjeCwgcGFydGlhbHMsIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgICAgfVxuICAgICAgdmFyIHQgPSB2YWwuY2FsbChjeCk7XG4gICAgICBpZiAodHlwZW9mIHQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5obyh0LCBjeCwgcGFydGlhbHMsIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcblxuICAgIC8vIGxhbWJkYSByZXBsYWNlIHZhcmlhYmxlXG4gICAgbHY6IGZ1bmN0aW9uKHZhbCwgY3R4LCBwYXJ0aWFscykge1xuICAgICAgdmFyIGN4ID0gY3R4W2N0eC5sZW5ndGggLSAxXTtcbiAgICAgIHJldHVybiBIb2dhbi5jb21waWxlKHZhbC5jYWxsKGN4KS50b1N0cmluZygpKS5yZW5kZXIoY3gsIHBhcnRpYWxzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJBbXAgPSAvJi9nLCByTHQgPSAvPC9nLCByR3QgPSAvPi9nLCByQXBvcyA9L1xcJy9nLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLCBoQ2hhcnMgPS9bJjw+XFxcIlxcJ10vO1xuICBmdW5jdGlvbiBob2dhbkVzY2FwZShzdHIpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhzdHIgPT09IG51bGwgPyAnJyA6IHN0cik7XG4gICAgICByZXR1cm4gaENoYXJzLnRlc3QocykgPyBzLnJlcGxhY2UockFtcCwnJmFtcDsnKVxuICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKHJMdCwnJmx0OycpLnJlcGxhY2Uockd0LCcmZ3Q7JylcbiAgICAgICAgICAgICAgICAgICAucmVwbGFjZShyQXBvcywnJiMzOTsnKS5yZXBsYWNlKHJRdW90LCAnJnF1b3Q7JykgOiBzO1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufSkoKTtcblxudmFyIEhvZ2FuID0gKGZ1bmN0aW9uICgpIHtcblxuICBmdW5jdGlvbiBzY2FuKHRleHQpIHtcbiAgICB2YXIgbGVuID0gdGV4dC5sZW5ndGgsXG4gICAgICAgIElOX1RFWFQgPSAwLFxuICAgICAgICBJTl9UQUdfVFlQRSA9IDEsXG4gICAgICAgIElOX1RBRyA9IDIsXG4gICAgICAgIHN0YXRlID0gSU5fVEVYVCxcbiAgICAgICAgdGFnVHlwZSA9IG51bGwsXG4gICAgICAgIGJ1ZiA9ICcnLFxuICAgICAgICB0b2tlbnMgPSBbXSxcbiAgICAgICAgc2VlblRhZyA9IGZhbHNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGluZVN0YXJ0ID0gMCxcbiAgICAgICAgb3RhZyA9ICd7eycsXG4gICAgICAgIGN0YWcgPSAnfX0nO1xuXG4gICAgZnVuY3Rpb24gYWRkQnVmKCkge1xuICAgICAgaWYgKGJ1Zi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKG5ldyBTdHJpbmcoYnVmKSk7XG4gICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVJc1doaXRlc3BhY2UoKSB7XG4gICAgICB2YXIgaXNBbGxXaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaXNBbGxXaGl0ZXNwYWNlID1cbiAgICAgICAgICAodG9rZW5zW2pdLnRhZyAmJiB0YWdUeXBlc1t0b2tlbnNbal0udGFnXSA8IHRhZ1R5cGVzWydfdiddKSB8fFxuICAgICAgICAgICAoIXRva2Vuc1tqXS50YWcgJiYgdG9rZW5zW2pdLm1hdGNoKHJJc1doaXRlc3BhY2UpID09IG51bGwpO1xuICAgICAgICBpZiAoIWlzQWxsV2hpdGVzcGFjZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXNBbGxXaGl0ZXNwYWNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlckxpbmUoaGF2ZVNlZW5UYWcsIG5vTmV3TGluZSkge1xuICAgICAgYWRkQnVmKCk7XG4gICAgICBpZiAoaGF2ZVNlZW5UYWcgJiYgbGluZUlzV2hpdGVzcGFjZSgpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoIXRva2Vuc1tqXS50YWcpIHtcbiAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFub05ld0xpbmUpIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzonXFxuJ30pXG4gICAgICB9XG5cbiAgICAgIHNlZW5UYWcgPSBmYWxzZTtcbiAgICAgIGxpbmVTdGFydCA9IHRva2Vucy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlRGVsaW1pdGVycyh0ZXh0LCBpbmRleCkge1xuICAgICAgdmFyIGNsb3NlID0gJz0nICsgY3RhZztcbiAgICAgIHZhciBjbG9zZUluZGV4ID0gdGV4dC5pbmRleE9mKGNsb3NlLCBpbmRleCk7XG4gICAgICB2YXIgZGVsaW1pdGVycyA9IHRyaW0odGV4dC5zdWJzdHJpbmcodGV4dC5pbmRleE9mKCc9JywgaW5kZXgpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUluZGV4KSkuc3BsaXQoJyAnKTtcbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbMV07XG4gICAgICByZXR1cm4gY2xvc2VJbmRleCArIGNsb3NlLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc3RhdGUgPT0gSU5fVEVYVCkge1xuICAgICAgICBpZiAodGFnQ2hhbmdlKG90YWcsIHRleHQsIGkpKSB7XG4gICAgICAgICAgLS1pO1xuICAgICAgICAgIGFkZEJ1ZigpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEFHX1RZUEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRleHRbaV0gPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGZpbHRlckxpbmUoc2VlblRhZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiArPSB0ZXh0W2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PSBJTl9UQUdfVFlQRSkge1xuICAgICAgICBpICs9IG90YWcubGVuZ3RoIC0gMTtcbiAgICAgICAgdmFyIHRhZyA9IHRhZ1R5cGVzW3RleHRbaSArIDFdXTtcbiAgICAgICAgdGFnVHlwZSA9IHRhZyA/IHRleHRbaSArIDFdIDogJ192JztcbiAgICAgICAgc2VlblRhZyA9IGk7XG4gICAgICAgIGlmICh0YWdUeXBlID09ICc9Jykge1xuICAgICAgICAgIGkgPSBjaGFuZ2VEZWxpbWl0ZXJzKHRleHQsIGkpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlID0gSU5fVEFHO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFnQ2hhbmdlKGN0YWcsIHRleHQsIGkpKSB7XG4gICAgICAgICAgaSArPSBjdGFnLmxlbmd0aCAtIDE7XG4gICAgICAgICAgdG9rZW5zLnB1c2goe3RhZzogdGFnVHlwZSwgbjogdHJpbShidWYpLFxuICAgICAgICAgICAgICAgICAgICAgICBpOiAodGFnVHlwZSA9PSAnLycpID8gc2VlblRhZyAtIDEgOiBpICsgMX0pO1xuICAgICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgICBpZiAodGFnVHlwZSA9PSAneycpIHtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmICs9IHRleHRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJMaW5lKHNlZW5UYWcsIHRydWUpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaW0ocykge1xuICAgIGlmIChzLnRyaW0pIHtcbiAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcy5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG4gIH1cblxuICAvLyByZW1vdmUgd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gTXVzdGFjaGUgc3BlY1xuICB2YXIgcklzV2hpdGVzcGFjZSA9IC9cXFMvO1xuXG4gIHZhciB0YWdUeXBlcyA9IHtcbiAgICAnIyc6IDEsICdeJzogMiwgJy8nOiAzLCAgJyEnOiA0LCAnPic6IDUsXG4gICAgJzwnOiA2LCAnPSc6IDcsICdfdic6IDgsICd7JzogOSwgJyYnOiAxMFxuICB9O1xuXG4gIGZ1bmN0aW9uIHRhZ0NoYW5nZSh0YWcsIHRleHQsIGluZGV4KSB7XG4gICAgaWYgKHRleHRbaW5kZXhdICE9IHRhZ1swXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAxLCBsID0gdGFnLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRleHRbaW5kZXggKyBpXSAhPSB0YWdbaV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRUcmVlKHRva2Vucywga2luZCwgc3RhY2ssIGN1c3RvbVRhZ3MpIHtcbiAgICB2YXIgaW5zdHJ1Y3Rpb25zID0gW10sXG4gICAgICAgIG9wZW5lciA9IG51bGwsXG4gICAgICAgIHRva2VuID0gbnVsbDtcblxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcbiAgICAgIGlmICh0b2tlbi50YWcgPT0gJyMnIHx8IHRva2VuLnRhZyA9PSAnXicgfHxcbiAgICAgICAgICBpc09wZW5lcih0b2tlbiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgc3RhY2sucHVzaCh0b2tlbik7XG4gICAgICAgIHRva2VuLm5vZGVzID0gYnVpbGRUcmVlKHRva2VucywgdG9rZW4udGFnLCBzdGFjaywgY3VzdG9tVGFncyk7XG4gICAgICAgIGluc3RydWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udGFnID09ICcvJykge1xuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nsb3NpbmcgdGFnIHdpdGhvdXQgb3BlbmVyOiAvJyArIHRva2VuLm4pO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5lciA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBpZiAodG9rZW4ubiAhPSBvcGVuZXIubiAmJiAhaXNDbG9zZXIodG9rZW4ubiwgb3BlbmVyLm4sIGN1c3RvbVRhZ3MpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXN0aW5nIGVycm9yOiAnICsgb3BlbmVyLm4gKyAnIHZzLiAnICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyLmVuZCA9IHRva2VuLmk7XG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0cnVjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjbG9zaW5nIHRhZzogJyArIHN0YWNrLnBvcCgpLm4pO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpc09wZW5lcih0b2tlbiwgdGFncykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0YWdzW2ldLm8gPT0gdG9rZW4ubikge1xuICAgICAgICB0b2tlbi50YWcgPSAnIyc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2xvc2VyKGNsb3NlLCBvcGVuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0uYyA9PSBjbG9zZSAmJiB0YWdzW2ldLm8gPT0gb3Blbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZSh0cmVlLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvZGUgPSAndmFyIGMgPSBbY3hdO3ZhciBiID0gXCJcIjt2YXIgXyA9IHRoaXM7JyArXG4gICAgICAgICAgICAgICB3YWxrKHRyZWUpICsgJ3JldHVybiBiOyc7XG4gICAgaWYgKG9wdGlvbnMuYXNTdHJpbmcpIHtcbiAgICAgIHJldHVybiAnZnVuY3Rpb24oY3gscCl7JyArIGNvZGUgKyAnO307JztcbiAgICB9XG5cbiAgICB2YXIgdGVtcGxhdGUgPSBuZXcgSG9nYW5UZW1wbGF0ZSh0ZXh0KTtcbiAgICB0ZW1wbGF0ZS5yID0gbmV3IEZ1bmN0aW9uKCdjeCcsICdwJywgY29kZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgdmFyIHJRdW90ID0gL1xcXCIvZywgck5ld2xpbmUgPSAgL1xcbi9nLCByQ3IgPSAvXFxyL2csIHJTbGFzaCA9IC9cXFxcL2c7XG4gIGZ1bmN0aW9uIGVzYyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShyU2xhc2gsICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZShyUXVvdCwgJ1xcXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UockNyLCAnXFxcXHInKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGNob29zZU1ldGhvZChzKSB7XG4gICAgcmV0dXJuICh+cy5pbmRleE9mKCcuJykpID8gJ2QnIDogJ2YnO1xuICB9XG5cbiAgZnVuY3Rpb24gd2Fsayh0cmVlKSB7XG4gICAgdmFyIGNvZGUgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRyZWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgdGFnID0gdHJlZVtpXS50YWc7XG4gICAgICBpZiAodGFnID09ICcjJykge1xuICAgICAgICBjb2RlICs9IHNlY3Rpb24odHJlZVtpXS5ub2RlcywgdHJlZVtpXS5uLCBjaG9vc2VNZXRob2QodHJlZVtpXS5uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVbaV0uaSwgdHJlZVtpXS5lbmQpO1xuICAgICAgfSBlbHNlIGlmICh0YWcgPT0gJ14nKSB7XG4gICAgICAgIGNvZGUgKz0gaW52ZXJ0ZWRTZWN0aW9uKHRyZWVbaV0ubm9kZXMsIHRyZWVbaV0ubixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlTWV0aG9kKHRyZWVbaV0ubikpO1xuICAgICAgfSBlbHNlIGlmICh0YWcgPT0gJzwnIHx8IHRhZyA9PSAnPicpIHtcbiAgICAgICAgY29kZSArPSBwYXJ0aWFsKHRyZWVbaV0ubik7XG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PSAneycgfHwgdGFnID09ICcmJykge1xuICAgICAgICBjb2RlICs9IHRyaXBsZVN0YWNoZSh0cmVlW2ldLm4sIGNob29zZU1ldGhvZCh0cmVlW2ldLm4pKTtcbiAgICAgIH0gZWxzZSBpZiAodGFnID09ICdcXG4nKSB7XG4gICAgICAgIGNvZGUgKz0gdGV4dCgnXFxuJyk7XG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PSAnX3YnKSB7XG4gICAgICAgIGNvZGUgKz0gdmFyaWFibGUodHJlZVtpXS5uLCBjaG9vc2VNZXRob2QodHJlZVtpXS5uKSk7XG4gICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvZGUgKz0gdGV4dCh0cmVlW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICBmdW5jdGlvbiBzZWN0aW9uKG5vZGVzLCBpZCwgbWV0aG9kLCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIGNvZGUgPSAnaWYoXy5zKF8uJyArIG1ldGhvZCArICcoXCInICsgZXNjKGlkKSArICdcIixjLHAsMSksJztcbiAgICBjb2RlICs9ICdjLHAsMCwnICsgc3RhcnQgKyAnLCcgKyBlbmQgKyAnKSl7JztcbiAgICBjb2RlICs9ICdiICs9IF8ucnMoYyxwLCc7XG4gICAgY29kZSArPSAnZnVuY3Rpb24oYyxwKXsgdmFyIGIgPSBcIlwiOyc7XG4gICAgY29kZSArPSB3YWxrKG5vZGVzKTtcbiAgICBjb2RlICs9ICdyZXR1cm4gYjt9KTtjLnBvcCgpO30nO1xuICAgIGNvZGUgKz0gJ2Vsc2V7YiArPSBfLmI7IF8uYiA9IFwiXCJ9Oyc7XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZlcnRlZFNlY3Rpb24obm9kZXMsIGlkLCBtZXRob2QpIHtcbiAgICB2YXIgY29kZSA9ICdpZiAoIV8ucyhfLicgKyBtZXRob2QgKyAnKFwiJyArIGVzYyhpZCkgKyAnXCIsYyxwLDEpLGMscCwxLDAsMCkpeyc7XG4gICAgY29kZSArPSB3YWxrKG5vZGVzKTtcbiAgICBjb2RlICs9ICd9Oyc7XG4gICAgcmV0dXJuIGNvZGU7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJ0aWFsKGlkKSB7XG4gICAgcmV0dXJuICdiICs9IF8ucnAoXCInICsgIGVzYyhpZCkgKyAnXCIsY1tjLmxlbmd0aCAtIDFdLHApOyc7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlwbGVTdGFjaGUoaWQsIG1ldGhvZCkge1xuICAgIHJldHVybiAnYiArPSAoXy4nICsgbWV0aG9kICsgJyhcIicgKyBlc2MoaWQpICsgJ1wiLGMscCwwKSk7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhcmlhYmxlKGlkLCBtZXRob2QpIHtcbiAgICByZXR1cm4gJ2IgKz0gKF8udihfLicgKyBtZXRob2QgKyAnKFwiJyArIGVzYyhpZCkgKyAnXCIsYyxwLDApKSk7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHQoaWQpIHtcbiAgICByZXR1cm4gJ2IgKz0gXCInICsgZXNjKGlkKSArICdcIjsnO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgc2Nhbjogc2NhbixcblxuICAgIHBhcnNlOiBmdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgcmV0dXJuIGJ1aWxkVHJlZSh0b2tlbnMsICcnLCBbXSwgb3B0aW9ucy5zZWN0aW9uVGFncyB8fCBbXSk7XG4gICAgfSxcblxuICAgIGNhY2hlOiB7fSxcblxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICAgIC8vIG9wdGlvbnNcbiAgICAgIC8vXG4gICAgICAvLyBhc1N0cmluZzogZmFsc2UgKGRlZmF1bHQpXG4gICAgICAvL1xuICAgICAgLy8gc2VjdGlvblRhZ3M6IFt7bzogJ19mb28nLCBjOiAnZm9vJ31dXG4gICAgICAvLyBBbiBhcnJheSBvZiBvYmplY3Qgd2l0aCBvIGFuZCBjIGZpZWxkcyB0aGF0IGluZGljYXRlIG5hbWVzIGZvciBjdXN0b21cbiAgICAgIC8vIHNlY3Rpb24gdGFncy4gVGhlIGV4YW1wbGUgYWJvdmUgYWxsb3dzIHBhcnNpbmcgb2Yge3tfZm9vfX17ey9mb299fS5cbiAgICAgIC8vXG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgdmFyIHQgPSB0aGlzLmNhY2hlW3RleHRdO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB0ID0gZ2VuZXJhdGUodGhpcy5wYXJzZShzY2FuKHRleHQpLCBvcHRpb25zKSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVt0ZXh0XSA9IHQ7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbi8vIEV4cG9ydCB0aGUgaG9nYW4gY29uc3RydWN0b3IgZm9yIE5vZGUuanMgYW5kIENvbW1vbkpTLlxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gSG9nYW47XG4gIG1vZHVsZS5leHBvcnRzLlRlbXBsYXRlID0gSG9nYW5UZW1wbGF0ZTtcbn0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gIGV4cG9ydHMuSG9nYW4gPSBIb2dhbjtcbiAgZXhwb3J0cy5Ib2dhblRlbXBsYXRlID0gSG9nYW5UZW1wbGF0ZTtcbn0iXX0=
