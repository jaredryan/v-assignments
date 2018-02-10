class Clown {
	constructor(name, shoeSize) {
		this.name = name;
		this.shoeSize = shoeSize;
		this.isScary = isScary;
	}
}

class HangmanGame {
	constructor(word, guessesUntilLose) {
		this.word = word; 
		this.guessesUntilLose = guessesUntilLose;
	}
	wrongGuess() {
		this.guessesUntilLose--;
	}
}

class Media {
	constructor(title, duration) {
		this.title = title;
		this.duration = duration;
		this.isPlaying = false;
	}

	play() {
		this.isPlaying = true;
	}

	stop() {
		this.isPlaying = false;
	}
}

class Song extends Media {
	constructor(title, duration, artist) {
		super(title, duration);
		this.artist = artist;
	}
}