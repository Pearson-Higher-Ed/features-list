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

new $featureComponent().init(options, data, 'testId');

new $featureComponent().init(options2, data, 'testId2');

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

var templateCell = '<div class="o-feature-brand">{{primaryTitle}}</div>' + '<div class="o-feature-content"> ' + '<div class="o-feature-left"> ' + '<header class="o-feature-title"> ' + '{{secondaryTitle}} ' + '</header> ' + '<div class="o-feature-description"> ' + '<p>{{description}}</p> ' + '</div> ' + '</div> ' + '<div class="o-feature-right"> ' + '<div class="o-feature-img-border"> ' + '<img src="{{resourceUrl}}"> ' + '</div> ' + '</div> ' + '</div> ' + '<div class="o-feature-clearfix"></div> ' + '<div class="o-feature-button"> ' + '<button class=\"o-feature-action-button\" href="{{ctaUrl}}">{{ctaText}}</button> ' + '</div> ';

module.exports = templateCell;

},{}],8:[function(require,module,exports){
"use strict";

var templateEditCell = "";
templateEditCell += "<div class=\"o-feature-cell-container\">";
templateEditCell += "				<div class=\"o-feature-overlay\">";
templateEditCell += "					";
templateEditCell += "					<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"";
templateEditCell += "						 viewBox=\"0 0 516.374 516.374\" style=\"enable-background:new 0 0 516.374 516.374;\" xml:space=\"preserve\">";
templateEditCell += "					<g>";
templateEditCell += "						<path d=\"M494.618,397.646c-9.672-9.665-84.057-79.792-147.039-139.067c67.939-63.938,137.667-129.699,147.038-139.069";
templateEditCell += "							c22.229-22.229,26.951-67.233,0-94.177c-26.778-26.772-71.554-22.015-93.693,0.138c-7.723,7.723-55.387,58.125-141.796,149.941";
templateEditCell += "							c-18.615-17.493-32.579-30.61-38.586-36.252c1.669-8.01,2.619-17.545,2.831-28.432c0.03-1.555,0.045-3.138,0.045-4.749";
templateEditCell += "							c0-35.096-10.164-62.227-30.215-80.646c-31.128-28.604-74.368-25.299-76.18-25.14L114.506,0.4l-11.055,11.056l52.726,52.54";
templateEditCell += "							c0.743,0.741,1.402,1.548,1.973,2.406c0.381,0.572,0.722,1.166,1.023,1.778c0.301,0.612,0.562,1.243,0.781,1.887";
templateEditCell += "							c0.986,2.898,1.129,6.07,0.316,9.112l-13.994,52.61c-0.719,2.703-2.14,5.122-4.057,7.046c-1.677,1.684-3.734,2.991-6.034,3.779";
templateEditCell += "							c-0.328,0.113-0.662,0.215-1,0.306l-52.568,14.188c-1.355,0.367-2.734,0.544-4.103,0.542c-0.684-0.001-1.366-0.047-2.041-0.136";
templateEditCell += "							c-2.024-0.268-3.984-0.927-5.764-1.944c-0.593-0.339-1.166-0.718-1.715-1.135c-0.549-0.417-1.073-0.872-1.568-1.365l-52.713-52.534";
templateEditCell += "							L3.671,111.578l-0.207,2.517c-0.02,0.227-0.089,1.102-0.138,2.519c-0.347,9.92,0.254,46.43,25.264,73.661";
templateEditCell += "							c18.421,20.045,45.559,30.209,80.648,30.209c0.001,0,0.002,0,0.003,0s0.002,0,0.004,0c12.885,0,24.022-0.968,33.182-2.875";
templateEditCell += "							c7.875,8.385,30.298,32.259,58.871,62.655l-87.117,86.951c-1.314,1.314-3.056,2.033-4.902,2.033H58.336L4.302,453.165";
templateEditCell += "							l63.216,63.209l83.917-54.033v-51.165c0-1.86,0.726-3.602,2.033-4.909l85.756-85.666";
templateEditCell += "							c98.883,105.121,153.28,162.676,161.694,171.083c10.592,10.592,27.013,17.486,43.925,18.44c1.39,0.083,2.759,0.124,4.128,0.124";
templateEditCell += "							c2.2,0,4.375-0.101,6.522-0.301c15.03-1.401,28.652-7.657,39.125-18.111c12.631-12.634,18.305-29.236,18.478-45.599";
templateEditCell += "							C513.294,427.693,506.428,409.455,494.618,397.646z M445.631,496.324c-13.621-0.768-26.681-6.161-34.93-14.416";
templateEditCell += "							c-8.208-8.203-64.075-67.325-161.687-171.087l27.676-27.647l7.225,7.26c8.076,8.117,20.923,8.346,29.268,0.505";
templateEditCell += "							c7.953-7.479,16.089-15.134,24.297-22.856c67.558,63.577,138.134,130.129,147.354,139.345c15.211,15.211,22.775,51.849,0,74.631";
templateEditCell += "							c-0.629,0.628-1.273,1.237-1.932,1.826C473.014,492.718,459.824,497.069,445.631,496.324z M149.797,205.252l-2.8-2.987h-0.001";
templateEditCell += "							l-0.007-0.007l-2.873,0.746l-1.081,0.277c-8.732,2.247-20.099,3.381-33.782,3.381c-31.01,0-54.684-8.628-70.386-25.651";
templateEditCell += "							c-18.085-19.612-21.271-45.901-21.689-58.465l40.467,40.322c7.453,7.44,18.405,10.344,28.562,7.606l52.568-14.188";
templateEditCell += "							c1.905-0.513,3.734-1.213,5.466-2.077c7.511-3.743,13.206-10.591,15.409-18.866l13.994-52.61";
templateEditCell += "							c2.704-10.164-0.242-21.095-7.695-28.528l-40.454-40.308c12.53,0.397,38.66,3.543,58.339,21.626";
templateEditCell += "							c17.078,15.688,25.741,39.397,25.741,70.462c0,13.684-1.134,25.043-3.381,33.776l-1.016,3.962l2.987,2.793";
templateEditCell += "							c0.644,0.604,17.001,15.965,41.482,38.971c-6.524,6.933-13.249,14.082-20.186,21.458c-7.792,8.297-7.606,21.122,0.401,29.212";
templateEditCell += "							l7.771,7.841L211.09,270.49c-16.689-17.754-31.247-33.246-41.987-44.678C157.039,212.968,149.797,205.252,149.797,205.252z";
templateEditCell += "							 M259.723,194.957c19.663,18.481,43.253,40.661,67.669,63.634c-8,7.527-15.931,14.988-23.687,22.281";
templateEditCell += "							c-2.835,2.669-7.225,2.599-9.991-0.18l-7.246-7.281l-46.794-46.988c-2.745-2.773-2.807-7.17-0.145-9.998";
templateEditCell += "							C246.47,209.045,253.197,201.893,259.723,194.957z M247.376,253.796l19.539,19.588l-27.383,27.355";
templateEditCell += "							c-6.499-6.91-12.848-13.662-18.972-20.176L247.376,253.796z M410.695,35.254c15.508-15.508,51.199-23.058,74.14-0.138";
templateEditCell += "							c10.074,10.074,15.163,24.089,14.34,39.473c-0.733,13.565-6.223,27.034-14.34,35.151c-9.291,9.291-79.295,75.31-147.348,139.351";
templateEditCell += "							c-24.624-23.168-48.438-45.558-68.284-64.21C355.494,93.179,403.053,42.889,410.695,35.254z M143.684,396.49";
templateEditCell += "							c-3.927,3.921-6.084,9.134-6.084,14.686v43.614l-68.194,43.919l-47.438-47.431l43.925-68.201h43.387";
templateEditCell += "							c5.538,0,10.745-2.158,14.665-6.071l86.823-86.668c6.128,6.518,12.477,13.27,18.975,20.18L143.684,396.49z\"\/>";
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
templateEditCell += "						<\/div>";
templateEditCell += "					<\/div>";
templateEditCell += "				<\/div>";
templateEditCell += "				<div class=\"o-feature-clearfix\"><\/div>";
templateEditCell += "				<div class=\"o-feature-button\">";
templateEditCell += "					<button class=\"o-feature-action-button\" href=\"{{ctaUrl}}\" contenteditable>{{ctaText}}<\/button>";
templateEditCell += "					<div class=\"o-feature-action-url\" contenteditable>{{ctaUrl}}<\/div>";
templateEditCell += "					<button class=\"o-feature-save\">Save<\/button>";
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
    noOfElementsInARow: 2
};

FeatureComponent.prototype.init = function (options, data, element) {

    var _compiledTemplate = this._prepareTemplate(data, options);
    document.getElementById(element).appendChild(_compiledTemplate);

    if (options.editMode) {
        FeatureComponent.prototype.addEventListenerToOverlay(document.getElementsByClassName('o-feature-overlay'));
    }
};

FeatureComponent.prototype.addEventListenerToOverlay = function (nodeList) {
    for (var i = 0; i < nodeList.length - 1; i++) {
        nodeList[i].addEventListener('click', function () {
            if (this.parentNode.className.indexOf('o-feature-editable-content') == -1) {
                this.parentNode.className += ' ' + 'o-feature-editable-content';
            }
        });
        nodeList[i].parentNode.getElementsByClassName('o-feature-save')[0].addEventListener('click', function () {
            this.parentNode.parentNode.className = this.parentNode.parentNode.className.replace(' o-feature-editable-content', '');
            this.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className = this.parentNode.parentNode.getElementsByClassName('o-feature-img-border')[0].className.replace(' o-feature-img-border-edit', '');
        });
        nodeList[i].parentNode.getElementsByClassName('o-feature-img-border')[0].getElementsByTagName("img")[0].addEventListener('click', function () {
            if (this.parentNode.className.indexOf('o-feature-img-border-edit') == -1) {
                this.parentNode.className += ' ' + 'o-feature-img-border-edit';
            }
        });
    }
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
            _row.setAttribute('class', 'o-feature-row');

            var _cell = document.createElement('article');
            _cell.setAttribute('class', 'o-feature-cell');

            if (options.editMode) {
                _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
            } else {
                _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
            }

            _row.appendChild(_cell);
            _previous_row = _row;

            if (cellCount == data.length - 1) {
                if (options.editMode) {
                    var _addCell = document.createElement('article');
                    _addCell.setAttribute('class', 'o-feature-cell');
                    _addCell.innerHTML = Hogan.compile(templateAddCell).render();
                    _previous_row.appendChild(_addCell);

                    _addCellAdded = true;
                }
                _output.appendChild(_previous_row);
            }
        } else {

            var _cell = document.createElement('article');
            _cell.setAttribute('class', 'o-feature-cell');

            if (options.editMode) {
                _cell.innerHTML = Hogan.compile(templateEditCell).render(data[cellCount]);
            } else {
                _cell.innerHTML = Hogan.compile(template).render(data[cellCount]);
            }

            _previous_row.appendChild(_cell);

            _output.appendChild(_previous_row);
        }
    }

    if (!_addCellAdded && options.editMode) {
        var _row = document.createElement('section');
        _row.setAttribute('class', 'o-feature-row');

        var _cell = document.createElement('article');
        _cell.setAttribute('class', 'o-feature-cell');

        _cell.innerHTML = Hogan.compile(templateAddCell).render();
        _row.appendChild(_cell);

        _output.appendChild(_row);
    }

    return _output;
};

var defaults = {
    editMode: false
};

