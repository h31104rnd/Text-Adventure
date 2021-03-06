var images = document.getElementById("images");
var text = document.getElementById("text");
var buttonBox = document.getElementById('buttonBox');
var health = document.getElementById("health");
var keyButton = document.getElementById("keyButton");



var changeText = function(words) {
  text.innerHTML = words;
};

var changeImage = function(img) {
  document.getElementById("images").style.backgroundImage = "url("+ img +")";;
};

var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  }
};

// All the changes have been assigned to a single variable to make the code compact.

var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};

var inventory = [];

// Adds Rags to the inventory.

function rag() {
  inventory.push("Rags");
  health.value = 70;
  for (var i=0; i < inventory.length; i++) {
   document.getElementById("items").innerHTML = inventory;
   
  }
}

// Adds Keys to the inventory.

function key() {
  inventory.push("Keys");
  for (var b=0; b < inventory.length; b++) {
   document.getElementById("items").innerHTML = inventory;
  }
  showKey();
}

// For the key button to show up.

function showKey() {
    viton = document.getElementById("keyButton");
    viton.style.display = "inline-block";
  }


function useKey() {
   advanceTo(scenario.eight);
   viton = document.getElementById("keyButton");
   viton.style.display = "none";
}

// An array of scenarios that can be cycled through.

scenario = {}
var scenario = {
  one: {
    image: "http://www.kethea.gr/Portals/0/Uploads/News/Images/DSC07099.JPG", //Central Room
    text: "As you look around you see dust in the air, objects settle into definite shapes. As the dust in your head clears you see the desolation that surrounds you. You get up from your bed and look around. It seems as though no one else is around, might just be a good opportunity for escaping.",
    buttons: [["Go to the right hallway.", "advanceTo(scenario.two) "],["Go to the left hallway.", "advanceTo(scenario.three)"]]
  },
  two: {
    image: "http://cdnfiles.hdrcreme.com/37596/original/destroyed-hallway.jpg?1426769840",
    text: "It seems as though a thousand years have passed since you were knocked out. The hallway leads to two rooms, the gym and the medical room.",
    buttons: [["Go to the Medical Room.", "advanceTo(scenario.four)"],["Go to the Gym.","advanceTo(scenario.five)"],["Go back.","advanceTo(scenario.one)"]]
  },
  three: {
    image: "http://cdnfiles.hdrcreme.com/37596/original/destroyed-hallway.jpg?1426769840",
    text: "You have ended up in the left hallway and there are two doors, one leads to the warden's office and the other leads to the showers.",
    buttons: [["Go to the showers.", "advanceTo(scenario.six)"],["Go to the offices.", "advanceTo(scenario.seven)"],["Go back","advanceTo(scenario.one)"]]
  },
  four: {
    image: "http://kissmylist.com/wp-content/uploads/2013/07/Alcatraz-hospital.jpg",
    text: "You have ended up in the Medical Room, there were many a time you had to take a trip here when you first joined your lovely prison mates.",
    buttons: [["Pick Up Rags.", "rag()"],["Go back.", "advanceTo(scenario.two)"]]
  },
  five: {
    image: "http://www.history.co.uk/sites/default/files/styles/16_9_responsive/public/gym_destroyed.jpg?itok=zc1OtmIU",
    text: "The gym was like a second home to you during your worst days here..",
    buttons: [["Go back.", "advanceTo(scenario.two)"]]
  },
  six: {
    image: "https://c1.staticflickr.com/5/4074/4891966733_04d3b63b83_b.jpg",
    text: "You have ended up in the showers, there are many unpleasant memories associated with this place best get out of here before it overwhelms you",
    buttons: [["Go back", "advanceTo(scenario.three)"]]
  },
  seven: {
    image: "http://www.david-roberts-photography-blog.co.uk/wp-content/uploads/2013/05/ferodo-9171.jpg",
    text: "You have ended up in the offices of the warden. The one person in the whole prison who ought to have been in jail. You had heard rumors about him of how he used the inmates. You didn't believe them until you were called down one day. Fortunately some of the other inmates heard about it and decided to take revenge.Curious that you still remember where he kept the key.",
    buttons: [["Pick up the keys","key()"],["Go back","advanceTo(scenario.three)"]]
  },
  eight: {
    image: "http://dudushine.com/wp-content/uploads/2016/09/Brilliant-Family-In-Living-Room-from-Home-redecorating-secrets-tips.jpg",
    text: "As you rise out of bead, your head hurts from the dream that you had. Your wife tells you to drop the kids off. If you are online might as well go to youtube and watch some funny videos.",
    buttons: [["Go to a random site.","location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'"]]
  }
  
};


advanceTo(scenario.one)


