function solve() {
  var domElement = (function() {

    function isString(str) {
      return typeof str === "string" ||
        (typeof str === "object" && str.constructor === String);
    }

    function isEmptyObject(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    }

    function isValidInput(value) {
      if (!(value.length &&
          isString(value) &&
          /^[A-Z\d_.-]+$/i.test(value))) {
        throw new Error('Invalid Input');
      }
    }

    function parseHTML() {
      var output = '<' + this.type,
        keys = [],
        index,
        key,
        len;

      if (!isEmptyObject(this.attributes)) {
        for (key in this.attributes) {
          if (this.attributes.hasOwnProperty(key)) {
            keys.push(key);
          }
        }

        keys.sort();
        len = keys.length;
        for (index = 0; index < len; index++) {
          output += ' ' +
            keys[index] +
            '="' +
            this.attributes[keys[index]] +
            '"';
        }
      }

      output += '>';

      if (this.children.length > 0) {
        len = this.children.length;
        for (index = 0; index < len; index++) {
          if (isString(this.children[index])) {
            output += this.children[index];
          } else {
            output += this.children[index].innerHTML;
          }
        }
      } else if (this.content) {
        output += this.content;
      }

      output += '</' + this.type + '>';

      return output;
    }

    var domElement = {
      init: function(type) {
        this.type = type;
        this.attributes = {};
        this.children = [];
        this.parent;
        this.content;
        this.innerHTML;
        return this;
      },
      appendChild: function(child) {
        child.parent = this;
        this.children.push(child);

        return this;
      },
      addAttribute: function(name, value) {
        isValidInput(name);
        this.attributes[name] = value;

        return this;
      },
      removeAttribute: function(attribute) {
        isValidInput(attribute);
        if (!this.attributes[attribute]) {
          throw new Error('Non-Exist Attribute');
        }
        delete this.attributes[attribute];
        return this;
      },
      get innerHTML() {
        return parseHTML.call(this);
      }
    };
    Object.defineProperty(domElement, 'children', {
      get: function() {
        return this._children;
      },
      set: function(value) {
        this._children = value;
      }
    });
    Object.defineProperty(domElement, 'attribute', {
      get: function() {
        return this._attribute;
      },
      set: function(value) {
        this._attribute = value;
      }
    });
    Object.defineProperty(domElement, 'parent', {
      get: function() {
        return this._parent;
      },
      set: function(value) {
        this._parent = value;
      }
    });
    Object.defineProperty(domElement, 'type', {
      get: function() {
        return this._type;
      },
      set: function(value) {
        isValidInput(value);
        this._type = value;
      }
    });
    return domElement;
  }());
  return domElement;
}

module.exports = solve;


// test 0
// var root = Object.create(domElement)
//           .init('whatever')
//           .addAttribute('data-spam', 'mnogo spam');
//           console.log(root.attribute)