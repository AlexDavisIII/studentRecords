/*
Creates a lot of student records and prints them out to the screen.
Needed for this project (Student Records)

Name:
Major:
Minor:
School Points: 

*/

var listOpen =  '<li>';
var listClose = '</li>';
var colon = ': ';
var comma = ', ';
var nl = '\n'; //creates a new line for each element it is attached to.


//array of student objects which hold student records
var students =
[	
	{
	name: 'Alex', 
	major: 'Marketing', 
	minor: 'CIS', 
	schoolPoints: 1800
	}, 
	
	{
	name: 'Mario', 
	major: 'Plubming', 
	minor: '???', 
	schoolPoints: 99
	},
	
	{
	name: 'Beatrix',
	major: 'Japanese Culture',
	minor: 'Martial Arts', 
	schoolPoints: 5
	},
	
	{
	name: 'Terrance',
	major: 'All',
	minor: 'All',
	schoolPoints: 9999
	}
 ];

document.write();
 
for(var i = 0; i < students.length; i++){

var name = students[i].name;
var major = students[i].major;
var minor = students[i].minor;
var points = students[i].schoolPoints;

	document.write(listOpen + name.concat(colon) + major.concat(comma) + minor.concat(comma) + points + listClose + nl);
}

function searchByName() {
	var textBoxInput = document.getElementById('textBox').value;
    alert(textBoxInput);
}