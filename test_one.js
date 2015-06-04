//The goal of the program is to print the user information within the user object.

// data is an array of two objects

var data =
[
	{name: "Samantha", age: 12},
	{name: "Alex", age: 30}
]

var user =
{
	data: 
	[
		{name: "Tiger Woods", age: 30},
		{name: "Phil Mickleson", age: 32}
	],

	showdata: function(event)
	{
		//generate a random number between 0 and 1
		//"this" refers to the global scope since a variable contains a function definition

		var randNum = Math.round(Math.random());
		console.log(this.data[randNum].name + " is " + this.data[randNum].age + " years old.");
	}
}

//Executing userInfo() results in printing info. from the global data variable.

var userInfo = user.showdata;
userInfo();

//Binding the user object changes "this" to refer to the user object itself.

var newuserInfo = user.showdata.bind(user);
newuserInfo();