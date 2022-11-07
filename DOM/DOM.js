Window Object:- 
The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents 
of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 


Document Object:- 
The document object represent a web page that is loaded in the browser. By accessing the document object, 
we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. 
The document object can be accessed with a window.document or just document.



DOM:-

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page







Difference between document and window:-

		document																						window

It represents any HTML document or web page that is 				It represents a browser window or frame that displays the contents 
loaded in the browser.			   									of the webpage.

It is loaded inside the window.										It is the very first object that is loaded in the browser.

It is the object of window property.								It is the object of the browser.

All the tags, elements with attributes in HTML are 					Global objects, functions, and variables of JavaScript are 	
part of the document.												members of the window object.

We can access the document from a window using the 					We can access the window from the window only. i.e. window.window
window. document							

The document is part of BOM (browser object model) and 				The window is part of BOM, not DOM.
dom (Document object model)

Properties of document objects such as title, body, 				Properties of the window object cannot be accessed by the
cookies, etc can also be accessed by a window like 					document object.
this window. document.title
 
syntaxkey: 															syntax:
																			window.propertyname;
		document.propertyname;

example:  															example:

	document.title :  will return the title of the document			window.innerHeight : will return the height of the content area 
																	of the browser

     
-----------------------------------------------------------------------------------------------------------------------------------------------

1.	window is a main conteiner or we can say globel objects			Whereas the DOM is the child od window object										
	and any operation related to entire browser window will
	be a part of window object.

2.	All the menbers like object, Methods, Properties, if 			where in DOM we need to refer document object, if we want to  
	they are a part of window object, we can refer them 			use the document object,Methods or Properties
	without with object.	

3.	window has Methods, Properties and object, ex 					document is just an object of globel object i.e. window, which
	setTimeout() and setInterval() are Methods,						dael with document, the HTML element .
	document is the objectof window. and Properties
	are innerHeight and innerWidth.


-----------------------------------------------------------------------------------------------------------------------------------------


HTML DOM methods are actions you can perform (on HTML Elements).

HTML DOM properties are values (of HTML Elements) that you can set or change.




The DOM Programming Interface:-

The HTML DOM can be accessed with JavaScript (and with other programming languages).

In the DOM, all HTML elements are defined as objects.

The programming interface is the properties and methods of each object.

A property is a value that you can get or set (like changing the content of an HTML element).

A method is an action you can do (like add or deleting an HTML element).


example:

<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>


Note: In the example above, getElementById is a method, while innerHTML is a property.



Properties of document:-

Syntax:

document.property_name;



Property												Description													DOM
document.anchors						Returns all <a> elements that have a name attribute							1
document.applets						Deprecated																	1
document.baseURI						Returns the absolute base URI of the document								3
document.body							Returns the <body> element													1
document.cookie							Returns the document's cookie												1 																
document.doctype						Returns the document's doctype												3  																							
document.documentElement				Returns the <html> element													3
document.documentMode					Returns the mode used by the browser										3
document.documentURI					Returns the URI of the document												3
document.domain							Returns the domain name of the document server								1
document.domConfig						Obsolete.																	3
document.embeds							Returns all <embed> elements												3
document.forms							Returns all <form> elements													1
document.head							Returns the <head> element													3
document.images							Returns all <img> elements													1
document.implementation					Returns the DOM implementation												3
document.inputEncoding					Returns the document's encoding (character set)								3 																						
document.lastModified					Returns the date and time the document was updated							3
document.links							Returns all <area> and <a> elements that have a href attribute				1
document.readyState						Returns the (loading) status of the document								3
document.referrer						Returns the URI of the referrer (the linking document)						1
document.scripts						Returns all <script> elements												3
document.strictErrorChecking			Returns if error checking is enforced										3
document.title							Returns the <title> element													1
document.URL							Returns the complete URL of the document									1




Methods of Document:

Syntax:

document.method_name;

addEventListener(): It is used to attach an event handler to the specified element.

adoptNode(): It is used to adopt a node from another document and it returns a node object, representing the adopted node.

