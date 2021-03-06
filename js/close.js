/*
 * ubNJย
 * 2015/12/21 {^ๆฬ๑\ฆ๐sํศข
 */
/*
 * Return the classList property of e, if it has one.
 * Otherwise, return an object that simulates the DOMTokenList API for e.
 * The returned object has contains(), add(), remove(), toggle() and toString()
 * methods for testing and altering the set of classes of the element e.
 * If the classList property is natively supported, the returned object is
 * array-like and has length and array index properties. The simulated
 * DOMTokenList is not array-like, but has a toArray() method that returns
 * a true-array snapshot of the element's class names.
 */

function classList(e) {
    if (e.classList) return e.classList;   // Return e.classList if it exists
    else return new CSSClassList(e);       // Otherwise try to fake it
}

// CSSClassList is a JavaScript class that simulates DOMTokenList
function CSSClassList(e) { this.e = e; }

// Return true if e.className contains the class c, false otherwise
CSSClassList.prototype.contains = function(c) {
    // Check that c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Check common cases first
    var classes = this.e.className;
    if (!classes) return false;       // e has no classes at all
    if (classes === c) return true;   // e has one class that matches exactly
    
    // Otherwise, use a RegExp to search for c as a word by itself
    // \b in a regular expression requires a match at a word boundary.
    return classes.search("\\b" + c + "\\b") != -1;
};

// Add c to the e.className if it is not already present
CSSClassList.prototype.add = function(c) {
    if (this.contains(c)) return;            // Do nothing if already present
    var classes = this.e.className;
    if (classes && classes[classes.length-1] != " ")
        c = " " + c;                         // Add a space if we need one
    this.e.className += c;                   // Add c to the className
};

// Remove all occurrences of c from e.className
CSSClassList.prototype.remove = function(c) {
    // Make sure c is a valid class name
    if (c.length === 0 || c.indexOf(" ") != -1) 
        throw new Error("Invalid class name: '" + c + "'");
    // Remove all occurances of c as a word, plus any trailing space
    var pattern = new RegExp("\\b" + c + "\\b\\s*", "g");
    this.e.className = this.e.className.replace(pattern, "");
};

// Add c to e.className if it is not already present and return true.
// Otherwise, remove all occurrences of c from e.className and return false.
CSSClassList.prototype.toggle = function(c) {
    if (this.contains(c)) {  // If e.className contains c
        this.remove(c);      // then remove it.
        return false;
    }
    else {                   // Otherwise:
        this.add(c);         // add it.
        return true;
    }
};

// Return e.className itself
CSSClassList.prototype.toString = function() { return this.e.className; };

// Return of the names in e.className
CSSClassList.prototype.toArray = function() {
    return this.e.className.match(/\b\w+\b/g) || [];
};
function do_onoff(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	if (e2.style.display == 'none') {
		e2.style.display = '';
		classList(e).remove('close');
		classList(e).add('open');
	} else {
		e2.style.display = 'none';
		classList(e).remove('open');
		classList(e).add('close');
	}
}
function open_close(hdr, item)
{
	var e = document.getElementById(hdr);
	var e2 = document.getElementById(item);
	e.addEventListener("click", function() { do_onoff(hdr, item); }, false);

	classList(e).remove('open');
	classList(e).add('close');
	if (classList(e).contains('open')) {
//		e.style.display = '';
		e2.style.display = '';
	}
	if (classList(e).contains('close')) {
//		e.style.display = '';
		e2.style.display = 'none';
	}

}
function OCisSmartPhone()
{
	return (
		(navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || 
		navigator.userAgent.indexOf('iPod') > 0 || 
		navigator.userAgent.indexOf('Android') > 0);
}
function OCdisplayWidth()
{
	return window.parent.screen.width;
}
function OCwindowWidth()
{
	if (window.screen.width < window.innerWidth) {
		return window.screen.width;
	}
	return window.innerWidth;
}

const target = document.getElementById('target');
target.addEventListener('change', function (e) {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById("myImage")
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}, false);

function alertFunction1() {
  alert("้ไฟกใๅฎไบใใพใใใ")
}

const target = document.getElementById('target');
target.addEventListener('change', function (e) {
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = document.getElementById("myImage")
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
}, false);

    function getPosition() {
      // ็พๅจๅฐใๅๅพ
      navigator.geolocation.getCurrentPosition(
        // ๅๅพๆๅใใๅ ดๅ
        function(position) {
						document.getElementById("position").value = position.coords.latitude;
						document.getElementById("position2").value = position.coords.longitude;
						//document.getElementById("position").value = position.coords.latitude + "," + position.coords.longitude;
        },
        // ๅๅพๅคฑๆใใๅ ดๅ
        function(error) {
          switch(error.code) {
            case 1: //PERMISSION_DENIED
              alert("ไฝ็ฝฎๆๅ ฑใฎๅฉ็จใ่จฑๅฏใใใฆใใพใใ");
              break;
            case 2: //POSITION_UNAVAILABLE
              alert("็พๅจไฝ็ฝฎใๅๅพใงใใพใใใงใใ");
              break;
            case 3: //TIMEOUT
              alert("ใฟใคใ ใขใฆใใซใชใใพใใ");
              break;
            default:
              alert("ใใฎไปใฎใจใฉใผ(ใจใฉใผใณใผใ:"+error.code+")");
              break;
          }
        }
      );
    }
