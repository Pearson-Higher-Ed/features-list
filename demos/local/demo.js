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

},{"./src/js/featureComponent":9}],3:[function(require,module,exports){
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

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
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

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],4:[function(require,module,exports){
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

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = require('./compiler');
Hogan.Template = require('./template').Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;

},{"./compiler":3,"./template":5}],5:[function(require,module,exports){
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

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

var templateCell = '<div class="o-feature-brand">{{primaryTitle}}</div>' + '<div class="o-feature-content"> ' + '<div class="o-feature-left"> ' + '<header class="o-feature-title"> ' + '{{secondaryTitle}} ' + '</header> ' + '<div class="o-feature-description"> ' + '<p>{{description}}</p> ' + '</div> ' + '</div> ' + '<div class="o-feature-right"> ' + '<div class="o-feature-img-border"> ' + '<img src="{{resourceUrl}}"> ' + '</div> ' + '</div> ' + '</div> ' + '<div class="o-feature-clearfix"></div> ' + '<div class="o-feature-button"> ' + '<button class=\"o-feature-action-button\" href="{{ctaUrl}}"><div>{{ctaText}}<\/div></button> ' + '</div> ';

module.exports = templateCell;

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

var FeatureComponent = function FeatureComponent() {};

var fs = require('fs');

var template = require('../html/templateCell.js');

var templateEditCell = require('../html/templateEditCell.js');

var templateAddCell = require('../html/templateAddCell.js');

var Hogan = require('hogan.js');

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

},{"../html/templateAddCell.js":6,"../html/templateCell.js":7,"../html/templateEditCell.js":8,"fs":10,"hogan.js":4}],10:[function(require,module,exports){

},{}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL29yaWdhbWktYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW9zL3NyYy9kZW1vLmpzIiwibWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9ob2dhbi5qcy9saWIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvaG9nYW4uanMvbGliL2hvZ2FuLmpzIiwibm9kZV9tb2R1bGVzL2hvZ2FuLmpzL2xpYi90ZW1wbGF0ZS5qcyIsInNyYy9odG1sL3RlbXBsYXRlQWRkQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlRWRpdENlbGwuanMiLCJzcmMvanMvZmVhdHVyZUNvbXBvbmVudC5qcyIsIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL29yaWdhbWktYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7QUFDeEQsY0FBWSxDQUFDO0FBQ2IsVUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDOztBQUVILElBQUksSUFBSSxHQUFHLENBQ047QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsRUFDRjtBQUNFLFFBQU0sRUFBQyxPQUFPO0FBQ2QsbUJBQWlCLEVBQUMsR0FBRztBQUNyQixnQkFBYyxFQUFFLDBCQUEwQjtBQUMxQyxrQkFBZ0IsRUFBRSxxQkFBcUI7QUFDdkMsZUFBYSxFQUFFLGtCQUFrQjtBQUNqQyxlQUFhLEVBQUUsZ0RBQWdEO0FBQy9ELFdBQVMsRUFBQyxpQkFBaUI7QUFDM0IsVUFBUSxFQUFDLHdCQUF3QjtDQUNqQyxFQUNEO0FBQ0MsUUFBTSxFQUFDLE9BQU87QUFDZCxtQkFBaUIsRUFBQyxHQUFHO0FBQ3JCLGdCQUFjLEVBQUUsMEJBQTBCO0FBQzFDLGtCQUFnQixFQUFFLHFCQUFxQjtBQUN2QyxlQUFhLEVBQUUsa0JBQWtCO0FBQ2pDLGVBQWEsRUFBRSxnREFBZ0Q7QUFDL0QsV0FBUyxFQUFDLGlCQUFpQjtBQUMzQixVQUFRLEVBQUMsd0JBQXdCO0NBQ2pDLEVBQ0Q7QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsRUFDRDtBQUNDLFFBQU0sRUFBQyxPQUFPO0FBQ2QsbUJBQWlCLEVBQUMsR0FBRztBQUNyQixnQkFBYyxFQUFFLDBCQUEwQjtBQUMxQyxrQkFBZ0IsRUFBRSxxQkFBcUI7QUFDdkMsZUFBYSxFQUFFLGtCQUFrQjtBQUNqQyxlQUFhLEVBQUUsZ0RBQWdEO0FBQy9ELFdBQVMsRUFBQyxpQkFBaUI7QUFDM0IsVUFBUSxFQUFDLHdCQUF3QjtDQUNqQyxFQUNEO0FBQ0MsUUFBTSxFQUFDLE9BQU87QUFDZCxtQkFBaUIsRUFBQyxHQUFHO0FBQ3JCLGdCQUFjLEVBQUUsMEJBQTBCO0FBQzFDLGtCQUFnQixFQUFFLHFCQUFxQjtBQUN2QyxlQUFhLEVBQUUsa0JBQWtCO0FBQ2pDLGVBQWEsRUFBRSxnREFBZ0Q7QUFDL0QsV0FBUyxFQUFDLGlCQUFpQjtBQUMzQixVQUFRLEVBQUMsd0JBQXdCO0NBQ2pDLEVBQ0Q7QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsQ0FDRixDQUFDOztBQUVMLElBQUksT0FBTyxHQUFHO0FBQ1osVUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDOztBQUVGLElBQUksUUFBUSxHQUFHO0FBQ2IsVUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFeEUsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Ozs7QUMxRjFFLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7OztBQ0hoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDbkUsZUFBYSxDQUFDLFNBQVMsR0FBRyx1REFBdUQsQ0FBQztBQUNsRixlQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7QUFDbEQsUUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QyxTQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxvQ0FBb0MsQ0FBQyxDQUFDOztBQUVqRSxTQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvRyxRQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JELG9CQUFnQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQzFHLENBQUMsQ0FBQzs7QUFFSCxXQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZFLFdBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7Q0FDMUUsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDOzs7QUM3TGxDIiwiZmlsZSI6ImRlbW8uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qZ2xvYmFsIHJlcXVpcmUqL1xucmVxdWlyZSgnLi4vLi4vbWFpbicpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvLkRPTUNvbnRlbnRMb2FkZWQnKSk7XG59KTtcblxudmFyIGRhdGEgPSBbXG4gICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH0sXG4gICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH0sXG4gICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9XG4gICBdO1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgZWRpdE1vZGU6IHRydWVcbn07XG5cbnZhciBvcHRpb25zMiA9IHtcbiAgZWRpdE1vZGU6IGZhbHNlXG59O1xuXG53aW5kb3cuZWRpdENvbXAgPSBuZXcgJGZlYXR1cmVDb21wb25lbnQoKS5pbml0KG9wdGlvbnMsIGRhdGEsICd0ZXN0SWQnKTtcblxud2luZG93LnZpZXdDb21wID0gbmV3ICRmZWF0dXJlQ29tcG9uZW50KCkuaW5pdChvcHRpb25zMiwgZGF0YSwgJ3Rlc3RJZDInKTsiLCIvKmdsb2JhbCByZXF1aXJlLCBtb2R1bGUqL1xuJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuJGZlYXR1cmVDb21wb25lbnQgPSByZXF1aXJlKCcuL3NyYy9qcy9mZWF0dXJlQ29tcG9uZW50Jyk7XG5cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMTEgVHdpdHRlciwgSW5jLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuKGZ1bmN0aW9uIChIb2dhbikge1xuICAvLyBTZXR1cCByZWdleCAgYXNzaWdubWVudHNcbiAgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgYWNjb3JkaW5nIHRvIE11c3RhY2hlIHNwZWNcbiAgdmFyIHJJc1doaXRlc3BhY2UgPSAvXFxTLyxcbiAgICAgIHJRdW90ID0gL1xcXCIvZyxcbiAgICAgIHJOZXdsaW5lID0gIC9cXG4vZyxcbiAgICAgIHJDciA9IC9cXHIvZyxcbiAgICAgIHJTbGFzaCA9IC9cXFxcL2csXG4gICAgICByTGluZVNlcCA9IC9cXHUyMDI4LyxcbiAgICAgIHJQYXJhZ3JhcGhTZXAgPSAvXFx1MjAyOS87XG5cbiAgSG9nYW4udGFncyA9IHtcbiAgICAnIyc6IDEsICdeJzogMiwgJzwnOiAzLCAnJCc6IDQsXG4gICAgJy8nOiA1LCAnISc6IDYsICc+JzogNywgJz0nOiA4LCAnX3YnOiA5LFxuICAgICd7JzogMTAsICcmJzogMTEsICdfdCc6IDEyXG4gIH07XG5cbiAgSG9nYW4uc2NhbiA9IGZ1bmN0aW9uIHNjYW4odGV4dCwgZGVsaW1pdGVycykge1xuICAgIHZhciBsZW4gPSB0ZXh0Lmxlbmd0aCxcbiAgICAgICAgSU5fVEVYVCA9IDAsXG4gICAgICAgIElOX1RBR19UWVBFID0gMSxcbiAgICAgICAgSU5fVEFHID0gMixcbiAgICAgICAgc3RhdGUgPSBJTl9URVhULFxuICAgICAgICB0YWdUeXBlID0gbnVsbCxcbiAgICAgICAgdGFnID0gbnVsbCxcbiAgICAgICAgYnVmID0gJycsXG4gICAgICAgIHRva2VucyA9IFtdLFxuICAgICAgICBzZWVuVGFnID0gZmFsc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBsaW5lU3RhcnQgPSAwLFxuICAgICAgICBvdGFnID0gJ3t7JyxcbiAgICAgICAgY3RhZyA9ICd9fSc7XG5cbiAgICBmdW5jdGlvbiBhZGRCdWYoKSB7XG4gICAgICBpZiAoYnVmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzogJ190JywgdGV4dDogbmV3IFN0cmluZyhidWYpfSk7XG4gICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVJc1doaXRlc3BhY2UoKSB7XG4gICAgICB2YXIgaXNBbGxXaGl0ZXNwYWNlID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaXNBbGxXaGl0ZXNwYWNlID1cbiAgICAgICAgICAoSG9nYW4udGFnc1t0b2tlbnNbal0udGFnXSA8IEhvZ2FuLnRhZ3NbJ192J10pIHx8XG4gICAgICAgICAgKHRva2Vuc1tqXS50YWcgPT0gJ190JyAmJiB0b2tlbnNbal0udGV4dC5tYXRjaChySXNXaGl0ZXNwYWNlKSA9PT0gbnVsbCk7XG4gICAgICAgIGlmICghaXNBbGxXaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpc0FsbFdoaXRlc3BhY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyTGluZShoYXZlU2VlblRhZywgbm9OZXdMaW5lKSB7XG4gICAgICBhZGRCdWYoKTtcblxuICAgICAgaWYgKGhhdmVTZWVuVGFnICYmIGxpbmVJc1doaXRlc3BhY2UoKSkge1xuICAgICAgICBmb3IgKHZhciBqID0gbGluZVN0YXJ0LCBuZXh0OyBqIDwgdG9rZW5zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHRva2Vuc1tqXS50ZXh0KSB7XG4gICAgICAgICAgICBpZiAoKG5leHQgPSB0b2tlbnNbaisxXSkgJiYgbmV4dC50YWcgPT0gJz4nKSB7XG4gICAgICAgICAgICAgIC8vIHNldCBpbmRlbnQgdG8gdG9rZW4gdmFsdWVcbiAgICAgICAgICAgICAgbmV4dC5pbmRlbnQgPSB0b2tlbnNbal0udGV4dC50b1N0cmluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGosIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghbm9OZXdMaW5lKSB7XG4gICAgICAgIHRva2Vucy5wdXNoKHt0YWc6J1xcbid9KTtcbiAgICAgIH1cblxuICAgICAgc2VlblRhZyA9IGZhbHNlO1xuICAgICAgbGluZVN0YXJ0ID0gdG9rZW5zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VEZWxpbWl0ZXJzKHRleHQsIGluZGV4KSB7XG4gICAgICB2YXIgY2xvc2UgPSAnPScgKyBjdGFnLFxuICAgICAgICAgIGNsb3NlSW5kZXggPSB0ZXh0LmluZGV4T2YoY2xvc2UsIGluZGV4KSxcbiAgICAgICAgICBkZWxpbWl0ZXJzID0gdHJpbShcbiAgICAgICAgICAgIHRleHQuc3Vic3RyaW5nKHRleHQuaW5kZXhPZignPScsIGluZGV4KSArIDEsIGNsb3NlSW5kZXgpXG4gICAgICAgICAgKS5zcGxpdCgnICcpO1xuXG4gICAgICBvdGFnID0gZGVsaW1pdGVyc1swXTtcbiAgICAgIGN0YWcgPSBkZWxpbWl0ZXJzW2RlbGltaXRlcnMubGVuZ3RoIC0gMV07XG5cbiAgICAgIHJldHVybiBjbG9zZUluZGV4ICsgY2xvc2UubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZiAoZGVsaW1pdGVycykge1xuICAgICAgZGVsaW1pdGVycyA9IGRlbGltaXRlcnMuc3BsaXQoJyAnKTtcbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbMV07XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc3RhdGUgPT0gSU5fVEVYVCkge1xuICAgICAgICBpZiAodGFnQ2hhbmdlKG90YWcsIHRleHQsIGkpKSB7XG4gICAgICAgICAgLS1pO1xuICAgICAgICAgIGFkZEJ1ZigpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEFHX1RZUEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRleHQuY2hhckF0KGkpID09ICdcXG4nKSB7XG4gICAgICAgICAgICBmaWx0ZXJMaW5lKHNlZW5UYWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09IElOX1RBR19UWVBFKSB7XG4gICAgICAgIGkgKz0gb3RhZy5sZW5ndGggLSAxO1xuICAgICAgICB0YWcgPSBIb2dhbi50YWdzW3RleHQuY2hhckF0KGkgKyAxKV07XG4gICAgICAgIHRhZ1R5cGUgPSB0YWcgPyB0ZXh0LmNoYXJBdChpICsgMSkgOiAnX3YnO1xuICAgICAgICBpZiAodGFnVHlwZSA9PSAnPScpIHtcbiAgICAgICAgICBpID0gY2hhbmdlRGVsaW1pdGVycyh0ZXh0LCBpKTtcbiAgICAgICAgICBzdGF0ZSA9IElOX1RFWFQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZSA9IElOX1RBRztcbiAgICAgICAgfVxuICAgICAgICBzZWVuVGFnID0gaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YWdDaGFuZ2UoY3RhZywgdGV4dCwgaSkpIHtcbiAgICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiB0YWdUeXBlLCBuOiB0cmltKGJ1ZiksIG90YWc6IG90YWcsIGN0YWc6IGN0YWcsXG4gICAgICAgICAgICAgICAgICAgICAgIGk6ICh0YWdUeXBlID09ICcvJykgPyBzZWVuVGFnIC0gb3RhZy5sZW5ndGggOiBpICsgY3RhZy5sZW5ndGh9KTtcbiAgICAgICAgICBidWYgPSAnJztcbiAgICAgICAgICBpICs9IGN0YWcubGVuZ3RoIC0gMTtcbiAgICAgICAgICBzdGF0ZSA9IElOX1RFWFQ7XG4gICAgICAgICAgaWYgKHRhZ1R5cGUgPT0gJ3snKSB7XG4gICAgICAgICAgICBpZiAoY3RhZyA9PSAnfX0nKSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNsZWFuVHJpcGxlU3RhY2hlKHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWYgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJMaW5lKHNlZW5UYWcsIHRydWUpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuVHJpcGxlU3RhY2hlKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLm4uc3Vic3RyKHRva2VuLm4ubGVuZ3RoIC0gMSkgPT09ICd9Jykge1xuICAgICAgdG9rZW4ubiA9IHRva2VuLm4uc3Vic3RyaW5nKDAsIHRva2VuLm4ubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpbShzKSB7XG4gICAgaWYgKHMudHJpbSkge1xuICAgICAgcmV0dXJuIHMudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0NoYW5nZSh0YWcsIHRleHQsIGluZGV4KSB7XG4gICAgaWYgKHRleHQuY2hhckF0KGluZGV4KSAhPSB0YWcuY2hhckF0KDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSB0YWcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGV4dC5jaGFyQXQoaW5kZXggKyBpKSAhPSB0YWcuY2hhckF0KGkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRoZSB0YWdzIGFsbG93ZWQgaW5zaWRlIHN1cGVyIHRlbXBsYXRlc1xuICB2YXIgYWxsb3dlZEluU3VwZXIgPSB7J190JzogdHJ1ZSwgJ1xcbic6IHRydWUsICckJzogdHJ1ZSwgJy8nOiB0cnVlfTtcblxuICBmdW5jdGlvbiBidWlsZFRyZWUodG9rZW5zLCBraW5kLCBzdGFjaywgY3VzdG9tVGFncykge1xuICAgIHZhciBpbnN0cnVjdGlvbnMgPSBbXSxcbiAgICAgICAgb3BlbmVyID0gbnVsbCxcbiAgICAgICAgdGFpbCA9IG51bGwsXG4gICAgICAgIHRva2VuID0gbnVsbDtcblxuICAgIHRhaWwgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcblxuICAgICAgaWYgKHRhaWwgJiYgdGFpbC50YWcgPT0gJzwnICYmICEodG9rZW4udGFnIGluIGFsbG93ZWRJblN1cGVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY29udGVudCBpbiA8IHN1cGVyIHRhZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEhvZ2FuLnRhZ3NbdG9rZW4udGFnXSA8PSBIb2dhbi50YWdzWyckJ10gfHwgaXNPcGVuZXIodG9rZW4sIGN1c3RvbVRhZ3MpKSB7XG4gICAgICAgIHN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICB0b2tlbi5ub2RlcyA9IGJ1aWxkVHJlZSh0b2tlbnMsIHRva2VuLnRhZywgc3RhY2ssIGN1c3RvbVRhZ3MpO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50YWcgPT0gJy8nKSB7XG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nsb3NpbmcgdGFnIHdpdGhvdXQgb3BlbmVyOiAvJyArIHRva2VuLm4pO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5lciA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBpZiAodG9rZW4ubiAhPSBvcGVuZXIubiAmJiAhaXNDbG9zZXIodG9rZW4ubiwgb3BlbmVyLm4sIGN1c3RvbVRhZ3MpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXN0aW5nIGVycm9yOiAnICsgb3BlbmVyLm4gKyAnIHZzLiAnICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyLmVuZCA9IHRva2VuLmk7XG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnRhZyA9PSAnXFxuJykge1xuICAgICAgICB0b2tlbi5sYXN0ID0gKHRva2Vucy5sZW5ndGggPT0gMCkgfHwgKHRva2Vuc1swXS50YWcgPT0gJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBpbnN0cnVjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjbG9zaW5nIHRhZzogJyArIHN0YWNrLnBvcCgpLm4pO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpc09wZW5lcih0b2tlbiwgdGFncykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0YWdzW2ldLm8gPT0gdG9rZW4ubikge1xuICAgICAgICB0b2tlbi50YWcgPSAnIyc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2xvc2VyKGNsb3NlLCBvcGVuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0uYyA9PSBjbG9zZSAmJiB0YWdzW2ldLm8gPT0gb3Blbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlTdWJzdGl0dXRpb25zKG9iaikge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGl0ZW1zLnB1c2goJ1wiJyArIGVzYyhrZXkpICsgJ1wiOiBmdW5jdGlvbihjLHAsdCxpKSB7JyArIG9ialtrZXldICsgJ30nKTtcbiAgICB9XG4gICAgcmV0dXJuIFwieyBcIiArIGl0ZW1zLmpvaW4oXCIsXCIpICsgXCIgfVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5UGFydGlhbHMoY29kZU9iaikge1xuICAgIHZhciBwYXJ0aWFscyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBjb2RlT2JqLnBhcnRpYWxzKSB7XG4gICAgICBwYXJ0aWFscy5wdXNoKCdcIicgKyBlc2Moa2V5KSArICdcIjp7bmFtZTpcIicgKyBlc2MoY29kZU9iai5wYXJ0aWFsc1trZXldLm5hbWUpICsgJ1wiLCAnICsgc3RyaW5naWZ5UGFydGlhbHMoY29kZU9iai5wYXJ0aWFsc1trZXldKSArIFwifVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIFwicGFydGlhbHM6IHtcIiArIHBhcnRpYWxzLmpvaW4oXCIsXCIpICsgXCJ9LCBzdWJzOiBcIiArIHN0cmluZ2lmeVN1YnN0aXR1dGlvbnMoY29kZU9iai5zdWJzKTtcbiAgfVxuXG4gIEhvZ2FuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKGNvZGVPYmosIHRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gXCJ7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IFwiICsgSG9nYW4ud3JhcE1haW4oY29kZU9iai5jb2RlKSArIFwiIH0sXCIgKyBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqKSArICBcIn1cIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxObyA9IDA7XG4gIEhvZ2FuLmdlbmVyYXRlID0gZnVuY3Rpb24odHJlZSwgdGV4dCwgb3B0aW9ucykge1xuICAgIHNlcmlhbE5vID0gMDtcbiAgICB2YXIgY29udGV4dCA9IHsgY29kZTogJycsIHN1YnM6IHt9LCBwYXJ0aWFsczoge30gfTtcbiAgICBIb2dhbi53YWxrKHRyZWUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG9wdGlvbnMuYXNTdHJpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZ2lmeShjb250ZXh0LCB0ZXh0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tYWtlVGVtcGxhdGUoY29udGV4dCwgdGV4dCwgb3B0aW9ucyk7XG4gIH1cblxuICBIb2dhbi53cmFwTWFpbiA9IGZ1bmN0aW9uKGNvZGUpIHtcbiAgICByZXR1cm4gJ3ZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7JyArIGNvZGUgKyAncmV0dXJuIHQuZmwoKTsnO1xuICB9XG5cbiAgSG9nYW4udGVtcGxhdGUgPSBIb2dhbi5UZW1wbGF0ZTtcblxuICBIb2dhbi5tYWtlVGVtcGxhdGUgPSBmdW5jdGlvbihjb2RlT2JqLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5tYWtlUGFydGlhbHMoY29kZU9iaik7XG4gICAgdGVtcGxhdGUuY29kZSA9IG5ldyBGdW5jdGlvbignYycsICdwJywgJ2knLCB0aGlzLndyYXBNYWluKGNvZGVPYmouY29kZSkpO1xuICAgIHJldHVybiBuZXcgdGhpcy50ZW1wbGF0ZSh0ZW1wbGF0ZSwgdGV4dCwgdGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICBIb2dhbi5tYWtlUGFydGlhbHMgPSBmdW5jdGlvbihjb2RlT2JqKSB7XG4gICAgdmFyIGtleSwgdGVtcGxhdGUgPSB7c3Viczoge30sIHBhcnRpYWxzOiBjb2RlT2JqLnBhcnRpYWxzLCBuYW1lOiBjb2RlT2JqLm5hbWV9O1xuICAgIGZvciAoa2V5IGluIHRlbXBsYXRlLnBhcnRpYWxzKSB7XG4gICAgICB0ZW1wbGF0ZS5wYXJ0aWFsc1trZXldID0gdGhpcy5tYWtlUGFydGlhbHModGVtcGxhdGUucGFydGlhbHNba2V5XSk7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIGNvZGVPYmouc3Vicykge1xuICAgICAgdGVtcGxhdGUuc3Vic1trZXldID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAndCcsICdpJywgY29kZU9iai5zdWJzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBlc2Mocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoclNsYXNoLCAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoclF1b3QsICdcXFxcXFxcIicpXG4gICAgICAgICAgICAucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJDciwgJ1xcXFxyJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJMaW5lU2VwLCAnXFxcXHUyMDI4JylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJQYXJhZ3JhcGhTZXAsICdcXFxcdTIwMjknKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNob29zZU1ldGhvZChzKSB7XG4gICAgcmV0dXJuICh+cy5pbmRleE9mKCcuJykpID8gJ2QnIDogJ2YnO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFydGlhbChub2RlLCBjb250ZXh0KSB7XG4gICAgdmFyIHByZWZpeCA9IFwiPFwiICsgKGNvbnRleHQucHJlZml4IHx8IFwiXCIpO1xuICAgIHZhciBzeW0gPSBwcmVmaXggKyBub2RlLm4gKyBzZXJpYWxObysrO1xuICAgIGNvbnRleHQucGFydGlhbHNbc3ltXSA9IHtuYW1lOiBub2RlLm4sIHBhcnRpYWxzOiB7fX07XG4gICAgY29udGV4dC5jb2RlICs9ICd0LmIodC5ycChcIicgKyAgZXNjKHN5bSkgKyAnXCIsYyxwLFwiJyArIChub2RlLmluZGVudCB8fCAnJykgKyAnXCIpKTsnO1xuICAgIHJldHVybiBzeW07XG4gIH1cblxuICBIb2dhbi5jb2RlZ2VuID0ge1xuICAgICcjJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9ICdpZih0LnModC4nICsgY2hvb3NlTWV0aG9kKG5vZGUubikgKyAnKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCwxKSwnICtcbiAgICAgICAgICAgICAgICAgICAgICAnYyxwLDAsJyArIG5vZGUuaSArICcsJyArIG5vZGUuZW5kICsgJyxcIicgKyBub2RlLm90YWcgKyBcIiBcIiArIG5vZGUuY3RhZyArICdcIikpeycgK1xuICAgICAgICAgICAgICAgICAgICAgICd0LnJzKGMscCwnICsgJ2Z1bmN0aW9uKGMscCx0KXsnO1xuICAgICAgSG9nYW4ud2Fsayhub2RlLm5vZGVzLCBjb250ZXh0KTtcbiAgICAgIGNvbnRleHQuY29kZSArPSAnfSk7Yy5wb3AoKTt9JztcbiAgICB9LFxuXG4gICAgJ14nOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ2lmKCF0LnModC4nICsgY2hvb3NlTWV0aG9kKG5vZGUubikgKyAnKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCwxKSxjLHAsMSwwLDAsXCJcIikpeyc7XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGNvbnRleHQpO1xuICAgICAgY29udGV4dC5jb2RlICs9ICd9Oyc7XG4gICAgfSxcblxuICAgICc+JzogY3JlYXRlUGFydGlhbCxcbiAgICAnPCc6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBjdHggPSB7cGFydGlhbHM6IHt9LCBjb2RlOiAnJywgc3Viczoge30sIGluUGFydGlhbDogdHJ1ZX07XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGN0eCk7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBjb250ZXh0LnBhcnRpYWxzW2NyZWF0ZVBhcnRpYWwobm9kZSwgY29udGV4dCldO1xuICAgICAgdGVtcGxhdGUuc3VicyA9IGN0eC5zdWJzO1xuICAgICAgdGVtcGxhdGUucGFydGlhbHMgPSBjdHgucGFydGlhbHM7XG4gICAgfSxcblxuICAgICckJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgdmFyIGN0eCA9IHtzdWJzOiB7fSwgY29kZTogJycsIHBhcnRpYWxzOiBjb250ZXh0LnBhcnRpYWxzLCBwcmVmaXg6IG5vZGUubn07XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGN0eCk7XG4gICAgICBjb250ZXh0LnN1YnNbbm9kZS5uXSA9IGN0eC5jb2RlO1xuICAgICAgaWYgKCFjb250ZXh0LmluUGFydGlhbCkge1xuICAgICAgICBjb250ZXh0LmNvZGUgKz0gJ3Quc3ViKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCxpKTsnO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnXFxuJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9IHdyaXRlKCdcIlxcXFxuXCInICsgKG5vZGUubGFzdCA/ICcnIDogJyArIGknKSk7XG4gICAgfSxcblxuICAgICdfdic6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSAndC5iKHQudih0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDApKSk7JztcbiAgICB9LFxuXG4gICAgJ190JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9IHdyaXRlKCdcIicgKyBlc2Mobm9kZS50ZXh0KSArICdcIicpO1xuICAgIH0sXG5cbiAgICAneyc6IHRyaXBsZVN0YWNoZSxcblxuICAgICcmJzogdHJpcGxlU3RhY2hlXG4gIH1cblxuICBmdW5jdGlvbiB0cmlwbGVTdGFjaGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQuY29kZSArPSAndC5iKHQudCh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDApKSk7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlKHMpIHtcbiAgICByZXR1cm4gJ3QuYignICsgcyArICcpOyc7XG4gIH1cblxuICBIb2dhbi53YWxrID0gZnVuY3Rpb24obm9kZWxpc3QsIGNvbnRleHQpIHtcbiAgICB2YXIgZnVuYztcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZnVuYyA9IEhvZ2FuLmNvZGVnZW5bbm9kZWxpc3RbaV0udGFnXTtcbiAgICAgIGZ1bmMgJiYgZnVuYyhub2RlbGlzdFtpXSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgSG9nYW4ucGFyc2UgPSBmdW5jdGlvbih0b2tlbnMsIHRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICByZXR1cm4gYnVpbGRUcmVlKHRva2VucywgJycsIFtdLCBvcHRpb25zLnNlY3Rpb25UYWdzIHx8IFtdKTtcbiAgfVxuXG4gIEhvZ2FuLmNhY2hlID0ge307XG5cbiAgSG9nYW4uY2FjaGVLZXkgPSBmdW5jdGlvbih0ZXh0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFt0ZXh0LCAhIW9wdGlvbnMuYXNTdHJpbmcsICEhb3B0aW9ucy5kaXNhYmxlTGFtYmRhLCBvcHRpb25zLmRlbGltaXRlcnMsICEhb3B0aW9ucy5tb2RlbEdldF0uam9pbignfHwnKTtcbiAgfVxuXG4gIEhvZ2FuLmNvbXBpbGUgPSBmdW5jdGlvbih0ZXh0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIGtleSA9IEhvZ2FuLmNhY2hlS2V5KHRleHQsIG9wdGlvbnMpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuY2FjaGVba2V5XTtcblxuICAgIGlmICh0ZW1wbGF0ZSkge1xuICAgICAgdmFyIHBhcnRpYWxzID0gdGVtcGxhdGUucGFydGlhbHM7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBhcnRpYWxzKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJ0aWFsc1tuYW1lXS5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2VuZXJhdGUodGhpcy5wYXJzZSh0aGlzLnNjYW4odGV4dCwgb3B0aW9ucy5kZWxpbWl0ZXJzKSwgdGV4dCwgb3B0aW9ucyksIHRleHQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0ZW1wbGF0ZTtcbiAgfVxufSkodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IEhvZ2FuKTtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMTEgVHdpdHRlciwgSW5jLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gVGhpcyBmaWxlIGlzIGZvciB1c2Ugd2l0aCBOb2RlLmpzLiBTZWUgZGlzdC8gZm9yIGJyb3dzZXIgZmlsZXMuXG5cbnZhciBIb2dhbiA9IHJlcXVpcmUoJy4vY29tcGlsZXInKTtcbkhvZ2FuLlRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpLlRlbXBsYXRlO1xuSG9nYW4udGVtcGxhdGUgPSBIb2dhbi5UZW1wbGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gSG9nYW47XG4iLCIvKlxuICogIENvcHlyaWdodCAyMDExIFR3aXR0ZXIsIEluYy5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbnZhciBIb2dhbiA9IHt9O1xuXG4oZnVuY3Rpb24gKEhvZ2FuKSB7XG4gIEhvZ2FuLlRlbXBsYXRlID0gZnVuY3Rpb24gKGNvZGVPYmosIHRleHQsIGNvbXBpbGVyLCBvcHRpb25zKSB7XG4gICAgY29kZU9iaiA9IGNvZGVPYmogfHwge307XG4gICAgdGhpcy5yID0gY29kZU9iai5jb2RlIHx8IHRoaXMucjtcbiAgICB0aGlzLmMgPSBjb21waWxlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMudGV4dCA9IHRleHQgfHwgJyc7XG4gICAgdGhpcy5wYXJ0aWFscyA9IGNvZGVPYmoucGFydGlhbHMgfHwge307XG4gICAgdGhpcy5zdWJzID0gY29kZU9iai5zdWJzIHx8IHt9O1xuICAgIHRoaXMuYnVmID0gJyc7XG4gIH1cblxuICBIb2dhbi5UZW1wbGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgLy8gcmVuZGVyOiByZXBsYWNlZCBieSBnZW5lcmF0ZWQgY29kZS5cbiAgICByOiBmdW5jdGlvbiAoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkgeyByZXR1cm4gJyc7IH0sXG5cbiAgICAvLyB2YXJpYWJsZSBlc2NhcGluZ1xuICAgIHY6IGhvZ2FuRXNjYXBlLFxuXG4gICAgLy8gdHJpcGxlIHN0YWNoZVxuICAgIHQ6IGNvZXJjZVRvU3RyaW5nLFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucmkoW2NvbnRleHRdLCBwYXJ0aWFscyB8fCB7fSwgaW5kZW50KTtcbiAgICB9LFxuXG4gICAgLy8gcmVuZGVyIGludGVybmFsIC0tIGEgaG9vayBmb3Igb3ZlcnJpZGVzIHRoYXQgY2F0Y2hlcyBwYXJ0aWFscyB0b29cbiAgICByaTogZnVuY3Rpb24gKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnIoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIGVuc3VyZVBhcnRpYWxcbiAgICBlcDogZnVuY3Rpb24oc3ltYm9sLCBwYXJ0aWFscykge1xuICAgICAgdmFyIHBhcnRpYWwgPSB0aGlzLnBhcnRpYWxzW3N5bWJvbF07XG5cbiAgICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IGlmIHdlJ3ZlIGluc3RhbnRpYXRlZCB0aGlzIHBhcnRpYWwgYmVmb3JlXG4gICAgICB2YXIgdGVtcGxhdGUgPSBwYXJ0aWFsc1twYXJ0aWFsLm5hbWVdO1xuICAgICAgaWYgKHBhcnRpYWwuaW5zdGFuY2UgJiYgcGFydGlhbC5iYXNlID09IHRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBwYXJ0aWFsLmluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghdGhpcy5jKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGlsZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYy5jb21waWxlKHRlbXBsYXRlLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB1c2UgdGhpcyB0byBjaGVjayB3aGV0aGVyIHRoZSBwYXJ0aWFscyBkaWN0aW9uYXJ5IGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLnBhcnRpYWxzW3N5bWJvbF0uYmFzZSA9IHRlbXBsYXRlO1xuXG4gICAgICBpZiAocGFydGlhbC5zdWJzKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBjb25zaWRlciBwYXJlbnQgdGVtcGxhdGUgbm93XG4gICAgICAgIGlmICghcGFydGlhbHMuc3RhY2tUZXh0KSBwYXJ0aWFscy5zdGFja1RleHQgPSB7fTtcbiAgICAgICAgZm9yIChrZXkgaW4gcGFydGlhbC5zdWJzKSB7XG4gICAgICAgICAgaWYgKCFwYXJ0aWFscy5zdGFja1RleHRba2V5XSkge1xuICAgICAgICAgICAgcGFydGlhbHMuc3RhY2tUZXh0W2tleV0gPSAodGhpcy5hY3RpdmVTdWIgIT09IHVuZGVmaW5lZCAmJiBwYXJ0aWFscy5zdGFja1RleHRbdGhpcy5hY3RpdmVTdWJdKSA/IHBhcnRpYWxzLnN0YWNrVGV4dFt0aGlzLmFjdGl2ZVN1Yl0gOiB0aGlzLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gY3JlYXRlU3BlY2lhbGl6ZWRQYXJ0aWFsKHRlbXBsYXRlLCBwYXJ0aWFsLnN1YnMsIHBhcnRpYWwucGFydGlhbHMsXG4gICAgICAgICAgdGhpcy5zdGFja1N1YnMsIHRoaXMuc3RhY2tQYXJ0aWFscywgcGFydGlhbHMuc3RhY2tUZXh0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbc3ltYm9sXS5pbnN0YW5jZSA9IHRlbXBsYXRlO1xuXG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfSxcblxuICAgIC8vIHRyaWVzIHRvIGZpbmQgYSBwYXJ0aWFsIGluIHRoZSBjdXJyZW50IHNjb3BlIGFuZCByZW5kZXIgaXRcbiAgICBycDogZnVuY3Rpb24oc3ltYm9sLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICB2YXIgcGFydGlhbCA9IHRoaXMuZXAoc3ltYm9sLCBwYXJ0aWFscyk7XG4gICAgICBpZiAoIXBhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydGlhbC5yaShjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KTtcbiAgICB9LFxuXG4gICAgLy8gcmVuZGVyIGEgc2VjdGlvblxuICAgIHJzOiBmdW5jdGlvbihjb250ZXh0LCBwYXJ0aWFscywgc2VjdGlvbikge1xuICAgICAgdmFyIHRhaWwgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWlsKSkge1xuICAgICAgICBzZWN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhaWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udGV4dC5wdXNoKHRhaWxbaV0pO1xuICAgICAgICBzZWN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCB0aGlzKTtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gbWF5YmUgc3RhcnQgYSBzZWN0aW9uXG4gICAgczogZnVuY3Rpb24odmFsLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncykge1xuICAgICAgdmFyIHBhc3M7XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsID0gdGhpcy5tcyh2YWwsIGN0eCwgcGFydGlhbHMsIGludmVydGVkLCBzdGFydCwgZW5kLCB0YWdzKTtcbiAgICAgIH1cblxuICAgICAgcGFzcyA9ICEhdmFsO1xuXG4gICAgICBpZiAoIWludmVydGVkICYmIHBhc3MgJiYgY3R4KSB7XG4gICAgICAgIGN0eC5wdXNoKCh0eXBlb2YgdmFsID09ICdvYmplY3QnKSA/IHZhbCA6IGN0eFtjdHgubGVuZ3RoIC0gMV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFzcztcbiAgICB9LFxuXG4gICAgLy8gZmluZCB2YWx1ZXMgd2l0aCBkb3R0ZWQgbmFtZXNcbiAgICBkOiBmdW5jdGlvbihrZXksIGN0eCwgcGFydGlhbHMsIHJldHVybkZvdW5kKSB7XG4gICAgICB2YXIgZm91bmQsXG4gICAgICAgICAgbmFtZXMgPSBrZXkuc3BsaXQoJy4nKSxcbiAgICAgICAgICB2YWwgPSB0aGlzLmYobmFtZXNbMF0sIGN0eCwgcGFydGlhbHMsIHJldHVybkZvdW5kKSxcbiAgICAgICAgICBkb01vZGVsR2V0ID0gdGhpcy5vcHRpb25zLm1vZGVsR2V0LFxuICAgICAgICAgIGN4ID0gbnVsbDtcblxuICAgICAgaWYgKGtleSA9PT0gJy4nICYmIGlzQXJyYXkoY3R4W2N0eC5sZW5ndGggLSAyXSkpIHtcbiAgICAgICAgdmFsID0gY3R4W2N0eC5sZW5ndGggLSAxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3VuZCA9IGZpbmRJblNjb3BlKG5hbWVzW2ldLCB2YWwsIGRvTW9kZWxHZXQpO1xuICAgICAgICAgIGlmIChmb3VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjeCA9IHZhbDtcbiAgICAgICAgICAgIHZhbCA9IGZvdW5kO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWwgPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybkZvdW5kICYmICF2YWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJldHVybkZvdW5kICYmIHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjdHgucHVzaChjeCk7XG4gICAgICAgIHZhbCA9IHRoaXMubXYodmFsLCBjdHgsIHBhcnRpYWxzKTtcbiAgICAgICAgY3R4LnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvLyBmaW5kIHZhbHVlcyB3aXRoIG5vcm1hbCBuYW1lc1xuICAgIGY6IGZ1bmN0aW9uKGtleSwgY3R4LCBwYXJ0aWFscywgcmV0dXJuRm91bmQpIHtcbiAgICAgIHZhciB2YWwgPSBmYWxzZSxcbiAgICAgICAgICB2ID0gbnVsbCxcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlLFxuICAgICAgICAgIGRvTW9kZWxHZXQgPSB0aGlzLm9wdGlvbnMubW9kZWxHZXQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSBjdHgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdiA9IGN0eFtpXTtcbiAgICAgICAgdmFsID0gZmluZEluU2NvcGUoa2V5LCB2LCBkb01vZGVsR2V0KTtcbiAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIChyZXR1cm5Gb3VuZCkgPyBmYWxzZSA6IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmV0dXJuRm91bmQgJiYgdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHRoaXMubXYodmFsLCBjdHgsIHBhcnRpYWxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLy8gaGlnaGVyIG9yZGVyIHRlbXBsYXRlc1xuICAgIGxzOiBmdW5jdGlvbihmdW5jLCBjeCwgcGFydGlhbHMsIHRleHQsIHRhZ3MpIHtcbiAgICAgIHZhciBvbGRUYWdzID0gdGhpcy5vcHRpb25zLmRlbGltaXRlcnM7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzID0gdGFncztcbiAgICAgIHRoaXMuYih0aGlzLmN0KGNvZXJjZVRvU3RyaW5nKGZ1bmMuY2FsbChjeCwgdGV4dCkpLCBjeCwgcGFydGlhbHMpKTtcbiAgICAgIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzID0gb2xkVGFncztcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjb21waWxlIHRleHRcbiAgICBjdDogZnVuY3Rpb24odGV4dCwgY3gsIHBhcnRpYWxzKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVMYW1iZGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMYW1iZGEgZmVhdHVyZXMgZGlzYWJsZWQuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jLmNvbXBpbGUodGV4dCwgdGhpcy5vcHRpb25zKS5yZW5kZXIoY3gsIHBhcnRpYWxzKTtcbiAgICB9LFxuXG4gICAgLy8gdGVtcGxhdGUgcmVzdWx0IGJ1ZmZlcmluZ1xuICAgIGI6IGZ1bmN0aW9uKHMpIHsgdGhpcy5idWYgKz0gczsgfSxcblxuICAgIGZsOiBmdW5jdGlvbigpIHsgdmFyIHIgPSB0aGlzLmJ1ZjsgdGhpcy5idWYgPSAnJzsgcmV0dXJuIHI7IH0sXG5cbiAgICAvLyBtZXRob2QgcmVwbGFjZSBzZWN0aW9uXG4gICAgbXM6IGZ1bmN0aW9uKGZ1bmMsIGN0eCwgcGFydGlhbHMsIGludmVydGVkLCBzdGFydCwgZW5kLCB0YWdzKSB7XG4gICAgICB2YXIgdGV4dFNvdXJjZSxcbiAgICAgICAgICBjeCA9IGN0eFtjdHgubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgcmVzdWx0ID0gZnVuYy5jYWxsKGN4KTtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoaW52ZXJ0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0U291cmNlID0gKHRoaXMuYWN0aXZlU3ViICYmIHRoaXMuc3Vic1RleHQgJiYgdGhpcy5zdWJzVGV4dFt0aGlzLmFjdGl2ZVN1Yl0pID8gdGhpcy5zdWJzVGV4dFt0aGlzLmFjdGl2ZVN1Yl0gOiB0aGlzLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubHMocmVzdWx0LCBjeCwgcGFydGlhbHMsIHRleHRTb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLCB0YWdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvLyBtZXRob2QgcmVwbGFjZSB2YXJpYWJsZVxuICAgIG12OiBmdW5jdGlvbihmdW5jLCBjdHgsIHBhcnRpYWxzKSB7XG4gICAgICB2YXIgY3ggPSBjdHhbY3R4Lmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuY2FsbChjeCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3QoY29lcmNlVG9TdHJpbmcocmVzdWx0LmNhbGwoY3gpKSwgY3gsIHBhcnRpYWxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgc3ViOiBmdW5jdGlvbihuYW1lLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICB2YXIgZiA9IHRoaXMuc3Vic1tuYW1lXTtcbiAgICAgIGlmIChmKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3ViID0gbmFtZTtcbiAgICAgICAgZihjb250ZXh0LCBwYXJ0aWFscywgdGhpcywgaW5kZW50KTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICAvL0ZpbmQgYSBrZXkgaW4gYW4gb2JqZWN0XG4gIGZ1bmN0aW9uIGZpbmRJblNjb3BlKGtleSwgc2NvcGUsIGRvTW9kZWxHZXQpIHtcbiAgICB2YXIgdmFsO1xuXG4gICAgaWYgKHNjb3BlICYmIHR5cGVvZiBzY29wZSA9PSAnb2JqZWN0Jykge1xuXG4gICAgICBpZiAoc2NvcGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbCA9IHNjb3BlW2tleV07XG5cbiAgICAgIC8vIHRyeSBsb29rdXAgd2l0aCBnZXQgZm9yIGJhY2tib25lIG9yIHNpbWlsYXIgbW9kZWwgZGF0YVxuICAgICAgfSBlbHNlIGlmIChkb01vZGVsR2V0ICYmIHNjb3BlLmdldCAmJiB0eXBlb2Ygc2NvcGUuZ2V0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsID0gc2NvcGUuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNwZWNpYWxpemVkUGFydGlhbChpbnN0YW5jZSwgc3VicywgcGFydGlhbHMsIHN0YWNrU3Vicywgc3RhY2tQYXJ0aWFscywgc3RhY2tUZXh0KSB7XG4gICAgZnVuY3Rpb24gUGFydGlhbFRlbXBsYXRlKCkge307XG4gICAgUGFydGlhbFRlbXBsYXRlLnByb3RvdHlwZSA9IGluc3RhbmNlO1xuICAgIGZ1bmN0aW9uIFN1YnN0aXR1dGlvbnMoKSB7fTtcbiAgICBTdWJzdGl0dXRpb25zLnByb3RvdHlwZSA9IGluc3RhbmNlLnN1YnM7XG4gICAgdmFyIGtleTtcbiAgICB2YXIgcGFydGlhbCA9IG5ldyBQYXJ0aWFsVGVtcGxhdGUoKTtcbiAgICBwYXJ0aWFsLnN1YnMgPSBuZXcgU3Vic3RpdHV0aW9ucygpO1xuICAgIHBhcnRpYWwuc3Vic1RleHQgPSB7fTsgIC8vaGVoZS4gc3Vic3RleHQuXG4gICAgcGFydGlhbC5idWYgPSAnJztcblxuICAgIHN0YWNrU3VicyA9IHN0YWNrU3VicyB8fCB7fTtcbiAgICBwYXJ0aWFsLnN0YWNrU3VicyA9IHN0YWNrU3VicztcbiAgICBwYXJ0aWFsLnN1YnNUZXh0ID0gc3RhY2tUZXh0O1xuICAgIGZvciAoa2V5IGluIHN1YnMpIHtcbiAgICAgIGlmICghc3RhY2tTdWJzW2tleV0pIHN0YWNrU3Vic1trZXldID0gc3Vic1trZXldO1xuICAgIH1cbiAgICBmb3IgKGtleSBpbiBzdGFja1N1YnMpIHtcbiAgICAgIHBhcnRpYWwuc3Vic1trZXldID0gc3RhY2tTdWJzW2tleV07XG4gICAgfVxuXG4gICAgc3RhY2tQYXJ0aWFscyA9IHN0YWNrUGFydGlhbHMgfHwge307XG4gICAgcGFydGlhbC5zdGFja1BhcnRpYWxzID0gc3RhY2tQYXJ0aWFscztcbiAgICBmb3IgKGtleSBpbiBwYXJ0aWFscykge1xuICAgICAgaWYgKCFzdGFja1BhcnRpYWxzW2tleV0pIHN0YWNrUGFydGlhbHNba2V5XSA9IHBhcnRpYWxzW2tleV07XG4gICAgfVxuICAgIGZvciAoa2V5IGluIHN0YWNrUGFydGlhbHMpIHtcbiAgICAgIHBhcnRpYWwucGFydGlhbHNba2V5XSA9IHN0YWNrUGFydGlhbHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydGlhbDtcbiAgfVxuXG4gIHZhciByQW1wID0gLyYvZyxcbiAgICAgIHJMdCA9IC88L2csXG4gICAgICByR3QgPSAvPi9nLFxuICAgICAgckFwb3MgPSAvXFwnL2csXG4gICAgICByUXVvdCA9IC9cXFwiL2csXG4gICAgICBoQ2hhcnMgPSAvWyY8PlxcXCJcXCddLztcblxuICBmdW5jdGlvbiBjb2VyY2VUb1N0cmluZyh2YWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKCh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpID8gJycgOiB2YWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gaG9nYW5Fc2NhcGUoc3RyKSB7XG4gICAgc3RyID0gY29lcmNlVG9TdHJpbmcoc3RyKTtcbiAgICByZXR1cm4gaENoYXJzLnRlc3Qoc3RyKSA/XG4gICAgICBzdHJcbiAgICAgICAgLnJlcGxhY2UockFtcCwgJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2Uockx0LCAnJmx0OycpXG4gICAgICAgIC5yZXBsYWNlKHJHdCwgJyZndDsnKVxuICAgICAgICAucmVwbGFjZShyQXBvcywgJyYjMzk7JylcbiAgICAgICAgLnJlcGxhY2UoclF1b3QsICcmcXVvdDsnKSA6XG4gICAgICBzdHI7XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbn0pKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyA/IGV4cG9ydHMgOiBIb2dhbik7XG4iLCJ2YXIgdGVtcGxhdGVBZGRDZWxsPVwiXCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2VsbC1jb250YWluZXJcXFwiPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtb3ZlcmxheSBvLWZlYXR1cmUtYWRkXFxcIj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHQ8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6XFwvXFwvd3d3LnczLm9yZ1xcLzIwMDBcXC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmdcXC8xOTk5XFwveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHQgdmlld0JveD1cXFwiMCAwIDYxMiA2MTJcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGcgaWQ9XFxcIl94MzFfXzI2X1xcXCI+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XFxcIk00MjAuNzUsMjg2Ljg3NWgtOTUuNjI1VjE5MS4yNWMwLTEwLjU1Ny04LjU2OC0xOS4xMjUtMTkuMTI1LTE5LjEyNWMtMTAuNTU3LDAtMTkuMTI1LDguNTY4LTE5LjEyNSwxOS4xMjV2OTUuNjI1XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHRIMTkxLjI1Yy0xMC41NTcsMC0xOS4xMjUsOC41NjgtMTkuMTI1LDE5LjEyNWMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNWg5NS42MjV2OTUuNjI1XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHRjMCwxMC41NTcsOC41NjgsMTkuMTI1LDE5LjEyNSwxOS4xMjVjMTAuNTU3LDAsMTkuMTI1LTguNTY4LDE5LjEyNS0xOS4xMjV2LTk1LjYyNWg5NS42MjVjMTAuNTU3LDAsMTkuMTI1LTguNTY4LDE5LjEyNS0xOS4xMjVcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdEM0MzkuODc1LDI5NS40NDMsNDMxLjMwNywyODYuODc1LDQyMC43NSwyODYuODc1eiBNNTM1LjUsMGgtNDU5QzM0LjI1MywwLDAsMzQuMjUzLDAsNzYuNXY0NTlDMCw1NzcuNzQ3LDM0LjI1Myw2MTIsNzYuNSw2MTJcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdGg0NTljNDIuMjQ3LDAsNzYuNS0zNC4yNTMsNzYuNS03Ni41di00NTlDNjEyLDM0LjI1Myw1NzcuNzQ3LDAsNTM1LjUsMHogTTU3My43NSw1MzUuNWMwLDIxLjEzMy0xNy4xMzYsMzguMjUtMzguMjUsMzguMjVoLTQ1OVwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdFx0Yy0yMS4xMzMsMC0zOC4yNS0xNy4xMTctMzguMjUtMzguMjV2LTQ1OWMwLTIxLjEzMywxNy4xMTctMzguMjUsMzguMjUtMzguMjVoNDU5YzIxLjExNCwwLDM4LjI1LDE3LjEzNiwzOC4yNSwzOC4yNVY1MzUuNXpcXFwiXFwvPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvc3ZnPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYnJhbmRcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jb250ZW50XFxcIj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNsZWFyZml4XFxcIj48XFwvZGl2PlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlQWRkQ2VsbDsiLCJcblxudmFyIHRlbXBsYXRlQ2VsbCA9IFxuXG5cdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtYnJhbmRcIj57e3ByaW1hcnlUaXRsZX19PC9kaXY+JyArXG5cdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtY29udGVudFwiPiAnICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWxlZnRcIj4gJyArXG5cdFx0XHRcdCc8aGVhZGVyIGNsYXNzPVwiby1mZWF0dXJlLXRpdGxlXCI+ICcgK1xuXHRcdFx0XHRcdCd7e3NlY29uZGFyeVRpdGxlfX0gJyArXG5cdFx0XHRcdCc8L2hlYWRlcj4gJyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWRlc2NyaXB0aW9uXCI+ICcgK1xuXHRcdFx0XHRcdCc8cD57e2Rlc2NyaXB0aW9ufX08L3A+ICcgK1xuXHRcdFx0XHQnPC9kaXY+ICcgK1xuXHRcdFx0JzwvZGl2PiAnICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLXJpZ2h0XCI+ICcgK1xuXHRcdFx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1pbWctYm9yZGVyXCI+ICcgK1xuXHRcdFx0XHRcdCc8aW1nIHNyYz1cInt7cmVzb3VyY2VVcmx9fVwiPiAnICtcblx0XHRcdFx0JzwvZGl2PiAnICtcblx0XHRcdCc8L2Rpdj4gJyArXG5cdFx0JzwvZGl2PiAnICtcblx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1jbGVhcmZpeFwiPjwvZGl2PiAnICtcblx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1idXR0b25cIj4gJyArXG5cdFx0XHQnPGJ1dHRvbiBjbGFzcz1cXFwiby1mZWF0dXJlLWFjdGlvbi1idXR0b25cXFwiIGhyZWY9XCJ7e2N0YVVybH19XCI+PGRpdj57e2N0YVRleHR9fTxcXC9kaXY+PC9idXR0b24+ICcgK1xuXHRcdCc8L2Rpdj4gJztcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZUNlbGw7XG4iLCJcblxudmFyIHRlbXBsYXRlRWRpdENlbGw9XCJcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2VsbC1jb250YWluZXJcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLW92ZXJsYXlcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOlxcL1xcL3d3dy53My5vcmdcXC8yMDAwXFwvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnXFwvMTk5OVxcL3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdCBcdFx0dmlld0JveD1cXFwiMCAwIDQ4Mi4xNCA0ODIuMTRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4Mi4xNCA0ODIuMTQ7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PHBhdGggZD1cXFwiTTM0MS43NjYsNDMwLjgyNGMwLDEwLjk2OS04LjkwMywxOS44NzQtMTkuODU2LDE5Ljg3NEg1Ny42ODdjLTEwLjk1MywwLTE5Ljg3NS04LjkwNS0xOS44NzUtMTkuODc0VjUxLjMxNVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0YzAtMTAuOTUzLDguOTIyLTE5Ljg1OCwxOS44NzUtMTkuODU4bDE4MS44OS0wLjE4OHY2Ny4yMTdjMCwxNi45OTEsMTEuOTMyLDMxLjE1OSwyNy44NDksMzQuNzA0bDU4LjY4NC01OC42ODNMMjUxLjMzMywwSDU3LjY4N1wiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0QzI5LjM5OCwwLDYuMzcyLDIzLjAyNiw2LjM3Miw1MS4zMTV2Mzc5LjUwOWMwLDI4LjI4OSwyMy4wMjYsNTEuMzE2LDUxLjMxNSw1MS4zMTZIMzIxLjkxYzI4LjI3MywwLDUxLjMtMjMuMDI2LDUxLjMtNTEuMzE2XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRWMjE1Ljg3N2wtMzEuODk5LDMxLjg5OEwzNDEuNzY2LDQzMC44MjR6XFxcIlxcLz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8cGF0aCBkPVxcXCJNMzc1Ljk2Nyw3MC4yOTFjLTIuMjctMi4yNzEtNS4zNTItMy41NDctOC41NTgtMy41NDdjLTMuMjA3LDAtNi4yOSwxLjI3Ni04LjU1OSwzLjU0N0wxMjAuNDc2LDMwOC42NjZcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtMS40NDEsMS40NDEtMi40OTksMy4yMjMtMy4wNjUsNS4xNzhsLTE5LjkzLDY4LjUxN2MtMS4yMjksNC4yMzktMC4wNTUsOC44MTgsMy4wNjUsMTEuOTM4YzIuMzAxLDIuMzAyLDUuMzksMy41NDgsOC41NTgsMy41NDhcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMxLjEyNywwLDIuMjY5LTAuMTU4LDMuMzgxLTAuNDgybDY4LjUxOC0xOS45MjFjMS45NTUtMC41NjgsMy43MzQtMS42MjQsNS4xNzctMy4wNjVsMjM4LjM3NS0yMzguMzc2XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjNC43MjktNC43MjcsNC43MjktMTIuMzg3LDAtMTcuMTE1TDM3NS45NjcsNzAuMjkxeiBNMzY3LjQwOSw5NS45NjVsMTUuNzM3LDE1LjczNmwtMjExLjA0LDIxMS4wMzhsLTE1LjczNi0xNS43MzdMMzY3LjQwOSw5NS45NjVcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdHogTTE0OS4wNzMsMzYxLjUxOWwtMTUuNzM3LTE1LjczN2w2LjIxMS0yMS4zN2wzMC44OTcsMzAuODg5TDE0OS4wNzMsMzYxLjUxOXpcXFwiXFwvPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxwYXRoIGQ9XFxcIk00NjIuMTUyLDMyLjY5NWMtOC43NzgtOC43OC0yMC40NC0xMy42MS0zMi44NTItMTMuNjFjLTEyLjQxMywwLTI0LjA3NCw0LjgzLTMyLjg1MywxMy42MWwtNC43MDQsNC43MDRcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtNC43MjksNC43MjktNC43MjksMTIuMzg4LDAsMTcuMTE1bDQ4LjU4OCw0OC41OThjMi4zNjUsMi4zNjIsNS40NjIsMy41NDYsOC41NTgsMy41NDZjMy4wOTgsMCw2LjE4Ni0xLjE4NCw4LjU1LTMuNTM5XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRsNC43MjktNC43MTljOC43Ny04Ljc4LDEzLjYtMjAuNDQ5LDEzLjYtMzIuODU0QzQ3NS43NjgsNTMuMzA5LDQ3MC44MDQsNDEuMzMxLDQ2Mi4xNTIsMzIuNjk1eiBNNDQ4LjQyNCw3Ni45NjVsLTMwLjUzNi0zMC41MzRcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGM4LjM3Ny01LjA0NCwyMC4wMzItMy43MiwyNy4xNTUsMy4zODhjNC4xMzcsNC4xMzgsNi41MTcsOS44NzMsNi41MTcsMTUuNzI4QzQ1MS41Niw2OS42Myw0NTAuNDY2LDczLjU1Myw0NDguNDI0LDc2Ljk2NXpcXFwiXFwvPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL3N2Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYnJhbmRcXFwiIGNvbnRlbnRlZGl0YWJsZT57e3ByaW1hcnlUaXRsZX19PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jb250ZW50XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWxlZnRcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxoZWFkZXIgY2xhc3M9XFxcIm8tZmVhdHVyZS10aXRsZVxcXCIgY29udGVudGVkaXRhYmxlPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0e3tzZWNvbmRhcnlUaXRsZX19XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PFxcL2hlYWRlcj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtZGVzY3JpcHRpb25cXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PHAgY29udGVudGVkaXRhYmxlPnt7ZGVzY3JpcHRpb259fTxcXC9wPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1yaWdodFxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWltZy1ib3JkZXJcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XFxcInt7cmVzb3VyY2VVcmx9fVxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWE+e3tyZXNvdXJjZVVybH19PFxcL3RleHRhcmVhPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XFxcIm8tZmVhdHVyZS1jaGFuZ2UtbGlua1xcXCI+Q2hhbmdlIEltYWdlPFxcL2E+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2xlYXJmaXhcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYnV0dG9uXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiby1mZWF0dXJlLWFjdGlvbi1idXR0b25cXFwiIGhyZWY9XFxcInt7Y3RhVXJsfX1cXFwiIGNvbnRlbnRlZGl0YWJsZT48ZGl2Pnt7Y3RhVGV4dH19PFxcL2Rpdj48XFwvYnV0dG9uPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYWN0aW9uLXVybC1jb2xvblxcXCI+Jm5ic3A7OiZuYnNwOzxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1hY3Rpb24tdXJsXFxcIiBjb250ZW50ZWRpdGFibGU+e3tjdGFVcmx9fTxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jbGVhcmZpeFxcXCI+PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWJ1dHRvbi1ncm91cFxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiby1mZWF0dXJlLWNhbmNlbFxcXCI+Q2FuY2VsPFxcL2J1dHRvbj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVxcXCJvLWZlYXR1cmUtc2F2ZVxcXCI+U2F2ZTxcXC9idXR0b24+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNsZWFyZml4XFxcIj48XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdDxcXC9kaXY+XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZUVkaXRDZWxsO1xuIiwiXG52YXIgRmVhdHVyZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHt9O1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG52YXIgdGVtcGxhdGUgPSByZXF1aXJlKCcuLi9odG1sL3RlbXBsYXRlQ2VsbC5qcycpO1xuXG52YXIgdGVtcGxhdGVFZGl0Q2VsbCA9IHJlcXVpcmUoJy4uL2h0bWwvdGVtcGxhdGVFZGl0Q2VsbC5qcycpO1xuXG52YXIgdGVtcGxhdGVBZGRDZWxsID0gcmVxdWlyZSgnLi4vaHRtbC90ZW1wbGF0ZUFkZENlbGwuanMnKTtcblxudmFyIEhvZ2FuID0gcmVxdWlyZSgnaG9nYW4uanMnKTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RhbnRzID0ge1xuICBub09mRWxlbWVudHNJbkFSb3c6IDIsXG4gIHBsYWNlSG9sZGVyVGV4dDoge1xuICAgIFwidHlwZVwiOlwiaW1hZ2VcIixcbiAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiQWRkIEZlYXR1cmUgVGl0bGVcIixcbiAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiQWRkIFRpdGxlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkFkZCBhIHNob3J0IGRlc2NyaXB0aW9uIHRoYXQgYnJpZWZseSBkZXNjcmliZXMgdGhlIGZlYXR1cmUuXCIsXG4gICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkwMy8xNzAxL3UxeUs1Zy5wbmdcIixcbiAgICBcImN0YVRleHRcIjpcIkFkZCBCdXR0b24gTGFiZWxcIixcbiAgICBcImN0YVVybFwiOlwiRW50ZXIgb3IgUGFzdGUgVVJMXCJcbiAgfVxufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRhdGEsIGVsZW1lbnQpIHtcblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB2YXIgX2NvbXBpbGVkVGVtcGxhdGUgPSB0aGlzLl9wcmVwYXJlVGVtcGxhdGUoZGF0YSwgb3B0aW9ucyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLmFwcGVuZENoaWxkKF9jb21waWxlZFRlbXBsYXRlKTtcblxuICBpZiAob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclRvT3ZlcmxheShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtb3ZlcmxheScpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJUb092ZXJsYXkgPSBmdW5jdGlvbiAobm9kZUxpc3QpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDxub2RlTGlzdC5sZW5ndGggLTEgOyBpKyspIHtcbiAgICAgICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2FkZEV2ZW50TGlzdGVuZXJUb05vZGUobm9kZUxpc3RbaV0pO1xuICAgIH1cbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLl9hZGRFdmVudExpc3RlbmVyVG9Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnKSA9PSAtMSkge1xuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gICcgJysgJ28tZmVhdHVyZS1lZGl0YWJsZS1jb250ZW50JztcbiAgICAgIH1cbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtc2F2ZScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc05hbWUgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZS5yZXBsYWNlKCcgby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnLCAnJyk7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ28tZmVhdHVyZS1pbWctYm9yZGVyJylbMF0uY2xhc3NOYW1lID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmNsYXNzTmFtZS5yZXBsYWNlKCcgby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCcsICcnKTtcbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JykgPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NOYW1lICs9ICAnICcrICdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JztcbiAgICAgIH1cbiAgfSk7XG4gIG5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCcpID09IC0xKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSAgJyAnKyAnby1mZWF0dXJlLWltZy1ib3JkZXItZWRpdCc7XG4gICAgICB9XG4gIH0pO1xufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX3ByZXBhcmVUZW1wbGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgX291dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBfb3V0cHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtbWFpbicpO1xuXG4gICAgdmFyIF9wcmV2aW91c19yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgX3ByZXZpb3VzX3Jvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLXJvdycpO1xuXG4gICAgdmFyIF9hZGRDZWxsQWRkZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGNlbGxDb3VudCA9IDA7IGNlbGxDb3VudCA8IGRhdGEubGVuZ3RoOyBjZWxsQ291bnQrKykge1xuXG4gICAgICBpZihjZWxsQ291bnQgJSBGZWF0dXJlQ29tcG9uZW50LnByb3RvdHlwZS5jb25zdGFudHMubm9PZkVsZW1lbnRzSW5BUm93ID09IDApIHtcblxuICAgICAgICB2YXIgX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgIGlmIChvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICBfcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtcm93IG8tZmVhdHVyZS1yb3ctZWRpdCcpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcbiAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIHZhciBfY2VsbCA9ICcnO1xuICAgICAgICBpZiAob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgICAgIF9jZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgICAgIF9jZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtY2VsbCBvLWZlYXR1cmUtY2VsbC1lZGl0Jyk7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwnKTtcbiAgICAgICAgICBfY2VsbC5pbm5lckhUTUwgPSBIb2dhbi5jb21waWxlKHRlbXBsYXRlKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBfcm93LmFwcGVuZENoaWxkKF9jZWxsKTtcbiAgICAgICAgX3ByZXZpb3VzX3JvdyA9IF9yb3c7XG4gICAgICBcbiAgICAgIGlmIChjZWxsQ291bnQgPT0gZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgaWYob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICB2YXIgX2FkZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgICAgICAgICAgIF9hZGRDZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtY2VsbCBvLWZlYXR1cmUtY2VsbC1lZGl0Jyk7XG4gICAgICAgICAgICAgIF9hZGRDZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVBZGRDZWxsKS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgX3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfYWRkQ2VsbClcblxuICAgICAgICAgICAgICBfYWRkQ2VsbEFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX291dHB1dC5hcHBlbmRDaGlsZChfcHJldmlvdXNfcm93KTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZWRpdE1vZGUpIHtcbiAgICAgICAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwgby1mZWF0dXJlLWNlbGwtZWRpdCcpO1xuICAgICAgICAgIF9jZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVFZGl0Q2VsbCkucmVuZGVyKGRhdGFbY2VsbENvdW50XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2NlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZSkucmVuZGVyKGRhdGFbY2VsbENvdW50XSk7XG4gICAgICAgIH1cblxuICAgICAgX3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfY2VsbCk7XG4gICAgICBcbiAgICAgIF9vdXRwdXQuYXBwZW5kQ2hpbGQoX3ByZXZpb3VzX3Jvdyk7XG4gICAgICAgIFxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyppZighX2FkZENlbGxBZGRlZCAmJiBvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICB2YXIgX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgIF9yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcblxuICAgICAgdmFyIF9jZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgICAgX2NlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG5cbiAgICAgIF9jZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVBZGRDZWxsKS5yZW5kZXIoKTtcbiAgICAgIF9yb3cuYXBwZW5kQ2hpbGQoX2NlbGwpO1xuICAgICAgXG4gICAgICBfb3V0cHV0LmFwcGVuZENoaWxkKF9yb3cpO1xuICAgIH0qL1xuXG4gIHJldHVybiBfb3V0cHV0O1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBlZGl0TW9kZTogZmFsc2Vcbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLnRyaWdnZXJBZGROZXcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lbGVtZW50KTtcbiAgdmFyIGNlbGxBcnJheSA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnby1mZWF0dXJlLWNlbGwnKTtcbiAgZm9yICh2YXIgaSA9IGNlbGxBcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBjaGlsZE5vZGUgPSBjZWxsQXJyYXlbaV07XG4gICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2luc2VydEFkZE5ldyhjaGlsZE5vZGUpO1xuICAgIFxuICB9O1xufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuX2luc2VydEFkZE5ldyA9IGZ1bmN0aW9uIChjaGlsZE5vZGUpIHtcbiAgdmFyIGNsZWFyZml4RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjbGVhcmZpeEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvLWZlYXR1cmUtY2xlYXJmaXgnKTtcblxuICB2YXIgYWRkTmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGROZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnby1mZWF0dXJlLWFkZC1uZXctY29udGFpbmVyJyk7XG4gIGFkZE5ld0VsZW1lbnQuaW5uZXJIVE1MID0gJzxhIGNsYXNzPVxcJ28tZmVhdHVyZS1hZGQtbmV3LWJ1dHRvblxcJz4gQWRkIE5ldyArIDwvYT4nO1xuICBhZGROZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwgby1mZWF0dXJlLWNlbGwtZWRpdCcpO1xuXG4gICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RhbnRzLnBsYWNlSG9sZGVyVGV4dCk7XG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShfY2VsbCx0aGlzLm5leHRTaWJsaW5nKTtcbiAgICBGZWF0dXJlQ29tcG9uZW50LnByb3RvdHlwZS5fYWRkRXZlbnRMaXN0ZW5lclRvTm9kZShfY2VsbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtb3ZlcmxheScpWzBdKTtcbiAgfSk7XG5cbiAgY2hpbGROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGFkZE5ld0VsZW1lbnQsY2hpbGROb2RlLm5leHRTaWJsaW5nKTtcbiAgY2hpbGROb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsZWFyZml4RWxlbWVudCxjaGlsZE5vZGUubmV4dFNpYmxpbmcpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGZWF0dXJlQ29tcG9uZW50O1xuIiwiIl19