close(): It is used to close the output stream.

createAttribute(): It is used to create an attribute node with the specified name and returns the attribute object.

createComment(): It is used to create a comment node with some text.

createDocumentFragment(): It is used to create the document fragment to change the content of the document.

createElement(): It is used to create HTML element .

createEvent(): It is used to create a new events object.

createTextNode(): It is used to create a textnode.

execCommand(): It is used to execute a command specified by the user on the editable selected section. It returns a Boolean value.

fullscreenEnabled(): It is used to check whether the document can be viewed in fullscreen mode or not. It returns a boolean value.

getElementById(): It returns the object of the given ID. If no object with that id exists then it returns null.

getElementsByClassName(): It returns an object containing all the elements with the specified class names in the document as objects.

getElementsByName(): It returns an object containing all the elements with the specified name in the document as objects.

getElementsByTagName(): It returns an object containing all the elements with the specified tag names in the document as objects.

hasFocus(): It returns a boolean value that indicates whether the document or element has focus or not.

importNode(): It imports the copy of a node from another document in the current document.

normalize(): It flushes out the empty nodes and merges the adjacent text nodes with the first text node and

normalizeDocument(): It is used to normalize an HTML document by removing any empty text nodes and joining the adjacent text nodes.

open(): It is used to open the output stream to collect the output.

querySelector(): It returns the first element that matches a specified CSS selector(s) in the document.

querySelectorAll(): It returns a collection of an element’s child elements that matches a specified CSS selector(s) in the document

removeEventListener(): It removes the event handler from an element that has an attached event.

renameNode(): It is used to rename the node.

write(): It is used to write some content or javascript code in the document.

writeln(): It is used to write a document with a newline character after each statement.




The HTML DOM Document Object:-

The document object represents your web page.

If you want to access any element in an HTML page, you always start with accessing the document object.

Below are some examples of how you can use the document object to access and manipulate HTML.





Finding HTML Elements 												Method	Description

document.getElementById(id)										Find an element by element id
document.getElementsByTagName(name)								Find elements by tag name
document.getElementsByClassName(name)							Find elements by class name



Basic Code:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            text-align: center;
            font-size: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 id="heading">Welcome to DOM manupulation</h1>
        <div class="child">child-1</div>
        <div class="child">child-2</div>
        <div class="child">child-3</div>
        <div class="child">child-4</div>
        <form action="none.html" method="post">
            Search Here<input type="text">
            <input type="submit">
        </form>
        <a href="//dkCode.com">Open DK Code</a>																																
        <img src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="Home image" style="height: 300px; width: 300px;" >
    </div>
</body>
<script src="1DOMbasic.js"></script>
</html>



javascript:-

console.log("Welcome to DOM:Document Object Model");
let a=document;
a= document.all;    // it will give all tags(HTML Collections) , used by me in html
a=document.body;
a=document.forms[0];

//a is not an array that's why this will give error
        a.forEach(function(element){
            console.log(element);
        })


//so first make an array and apply it
// Array.from(a): make a array from a (by using a)
        Array.from(a).forEach(function(element){
            console.log(element);
        })

//find links from document 
    let b=document.links     // it will give all link
    b=document.links[0]     // it will give first link
    b=document.links[0].href     // it will give first link without anchor tag
    console.log(b)


//find imagese:-
    let c=document.images;  // it will give all imagese 
    c=document.images[0];   // it will give first img
    c=document.images[0].src;   // it will give first img link
    console.log(c);
    
//find script

let d=document.scripts;     // it will give all script
d=document.scripts[0];     // it will give first script
console.log(d)      



2. elementSelector:-

Code:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <h1 id="heading">Welcome to DOM manupulation</h1>
        <div class=" red good" id="myfirst">child-1</div>
        <div class="child" id="second">child-2</div>
        <div class="child">child-3</div>
        <div class="child">child-4</div>
        <form action="none.html" method="post">
            Search Here<input type="text">
            <br>
            <input type="submit">
        </form>
        <a href="//dkCode.com">Open DK Code</a>
        
    </div>
    <div class="foot">Foot</div>
