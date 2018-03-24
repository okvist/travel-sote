var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>Test</h1>", function(error){
    if(error) {
        return console.log(error);
    } else {
        return console.log("Grattis");
    }
});

var myPhotoLocation = 'https://www.google.se/imgres?imgurl=https%3A%2F%2Fwww.cesarsway.com%2Fsites%2Fnewcesarsway%2Ffiles%2Fstyles%2Flarge_article_preview%2Fpublic%2FCommon-dog-behaviors-explained.jpg%3Fitok%3DFSzwbBoi&imgrefurl=https%3A%2F%2Fwww.cesarsway.com%2Fdog-behavior%2Finnocuous-behaviors%2Fcommon-dog-behaviors-explained&docid=pCyJtm7VVYgXxM&tbnid=SHNlh2wEE8JTMM%3A&vet=10ahUKEwjU6uWw4ITaAhUEfywKHerOBeIQMwjSASgCMAI..i&w=845&h=450&client=ubuntu&bih=736&biw=1395&q=dog&ved=0ahUKEwjU6uWw4ITaAhUEfywKHerOBeIQMwjSASgCMAI&iact=mrc&uact=8'
https.get(myPhotoLocation,function(response) {
    response.pipe(fs.createWriteStream(__dirname +  "/randomDog.jpg"));
})