module.exports = FeatureComponent;

},{"../html/templateAddCell.js":6,"../html/templateCell.js":7,"../html/templateEditCell.js":8,"fs":10,"hogan.js":4}],10:[function(require,module,exports){

},{}]},{},[1])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL29yaWdhbWktYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW9zL3NyYy9kZW1vLmpzIiwibWFpbi5qcyIsIm5vZGVfbW9kdWxlcy9ob2dhbi5qcy9saWIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvaG9nYW4uanMvbGliL2hvZ2FuLmpzIiwibm9kZV9tb2R1bGVzL2hvZ2FuLmpzL2xpYi90ZW1wbGF0ZS5qcyIsInNyYy9odG1sL3RlbXBsYXRlQWRkQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlQ2VsbC5qcyIsInNyYy9odG1sL3RlbXBsYXRlRWRpdENlbGwuanMiLCJzcmMvanMvZmVhdHVyZUNvbXBvbmVudC5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL29yaWdhbWktYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVc7QUFDeEQsY0FBWSxDQUFDO0FBQ2IsVUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7Q0FDOUQsQ0FBQyxDQUFDOztBQUVILElBQUksSUFBSSxHQUFHLENBQ047QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsRUFDRjtBQUNFLFFBQU0sRUFBQyxPQUFPO0FBQ2QsbUJBQWlCLEVBQUMsR0FBRztBQUNyQixnQkFBYyxFQUFFLDBCQUEwQjtBQUMxQyxrQkFBZ0IsRUFBRSxxQkFBcUI7QUFDdkMsZUFBYSxFQUFFLGtCQUFrQjtBQUNqQyxlQUFhLEVBQUUsZ0RBQWdEO0FBQy9ELFdBQVMsRUFBQyxpQkFBaUI7QUFDM0IsVUFBUSxFQUFDLHdCQUF3QjtDQUNqQyxFQUNEO0FBQ0MsUUFBTSxFQUFDLE9BQU87QUFDZCxtQkFBaUIsRUFBQyxHQUFHO0FBQ3JCLGdCQUFjLEVBQUUsMEJBQTBCO0FBQzFDLGtCQUFnQixFQUFFLHFCQUFxQjtBQUN2QyxlQUFhLEVBQUUsa0JBQWtCO0FBQ2pDLGVBQWEsRUFBRSxnREFBZ0Q7QUFDL0QsV0FBUyxFQUFDLGlCQUFpQjtBQUMzQixVQUFRLEVBQUMsd0JBQXdCO0NBQ2pDLEVBQ0Q7QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsRUFDRDtBQUNDLFFBQU0sRUFBQyxPQUFPO0FBQ2QsbUJBQWlCLEVBQUMsR0FBRztBQUNyQixnQkFBYyxFQUFFLDBCQUEwQjtBQUMxQyxrQkFBZ0IsRUFBRSxxQkFBcUI7QUFDdkMsZUFBYSxFQUFFLGtCQUFrQjtBQUNqQyxlQUFhLEVBQUUsZ0RBQWdEO0FBQy9ELFdBQVMsRUFBQyxpQkFBaUI7QUFDM0IsVUFBUSxFQUFDLHdCQUF3QjtDQUNqQyxFQUNEO0FBQ0MsUUFBTSxFQUFDLE9BQU87QUFDZCxtQkFBaUIsRUFBQyxHQUFHO0FBQ3JCLGdCQUFjLEVBQUUsMEJBQTBCO0FBQzFDLGtCQUFnQixFQUFFLHFCQUFxQjtBQUN2QyxlQUFhLEVBQUUsa0JBQWtCO0FBQ2pDLGVBQWEsRUFBRSxnREFBZ0Q7QUFDL0QsV0FBUyxFQUFDLGlCQUFpQjtBQUMzQixVQUFRLEVBQUMsd0JBQXdCO0NBQ2pDLEVBQ0Q7QUFDQyxRQUFNLEVBQUMsT0FBTztBQUNkLG1CQUFpQixFQUFDLEdBQUc7QUFDckIsZ0JBQWMsRUFBRSwwQkFBMEI7QUFDMUMsa0JBQWdCLEVBQUUscUJBQXFCO0FBQ3ZDLGVBQWEsRUFBRSxrQkFBa0I7QUFDakMsZUFBYSxFQUFFLGdEQUFnRDtBQUMvRCxXQUFTLEVBQUMsaUJBQWlCO0FBQzNCLFVBQVEsRUFBQyx3QkFBd0I7Q0FDakMsQ0FDRixDQUFDOztBQUVMLElBQUksT0FBTyxHQUFHO0FBQ1osVUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDOztBQUVGLElBQUksUUFBUSxHQUFHO0FBQ2IsVUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQzs7QUFFRixJQUFJLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRXRELElBQUksaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzs7OztBQzFGeEQsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQzs7O0FDSGhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SSxDQUFDLENBQUM7S0FDM0I7O0FBRUosV0FBTyxPQUFPLENBQUM7Q0FDZixDQUFDOztBQUVGLElBQUksUUFBUSxHQUFHO0FBQ2QsWUFBUSxFQUFFLEtBQUs7Q0FDZixDQUFDOztBQUlGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7OztBQ2xJbEMiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypnbG9iYWwgcmVxdWlyZSovXG5yZXF1aXJlKCcuLi8uLi9tYWluJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ28uRE9NQ29udGVudExvYWRlZCcpKTtcbn0pO1xuXG52YXIgZGF0YSA9IFtcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH0sXG4gICAgIHtcbiAgICAgIFwidHlwZVwiOlwidmlkZW9cIixcbiAgICAgIFwiZGlzcGxheVNlcXVlbmNlXCI6XCIxXCIsXG4gICAgICBcInByaW1hcnlUaXRsZVwiOiBcIlJldmVsIFRtIEhpc3RvcnkgRmVhdHVyZVwiLFxuICAgICAgXCJzZWNvbmRhcnlUaXRsZVwiOiBcIkV4cGxvcmVyIEFjdGl2aXRpZXNcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgICBcInJlc291cmNlVXJsXCI6IFwiaHR0cDovL2ltYWdlc2hhY2suY29tL2EvaW1nOTEwLzk3MTQvMVFoUGdLLnBuZ1wiLFxuICAgICAgXCJjdGFUZXh0XCI6XCJMYXVuY2ggQWN0aXZpdHlcIixcbiAgICAgIFwiY3RhVXJsXCI6XCJodHRwOi8vd3d3LnlvdXR1YmUsY29tXCJcbiAgICAgfSxcbiAgICAge1xuICAgICAgXCJ0eXBlXCI6XCJ2aWRlb1wiLFxuICAgICAgXCJkaXNwbGF5U2VxdWVuY2VcIjpcIjFcIixcbiAgICAgIFwicHJpbWFyeVRpdGxlXCI6IFwiUmV2ZWwgVG0gSGlzdG9yeSBGZWF0dXJlXCIsXG4gICAgICBcInNlY29uZGFyeVRpdGxlXCI6IFwiRXhwbG9yZXIgQWN0aXZpdGllc1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNvbWUgZGVzY3JpcHRpb25cIixcbiAgICAgIFwicmVzb3VyY2VVcmxcIjogXCJodHRwOi8vaW1hZ2VzaGFjay5jb20vYS9pbWc5MTAvOTcxNC8xUWhQZ0sucG5nXCIsXG4gICAgICBcImN0YVRleHRcIjpcIkxhdW5jaCBBY3Rpdml0eVwiLFxuICAgICAgXCJjdGFVcmxcIjpcImh0dHA6Ly93d3cueW91dHViZSxjb21cIlxuICAgICB9LFxuICAgICB7XG4gICAgICBcInR5cGVcIjpcInZpZGVvXCIsXG4gICAgICBcImRpc3BsYXlTZXF1ZW5jZVwiOlwiMVwiLFxuICAgICAgXCJwcmltYXJ5VGl0bGVcIjogXCJSZXZlbCBUbSBIaXN0b3J5IEZlYXR1cmVcIixcbiAgICAgIFwic2Vjb25kYXJ5VGl0bGVcIjogXCJFeHBsb3JlciBBY3Rpdml0aWVzXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwic29tZSBkZXNjcmlwdGlvblwiLFxuICAgICAgXCJyZXNvdXJjZVVybFwiOiBcImh0dHA6Ly9pbWFnZXNoYWNrLmNvbS9hL2ltZzkxMC85NzE0LzFRaFBnSy5wbmdcIixcbiAgICAgIFwiY3RhVGV4dFwiOlwiTGF1bmNoIEFjdGl2aXR5XCIsXG4gICAgICBcImN0YVVybFwiOlwiaHR0cDovL3d3dy55b3V0dWJlLGNvbVwiXG4gICAgIH1cbiAgIF07XG5cbnZhciBvcHRpb25zID0ge1xuICBlZGl0TW9kZTogdHJ1ZVxufTtcblxudmFyIG9wdGlvbnMyID0ge1xuICBlZGl0TW9kZTogZmFsc2Vcbn07XG5cbm5ldyAkZmVhdHVyZUNvbXBvbmVudCgpLmluaXQob3B0aW9ucywgZGF0YSwgJ3Rlc3RJZCcpO1xuXG5uZXcgJGZlYXR1cmVDb21wb25lbnQoKS5pbml0KG9wdGlvbnMyLCBkYXRhLCAndGVzdElkMicpOyIsIi8qZ2xvYmFsIHJlcXVpcmUsIG1vZHVsZSovXG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy4kZmVhdHVyZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vc3JjL2pzL2ZlYXR1cmVDb21wb25lbnQnKTtcblxuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4oZnVuY3Rpb24gKEhvZ2FuKSB7XG4gIC8vIFNldHVwIHJlZ2V4ICBhc3NpZ25tZW50c1xuICAvLyByZW1vdmUgd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gTXVzdGFjaGUgc3BlY1xuICB2YXIgcklzV2hpdGVzcGFjZSA9IC9cXFMvLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgck5ld2xpbmUgPSAgL1xcbi9nLFxuICAgICAgckNyID0gL1xcci9nLFxuICAgICAgclNsYXNoID0gL1xcXFwvZyxcbiAgICAgIHJMaW5lU2VwID0gL1xcdTIwMjgvLFxuICAgICAgclBhcmFncmFwaFNlcCA9IC9cXHUyMDI5LztcblxuICBIb2dhbi50YWdzID0ge1xuICAgICcjJzogMSwgJ14nOiAyLCAnPCc6IDMsICckJzogNCxcbiAgICAnLyc6IDUsICchJzogNiwgJz4nOiA3LCAnPSc6IDgsICdfdic6IDksXG4gICAgJ3snOiAxMCwgJyYnOiAxMSwgJ190JzogMTJcbiAgfTtcblxuICBIb2dhbi5zY2FuID0gZnVuY3Rpb24gc2Nhbih0ZXh0LCBkZWxpbWl0ZXJzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJTl9URVhUID0gMCxcbiAgICAgICAgSU5fVEFHX1RZUEUgPSAxLFxuICAgICAgICBJTl9UQUcgPSAyLFxuICAgICAgICBzdGF0ZSA9IElOX1RFWFQsXG4gICAgICAgIHRhZ1R5cGUgPSBudWxsLFxuICAgICAgICB0YWcgPSBudWxsLFxuICAgICAgICBidWYgPSAnJyxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgICAgIHNlZW5UYWcgPSBmYWxzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxpbmVTdGFydCA9IDAsXG4gICAgICAgIG90YWcgPSAne3snLFxuICAgICAgICBjdGFnID0gJ319JztcblxuICAgIGZ1bmN0aW9uIGFkZEJ1ZigpIHtcbiAgICAgIGlmIChidWYubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiAnX3QnLCB0ZXh0OiBuZXcgU3RyaW5nKGJ1Zil9KTtcbiAgICAgICAgYnVmID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZUlzV2hpdGVzcGFjZSgpIHtcbiAgICAgIHZhciBpc0FsbFdoaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaiA9IGxpbmVTdGFydDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpc0FsbFdoaXRlc3BhY2UgPVxuICAgICAgICAgIChIb2dhbi50YWdzW3Rva2Vuc1tqXS50YWddIDwgSG9nYW4udGFnc1snX3YnXSkgfHxcbiAgICAgICAgICAodG9rZW5zW2pdLnRhZyA9PSAnX3QnICYmIHRva2Vuc1tqXS50ZXh0Lm1hdGNoKHJJc1doaXRlc3BhY2UpID09PSBudWxsKTtcbiAgICAgICAgaWYgKCFpc0FsbFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzQWxsV2hpdGVzcGFjZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJMaW5lKGhhdmVTZWVuVGFnLCBub05ld0xpbmUpIHtcbiAgICAgIGFkZEJ1ZigpO1xuXG4gICAgICBpZiAoaGF2ZVNlZW5UYWcgJiYgbGluZUlzV2hpdGVzcGFjZSgpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQsIG5leHQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodG9rZW5zW2pdLnRleHQpIHtcbiAgICAgICAgICAgIGlmICgobmV4dCA9IHRva2Vuc1tqKzFdKSAmJiBuZXh0LnRhZyA9PSAnPicpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGluZGVudCB0byB0b2tlbiB2YWx1ZVxuICAgICAgICAgICAgICBuZXh0LmluZGVudCA9IHRva2Vuc1tqXS50ZXh0LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFub05ld0xpbmUpIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzonXFxuJ30pO1xuICAgICAgfVxuXG4gICAgICBzZWVuVGFnID0gZmFsc2U7XG4gICAgICBsaW5lU3RhcnQgPSB0b2tlbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlbGltaXRlcnModGV4dCwgaW5kZXgpIHtcbiAgICAgIHZhciBjbG9zZSA9ICc9JyArIGN0YWcsXG4gICAgICAgICAgY2xvc2VJbmRleCA9IHRleHQuaW5kZXhPZihjbG9zZSwgaW5kZXgpLFxuICAgICAgICAgIGRlbGltaXRlcnMgPSB0cmltKFxuICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcodGV4dC5pbmRleE9mKCc9JywgaW5kZXgpICsgMSwgY2xvc2VJbmRleClcbiAgICAgICAgICApLnNwbGl0KCcgJyk7XG5cbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbZGVsaW1pdGVycy5sZW5ndGggLSAxXTtcblxuICAgICAgcmV0dXJuIGNsb3NlSW5kZXggKyBjbG9zZS5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmIChkZWxpbWl0ZXJzKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gZGVsaW1pdGVycy5zcGxpdCgnICcpO1xuICAgICAgb3RhZyA9IGRlbGltaXRlcnNbMF07XG4gICAgICBjdGFnID0gZGVsaW1pdGVyc1sxXTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzdGF0ZSA9PSBJTl9URVhUKSB7XG4gICAgICAgIGlmICh0YWdDaGFuZ2Uob3RhZywgdGV4dCwgaSkpIHtcbiAgICAgICAgICAtLWk7XG4gICAgICAgICAgYWRkQnVmKCk7XG4gICAgICAgICAgc3RhdGUgPSBJTl9UQUdfVFlQRTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGV4dC5jaGFyQXQoaSkgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgIGZpbHRlckxpbmUoc2VlblRhZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT0gSU5fVEFHX1RZUEUpIHtcbiAgICAgICAgaSArPSBvdGFnLmxlbmd0aCAtIDE7XG4gICAgICAgIHRhZyA9IEhvZ2FuLnRhZ3NbdGV4dC5jaGFyQXQoaSArIDEpXTtcbiAgICAgICAgdGFnVHlwZSA9IHRhZyA/IHRleHQuY2hhckF0KGkgKyAxKSA6ICdfdic7XG4gICAgICAgIGlmICh0YWdUeXBlID09ICc9Jykge1xuICAgICAgICAgIGkgPSBjaGFuZ2VEZWxpbWl0ZXJzKHRleHQsIGkpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0YXRlID0gSU5fVEFHO1xuICAgICAgICB9XG4gICAgICAgIHNlZW5UYWcgPSBpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRhZ0NoYW5nZShjdGFnLCB0ZXh0LCBpKSkge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHt0YWc6IHRhZ1R5cGUsIG46IHRyaW0oYnVmKSwgb3RhZzogb3RhZywgY3RhZzogY3RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgaTogKHRhZ1R5cGUgPT0gJy8nKSA/IHNlZW5UYWcgLSBvdGFnLmxlbmd0aCA6IGkgKyBjdGFnLmxlbmd0aH0pO1xuICAgICAgICAgIGJ1ZiA9ICcnO1xuICAgICAgICAgIGkgKz0gY3RhZy5sZW5ndGggLSAxO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEVYVDtcbiAgICAgICAgICBpZiAodGFnVHlwZSA9PSAneycpIHtcbiAgICAgICAgICAgIGlmIChjdGFnID09ICd9fScpIHtcbiAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xlYW5UcmlwbGVTdGFjaGUodG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZiArPSB0ZXh0LmNoYXJBdChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckxpbmUoc2VlblRhZywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5UcmlwbGVTdGFjaGUodG9rZW4pIHtcbiAgICBpZiAodG9rZW4ubi5zdWJzdHIodG9rZW4ubi5sZW5ndGggLSAxKSA9PT0gJ30nKSB7XG4gICAgICB0b2tlbi5uID0gdG9rZW4ubi5zdWJzdHJpbmcoMCwgdG9rZW4ubi5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHMpIHtcbiAgICBpZiAocy50cmltKSB7XG4gICAgICByZXR1cm4gcy50cmltKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGFnQ2hhbmdlKHRhZywgdGV4dCwgaW5kZXgpIHtcbiAgICBpZiAodGV4dC5jaGFyQXQoaW5kZXgpICE9IHRhZy5jaGFyQXQoMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMSwgbCA9IHRhZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXh0LmNoYXJBdChpbmRleCArIGkpICE9IHRhZy5jaGFyQXQoaSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdGhlIHRhZ3MgYWxsb3dlZCBpbnNpZGUgc3VwZXIgdGVtcGxhdGVzXG4gIHZhciBhbGxvd2VkSW5TdXBlciA9IHsnX3QnOiB0cnVlLCAnXFxuJzogdHJ1ZSwgJyQnOiB0cnVlLCAnLyc6IHRydWV9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVHJlZSh0b2tlbnMsIGtpbmQsIHN0YWNrLCBjdXN0b21UYWdzKSB7XG4gICAgdmFyIGluc3RydWN0aW9ucyA9IFtdLFxuICAgICAgICBvcGVuZXIgPSBudWxsLFxuICAgICAgICB0YWlsID0gbnVsbCxcbiAgICAgICAgdG9rZW4gPSBudWxsO1xuXG4gICAgdGFpbCA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgd2hpbGUgKHRva2Vucy5sZW5ndGggPiAwKSB7XG4gICAgICB0b2tlbiA9IHRva2Vucy5zaGlmdCgpO1xuXG4gICAgICBpZiAodGFpbCAmJiB0YWlsLnRhZyA9PSAnPCcgJiYgISh0b2tlbi50YWcgaW4gYWxsb3dlZEluU3VwZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjb250ZW50IGluIDwgc3VwZXIgdGFnLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoSG9nYW4udGFnc1t0b2tlbi50YWddIDw9IEhvZ2FuLnRhZ3NbJyQnXSB8fCBpc09wZW5lcih0b2tlbiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgc3RhY2sucHVzaCh0b2tlbik7XG4gICAgICAgIHRva2VuLm5vZGVzID0gYnVpbGRUcmVlKHRva2VucywgdG9rZW4udGFnLCBzdGFjaywgY3VzdG9tVGFncyk7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnRhZyA9PSAnLycpIHtcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xvc2luZyB0YWcgd2l0aG91dCBvcGVuZXI6IC8nICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGlmICh0b2tlbi5uICE9IG9wZW5lci5uICYmICFpc0Nsb3Nlcih0b2tlbi5uLCBvcGVuZXIubiwgY3VzdG9tVGFncykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lc3RpbmcgZXJyb3I6ICcgKyBvcGVuZXIubiArICcgdnMuICcgKyB0b2tlbi5uKTtcbiAgICAgICAgfVxuICAgICAgICBvcGVuZXIuZW5kID0gdG9rZW4uaTtcbiAgICAgICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgICAgIH0gZWxzZSBpZiAodG9rZW4udGFnID09ICdcXG4nKSB7XG4gICAgICAgIHRva2VuLmxhc3QgPSAodG9rZW5zLmxlbmd0aCA9PSAwKSB8fCAodG9rZW5zWzBdLnRhZyA9PSAnXFxuJyk7XG4gICAgICB9XG5cbiAgICAgIGluc3RydWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNsb3NpbmcgdGFnOiAnICsgc3RhY2sucG9wKCkubik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RydWN0aW9ucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3BlbmVyKHRva2VuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0ubyA9PSB0b2tlbi5uKSB7XG4gICAgICAgIHRva2VuLnRhZyA9ICcjJztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNDbG9zZXIoY2xvc2UsIG9wZW4sIHRhZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGFnc1tpXS5jID09IGNsb3NlICYmIHRhZ3NbaV0ubyA9PSBvcGVuKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVN1YnN0aXR1dGlvbnMob2JqKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaXRlbXMucHVzaCgnXCInICsgZXNjKGtleSkgKyAnXCI6IGZ1bmN0aW9uKGMscCx0LGkpIHsnICsgb2JqW2tleV0gKyAnfScpO1xuICAgIH1cbiAgICByZXR1cm4gXCJ7IFwiICsgaXRlbXMuam9pbihcIixcIikgKyBcIiB9XCI7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqKSB7XG4gICAgdmFyIHBhcnRpYWxzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIGNvZGVPYmoucGFydGlhbHMpIHtcbiAgICAgIHBhcnRpYWxzLnB1c2goJ1wiJyArIGVzYyhrZXkpICsgJ1wiOntuYW1lOlwiJyArIGVzYyhjb2RlT2JqLnBhcnRpYWxzW2tleV0ubmFtZSkgKyAnXCIsICcgKyBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqLnBhcnRpYWxzW2tleV0pICsgXCJ9XCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJwYXJ0aWFsczoge1wiICsgcGFydGlhbHMuam9pbihcIixcIikgKyBcIn0sIHN1YnM6IFwiICsgc3RyaW5naWZ5U3Vic3RpdHV0aW9ucyhjb2RlT2JqLnN1YnMpO1xuICB9XG5cbiAgSG9nYW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24oY29kZU9iaiwgdGV4dCwgb3B0aW9ucykge1xuICAgIHJldHVybiBcIntjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgXCIgKyBIb2dhbi53cmFwTWFpbihjb2RlT2JqLmNvZGUpICsgXCIgfSxcIiArIHN0cmluZ2lmeVBhcnRpYWxzKGNvZGVPYmopICsgIFwifVwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbE5vID0gMDtcbiAgSG9nYW4uZ2VuZXJhdGUgPSBmdW5jdGlvbih0cmVlLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgc2VyaWFsTm8gPSAwO1xuICAgIHZhciBjb250ZXh0ID0geyBjb2RlOiAnJywgc3Viczoge30sIHBhcnRpYWxzOiB7fSB9O1xuICAgIEhvZ2FuLndhbGsodHJlZSwgY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5hc1N0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KGNvbnRleHQsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1ha2VUZW1wbGF0ZShjb250ZXh0LCB0ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLndyYXBNYWluID0gZnVuY3Rpb24oY29kZSkge1xuICAgIHJldHVybiAndmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTsnICsgY29kZSArICdyZXR1cm4gdC5mbCgpOyc7XG4gIH1cblxuICBIb2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xuXG4gIEhvZ2FuLm1ha2VUZW1wbGF0ZSA9IGZ1bmN0aW9uKGNvZGVPYmosIHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm1ha2VQYXJ0aWFscyhjb2RlT2JqKTtcbiAgICB0ZW1wbGF0ZS5jb2RlID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAnaScsIHRoaXMud3JhcE1haW4oY29kZU9iai5jb2RlKSk7XG4gICAgcmV0dXJuIG5ldyB0aGlzLnRlbXBsYXRlKHRlbXBsYXRlLCB0ZXh0LCB0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLm1ha2VQYXJ0aWFscyA9IGZ1bmN0aW9uKGNvZGVPYmopIHtcbiAgICB2YXIga2V5LCB0ZW1wbGF0ZSA9IHtzdWJzOiB7fSwgcGFydGlhbHM6IGNvZGVPYmoucGFydGlhbHMsIG5hbWU6IGNvZGVPYmoubmFtZX07XG4gICAgZm9yIChrZXkgaW4gdGVtcGxhdGUucGFydGlhbHMpIHtcbiAgICAgIHRlbXBsYXRlLnBhcnRpYWxzW2tleV0gPSB0aGlzLm1ha2VQYXJ0aWFscyh0ZW1wbGF0ZS5wYXJ0aWFsc1trZXldKTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gY29kZU9iai5zdWJzKSB7XG4gICAgICB0ZW1wbGF0ZS5zdWJzW2tleV0gPSBuZXcgRnVuY3Rpb24oJ2MnLCAncCcsICd0JywgJ2knLCBjb2RlT2JqLnN1YnNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzYyhzKSB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShyU2xhc2gsICdcXFxcXFxcXCcpXG4gICAgICAgICAgICAucmVwbGFjZShyUXVvdCwgJ1xcXFxcXFwiJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJOZXdsaW5lLCAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UockNyLCAnXFxcXHInKVxuICAgICAgICAgICAgLnJlcGxhY2UockxpbmVTZXAsICdcXFxcdTIwMjgnKVxuICAgICAgICAgICAgLnJlcGxhY2UoclBhcmFncmFwaFNlcCwgJ1xcXFx1MjAyOScpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hvb3NlTWV0aG9kKHMpIHtcbiAgICByZXR1cm4gKH5zLmluZGV4T2YoJy4nKSkgPyAnZCcgOiAnZic7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXJ0aWFsKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgcHJlZml4ID0gXCI8XCIgKyAoY29udGV4dC5wcmVmaXggfHwgXCJcIik7XG4gICAgdmFyIHN5bSA9IHByZWZpeCArIG5vZGUubiArIHNlcmlhbE5vKys7XG4gICAgY29udGV4dC5wYXJ0aWFsc1tzeW1dID0ge25hbWU6IG5vZGUubiwgcGFydGlhbHM6IHt9fTtcbiAgICBjb250ZXh0LmNvZGUgKz0gJ3QuYih0LnJwKFwiJyArICBlc2Moc3ltKSArICdcIixjLHAsXCInICsgKG5vZGUuaW5kZW50IHx8ICcnKSArICdcIikpOyc7XG4gICAgcmV0dXJuIHN5bTtcbiAgfVxuXG4gIEhvZ2FuLmNvZGVnZW4gPSB7XG4gICAgJyMnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ2lmKHQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICdjLHAsMCwnICsgbm9kZS5pICsgJywnICsgbm9kZS5lbmQgKyAnLFwiJyArIG5vZGUub3RhZyArIFwiIFwiICsgbm9kZS5jdGFnICsgJ1wiKSl7JyArXG4gICAgICAgICAgICAgICAgICAgICAgJ3QucnMoYyxwLCcgKyAnZnVuY3Rpb24oYyxwLHQpeyc7XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGNvbnRleHQpO1xuICAgICAgY29udGV4dC5jb2RlICs9ICd9KTtjLnBvcCgpO30nO1xuICAgIH0sXG5cbiAgICAnXic6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSAnaWYoIXQucyh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDEpLGMscCwxLDAsMCxcIlwiKSl7JztcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY29udGV4dCk7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ307JztcbiAgICB9LFxuXG4gICAgJz4nOiBjcmVhdGVQYXJ0aWFsLFxuICAgICc8JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgdmFyIGN0eCA9IHtwYXJ0aWFsczoge30sIGNvZGU6ICcnLCBzdWJzOiB7fSwgaW5QYXJ0aWFsOiB0cnVlfTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGNvbnRleHQucGFydGlhbHNbY3JlYXRlUGFydGlhbChub2RlLCBjb250ZXh0KV07XG4gICAgICB0ZW1wbGF0ZS5zdWJzID0gY3R4LnN1YnM7XG4gICAgICB0ZW1wbGF0ZS5wYXJ0aWFscyA9IGN0eC5wYXJ0aWFscztcbiAgICB9LFxuXG4gICAgJyQnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICB2YXIgY3R4ID0ge3N1YnM6IHt9LCBjb2RlOiAnJywgcGFydGlhbHM6IGNvbnRleHQucGFydGlhbHMsIHByZWZpeDogbm9kZS5ufTtcbiAgICAgIEhvZ2FuLndhbGsobm9kZS5ub2RlcywgY3R4KTtcbiAgICAgIGNvbnRleHQuc3Vic1tub2RlLm5dID0gY3R4LmNvZGU7XG4gICAgICBpZiAoIWNvbnRleHQuaW5QYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRleHQuY29kZSArPSAndC5zdWIoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLGkpOyc7XG4gICAgICB9XG4gICAgfSxcblxuICAgICdcXG4nOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiXFxcXG5cIicgKyAobm9kZS5sYXN0ID8gJycgOiAnICsgaScpKTtcbiAgICB9LFxuXG4gICAgJ192JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9ICd0LmIodC52KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICAgIH0sXG5cbiAgICAnX3QnOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gd3JpdGUoJ1wiJyArIGVzYyhub2RlLnRleHQpICsgJ1wiJyk7XG4gICAgfSxcblxuICAgICd7JzogdHJpcGxlU3RhY2hlLFxuXG4gICAgJyYnOiB0cmlwbGVTdGFjaGVcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaXBsZVN0YWNoZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29udGV4dC5jb2RlICs9ICd0LmIodC50KHQuJyArIGNob29zZU1ldGhvZChub2RlLm4pICsgJyhcIicgKyBlc2Mobm9kZS5uKSArICdcIixjLHAsMCkpKTsnO1xuICB9XG5cbiAgZnVuY3Rpb24gd3JpdGUocykge1xuICAgIHJldHVybiAndC5iKCcgKyBzICsgJyk7JztcbiAgfVxuXG4gIEhvZ2FuLndhbGsgPSBmdW5jdGlvbihub2RlbGlzdCwgY29udGV4dCkge1xuICAgIHZhciBmdW5jO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZWxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmdW5jID0gSG9nYW4uY29kZWdlbltub2RlbGlzdFtpXS50YWddO1xuICAgICAgZnVuYyAmJiBmdW5jKG5vZGVsaXN0W2ldLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBIb2dhbi5wYXJzZSA9IGZ1bmN0aW9uKHRva2VucywgdGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHJldHVybiBidWlsZFRyZWUodG9rZW5zLCAnJywgW10sIG9wdGlvbnMuc2VjdGlvblRhZ3MgfHwgW10pO1xuICB9XG5cbiAgSG9nYW4uY2FjaGUgPSB7fTtcblxuICBIb2dhbi5jYWNoZUtleSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW3RleHQsICEhb3B0aW9ucy5hc1N0cmluZywgISFvcHRpb25zLmRpc2FibGVMYW1iZGEsIG9wdGlvbnMuZGVsaW1pdGVycywgISFvcHRpb25zLm1vZGVsR2V0XS5qb2luKCd8fCcpO1xuICB9XG5cbiAgSG9nYW4uY29tcGlsZSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIga2V5ID0gSG9nYW4uY2FjaGVLZXkodGV4dCwgb3B0aW9ucyk7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5jYWNoZVtrZXldO1xuXG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgcGFydGlhbHMgPSB0ZW1wbGF0ZS5wYXJ0aWFscztcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFydGlhbHMpIHtcbiAgICAgICAgZGVsZXRlIHBhcnRpYWxzW25hbWVdLmluc3RhbmNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRlbXBsYXRlID0gdGhpcy5nZW5lcmF0ZSh0aGlzLnBhcnNlKHRoaXMuc2Nhbih0ZXh0LCBvcHRpb25zLmRlbGltaXRlcnMpLCB0ZXh0LCBvcHRpb25zKSwgdGV4dCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRlbXBsYXRlO1xuICB9XG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuIiwiLypcbiAqICBDb3B5cmlnaHQgMjAxMSBUd2l0dGVyLCBJbmMuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBUaGlzIGZpbGUgaXMgZm9yIHVzZSB3aXRoIE5vZGUuanMuIFNlZSBkaXN0LyBmb3IgYnJvd3NlciBmaWxlcy5cblxudmFyIEhvZ2FuID0gcmVxdWlyZSgnLi9jb21waWxlcicpO1xuSG9nYW4uVGVtcGxhdGUgPSByZXF1aXJlKCcuL3RlbXBsYXRlJykuVGVtcGxhdGU7XG5Ib2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBIb2dhbjtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IDIwMTEgVHdpdHRlciwgSW5jLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxudmFyIEhvZ2FuID0ge307XG5cbihmdW5jdGlvbiAoSG9nYW4pIHtcbiAgSG9nYW4uVGVtcGxhdGUgPSBmdW5jdGlvbiAoY29kZU9iaiwgdGV4dCwgY29tcGlsZXIsIG9wdGlvbnMpIHtcbiAgICBjb2RlT2JqID0gY29kZU9iaiB8fCB7fTtcbiAgICB0aGlzLnIgPSBjb2RlT2JqLmNvZGUgfHwgdGhpcy5yO1xuICAgIHRoaXMuYyA9IGNvbXBpbGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy50ZXh0ID0gdGV4dCB8fCAnJztcbiAgICB0aGlzLnBhcnRpYWxzID0gY29kZU9iai5wYXJ0aWFscyB8fCB7fTtcbiAgICB0aGlzLnN1YnMgPSBjb2RlT2JqLnN1YnMgfHwge307XG4gICAgdGhpcy5idWYgPSAnJztcbiAgfVxuXG4gIEhvZ2FuLlRlbXBsYXRlLnByb3RvdHlwZSA9IHtcbiAgICAvLyByZW5kZXI6IHJlcGxhY2VkIGJ5IGdlbmVyYXRlZCBjb2RlLlxuICAgIHI6IGZ1bmN0aW9uIChjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7IHJldHVybiAnJzsgfSxcblxuICAgIC8vIHZhcmlhYmxlIGVzY2FwaW5nXG4gICAgdjogaG9nYW5Fc2NhcGUsXG5cbiAgICAvLyB0cmlwbGUgc3RhY2hlXG4gICAgdDogY29lcmNlVG9TdHJpbmcsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yaShbY29udGV4dF0sIHBhcnRpYWxzIHx8IHt9LCBpbmRlbnQpO1xuICAgIH0sXG5cbiAgICAvLyByZW5kZXIgaW50ZXJuYWwgLS0gYSBob29rIGZvciBvdmVycmlkZXMgdGhhdCBjYXRjaGVzIHBhcnRpYWxzIHRvb1xuICAgIHJpOiBmdW5jdGlvbiAoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucihjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KTtcbiAgICB9LFxuXG4gICAgLy8gZW5zdXJlUGFydGlhbFxuICAgIGVwOiBmdW5jdGlvbihzeW1ib2wsIHBhcnRpYWxzKSB7XG4gICAgICB2YXIgcGFydGlhbCA9IHRoaXMucGFydGlhbHNbc3ltYm9sXTtcblxuICAgICAgLy8gY2hlY2sgdG8gc2VlIHRoYXQgaWYgd2UndmUgaW5zdGFudGlhdGVkIHRoaXMgcGFydGlhbCBiZWZvcmVcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IHBhcnRpYWxzW3BhcnRpYWwubmFtZV07XG4gICAgICBpZiAocGFydGlhbC5pbnN0YW5jZSAmJiBwYXJ0aWFsLmJhc2UgPT0gdGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHBhcnRpYWwuaW5zdGFuY2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCF0aGlzLmMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb21waWxlciBhdmFpbGFibGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gdGhpcy5jLmNvbXBpbGUodGVtcGxhdGUsIHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFdlIHVzZSB0aGlzIHRvIGNoZWNrIHdoZXRoZXIgdGhlIHBhcnRpYWxzIGRpY3Rpb25hcnkgaGFzIGNoYW5nZWRcbiAgICAgIHRoaXMucGFydGlhbHNbc3ltYm9sXS5iYXNlID0gdGVtcGxhdGU7XG5cbiAgICAgIGlmIChwYXJ0aWFsLnN1YnMpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGNvbnNpZGVyIHBhcmVudCB0ZW1wbGF0ZSBub3dcbiAgICAgICAgaWYgKCFwYXJ0aWFscy5zdGFja1RleHQpIHBhcnRpYWxzLnN0YWNrVGV4dCA9IHt9O1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJ0aWFsLnN1YnMpIHtcbiAgICAgICAgICBpZiAoIXBhcnRpYWxzLnN0YWNrVGV4dFtrZXldKSB7XG4gICAgICAgICAgICBwYXJ0aWFscy5zdGFja1RleHRba2V5XSA9ICh0aGlzLmFjdGl2ZVN1YiAhPT0gdW5kZWZpbmVkICYmIHBhcnRpYWxzLnN0YWNrVGV4dFt0aGlzLmFjdGl2ZVN1Yl0pID8gcGFydGlhbHMuc3RhY2tUZXh0W3RoaXMuYWN0aXZlU3ViXSA6IHRoaXMudGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGVtcGxhdGUgPSBjcmVhdGVTcGVjaWFsaXplZFBhcnRpYWwodGVtcGxhdGUsIHBhcnRpYWwuc3VicywgcGFydGlhbC5wYXJ0aWFscyxcbiAgICAgICAgICB0aGlzLnN0YWNrU3VicywgdGhpcy5zdGFja1BhcnRpYWxzLCBwYXJ0aWFscy5zdGFja1RleHQpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJ0aWFsc1tzeW1ib2xdLmluc3RhbmNlID0gdGVtcGxhdGU7XG5cbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9LFxuXG4gICAgLy8gdHJpZXMgdG8gZmluZCBhIHBhcnRpYWwgaW4gdGhlIGN1cnJlbnQgc2NvcGUgYW5kIHJlbmRlciBpdFxuICAgIHJwOiBmdW5jdGlvbihzeW1ib2wsIGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHZhciBwYXJ0aWFsID0gdGhpcy5lcChzeW1ib2wsIHBhcnRpYWxzKTtcbiAgICAgIGlmICghcGFydGlhbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJ0aWFsLnJpKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpO1xuICAgIH0sXG5cbiAgICAvLyByZW5kZXIgYSBzZWN0aW9uXG4gICAgcnM6IGZ1bmN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCBzZWN0aW9uKSB7XG4gICAgICB2YXIgdGFpbCA9IGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFpc0FycmF5KHRhaWwpKSB7XG4gICAgICAgIHNlY3Rpb24oY29udGV4dCwgcGFydGlhbHMsIHRoaXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFpbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb250ZXh0LnB1c2godGFpbFtpXSk7XG4gICAgICAgIHNlY3Rpb24oY29udGV4dCwgcGFydGlhbHMsIHRoaXMpO1xuICAgICAgICBjb250ZXh0LnBvcCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBtYXliZSBzdGFydCBhIHNlY3Rpb25cbiAgICBzOiBmdW5jdGlvbih2YWwsIGN0eCwgcGFydGlhbHMsIGludmVydGVkLCBzdGFydCwgZW5kLCB0YWdzKSB7XG4gICAgICB2YXIgcGFzcztcblxuICAgICAgaWYgKGlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWwgPSB0aGlzLm1zKHZhbCwgY3R4LCBwYXJ0aWFscywgaW52ZXJ0ZWQsIHN0YXJ0LCBlbmQsIHRhZ3MpO1xuICAgICAgfVxuXG4gICAgICBwYXNzID0gISF2YWw7XG5cbiAgICAgIGlmICghaW52ZXJ0ZWQgJiYgcGFzcyAmJiBjdHgpIHtcbiAgICAgICAgY3R4LnB1c2goKHR5cGVvZiB2YWwgPT0gJ29iamVjdCcpID8gdmFsIDogY3R4W2N0eC5sZW5ndGggLSAxXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXNzO1xuICAgIH0sXG5cbiAgICAvLyBmaW5kIHZhbHVlcyB3aXRoIGRvdHRlZCBuYW1lc1xuICAgIGQ6IGZ1bmN0aW9uKGtleSwgY3R4LCBwYXJ0aWFscywgcmV0dXJuRm91bmQpIHtcbiAgICAgIHZhciBmb3VuZCxcbiAgICAgICAgICBuYW1lcyA9IGtleS5zcGxpdCgnLicpLFxuICAgICAgICAgIHZhbCA9IHRoaXMuZihuYW1lc1swXSwgY3R4LCBwYXJ0aWFscywgcmV0dXJuRm91bmQpLFxuICAgICAgICAgIGRvTW9kZWxHZXQgPSB0aGlzLm9wdGlvbnMubW9kZWxHZXQsXG4gICAgICAgICAgY3ggPSBudWxsO1xuXG4gICAgICBpZiAoa2V5ID09PSAnLicgJiYgaXNBcnJheShjdHhbY3R4Lmxlbmd0aCAtIDJdKSkge1xuICAgICAgICB2YWwgPSBjdHhbY3R4Lmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvdW5kID0gZmluZEluU2NvcGUobmFtZXNbaV0sIHZhbCwgZG9Nb2RlbEdldCk7XG4gICAgICAgICAgaWYgKGZvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGN4ID0gdmFsO1xuICAgICAgICAgICAgdmFsID0gZm91bmQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuRm91bmQgJiYgIXZhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmV0dXJuRm91bmQgJiYgdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGN0eC5wdXNoKGN4KTtcbiAgICAgICAgdmFsID0gdGhpcy5tdih2YWwsIGN0eCwgcGFydGlhbHMpO1xuICAgICAgICBjdHgucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggbm9ybWFsIG5hbWVzXG4gICAgZjogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgdmFyIHZhbCA9IGZhbHNlLFxuICAgICAgICAgIHYgPSBudWxsLFxuICAgICAgICAgIGZvdW5kID0gZmFsc2UsXG4gICAgICAgICAgZG9Nb2RlbEdldCA9IHRoaXMub3B0aW9ucy5tb2RlbEdldDtcblxuICAgICAgZm9yICh2YXIgaSA9IGN0eC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB2ID0gY3R4W2ldO1xuICAgICAgICB2YWwgPSBmaW5kSW5TY29wZShrZXksIHYsIGRvTW9kZWxHZXQpO1xuICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICByZXR1cm4gKHJldHVybkZvdW5kKSA/IGZhbHNlIDogXCJcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXR1cm5Gb3VuZCAmJiB0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsID0gdGhpcy5tdih2YWwsIGN0eCwgcGFydGlhbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvLyBoaWdoZXIgb3JkZXIgdGVtcGxhdGVzXG4gICAgbHM6IGZ1bmN0aW9uKGZ1bmMsIGN4LCBwYXJ0aWFscywgdGV4dCwgdGFncykge1xuICAgICAgdmFyIG9sZFRhZ3MgPSB0aGlzLm9wdGlvbnMuZGVsaW1pdGVycztcblxuICAgICAgdGhpcy5vcHRpb25zLmRlbGltaXRlcnMgPSB0YWdzO1xuICAgICAgdGhpcy5iKHRoaXMuY3QoY29lcmNlVG9TdHJpbmcoZnVuYy5jYWxsKGN4LCB0ZXh0KSksIGN4LCBwYXJ0aWFscykpO1xuICAgICAgdGhpcy5vcHRpb25zLmRlbGltaXRlcnMgPSBvbGRUYWdzO1xuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIGNvbXBpbGUgdGV4dFxuICAgIGN0OiBmdW5jdGlvbih0ZXh0LCBjeCwgcGFydGlhbHMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZUxhbWJkYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xhbWJkYSBmZWF0dXJlcyBkaXNhYmxlZC4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmMuY29tcGlsZSh0ZXh0LCB0aGlzLm9wdGlvbnMpLnJlbmRlcihjeCwgcGFydGlhbHMpO1xuICAgIH0sXG5cbiAgICAvLyB0ZW1wbGF0ZSByZXN1bHQgYnVmZmVyaW5nXG4gICAgYjogZnVuY3Rpb24ocykgeyB0aGlzLmJ1ZiArPSBzOyB9LFxuXG4gICAgZmw6IGZ1bmN0aW9uKCkgeyB2YXIgciA9IHRoaXMuYnVmOyB0aGlzLmJ1ZiA9ICcnOyByZXR1cm4gcjsgfSxcblxuICAgIC8vIG1ldGhvZCByZXBsYWNlIHNlY3Rpb25cbiAgICBtczogZnVuY3Rpb24oZnVuYywgY3R4LCBwYXJ0aWFscywgaW52ZXJ0ZWQsIHN0YXJ0LCBlbmQsIHRhZ3MpIHtcbiAgICAgIHZhciB0ZXh0U291cmNlLFxuICAgICAgICAgIGN4ID0gY3R4W2N0eC5sZW5ndGggLSAxXSxcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmNhbGwoY3gpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChpbnZlcnRlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRTb3VyY2UgPSAodGhpcy5hY3RpdmVTdWIgJiYgdGhpcy5zdWJzVGV4dCAmJiB0aGlzLnN1YnNUZXh0W3RoaXMuYWN0aXZlU3ViXSkgPyB0aGlzLnN1YnNUZXh0W3RoaXMuYWN0aXZlU3ViXSA6IHRoaXMudGV4dDtcbiAgICAgICAgICByZXR1cm4gdGhpcy5scyhyZXN1bHQsIGN4LCBwYXJ0aWFscywgdGV4dFNvdXJjZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCksIHRhZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8vIG1ldGhvZCByZXBsYWNlIHZhcmlhYmxlXG4gICAgbXY6IGZ1bmN0aW9uKGZ1bmMsIGN0eCwgcGFydGlhbHMpIHtcbiAgICAgIHZhciBjeCA9IGN0eFtjdHgubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgcmVzdWx0ID0gZnVuYy5jYWxsKGN4KTtcblxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jdChjb2VyY2VUb1N0cmluZyhyZXN1bHQuY2FsbChjeCkpLCBjeCwgcGFydGlhbHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBzdWI6IGZ1bmN0aW9uKG5hbWUsIGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHZhciBmID0gdGhpcy5zdWJzW25hbWVdO1xuICAgICAgaWYgKGYpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWIgPSBuYW1lO1xuICAgICAgICBmKGNvbnRleHQsIHBhcnRpYWxzLCB0aGlzLCBpbmRlbnQpO1xuICAgICAgICB0aGlzLmFjdGl2ZVN1YiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIC8vRmluZCBhIGtleSBpbiBhbiBvYmplY3RcbiAgZnVuY3Rpb24gZmluZEluU2NvcGUoa2V5LCBzY29wZSwgZG9Nb2RlbEdldCkge1xuICAgIHZhciB2YWw7XG5cbiAgICBpZiAoc2NvcGUgJiYgdHlwZW9mIHNjb3BlID09ICdvYmplY3QnKSB7XG5cbiAgICAgIGlmIChzY29wZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsID0gc2NvcGVba2V5XTtcblxuICAgICAgLy8gdHJ5IGxvb2t1cCB3aXRoIGdldCBmb3IgYmFja2JvbmUgb3Igc2ltaWxhciBtb2RlbCBkYXRhXG4gICAgICB9IGVsc2UgaWYgKGRvTW9kZWxHZXQgJiYgc2NvcGUuZ2V0ICYmIHR5cGVvZiBzY29wZS5nZXQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YWwgPSBzY29wZS5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3BlY2lhbGl6ZWRQYXJ0aWFsKGluc3RhbmNlLCBzdWJzLCBwYXJ0aWFscywgc3RhY2tTdWJzLCBzdGFja1BhcnRpYWxzLCBzdGFja1RleHQpIHtcbiAgICBmdW5jdGlvbiBQYXJ0aWFsVGVtcGxhdGUoKSB7fTtcbiAgICBQYXJ0aWFsVGVtcGxhdGUucHJvdG90eXBlID0gaW5zdGFuY2U7XG4gICAgZnVuY3Rpb24gU3Vic3RpdHV0aW9ucygpIHt9O1xuICAgIFN1YnN0aXR1dGlvbnMucHJvdG90eXBlID0gaW5zdGFuY2Uuc3VicztcbiAgICB2YXIga2V5O1xuICAgIHZhciBwYXJ0aWFsID0gbmV3IFBhcnRpYWxUZW1wbGF0ZSgpO1xuICAgIHBhcnRpYWwuc3VicyA9IG5ldyBTdWJzdGl0dXRpb25zKCk7XG4gICAgcGFydGlhbC5zdWJzVGV4dCA9IHt9OyAgLy9oZWhlLiBzdWJzdGV4dC5cbiAgICBwYXJ0aWFsLmJ1ZiA9ICcnO1xuXG4gICAgc3RhY2tTdWJzID0gc3RhY2tTdWJzIHx8IHt9O1xuICAgIHBhcnRpYWwuc3RhY2tTdWJzID0gc3RhY2tTdWJzO1xuICAgIHBhcnRpYWwuc3Vic1RleHQgPSBzdGFja1RleHQ7XG4gICAgZm9yIChrZXkgaW4gc3Vicykge1xuICAgICAgaWYgKCFzdGFja1N1YnNba2V5XSkgc3RhY2tTdWJzW2tleV0gPSBzdWJzW2tleV07XG4gICAgfVxuICAgIGZvciAoa2V5IGluIHN0YWNrU3Vicykge1xuICAgICAgcGFydGlhbC5zdWJzW2tleV0gPSBzdGFja1N1YnNba2V5XTtcbiAgICB9XG5cbiAgICBzdGFja1BhcnRpYWxzID0gc3RhY2tQYXJ0aWFscyB8fCB7fTtcbiAgICBwYXJ0aWFsLnN0YWNrUGFydGlhbHMgPSBzdGFja1BhcnRpYWxzO1xuICAgIGZvciAoa2V5IGluIHBhcnRpYWxzKSB7XG4gICAgICBpZiAoIXN0YWNrUGFydGlhbHNba2V5XSkgc3RhY2tQYXJ0aWFsc1trZXldID0gcGFydGlhbHNba2V5XTtcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gc3RhY2tQYXJ0aWFscykge1xuICAgICAgcGFydGlhbC5wYXJ0aWFsc1trZXldID0gc3RhY2tQYXJ0aWFsc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0aWFsO1xuICB9XG5cbiAgdmFyIHJBbXAgPSAvJi9nLFxuICAgICAgckx0ID0gLzwvZyxcbiAgICAgIHJHdCA9IC8+L2csXG4gICAgICByQXBvcyA9IC9cXCcvZyxcbiAgICAgIHJRdW90ID0gL1xcXCIvZyxcbiAgICAgIGhDaGFycyA9IC9bJjw+XFxcIlxcJ10vO1xuXG4gIGZ1bmN0aW9uIGNvZXJjZVRvU3RyaW5nKHZhbCkge1xuICAgIHJldHVybiBTdHJpbmcoKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkgPyAnJyA6IHZhbCk7XG4gIH1cblxuICBmdW5jdGlvbiBob2dhbkVzY2FwZShzdHIpIHtcbiAgICBzdHIgPSBjb2VyY2VUb1N0cmluZyhzdHIpO1xuICAgIHJldHVybiBoQ2hhcnMudGVzdChzdHIpID9cbiAgICAgIHN0clxuICAgICAgICAucmVwbGFjZShyQW1wLCAnJmFtcDsnKVxuICAgICAgICAucmVwbGFjZShyTHQsICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2Uockd0LCAnJmd0OycpXG4gICAgICAgIC5yZXBsYWNlKHJBcG9zLCAnJiMzOTsnKVxuICAgICAgICAucmVwbGFjZShyUXVvdCwgJyZxdW90OycpIDpcbiAgICAgIHN0cjtcbiAgfVxuXG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcblxufSkodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnID8gZXhwb3J0cyA6IEhvZ2FuKTtcbiIsInZhciB0ZW1wbGF0ZUFkZENlbGw9XCJcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIjxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1jZWxsLWNvbnRhaW5lclxcXCI+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1vdmVybGF5IG8tZmVhdHVyZS1hZGRcXFwiPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnXFwvMjAwMFxcL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFwvXFwvd3d3LnczLm9yZ1xcLzE5OTlcXC94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdCB2aWV3Qm94PVxcXCIwIDAgNjEyIDYxMlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8ZyBpZD1cXFwiX3gzMV9fMjZfXFxcIj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0PHBhdGggZD1cXFwiTTQyMC43NSwyODYuODc1aC05NS42MjVWMTkxLjI1YzAtMTAuNTU3LTguNTY4LTE5LjEyNS0xOS4xMjUtMTkuMTI1Yy0xMC41NTcsMC0xOS4xMjUsOC41NjgtMTkuMTI1LDE5LjEyNXY5NS42MjVcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdEgxOTEuMjVjLTEwLjU1NywwLTE5LjEyNSw4LjU2OC0xOS4xMjUsMTkuMTI1YzAsMTAuNTU3LDguNTY4LDE5LjEyNSwxOS4xMjUsMTkuMTI1aDk1LjYyNXY5NS42MjVcIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0XHRcdGMwLDEwLjU1Nyw4LjU2OCwxOS4xMjUsMTkuMTI1LDE5LjEyNWMxMC41NTcsMCwxOS4xMjUtOC41NjgsMTkuMTI1LTE5LjEyNXYtOTUuNjI1aDk1LjYyNWMxMC41NTcsMCwxOS4xMjUtOC41NjgsMTkuMTI1LTE5LjEyNVwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdFx0QzQzOS44NzUsMjk1LjQ0Myw0MzEuMzA3LDI4Ni44NzUsNDIwLjc1LDI4Ni44NzV6IE01MzUuNSwwaC00NTlDMzQuMjUzLDAsMCwzNC4yNTMsMCw3Ni41djQ1OUMwLDU3Ny43NDcsMzQuMjUzLDYxMiw3Ni41LDYxMlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRcdFx0aDQ1OWM0Mi4yNDcsMCw3Ni41LTM0LjI1Myw3Ni41LTc2LjV2LTQ1OUM2MTIsMzQuMjUzLDU3Ny43NDcsMCw1MzUuNSwweiBNNTczLjc1LDUzNS41YzAsMjEuMTMzLTE3LjEzNiwzOC4yNS0zOC4yNSwzOC4yNWgtNDU5XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdFx0XHRjLTIxLjEzMywwLTM4LjI1LTE3LjExNy0zOC4yNS0zOC4yNXYtNDU5YzAtMjEuMTMzLDE3LjExNy0zOC4yNSwzOC4yNS0zOC4yNWg0NTljMjEuMTE0LDAsMzguMjUsMTcuMTM2LDM4LjI1LDM4LjI1VjUzNS41elxcXCJcXC8+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxcXC9zdmc+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1icmFuZFxcXCI+PFxcL2Rpdj5cIjtcbnRlbXBsYXRlQWRkQ2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNvbnRlbnRcXFwiPlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHRcdFwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8XFwvZGl2PlwiO1xudGVtcGxhdGVBZGRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2xlYXJmaXhcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUFkZENlbGwgKz0gXCJcdFx0XHQ8XFwvZGl2PlwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVBZGRDZWxsOyIsIlxuXG52YXIgdGVtcGxhdGVDZWxsID0gXG5cblx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1icmFuZFwiPnt7cHJpbWFyeVRpdGxlfX08L2Rpdj4nICtcblx0XHQnPGRpdiBjbGFzcz1cIm8tZmVhdHVyZS1jb250ZW50XCI+ICcgK1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtbGVmdFwiPiAnICtcblx0XHRcdFx0JzxoZWFkZXIgY2xhc3M9XCJvLWZlYXR1cmUtdGl0bGVcIj4gJyArXG5cdFx0XHRcdFx0J3t7c2Vjb25kYXJ5VGl0bGV9fSAnICtcblx0XHRcdFx0JzwvaGVhZGVyPiAnICtcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtZGVzY3JpcHRpb25cIj4gJyArXG5cdFx0XHRcdFx0JzxwPnt7ZGVzY3JpcHRpb259fTwvcD4gJyArXG5cdFx0XHRcdCc8L2Rpdj4gJyArXG5cdFx0XHQnPC9kaXY+ICcgK1xuXHRcdFx0JzxkaXYgY2xhc3M9XCJvLWZlYXR1cmUtcmlnaHRcIj4gJyArXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWltZy1ib3JkZXJcIj4gJyArXG5cdFx0XHRcdFx0JzxpbWcgc3JjPVwie3tyZXNvdXJjZVVybH19XCI+ICcgK1xuXHRcdFx0XHQnPC9kaXY+ICcgK1xuXHRcdFx0JzwvZGl2PiAnICtcblx0XHQnPC9kaXY+ICcgK1xuXHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWNsZWFyZml4XCI+PC9kaXY+ICcgK1xuXHRcdCc8ZGl2IGNsYXNzPVwiby1mZWF0dXJlLWJ1dHRvblwiPiAnICtcblx0XHRcdCc8YnV0dG9uIGNsYXNzPVxcXCJvLWZlYXR1cmUtYWN0aW9uLWJ1dHRvblxcXCIgaHJlZj1cInt7Y3RhVXJsfX1cIj57e2N0YVRleHR9fTwvYnV0dG9uPiAnICtcblx0XHQnPC9kaXY+ICc7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGVDZWxsO1xuIiwiXG5cbnZhciB0ZW1wbGF0ZUVkaXRDZWxsPVwiXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiPGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNlbGwtY29udGFpbmVyXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1vdmVybGF5XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXC9cXC93d3cudzMub3JnXFwvMjAwMFxcL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6XFwvXFwvd3d3LnczLm9yZ1xcLzE5OTlcXC94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0IHZpZXdCb3g9XFxcIjAgMCA1MTYuMzc0IDUxNi4zNzRcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxNi4zNzQgNTE2LjM3NDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8cGF0aCBkPVxcXCJNNDk0LjYxOCwzOTcuNjQ2Yy05LjY3Mi05LjY2NS04NC4wNTctNzkuNzkyLTE0Ny4wMzktMTM5LjA2N2M2Ny45MzktNjMuOTM4LDEzNy42NjctMTI5LjY5OSwxNDcuMDM4LTEzOS4wNjlcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMyMi4yMjktMjIuMjI5LDI2Ljk1MS02Ny4yMzMsMC05NC4xNzdjLTI2Ljc3OC0yNi43NzItNzEuNTU0LTIyLjAxNS05My42OTMsMC4xMzhjLTcuNzIzLDcuNzIzLTU1LjM4Nyw1OC4xMjUtMTQxLjc5NiwxNDkuOTQxXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTE4LjYxNS0xNy40OTMtMzIuNTc5LTMwLjYxLTM4LjU4Ni0zNi4yNTJjMS42NjktOC4wMSwyLjYxOS0xNy41NDUsMi44MzEtMjguNDMyYzAuMDMtMS41NTUsMC4wNDUtMy4xMzgsMC4wNDUtNC43NDlcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMwLTM1LjA5Ni0xMC4xNjQtNjIuMjI3LTMwLjIxNS04MC42NDZjLTMxLjEyOC0yOC42MDQtNzQuMzY4LTI1LjI5OS03Ni4xOC0yNS4xNEwxMTQuNTA2LDAuNGwtMTEuMDU1LDExLjA1Nmw1Mi43MjYsNTIuNTRcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMwLjc0MywwLjc0MSwxLjQwMiwxLjU0OCwxLjk3MywyLjQwNmMwLjM4MSwwLjU3MiwwLjcyMiwxLjE2NiwxLjAyMywxLjc3OGMwLjMwMSwwLjYxMiwwLjU2MiwxLjI0MywwLjc4MSwxLjg4N1wiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0YzAuOTg2LDIuODk4LDEuMTI5LDYuMDcsMC4zMTYsOS4xMTJsLTEzLjk5NCw1Mi42MWMtMC43MTksMi43MDMtMi4xNCw1LjEyMi00LjA1Nyw3LjA0NmMtMS42NzcsMS42ODQtMy43MzQsMi45OTEtNi4wMzQsMy43NzlcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtMC4zMjgsMC4xMTMtMC42NjIsMC4yMTUtMSwwLjMwNmwtNTIuNTY4LDE0LjE4OGMtMS4zNTUsMC4zNjctMi43MzQsMC41NDQtNC4xMDMsMC41NDJjLTAuNjg0LTAuMDAxLTEuMzY2LTAuMDQ3LTIuMDQxLTAuMTM2XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTIuMDI0LTAuMjY4LTMuOTg0LTAuOTI3LTUuNzY0LTEuOTQ0Yy0wLjU5My0wLjMzOS0xLjE2Ni0wLjcxOC0xLjcxNS0xLjEzNWMtMC41NDktMC40MTctMS4wNzMtMC44NzItMS41NjgtMS4zNjVsLTUyLjcxMy01Mi41MzRcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdEwzLjY3MSwxMTEuNTc4bC0wLjIwNywyLjUxN2MtMC4wMiwwLjIyNy0wLjA4OSwxLjEwMi0wLjEzOCwyLjUxOWMtMC4zNDcsOS45MiwwLjI1NCw0Ni40MywyNS4yNjQsNzMuNjYxXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjMTguNDIxLDIwLjA0NSw0NS41NTksMzAuMjA5LDgwLjY0OCwzMC4yMDljMC4wMDEsMCwwLjAwMiwwLDAuMDAzLDBzMC4wMDIsMCwwLjAwNCwwYzEyLjg4NSwwLDI0LjAyMi0wLjk2OCwzMy4xODItMi44NzVcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGM3Ljg3NSw4LjM4NSwzMC4yOTgsMzIuMjU5LDU4Ljg3MSw2Mi42NTVsLTg3LjExNyw4Ni45NTFjLTEuMzE0LDEuMzE0LTMuMDU2LDIuMDMzLTQuOTAyLDIuMDMzSDU4LjMzNkw0LjMwMiw0NTMuMTY1XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRsNjMuMjE2LDYzLjIwOWw4My45MTctNTQuMDMzdi01MS4xNjVjMC0xLjg2LDAuNzI2LTMuNjAyLDIuMDMzLTQuOTA5bDg1Ljc1Ni04NS42NjZcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGM5OC44ODMsMTA1LjEyMSwxNTMuMjgsMTYyLjY3NiwxNjEuNjk0LDE3MS4wODNjMTAuNTkyLDEwLjU5MiwyNy4wMTMsMTcuNDg2LDQzLjkyNSwxOC40NGMxLjM5LDAuMDgzLDIuNzU5LDAuMTI0LDQuMTI4LDAuMTI0XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjMi4yLDAsNC4zNzUtMC4xMDEsNi41MjItMC4zMDFjMTUuMDMtMS40MDEsMjguNjUyLTcuNjU3LDM5LjEyNS0xOC4xMTFjMTIuNjMxLTEyLjYzNCwxOC4zMDUtMjkuMjM2LDE4LjQ3OC00NS41OTlcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdEM1MTMuMjk0LDQyNy42OTMsNTA2LjQyOCw0MDkuNDU1LDQ5NC42MTgsMzk3LjY0NnogTTQ0NS42MzEsNDk2LjMyNGMtMTMuNjIxLTAuNzY4LTI2LjY4MS02LjE2MS0zNC45My0xNC40MTZcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtOC4yMDgtOC4yMDMtNjQuMDc1LTY3LjMyNS0xNjEuNjg3LTE3MS4wODdsMjcuNjc2LTI3LjY0N2w3LjIyNSw3LjI2YzguMDc2LDguMTE3LDIwLjkyMyw4LjM0NiwyOS4yNjgsMC41MDVcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGM3Ljk1My03LjQ3OSwxNi4wODktMTUuMTM0LDI0LjI5Ny0yMi44NTZjNjcuNTU4LDYzLjU3NywxMzguMTM0LDEzMC4xMjksMTQ3LjM1NCwxMzkuMzQ1YzE1LjIxMSwxNS4yMTEsMjIuNzc1LDUxLjg0OSwwLDc0LjYzMVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0Yy0wLjYyOSwwLjYyOC0xLjI3MywxLjIzNy0xLjkzMiwxLjgyNkM0NzMuMDE0LDQ5Mi43MTgsNDU5LjgyNCw0OTcuMDY5LDQ0NS42MzEsNDk2LjMyNHogTTE0OS43OTcsMjA1LjI1MmwtMi44LTIuOTg3aC0wLjAwMVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0bC0wLjAwNy0wLjAwN2wtMi44NzMsMC43NDZsLTEuMDgxLDAuMjc3Yy04LjczMiwyLjI0Ny0yMC4wOTksMy4zODEtMzMuNzgyLDMuMzgxYy0zMS4wMSwwLTU0LjY4NC04LjYyOC03MC4zODYtMjUuNjUxXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTE4LjA4NS0xOS42MTItMjEuMjcxLTQ1LjkwMS0yMS42ODktNTguNDY1bDQwLjQ2Nyw0MC4zMjJjNy40NTMsNy40NCwxOC40MDUsMTAuMzQ0LDI4LjU2Miw3LjYwNmw1Mi41NjgtMTQuMTg4XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjMS45MDUtMC41MTMsMy43MzQtMS4yMTMsNS40NjYtMi4wNzdjNy41MTEtMy43NDMsMTMuMjA2LTEwLjU5MSwxNS40MDktMTguODY2bDEzLjk5NC01Mi42MVwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0YzIuNzA0LTEwLjE2NC0wLjI0Mi0yMS4wOTUtNy42OTUtMjguNTI4bC00MC40NTQtNDAuMzA4YzEyLjUzLDAuMzk3LDM4LjY2LDMuNTQzLDU4LjMzOSwyMS42MjZcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMxNy4wNzgsMTUuNjg4LDI1Ljc0MSwzOS4zOTcsMjUuNzQxLDcwLjQ2MmMwLDEzLjY4NC0xLjEzNCwyNS4wNDMtMy4zODEsMzMuNzc2bC0xLjAxNiwzLjk2MmwyLjk4NywyLjc5M1wiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdFx0YzAuNjQ0LDAuNjA0LDE3LjAwMSwxNS45NjUsNDEuNDgyLDM4Ljk3MWMtNi41MjQsNi45MzMtMTMuMjQ5LDE0LjA4Mi0yMC4xODYsMjEuNDU4Yy03Ljc5Miw4LjI5Ny03LjYwNiwyMS4xMjIsMC40MDEsMjkuMjEyXCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRsNy43NzEsNy44NDFMMjExLjA5LDI3MC40OWMtMTYuNjg5LTE3Ljc1NC0zMS4yNDctMzMuMjQ2LTQxLjk4Ny00NC42NzhDMTU3LjAzOSwyMTIuOTY4LDE0OS43OTcsMjA1LjI1MiwxNDkuNzk3LDIwNS4yNTJ6XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQgTTI1OS43MjMsMTk0Ljk1N2MxOS42NjMsMTguNDgxLDQzLjI1Myw0MC42NjEsNjcuNjY5LDYzLjYzNGMtOCw3LjUyNy0xNS45MzEsMTQuOTg4LTIzLjY4NywyMi4yODFcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtMi44MzUsMi42NjktNy4yMjUsMi41OTktOS45OTEtMC4xOGwtNy4yNDYtNy4yODFsLTQ2Ljc5NC00Ni45ODhjLTIuNzQ1LTIuNzczLTIuODA3LTcuMTctMC4xNDUtOS45OThcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdEMyNDYuNDcsMjA5LjA0NSwyNTMuMTk3LDIwMS44OTMsMjU5LjcyMywxOTQuOTU3eiBNMjQ3LjM3NiwyNTMuNzk2bDE5LjUzOSwxOS41ODhsLTI3LjM4MywyNy4zNTVcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtNi40OTktNi45MS0xMi44NDgtMTMuNjYyLTE4Ljk3Mi0yMC4xNzZMMjQ3LjM3NiwyNTMuNzk2eiBNNDEwLjY5NSwzNS4yNTRjMTUuNTA4LTE1LjUwOCw1MS4xOTktMjMuMDU4LDc0LjE0LTAuMTM4XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjMTAuMDc0LDEwLjA3NCwxNS4xNjMsMjQuMDg5LDE0LjM0LDM5LjQ3M2MtMC43MzMsMTMuNTY1LTYuMjIzLDI3LjAzNC0xNC4zNCwzNS4xNTFjLTkuMjkxLDkuMjkxLTc5LjI5NSw3NS4zMS0xNDcuMzQ4LDEzOS4zNTFcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGMtMjQuNjI0LTIzLjE2OC00OC40MzgtNDUuNTU4LTY4LjI4NC02NC4yMUMzNTUuNDk0LDkzLjE3OSw0MDMuMDUzLDQyLjg4OSw0MTAuNjk1LDM1LjI1NHogTTE0My42ODQsMzk2LjQ5XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHRjLTMuOTI3LDMuOTIxLTYuMDg0LDkuMTM0LTYuMDg0LDE0LjY4NnY0My42MTRsLTY4LjE5NCw0My45MTlsLTQ3LjQzOC00Ny40MzFsNDMuOTI1LTY4LjIwMWg0My4zODdcIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdGM1LjUzOCwwLDEwLjc0NS0yLjE1OCwxNC42NjUtNi4wNzFsODYuODIzLTg2LjY2OGM2LjEyOCw2LjUxOCwxMi40NzcsMTMuMjcsMTguOTc1LDIwLjE4TDE0My42ODQsMzk2LjQ5elxcXCJcXC8+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8Zz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2c+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvZz5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGc+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxcXC9nPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8XFwvc3ZnPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1icmFuZFxcXCIgY29udGVudGVkaXRhYmxlPnt7cHJpbWFyeVRpdGxlfX08XFwvZGl2PlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLWNvbnRlbnRcXFwiPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtbGVmdFxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PGhlYWRlciBjbGFzcz1cXFwiby1mZWF0dXJlLXRpdGxlXFxcIiBjb250ZW50ZWRpdGFibGU+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHR7e3NlY29uZGFyeVRpdGxlfX1cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8XFwvaGVhZGVyPlwiO1xudGVtcGxhdGVFZGl0Q2VsbCArPSBcIlx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1kZXNjcmlwdGlvblxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQ8cCBjb250ZW50ZWRpdGFibGU+e3tkZXNjcmlwdGlvbn19PFxcL3A+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGRpdiBjbGFzcz1cXFwiby1mZWF0dXJlLXJpZ2h0XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtaW1nLWJvcmRlclxcXCI+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cXFwie3tyZXNvdXJjZVVybH19XFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYT57e3Jlc291cmNlVXJsfX08XFwvdGV4dGFyZWE+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PFxcL2Rpdj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2xlYXJmaXhcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtYnV0dG9uXFxcIj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cXFwiby1mZWF0dXJlLWFjdGlvbi1idXR0b25cXFwiIGhyZWY9XFxcInt7Y3RhVXJsfX1cXFwiIGNvbnRlbnRlZGl0YWJsZT57e2N0YVRleHR9fTxcXC9idXR0b24+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxkaXYgY2xhc3M9XFxcIm8tZmVhdHVyZS1hY3Rpb24tdXJsXFxcIiBjb250ZW50ZWRpdGFibGU+e3tjdGFVcmx9fTxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XFxcIm8tZmVhdHVyZS1zYXZlXFxcIj5TYXZlPFxcL2J1dHRvbj5cIjtcbnRlbXBsYXRlRWRpdENlbGwgKz0gXCJcdFx0XHRcdDxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0XHQ8ZGl2IGNsYXNzPVxcXCJvLWZlYXR1cmUtY2xlYXJmaXhcXFwiPjxcXC9kaXY+XCI7XG50ZW1wbGF0ZUVkaXRDZWxsICs9IFwiXHRcdFx0PFxcL2Rpdj5cIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlRWRpdENlbGw7XG4iLCJcbnZhciBGZWF0dXJlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge307XG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2h0bWwvdGVtcGxhdGVDZWxsLmpzJyk7XG5cbnZhciB0ZW1wbGF0ZUVkaXRDZWxsID0gcmVxdWlyZSgnLi4vaHRtbC90ZW1wbGF0ZUVkaXRDZWxsLmpzJyk7XG5cbnZhciB0ZW1wbGF0ZUFkZENlbGwgPSByZXF1aXJlKCcuLi9odG1sL3RlbXBsYXRlQWRkQ2VsbC5qcycpO1xuXG52YXIgSG9nYW4gPSByZXF1aXJlKCdob2dhbi5qcycpO1xuXG5GZWF0dXJlQ29tcG9uZW50LnByb3RvdHlwZS5jb25zdGFudHMgPSB7XG5cdG5vT2ZFbGVtZW50c0luQVJvdzogMlxufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRhdGEsIGVsZW1lbnQpIHtcblxuXHR2YXIgX2NvbXBpbGVkVGVtcGxhdGUgPSB0aGlzLl9wcmVwYXJlVGVtcGxhdGUoZGF0YSwgb3B0aW9ucyk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpLmFwcGVuZENoaWxkKF9jb21waWxlZFRlbXBsYXRlKTtcblxuICBpZiAob3B0aW9ucy5lZGl0TW9kZSkge1xuICAgICAgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclRvT3ZlcmxheShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtb3ZlcmxheScpKTtcbiAgfVxufTtcblxuRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lclRvT3ZlcmxheSA9IGZ1bmN0aW9uIChub2RlTGlzdCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPG5vZGVMaXN0Lmxlbmd0aCAtMSA7IGkrKykge1xuICAgICAgICBub2RlTGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUuaW5kZXhPZignby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnKSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5jbGFzc05hbWUgKz0gICcgJysgJ28tZmVhdHVyZS1lZGl0YWJsZS1jb250ZW50JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGVMaXN0W2ldLnBhcmVudE5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnby1mZWF0dXJlLXNhdmUnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTmFtZS5yZXBsYWNlKCcgby1mZWF0dXJlLWVkaXRhYmxlLWNvbnRlbnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmNsYXNzTmFtZSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ28tZmVhdHVyZS1pbWctYm9yZGVyJylbMF0uY2xhc3NOYW1lLnJlcGxhY2UoJyBvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JywgJycpO1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZUxpc3RbaV0ucGFyZW50Tm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvLWZlYXR1cmUtaW1nLWJvcmRlcicpWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYodGhpcy5wYXJlbnROb2RlLmNsYXNzTmFtZS5pbmRleE9mKCdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NOYW1lICs9ICAnICcrICdvLWZlYXR1cmUtaW1nLWJvcmRlci1lZGl0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbn07XG5cbkZlYXR1cmVDb21wb25lbnQucHJvdG90eXBlLl9wcmVwYXJlVGVtcGxhdGUgPSBmdW5jdGlvbiAoZGF0YSwgb3B0aW9ucykge1xuXG4gIFx0dmFyIF9vdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIFx0X291dHB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLW1haW4nKTtcblxuICBcdHZhciBfcHJldmlvdXNfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBcdF9wcmV2aW91c19yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcblxuICAgIHZhciBfYWRkQ2VsbEFkZGVkID0gZmFsc2U7XG5cbiAgXHRmb3IgKHZhciBjZWxsQ291bnQgPSAwOyBjZWxsQ291bnQgPCBkYXRhLmxlbmd0aDsgY2VsbENvdW50KyspIHtcblxuICBcdFx0aWYoY2VsbENvdW50ICUgRmVhdHVyZUNvbXBvbmVudC5wcm90b3R5cGUuY29uc3RhbnRzLm5vT2ZFbGVtZW50c0luQVJvdyA9PSAwKSB7XG5cbiAgXHRcdFx0dmFyIF9yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIFx0XHRcdF9yb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1yb3cnKTtcblxuICBcdFx0XHR2YXIgX2NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gIFx0XHRcdF9jZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdvLWZlYXR1cmUtY2VsbCcpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfY2VsbC5pbm5lckhUTUwgPSBIb2dhbi5jb21waWxlKHRlbXBsYXRlKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfVxuICBcdFx0XHRcblxuICBcdFx0XHRfcm93LmFwcGVuZENoaWxkKF9jZWxsKTtcbiAgXHRcdFx0X3ByZXZpb3VzX3JvdyA9IF9yb3c7XG4gXHRcdFx0XG4gXHRcdFx0aWYgKGNlbGxDb3VudCA9PSBkYXRhLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBpZihvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICAgICAgICAgIHZhciBfYWRkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICAgICAgICAgICAgX2FkZENlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG4gICAgICAgICAgICAgIF9hZGRDZWxsLmlubmVySFRNTCA9IEhvZ2FuLmNvbXBpbGUodGVtcGxhdGVBZGRDZWxsKS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgX3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfYWRkQ2VsbClcblxuICAgICAgICAgICAgICBfYWRkQ2VsbEFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gIFx0XHRcdFx0X291dHB1dC5hcHBlbmRDaGlsZChfcHJldmlvdXNfcm93KTtcbiAgXHRcdFx0fVxuXG4gIFx0XHR9IGVsc2Uge1xuXG4gIFx0XHRcdHZhciBfY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgXHRcdFx0X2NlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsJ28tZmVhdHVyZS1jZWxsJyk7XG5cbiBcdFx0XHQgIGlmIChvcHRpb25zLmVkaXRNb2RlKSB7XG4gICAgICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUVkaXRDZWxsKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfY2VsbC5pbm5lckhUTUwgPSBIb2dhbi5jb21waWxlKHRlbXBsYXRlKS5yZW5kZXIoZGF0YVtjZWxsQ291bnRdKTtcbiAgICAgICAgfVxuXG4gXHRcdFx0X3ByZXZpb3VzX3Jvdy5hcHBlbmRDaGlsZChfY2VsbCk7XG4gXHRcdFx0XG4gIFx0XHRfb3V0cHV0LmFwcGVuZENoaWxkKF9wcmV2aW91c19yb3cpO1xuICBcdFx0XHRcblxuICBcdFx0fVxuICBcdH1cblxuICAgIGlmKCFfYWRkQ2VsbEFkZGVkICYmIG9wdGlvbnMuZWRpdE1vZGUpIHtcbiAgICAgIHZhciBfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgX3Jvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLXJvdycpO1xuXG4gICAgICB2YXIgX2NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XG4gICAgICBfY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnby1mZWF0dXJlLWNlbGwnKTtcblxuICAgICAgX2NlbGwuaW5uZXJIVE1MID0gSG9nYW4uY29tcGlsZSh0ZW1wbGF0ZUFkZENlbGwpLnJlbmRlcigpO1xuICAgICAgX3Jvdy5hcHBlbmRDaGlsZChfY2VsbCk7XG4gICAgICBcbiAgICAgIF9vdXRwdXQuYXBwZW5kQ2hpbGQoX3Jvdyk7XG4gICAgfVxuXG5cdHJldHVybiBfb3V0cHV0O1xufTtcblxudmFyIGRlZmF1bHRzID0ge1xuXHRlZGl0TW9kZTogZmFsc2Vcbn07XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZlYXR1cmVDb21wb25lbnQ7XG4iLCIiXX0=