</body>
<script src="2DOMSelector.js"></script>
<!-- <script src="3DOMMultiSelector.js"></script> -->
</html>


JavaScript:-

console.log("Welcome to DOM Selector");

/* There are two types of selectors

    1. Single element Selector
    2. Multi Element Selector

*/





// 1.   Single Element Selector

// GetElementById:-

let element=document.getElementById('myfirst');
console.log(element);

element=element.className;  // it will give all class name of this element
console.log(element);

element=element.childNodes;
element=element.parentNode;
console.log(element);
console.log(element.innerText)



// change in css by javascript
let a=document.getElementById('second');
a.style.color='brown';
a.innerText="Deepak Kumar"; // it will change that particular text
a.innerHTML="<b>Deepak Kumar</b>" // if i want to use any tag then use it
console.log(a.innerHTML);
console.log(a.innerText);



// Query Selector
let qsel=document.querySelector('#myfirst');
console.log(qsel);
qsel=document.querySelector('.child'); // it will give first element of child class
console.log(qsel);
qsel=document.querySelector('b'); // it will select first b tag
console.log(qsel);
qsel=document.querySelector('div');
console.log(qsel);
qsel.style.color='Green'; // it will color only first div element and its child;
console.log(qsel);



// 2. Multi Element Selectors

let element=document.getElementsByClassName("child");
console.log(element);  // it will give HTMLCollecion with all elements
console.log(element[0]);  // it will give first element


let ele=document.getElementsByClassName('container');
//console.log(ele[0].getElementsByClassName('child'));    // it will give all elements having class child

ele=document.getElementsByTagName('div');   // it will give all div tags present in dom
console.log(ele);

Array.from(ele).forEach(element=>{
    console.log(element);
    element.style.color= "red";     // change all div tah color
});





QuerySelector  vs  getElementById:-

1.	The obvious similarity between these two methods is that they both select elements from a web page. They do so in different ways.

2.	With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, 
	class, or any other type of selector. Using the getElementById method, you can only select an element by its ID.

3. Generally, you should opt for the selector that most clearly gets the job done.

4.	If you only need to select an element by ID or class, you can use getElementById or getElementsByClassName, respectively. 
	If you need to use a more elaborate rule to select elements, the querySelector method is your best option.






3.	querySelector:- 

The JavaScript querySelector() method lets you retrieve an element from the DOM, or the web page, using a CSS selector. 
This method comes with a sister function called querySelectorAll() which selects all the elements that match a particular selector 
from the DOM.

These two methods are incredibly versatile. This is because CSS selector syntax lets you select any element from a web page.

Using querySelector, you don’t have to worry about being constrained by only being allowed to select elements by class or IDs, 
like you would if you used getElementById or getElementsByClassName.

These methods are particularly useful if the elements you are selecting are similar to those you select in your CSS stylesheet.





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QuerySelector</title>
    <!-- <style>
        div{
            back
        }
    </style> -->
  </head>
  <body>
    <h3 id="heading">
      The querySelector() method returns the first element that matches a CSS
      selector. To return all matches (not only the first), use the
      querySelectorAll() instead.
    </h3>
    <div class="container">
        <h1 class="child" id="heading">Welcome to DOM manupulation</h1>
        <div class=" red good" id="myfirst">child-1</div>
        <div class="child" id="second">child-2</div>
        <div class="child">child-3</div>
        <div class="child">child-4</div>
        <form action="none.html" method="post">
            Search Here<input type="text">
            <br>
            <input type="submit">
        </form>
        <a href="//dkCode.com">Open DK Code</a>
        
    </div>
    <div class="foot">Foot</div>
  </body>
  <script>
    var element = document.querySelector("#heading");
    console.log(element);
    element.style.color='red'
    // element.innerHTML='This is me'

    var e2=document.querySelector('.container');
    console.log(e2)

    //Get the first <div> element in with class="child":
    var e3=document.querySelector('div.child');
    console.log(e3);

    //Select the first <h1> element with the parent is a <div> element.
    var e4=document.querySelector("div>h1") 
    console.log(e4) ;

    //Select the first <h1> element with the parent is a <div> element.
    var e5=document.querySelector("div>div") 
    console.log(e5);   
  </script>
