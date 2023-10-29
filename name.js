var names = new Array();
names[0] = "jaja";
names[1] = "haua";
names[2] = "jaikrish";
names[3] = "hala";
names[4] = "arjun";
names[5] = "Janani";
names[6] = "nikitha";
names[7] = "harish";
names[8] = "mani";
names[9] = "anu";
for (var i = 0; i <names.length; i++)
{
	if (names[i].charAt(0) == 'j' || names[i].charAt(0) =='J') {
		console.log("goodbye" + names[i]);
	}
	else {
		console.log("hello" + names[i]);
	}
}