</html>




Changing HTML Elements 												Property Description

element.innerHTML =  new html content							Change the inner HTML of an element
element.attribute = new value									Change the attribute value of an HTML element
element.style.property = new style								Change the style of an HTML element




Code:-


<html>
    <head>

    </head>
    <body>
        <div class="container">
            <h3 id="heading">Welcome</h3>
            <p id="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi blanditiis, quasi sapiente, fugiat minus magnam corrupti voluptatibus tenetur, voluptatum quisquam veniam inventore officia praesentium molestias porro reprehenderit nemo incidunt impedit!</p>
            <div id="list">
                <ul>
                    <li class="listItem">book</li>
                    <li class="listItem">pen</li>
                    <li class="listItem">pencle</li>
                    <li class="listItem">bag</li>
                </ul>
            </div>
        </div>
    </body>
    <script>
        // updating the text/text with tag 
        let heading =document.getElementById('heading');
        let para = document.getElementById('para');

        heading.innerText="Welcome to DOM"
        heading.innerHTML="<h1>Welcome to DOM</h1>"

        para.innerHTML="Date: "+Date();

        // para.innerHTML="<h3></h3>"

        // Changing the Value of an Attribute
        para.id="paragraph";   // updating id of p tag
        document.getElementsById('list').id="studyList";
        
    </script>
</html>


Output:-

Welcome to DOM

Date: Thu Aug 25 2022 09:34:34 GMT+0530 (India Standard Time)

book
pen
pencle
bag





Code for changing style:

<html>
    <head>

    </head>
    <body>
        <div class="container">
            <h3 id="heading">Welcome</h3>
            <p id="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi blanditiis, quasi sapiente, fugiat minus magnam corrupti voluptatibus tenetur, voluptatum quisquam veniam inventore officia praesentium molestias porro reprehenderit nemo incidunt impedit!</p>
            <div id="list">
                <ul>
                    <li class="listItem">book</li>
                    <li class="listItem">pen</li>
                    <li class="listItem">pencle</li>
                    <li class="listItem">bag</li>
                </ul>
            </div>
        </div>
    </body>
    <script>
       // change the color of list
       let lists = Array.from(document.querySelectorAll('#list li'));
    //    lists.style.color='red';      // this will through error , we have to go for each elements
        lists.forEach((ele) => ele.style.color='green',)

       // change the tag and add bacground color in heading

       let heading = document.getElementById('heading');
       heading.innerHTML="<h1>Welcome to Javascript</h1>";
       heading.style.background='aqua';
       
       // set bacground color and color of paragraph
       let para=document.getElementById('para');
       para.style.background='black';
       para.style.color='white';
    </script>
</html>

Output:-
run this code to see the output






	Method																	Description
element.setAttribute(attribute, value)							Change the attribute value of an HTML element



Code:-

<html>
    <head>

    </head>
    <body>
        <div class="container">
            <h3 id="heading">Welcome</h3>
            <p id="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi blanditiis, quasi sapiente, fugiat minus magnam corrupti voluptatibus tenetur, voluptatum quisquam veniam inventore officia praesentium molestias porro reprehenderit nemo incidunt impedit!</p>
            <div id="list">
                <ul>
                    <li class="listItem">book</li>
                    <li class="listItem">pen</li>
                    <li class="listItem">pencle</li>
                    <li class="listItem">bag</li>
                </ul>
            </div>
        </div>
    </body>
    <script>
      // add class attribute in h3 with name: highlight
       const head = document.getElementById('heading');
       head.setAttribute('class','highlight');
       console.log(head.getAttribute('class')); // highlight

      //  update the id with name head

      head.setAttribute('id','head');
      console.log(head.getAttribute('id'));     // head

      // add a class in list and change it's color by using this clss
      const list= document.getElementById('list');
      list.setAttribute('class','list-container');
      console.log(list.getAttribute('class'));

       let elements= Array.from(document.querySelectorAll('.list-container li'));
       elements.forEach((ele)=>{
        return ele.style.color='blue'
       })
    
    </script>
</html>





Adding and Deleting Elements 										Method	Description

document.createElement(element)									Create an HTML element
document.removeChild(element)									Remove an HTML element
document.appendChild(element)									Add an HTML element
document.replaceChild(new, old)									Replace an HTML element
document.write(text)											Write into the HTML output stream




1.	document.createElement(element), document.appendChild(element)		:-

Code:-

<html>
    <head>

    </head>
    <style>
        .container{
            background-color: antiquewhite;
            width: 75%;
            height:auto;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
        }
        .box{
            background-color: red;
            width: 88px;
            height: 35px;
            margin: 5px;
            text-align: center;
            font-size: 25px;
        }
    </style>
    <body>
        <div class="container">
           
        </div>
    </body>
    <script>
        // create 10 box
        const container =document.querySelector('.container');
        for(let i=0;i<100;i++){
            let div= document.createElement('div');
            div.setAttribute('class','box');
            div.innerHTML=i;
            container.appendChild(div);
        }
        
    </script>
</html>

Output:- run this code to see output



Code-2: Odd Even wall:

<html>
    <head>

    </head>
    <style>
        .container{
            background-color: antiquewhite;
            width: 75%;
            height:auto;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
        }
        .box{
            /* background-color: red; */
            width: 92px;
            height: 35px;
            margin: 5px;
            text-align: center;
            font-size: 25px;
        }
        .odd{
            background-color: rgb(61, 198, 152);
        }
        .even{
            background-color: brown;
        }
    </style>
    <body>
        <div class="container">
           
        </div>
    </body>
    <script>
        // create 10 box
        const container =document.querySelector('.container');
        for(let i=0;i<100;i++){
            let div= document.createElement('div');
            div.innerHTML=i;
            div.setAttribute('class','box');
            if(i%2==0){
            	  // box.classList.add('bg-blue', 'text-white');  for adding more class
            	  // box.classList.remove('first-class', 'second-class'); for removing classes
                div.classList.add('even');
                div.style.color='white';
            }
            else{
                div.classList.add('odd');
            }
            container.appendChild(div);
        }
    </script>
</html>




















---------------------> events in javascript:-

The change in the state of an object is known as an Event. In html, there are various events which represents that some activity 
is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the 
execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.

For example, when a user clicks over the browser, add js code, which will execute the task to be performed on the event.

Some of the HTML events and their event handlers are:


Mouse events:-

Event Performed							  Event Handler									Description

click										onclick								When mouse click on an element
mouseover									onmouseover							When the cursor of the mouse comes over the element
mouseout									onmouseout							When the cursor of the mouse leaves an element
mousedown									onmousedown							When the mouse button is pressed over the element
mouseup										onmouseup							When the mouse button is released over the element
mousemove									onmousemove							When the mouse movement takes place.




Code:-


<!-- threre are four way to write events in javascript -->
<!-- 1.  by using alert (inline events)
2.  by calling a function   
3.  by using inline events (HTML onclicl()=>"" propety and element.onclick)
4.  using event listeners (addEventListener) -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
</head>
<style>
    #btn{
        width: 150px;
        height: 50px;
        background-color: aquamarine;
        border-radius: 10px;
        border: 2px solid;
    }
</style>
<body>
    <div class="container">
        <h1 class="heading">Onclick Events</h1>
        <p id="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni ipsum porro consequuntur non! Ipsam vel aut nisi esse vitae error. Sit rem doloribus explicabo quos iusto autem, quis expedita hic illo animi repellendus laborum perspiciatis facilis, culpa porro, iure corrupti fugit vero? Maxime perferendis quam natus aspernatur aliquid culpa quaerat maiores quas tempore! Laboriosam aliquid vel expedita laborum. Necessitatibus reprehenderit facere itaque quisquam aut quibusdam error quia labore in praesentium esse odio quos iste exercitationem perferendis ratione, dolorum, explicabo libero. Quibusdam blanditiis laboriosam aspernatur? Dolores laboriosam accusantium, molestiae necessitatibus at suscipit atque eum reprehenderit nemo dicta unde cum similique facere ipsa culpa repellat fugit velit, perferendis totam nam repellendus adipisci obcaecati alias placeat. Eligendi explicabo nostrum, perspiciatis, a aperiam facere cumque accusamus eius veritatis ipsum labore deleniti esse aspernatur fugiat voluptate placeat dolorem eum quae sunt molestias qui voluptatibus veniam. Quam maxime deleniti voluptate quisquam, quos molestias eaque odit saepe quod velit maiores consectetur exercitationem dicta, inventore libero voluptatibus eius? Quis iusto tempore fugiat eligendi rerum eos ipsa, delectus, error quae unde labore. Aliquam amet repellendus, illo voluptas consequatur ipsum, est similique quibusdam ex aliquid, exercitationem nostrum debitis? Provident vel natus officiis nemo tenetur? Soluta eos saepe blanditiis minima officia.</p>
        <button id="btn" onclick="toggleHide()">Show/Hide</button>
    </div>
</body>
<script>
    
        let para = document.getElementById('para');

        // onclick evenet
    	function toggleHide(){
        if(para.style.display!='none'){
            para.style.display='none';
        }
        else{
            para.style.display='block'
        }
    }

    // mouseover events

    para.addEventListener('mouseover',function run(){
        // alert("Your mouse is on the para");
       console.log(("Your mouse is on the para"));
    })

    // mousedown events
    para.addEventListener('mouseout',function run(){
        console.log(("Your mouse is out of the para"));
    })

 
</script>
</html>


Code:2:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color change</title>
    <style>
        #container{
            width: 500px;
            height: 400px;
            margin: auto;
            position: absolute;
            left: 0;right: 0;bottom: 0;top: 0;
            border: 2px solid;
        }
        button{
            margin: auto;
            position: absolute;
            left: 0;right: 0;bottom: 0;top: 0;
            width: 140px;
            height: 45px;
            border-radius: 25px;
            background-color: aqua;
        }
    </style>
</head>
<body>
    <div id="container">

    </div>
    <button>Change color</button>
</body>
<script>
    let btn=document.querySelector('button');
    let box = document.getElementById('container')
    function random(number){
        return Math.floor(Math.random()*(number+1));
    }

    btn.addEventListener('click',() =>{
        const randcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)}) `;
        box.style.backgroundColor=randcolor;
    })

    // if we wnat color change only on double click
   
    // function random(number){
    //     return Math.floor(Math.random()*(number+1));
    // }

    // btn.addEventListener('dblclick',() =>{
    //     const randcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)}) `;
    //     box.style.backgroundColor=randcolor;
    // })
</script>
</html>


Code:3:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color change</title>
    <style>
        #container{
            width: 500px;
            height: 400px;
            margin: auto;
            position: absolute;
            left: 0;right: 0;bottom: 0;top: 0;
            border: 2px solid;
            text-align: center;
        }
        
    </style>
</head>
<body>
    <div id="container">
        <h1>put the mouse on the box</h1>
    </div>
</body>
<script>
    
    let box = document.getElementById('container')
    function random(number){
        return Math.floor(Math.random()*(number+1));
    }

    // every time mouse goto box, color will be change
    box.addEventListener('mouseover',() =>{
        const randcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)}) `;
        box.style.backgroundColor=randcolor;
    })
     // every time mouse come out of box, color will be change
    box.addEventListener('mouseout',() =>{
        const randcolor = `rgb(${random(255)}, ${random(255)}, ${random(255)}) `;
        box.style.backgroundColor=randcolor;
    })

  
</script>
</html>




Keyboard events:-

Event Performed										Event Handler										Description

Keydown & Keyup									onkeydown & onkeyup					When the user press and then release the key


Form events:-

Event Performed							Event Handler										Description
focus										onfocus								When the user focuses on an element
submit										onsubmit							When the user submits the form
blur										onblur								When the focus is away from a form element
change										onchange							When the user modifies or changes the value of a form element


Window/Document events:-

Event Performed							Event Handler										Description
load										onload								When the browser finishes the loading of the page
unload										onunload							When the visitor leaves the current webpage, the browser unloads it
resize										onresize							When the visitor resizes the window of the browser





Event objects:-

Sometimes, inside an event handler function, you will see a parameter specified with a name such as event, evt, or e. 
This is called the event object, and it is automatically passed to event handlers to provide extra features and information.

Example:-

const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);

Here you can see we are including an event object, e, in the function, and in the function setting a background color style on 
e.target — which is the button itself. The target property of the event object is always a reference to the element the event 
occurred upon. So, in this example, we are setting a random background color on the button, not the page.

e/evt/event are most commonly used by developers because they are short and easy to remember. It is always good to be 
consistent — with yourself, and with others if possible.



Event bubbling and capture:-

Event bubbling and capture are terms that describe phases in how the browser handles events targeted at nested elements.

Code:-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Bubbling</title>
    <style>
        .box-1{
            margin: auto;
            width: 75%;
            height: 75%;
            border: 4px solid blue;
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
        }
        .box-2{
            margin: auto;
            width: 50%;
            height: 50%;
            border: 3px solid red;
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
        }
        .box-3{
            margin: auto;
            width: 30%;
            height: 30%;
            border: 2px solid green;
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
        }
    </style>
</head>
<body>
    <div class="box-1" onclick="boxOnehandler(event)">box-1
        <div class="box-2" onclick="boxTwohandler(event)">box-2
            <div class="box-3" onclick="boxThreehandler(event)">box-3</div>
        </div>
    </div>
</body>
<script>
    // to avoid event bubbling use event.
    function boxOnehandler(event){
        event.stopPropagation();
        alert("box-1 was clicked");
    }
    function boxTwohandler(event){
        event.stopPropagation();
        alert("box-2 was clicked");
    }
    function boxThreehandler(event){
        event.stopPropagation();
        alert("box-3 was clicked");
    }
</script>
</html>



Fixing the problem with stopPropagation():-

As we saw in the video example, this can be a very annoying behavior, but there is a way to prevent it! The standard Event 
object has a function available on it called stopPropagation() which, when invoked on a handler is event object, makes it so 
that the first handler is run but the event does not bubble any further up the chain, so no more handlers will be run.

So we can fix our current problem by changing the second handler function in the previous code block to this:


video.addEventListener('click', (e) => {
  e.stopPropagation();
  video.play();
});





Event delegation:-

Event bubbling is not just annoying though: it can be very useful. In particular it enables a practice called event delegation. 
In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, 
we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to 
set the event listener on every child individually.

Example:-

<html>
    <head>

    </head>
    <style>
        .tile{
            width: 14%;
            height: 150px;
            float: left;
            border-radius: 10px;
            /* border: 2px solid; */
        }
    </style>
    <body>
        <div id="container">
            
        </div>

    </body>
    <script>
        // generate random number
        function random(number){
            return Math.floor(Math.random()*number)
        }
        // generate random color
        function colors(){
            const randColor= `rgb(${random(255)},${random(255)},${random(255)})`;
            return randColor;
        }

        // generating different boxes
        var container = document.querySelector("#container")
        for(let i=0;i<42;i++){
            let div =document.createElement('div')
                div.classList.add('tile');
                container.appendChild(div);
        }
        
        //performing Event delegation
        container.addEventListener('click',(event) =>{
            event.target.style.backgroundColor= colors();
        })
    </script>
</html>







JavaScript Timing Events:-

Timing Events:-

The window object allows execution of code at specified time intervals.
These time intervals are called timing events.

The two key methods to use with JavaScript are:

setTimeout(function, milliseconds)
Executes a function, after waiting a specified number of milliseconds.

setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.

Note:-The setTimeout() and setInterval() are both methods of the HTML DOM Window object.